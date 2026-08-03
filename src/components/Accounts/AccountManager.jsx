import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { useData } from '../../contexts/DataContext.jsx';
import { useToast } from '../common/Toast.jsx';
import { addAccount, updateAccount, deleteAccount } from '../../firebase/firestore.js';
import { formatINR } from '../../utils/currency.js';
import { ACCOUNT_TYPES, TRANSACTION_TYPES } from '../../utils/constants.js';
import Modal from '../common/Modal.jsx';
import {
  Landmark, Banknote, TrendingUp, CreditCard, Plus, Star, Eye, Trash2,
  ArrowDownLeft, ArrowUpRight, ArrowLeftRight, Users
} from 'lucide-react';

export default function AccountManager() {
  const { user } = useAuth();
  const { accounts, transactions, financials } = useData();
  const { addToast } = useToast();

  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState('bank');
  const [monthlyLimit, setMonthlyLimit] = useState(2500);
  const [resetDay, setResetDay] = useState(19);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [viewAccount, setViewAccount] = useState(null);

  const renderIcon = (type) => {
    switch (type) {
      case 'bank': return <Landmark size={22} className="text-accent" />;
      case 'cash': return <Banknote size={22} className="text-green" />;
      case 'investment': return <TrendingUp size={22} className="text-purple" />;
      case 'upi_circle': return <Users size={22} className="text-purple" />;
      default: return <CreditCard size={22} />;
    }
  };

  const renderTypeIcon = (type, color) => {
    const props = { size: 16, style: { color } };
    switch (type) {
      case 'income': return <ArrowDownLeft {...props} />;
      case 'expense': return <ArrowUpRight {...props} />;
      case 'withdrawal': return <Landmark {...props} />;
      case 'transfer': return <ArrowLeftRight {...props} />;
      case 'investment': return <TrendingUp {...props} />;
      default: return <ArrowUpRight {...props} />;
    }
  };

  const handleAdd = async () => {
    if (!newName.trim()) { addToast('Enter an account name', 'error'); return; }
    try {
      await addAccount(user.uid, {
        name: newName.trim(),
        type: newType,
        monthlyLimit: newType === 'upi_circle' ? parseFloat(monthlyLimit) || 2500 : null,
        resetDay: newType === 'upi_circle' ? parseInt(resetDay, 10) || 19 : null,
        openingBalance: 0,
        isPrimary: false,
      });
      addToast('Account created!', 'success');
      setNewName('');
      setNewType('bank');
      setShowAdd(false);
    } catch (err) {
      console.error(err);
      addToast('Failed to create account', 'error');
    }
  };

  const handleSetPrimary = async (accId) => {
    try {
      for (const acc of accounts) {
        if (acc.isPrimary) await updateAccount(user.uid, acc.id, { isPrimary: false });
      }
      await updateAccount(user.uid, accId, { isPrimary: true });
      addToast('Primary account updated', 'success');
    } catch (err) {
      addToast('Failed to update', 'error');
    }
  };

  const handleDelete = async (accId) => {
    const linkedTx = transactions.filter((tx) => tx.accountId === accId || tx.toAccountId === accId);
    if (linkedTx.length > 0) {
      addToast(`Cannot delete: ${linkedTx.length} transactions linked to this account`, 'error');
      setDeleteConfirm(null);
      return;
    }
    try {
      await deleteAccount(user.uid, accId);
      addToast('Account deleted', 'success');
      setDeleteConfirm(null);
    } catch (err) {
      addToast('Failed to delete', 'error');
    }
  };

  const accountTxs = viewAccount
    ? transactions.filter((tx) => tx.accountId === viewAccount.id || tx.toAccountId === viewAccount.id || (viewAccount.type === 'upi_circle' && tx.paymentMode === 'upi_circle'))
    : [];

  const getAccountBalance = (accId) => {
    const ab = financials.accountBalances.find((a) => a.id === accId);
    return ab ? ab.balance : 0;
  };

  return (
    <div className="accounts-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Accounts</h1>
          <p className="page-subtitle">{accounts.length} account{accounts.length !== 1 ? 's' : ''}</p>
        </div>
        <button className="btn btn-primary flex-center gap-1" onClick={() => setShowAdd(true)} id="add-account-btn">
          <Plus size={18} /> Add Account
        </button>
      </div>

      <div className="accounts-grid">
        {financials.accountBalances.map((acc) => (
          <div key={acc.id} className="glass-card account-card">
            <div className="account-card-header">
              <span className="account-card-icon-wrap">
                {renderIcon(acc.type)}
              </span>
              <div className="account-card-actions">
                {!acc.isPrimary && acc.type === 'bank' && (
                  <button className="btn-icon-sm" onClick={() => handleSetPrimary(acc.id)} title="Set as primary">
                    <Star size={16} />
                  </button>
                )}
                <button className="btn-icon-sm" onClick={() => setViewAccount(acc)} title="View history">
                  <Eye size={16} />
                </button>
                <button className="btn-icon-sm text-red" onClick={() => setDeleteConfirm(acc.id)} title="Delete">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <h3 className="account-card-name">
              {acc.name}
              {acc.isPrimary && <span className="badge-primary">Primary</span>}
              {acc.type === 'upi_circle' && <span className="badge-primary" style={{ background: 'rgba(168, 85, 247, 0.2)', color: '#c084fc' }}>Delegated Allowance</span>}
            </h3>
            <p className="account-card-type">
              {acc.type === 'upi_circle' ? `UPI Circle • Resets on ${acc.resetDay || 19}th` : acc.type}
            </p>
            <div className="account-card-balance">
              {formatINR(acc.balance)}
              {acc.type === 'upi_circle' && <span style={{ fontSize: '0.75rem', display: 'block', color: 'var(--text-secondary)', fontWeight: 'normal' }}>remaining of {formatINR(acc.monthlyLimit || 2500)}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Add Account Modal */}
      <Modal isOpen={showAdd} onClose={() => setShowAdd(false)} title="New Account">
        <div className="tx-form">
          <div className="form-group">
            <label className="form-label">Account Name</label>
            <input className="form-input" placeholder="e.g. Parent UPI Circle" value={newName}
              onChange={(e) => setNewName(e.target.value)} id="new-account-name" />
          </div>
          <div className="form-group">
            <label className="form-label">Account Type</label>
            <select className="form-input" value={newType} onChange={(e) => setNewType(e.target.value)} id="new-account-type">
              {ACCOUNT_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>
          {newType === 'upi_circle' && (
            <>
              <div className="form-group">
                <label className="form-label">Monthly Limit (₹)</label>
                <input type="number" className="form-input" value={monthlyLimit} onChange={(e) => setMonthlyLimit(e.target.value)} placeholder="2500" />
              </div>
              <div className="form-group">
                <label className="form-label">Monthly Reset Day (1 to 28)</label>
                <input type="number" min="1" max="28" className="form-input" value={resetDay} onChange={(e) => setResetDay(e.target.value)} placeholder="19" />
              </div>
            </>
          )}
          <button className="btn btn-primary btn-full" onClick={handleAdd}>Create Account</button>
        </div>
      </Modal>

      {/* Account History Modal */}
      <Modal isOpen={!!viewAccount} onClose={() => setViewAccount(null)} title={viewAccount ? `${viewAccount.name} — History` : ''}>
        {viewAccount && (
          <div>
            <p className="account-detail-balance">Current Balance: <strong>{formatINR(getAccountBalance(viewAccount.id))}</strong></p>
            {accountTxs.length === 0 ? (
              <p className="empty-state">No transactions for this account</p>
            ) : (
              <div className="tx-list tx-list-compact">
                {accountTxs.map((tx) => {
                  const info = TRANSACTION_TYPES.find((t) => t.value === tx.type) || {};
                  const isOut = tx.accountId === viewAccount.id && ['expense', 'withdrawal', 'transfer', 'investment'].includes(tx.type);
                  const isIn = tx.toAccountId === viewAccount.id || (tx.accountId === viewAccount.id && tx.type === 'income');
                  return (
                    <div key={tx.id} className="tx-row">
                      <div className="tx-icon" style={{ background: (info.color || '#666') + '15', borderColor: (info.color || '#666') + '30' }}>
                        {renderTypeIcon(tx.type, info.color || '#666')}
                      </div>
                      <div className="tx-details">
                        <div className="tx-desc">{tx.note || tx.category || info.label}</div>
                        <div className="tx-date">{tx.date?.toDate ? tx.date.toDate().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : ''}</div>
                      </div>
                      <div className={`tx-amount ${isOut && !isIn ? 'tx-debit' : 'tx-credit'}`}>
                        {isOut && !isIn ? '−' : '+'}{formatINR(tx.amount)}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* Delete Confirmation */}
      <Modal isOpen={!!deleteConfirm} onClose={() => setDeleteConfirm(null)} title="Delete Account">
        <p>Are you sure? Accounts with linked transactions cannot be deleted.</p>
        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={() => setDeleteConfirm(null)}>Cancel</button>
          <button className="btn btn-danger" onClick={() => handleDelete(deleteConfirm)}>Delete</button>
        </div>
      </Modal>
    </div>
  );
}
