import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { useData } from '../../contexts/DataContext.jsx';
import { useToast } from '../common/Toast.jsx';
import { addTransaction } from '../../firebase/firestore.js';
import { computeAccountBalance } from '../../utils/calculations.js';
import { TRANSACTION_TYPES, PAYMENT_MODES, EXPENSE_CATEGORIES, INVESTMENT_TYPES } from '../../utils/constants.js';
import { Timestamp } from 'firebase/firestore';
import Modal from '../common/Modal.jsx';
import { ArrowDownLeft, ArrowUpRight, ArrowLeftRight, TrendingUp, Landmark } from 'lucide-react';

const initialForm = {
  type: 'expense',
  amount: '',
  accountId: '',
  toAccountId: '',
  category: '',
  customCategory: '',
  paymentMode: 'upi',
  investmentType: 'sip',
  note: '',
  date: new Date().toISOString().split('T')[0],
};

function renderTypeIcon(type, color) {
  const props = { size: 16, style: { color } };
  switch (type) {
    case 'income': return <ArrowDownLeft {...props} />;
    case 'expense': return <ArrowUpRight {...props} />;
    case 'withdrawal': return <Landmark {...props} />;
    case 'transfer': return <ArrowLeftRight {...props} />;
    case 'investment': return <TrendingUp {...props} />;
    default: return <ArrowUpRight {...props} />;
  }
}

export default function AddTransaction({ isOpen, onClose }) {
  const { user } = useAuth();
  const { accounts, transactions } = useData();
  const { addToast } = useToast();
  const [form, setForm] = useState(initialForm);
  const [showOverdraftWarning, setShowOverdraftWarning] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const bankAccounts = accounts.filter((a) => a.type === 'bank');
  const cashAccounts = accounts.filter((a) => a.type === 'cash');
  const allNonInvestment = accounts.filter((a) => a.type !== 'investment');

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  // Determine which account will be debited based on type and payment mode
  const getSourceAccount = () => {
    if (form.type === 'expense') {
      if (form.paymentMode === 'cash') return cashAccounts[0];
      return accounts.find((a) => a.id === form.accountId) || bankAccounts[0];
    }
    return accounts.find((a) => a.id === form.accountId);
  };

  const handleSubmit = async (forceProceed = false) => {
    const amount = parseFloat(form.amount);
    if (!amount || amount <= 0) {
      addToast('Please enter a valid amount', 'error');
      return;
    }

    // Check overdraft for debit transactions
    if (!forceProceed && ['expense', 'withdrawal', 'transfer', 'investment'].includes(form.type)) {
      const sourceAcc = getSourceAccount();
      if (sourceAcc) {
        const balance = computeAccountBalance(sourceAcc, transactions);
        if (amount > balance) {
          setShowOverdraftWarning(true);
          return;
        }
      }
    }

    setSubmitting(true);
    try {
      const category = form.category === '__custom__' ? form.customCategory : form.category;

      // Determine accountId and toAccountId based on type
      let accountId = form.accountId;
      let toAccountId = form.toAccountId || null;

      if (form.type === 'expense') {
        if (form.paymentMode === 'cash') {
          accountId = cashAccounts[0]?.id || '';
        } else {
          accountId = form.accountId || bankAccounts[0]?.id || '';
        }
        toAccountId = null;
      } else if (form.type === 'income') {
        toAccountId = null;
      } else if (form.type === 'withdrawal') {
        accountId = form.accountId || bankAccounts[0]?.id || '';
        toAccountId = cashAccounts[0]?.id || '';
      }

      const tx = {
        type: form.type,
        amount,
        accountId,
        toAccountId,
        category: form.type === 'expense' ? (category || 'Misc') : (form.type === 'income' ? (category || 'Income') : null),
        paymentMode: form.type === 'expense' ? form.paymentMode : null,
        investmentType: form.type === 'investment' ? form.investmentType : null,
        note: form.note || null,
        date: Timestamp.fromDate(new Date(form.date)),
      };

      await addTransaction(user.uid, tx);
      addToast('Transaction added successfully!', 'success');
      setForm(initialForm);
      onClose();
    } catch (err) {
      console.error(err);
      addToast('Failed to add transaction', 'error');
    } finally {
      setSubmitting(false);
      setShowOverdraftWarning(false);
    }
  };

  // Auto-select default accounts when type changes
  const handleTypeChange = (type) => {
    const defaults = { ...initialForm, type, date: form.date };
    if (type === 'income') defaults.accountId = bankAccounts.find((a) => a.isPrimary)?.id || bankAccounts[0]?.id || '';
    if (type === 'withdrawal') defaults.accountId = bankAccounts[0]?.id || '';
    if (type === 'expense') defaults.accountId = bankAccounts[0]?.id || '';
    if (type === 'transfer') { defaults.accountId = bankAccounts[0]?.id || ''; }
    if (type === 'investment') defaults.accountId = bankAccounts[0]?.id || '';
    setForm(defaults);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Transaction">
      {/* Overdraft warning */}
      {showOverdraftWarning && (
        <div className="overdraft-warning">
          <p>⚠️ This amount exceeds the source account's current balance. Proceed anyway?</p>
          <div className="overdraft-actions">
            <button className="btn btn-secondary" onClick={() => setShowOverdraftWarning(false)}>Cancel</button>
            <button className="btn btn-danger" onClick={() => handleSubmit(true)}>Proceed Anyway</button>
          </div>
        </div>
      )}

      {!showOverdraftWarning && (
        <form className="tx-form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          {/* Type Selector */}
          <div className="tx-type-selector">
            {TRANSACTION_TYPES.map((t) => (
              <button
                key={t.value}
                type="button"
                className={`tx-type-btn ${form.type === t.value ? 'tx-type-active' : ''}`}
                style={form.type === t.value ? { borderColor: t.color, color: t.color } : {}}
                onClick={() => handleTypeChange(t.value)}
              >
                {renderTypeIcon(t.value, form.type === t.value ? t.color : 'inherit')}
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          {/* Amount */}
          <div className="form-group">
            <label className="form-label">Amount (₹)</label>
            <input
              type="number"
              className="form-input amount-input"
              placeholder="0"
              value={form.amount}
              onChange={(e) => update('amount', e.target.value)}
              min="0"
              step="0.01"
              autoFocus
              id="tx-amount-input"
            />
          </div>

          {/* Date */}
          <div className="form-group">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-input"
              value={form.date}
              onChange={(e) => update('date', e.target.value)}
              id="tx-date-input"
            />
          </div>

          {/* Type-specific fields */}
          {form.type === 'income' && (
            <>
              <div className="form-group">
                <label className="form-label">Destination Account</label>
                <select className="form-input" value={form.accountId} onChange={(e) => update('accountId', e.target.value)} id="tx-dest-account">
                  <option value="">Select account</option>
                  {allNonInvestment.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Source Label</label>
                <input className="form-input" placeholder="e.g. Stipend, Gift" value={form.category} onChange={(e) => update('category', e.target.value)} id="tx-source-label" />
              </div>
            </>
          )}

          {form.type === 'expense' && (
            <>
              <div className="form-group">
                <label className="form-label">Payment Mode</label>
                <div className="payment-mode-selector">
                  {PAYMENT_MODES.map((pm) => (
                    <button
                      key={pm.value}
                      type="button"
                      className={`pm-btn ${form.paymentMode === pm.value ? 'pm-active' : ''}`}
                      onClick={() => update('paymentMode', pm.value)}
                    >
                      {pm.label}
                    </button>
                  ))}
                </div>
              </div>
              {form.paymentMode !== 'cash' && (
                <div className="form-group">
                  <label className="form-label">From Bank Account</label>
                  <select className="form-input" value={form.accountId} onChange={(e) => update('accountId', e.target.value)} id="tx-bank-select">
                    <option value="">Select bank account</option>
                    {bankAccounts.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
                  </select>
                </div>
              )}
              <div className="form-group">
                <label className="form-label">Category</label>
                <select className="form-input" value={form.category} onChange={(e) => update('category', e.target.value)} id="tx-category-select">
                  <option value="">Select category</option>
                  {EXPENSE_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  <option value="__custom__">+ Custom</option>
                </select>
              </div>
              {form.category === '__custom__' && (
                <div className="form-group">
                  <label className="form-label">Custom Category</label>
                  <input className="form-input" placeholder="Enter category name" value={form.customCategory} onChange={(e) => update('customCategory', e.target.value)} />
                </div>
              )}
            </>
          )}

          {form.type === 'withdrawal' && (
            <div className="form-group">
              <label className="form-label">From Bank Account</label>
              <select className="form-input" value={form.accountId} onChange={(e) => update('accountId', e.target.value)} id="tx-withdraw-from">
                <option value="">Select bank account</option>
                {bankAccounts.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
              </select>
              <p className="form-hint">Cash will be added to "Cash in Hand" account</p>
            </div>
          )}

          {form.type === 'transfer' && (
            <>
              <div className="form-group">
                <label className="form-label">From Account</label>
                <select className="form-input" value={form.accountId} onChange={(e) => update('accountId', e.target.value)} id="tx-transfer-from">
                  <option value="">Select source</option>
                  {allNonInvestment.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">To Account</label>
                <select className="form-input" value={form.toAccountId} onChange={(e) => update('toAccountId', e.target.value)} id="tx-transfer-to">
                  <option value="">Select destination</option>
                  {allNonInvestment.filter((a) => a.id !== form.accountId).map((a) => (
                    <option key={a.id} value={a.id}>{a.name}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          {form.type === 'investment' && (
            <>
              <div className="form-group">
                <label className="form-label">From Account</label>
                <select className="form-input" value={form.accountId} onChange={(e) => update('accountId', e.target.value)} id="tx-invest-from">
                  <option value="">Select source</option>
                  {allNonInvestment.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Investment Type</label>
                <div className="payment-mode-selector">
                  {INVESTMENT_TYPES.map((it) => (
                    <button
                      key={it.value}
                      type="button"
                      className={`pm-btn ${form.investmentType === it.value ? 'pm-active' : ''}`}
                      onClick={() => update('investmentType', it.value)}
                    >
                      {it.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Note */}
          <div className="form-group">
            <label className="form-label">Note (optional)</label>
            <input className="form-input" placeholder="Add a note..." value={form.note} onChange={(e) => update('note', e.target.value)} id="tx-note-input" />
          </div>

          <button type="submit" className="btn btn-primary btn-full" disabled={submitting} id="tx-submit-btn">
            {submitting ? 'Adding...' : 'Add Transaction'}
          </button>
        </form>
      )}
    </Modal>
  );
}
