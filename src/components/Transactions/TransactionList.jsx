import { useState, useMemo } from 'react';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { useData } from '../../contexts/DataContext.jsx';
import { useToast } from '../common/Toast.jsx';
import { deleteTransaction, updateTransaction } from '../../firebase/firestore.js';
import { formatINR } from '../../utils/currency.js';
import { TRANSACTION_TYPES, PAYMENT_MODES, EXPENSE_CATEGORIES } from '../../utils/constants.js';
import { Timestamp } from 'firebase/firestore';
import Modal from '../common/Modal.jsx';
import {
  ArrowDownLeft, ArrowUpRight, ArrowLeftRight, TrendingUp, Landmark,
  Pencil, Trash2, FileText, FilterX
} from 'lucide-react';

function formatDate(dateVal) {
  if (!dateVal) return '';
  const d = dateVal.toDate ? dateVal.toDate() : new Date(dateVal);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function toInputDate(dateVal) {
  if (!dateVal) return '';
  const d = dateVal.toDate ? dateVal.toDate() : new Date(dateVal);
  return d.toISOString().split('T')[0];
}

function getTypeInfo(type) {
  return TRANSACTION_TYPES.find((t) => t.value === type) || { label: type, color: '#94a3b8' };
}

function renderTypeIcon(type, color) {
  const props = { size: 18, style: { color } };
  switch (type) {
    case 'income': return <ArrowDownLeft {...props} />;
    case 'expense': return <ArrowUpRight {...props} />;
    case 'withdrawal': return <Landmark {...props} />;
    case 'transfer': return <ArrowLeftRight {...props} />;
    case 'investment': return <TrendingUp {...props} />;
    default: return <ArrowUpRight {...props} />;
  }
}

export default function TransactionList() {
  const { user } = useAuth();
  const { transactions, accounts } = useData();
  const { addToast } = useToast();

  // Filters
  const [filterType, setFilterType] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterAccount, setFilterAccount] = useState('');
  const [filterPaymentMode, setFilterPaymentMode] = useState('');
  const [filterDateFrom, setFilterDateFrom] = useState('');
  const [filterDateTo, setFilterDateTo] = useState('');

  // Edit state
  const [editingTx, setEditingTx] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const getAccountName = (id) => accounts.find((a) => a.id === id)?.name || '—';
  const isDebit = (type) => ['expense', 'withdrawal', 'transfer', 'investment'].includes(type);

  // Unique categories from transactions
  const allCategories = useMemo(() => {
    const cats = new Set();
    transactions.forEach((tx) => { if (tx.category) cats.add(tx.category); });
    return [...cats].sort();
  }, [transactions]);

  // Apply filters
  const filtered = useMemo(() => {
    return transactions.filter((tx) => {
      if (filterType && tx.type !== filterType) return false;
      if (filterCategory && tx.category !== filterCategory) return false;
      if (filterAccount && tx.accountId !== filterAccount && tx.toAccountId !== filterAccount) return false;
      if (filterPaymentMode && tx.paymentMode !== filterPaymentMode) return false;
      if (filterDateFrom) {
        const d = tx.date?.toDate ? tx.date.toDate() : new Date(tx.date);
        if (d < new Date(filterDateFrom)) return false;
      }
      if (filterDateTo) {
        const d = tx.date?.toDate ? tx.date.toDate() : new Date(tx.date);
        if (d > new Date(filterDateTo + 'T23:59:59')) return false;
      }
      return true;
    });
  }, [transactions, filterType, filterCategory, filterAccount, filterPaymentMode, filterDateFrom, filterDateTo]);

  const clearFilters = () => {
    setFilterType(''); setFilterCategory(''); setFilterAccount('');
    setFilterPaymentMode(''); setFilterDateFrom(''); setFilterDateTo('');
  };

  const hasActiveFilters = filterType || filterCategory || filterAccount || filterPaymentMode || filterDateFrom || filterDateTo;

  // Edit handlers
  const openEdit = (tx) => {
    setEditingTx(tx);
    setEditForm({
      amount: tx.amount,
      category: tx.category || '',
      note: tx.note || '',
      paymentMode: tx.paymentMode || '',
      investmentType: tx.investmentType || '',
      date: toInputDate(tx.date),
      accountId: tx.accountId || '',
      toAccountId: tx.toAccountId || '',
    });
  };

  const saveEdit = async () => {
    try {
      const data = {
        amount: parseFloat(editForm.amount),
        category: editForm.category || null,
        note: editForm.note || null,
        paymentMode: editForm.paymentMode || null,
        investmentType: editForm.investmentType || null,
        date: Timestamp.fromDate(new Date(editForm.date)),
        accountId: editForm.accountId,
        toAccountId: editForm.toAccountId || null,
      };
      await updateTransaction(user.uid, editingTx.id, data);
      addToast('Transaction updated!', 'success');
      setEditingTx(null);
    } catch (err) {
      console.error(err);
      addToast('Failed to update', 'error');
    }
  };

  const handleDelete = async (txId) => {
    try {
      await deleteTransaction(user.uid, txId);
      addToast('Transaction deleted', 'success');
      setDeleteConfirm(null);
    } catch (err) {
      console.error(err);
      addToast('Failed to delete', 'error');
    }
  };

  const getDescription = (tx) => {
    switch (tx.type) {
      case 'income': return `${tx.category || 'Income'} → ${getAccountName(tx.accountId)}`;
      case 'expense': return `${tx.category || 'Expense'}`;
      case 'withdrawal': return `${getAccountName(tx.accountId)} → ${getAccountName(tx.toAccountId)}`;
      case 'transfer': return `${getAccountName(tx.accountId)} → ${getAccountName(tx.toAccountId)}`;
      case 'investment': return `${tx.investmentType || 'Investment'} from ${getAccountName(tx.accountId)}`;
      default: return tx.note || '';
    }
  };

  return (
    <div className="transaction-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Transactions</h1>
          <p className="page-subtitle">{filtered.length} transaction{filtered.length !== 1 ? 's' : ''}{hasActiveFilters ? ' (filtered)' : ''}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="glass-card filters-bar">
        <div className="filters-grid">
          <select className="form-input filter-input" value={filterType} onChange={(e) => setFilterType(e.target.value)} id="filter-type">
            <option value="">All Types</option>
            {TRANSACTION_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
          <select className="form-input filter-input" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} id="filter-category">
            <option value="">All Categories</option>
            {allCategories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select className="form-input filter-input" value={filterAccount} onChange={(e) => setFilterAccount(e.target.value)} id="filter-account">
            <option value="">All Accounts</option>
            {accounts.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
          </select>
          <select className="form-input filter-input" value={filterPaymentMode} onChange={(e) => setFilterPaymentMode(e.target.value)} id="filter-payment">
            <option value="">All Payment Modes</option>
            {PAYMENT_MODES.map((pm) => <option key={pm.value} value={pm.value}>{pm.label}</option>)}
          </select>
          <input type="date" className="form-input filter-input" value={filterDateFrom} onChange={(e) => setFilterDateFrom(e.target.value)} placeholder="From" id="filter-date-from" />
          <input type="date" className="form-input filter-input" value={filterDateTo} onChange={(e) => setFilterDateTo(e.target.value)} placeholder="To" id="filter-date-to" />
        </div>
        {hasActiveFilters && (
          <button className="btn-link flex-center gap-1" onClick={clearFilters}>
            <FilterX size={16} /> Clear Filters
          </button>
        )}
      </div>

      {/* Transaction List */}
      <div className="glass-card">
        {filtered.length === 0 ? (
          <p className="empty-state">No transactions match your filters</p>
        ) : (
          <div className="tx-list">
            {filtered.map((tx) => {
              const info = getTypeInfo(tx.type);
              return (
                <div key={tx.id} className="tx-row tx-row-actions">
                  <div className="tx-icon" style={{ background: info.color + '15', borderColor: info.color + '30' }}>
                    {renderTypeIcon(tx.type, info.color)}
                  </div>
                  <div className="tx-details">
                    <div className="tx-desc">{getDescription(tx)}</div>
                    <div className="tx-meta">
                      <span className="tx-type-badge" style={{ color: info.color }}>{info.label}</span>
                      {tx.paymentMode && <span className="tx-pm-badge">{tx.paymentMode}</span>}
                      <span className="tx-date">{formatDate(tx.date)}</span>
                      {tx.note && <span className="tx-note-badge" title={tx.note}><FileText size={12} /></span>}
                    </div>
                  </div>
                  <div className={`tx-amount ${isDebit(tx.type) ? 'tx-debit' : 'tx-credit'}`}>
                    {isDebit(tx.type) ? '−' : '+'}{formatINR(tx.amount)}
                  </div>
                  <div className="tx-actions">
                    <button className="btn-icon-sm" onClick={() => openEdit(tx)} title="Edit">
                      <Pencil size={15} />
                    </button>
                    <button className="btn-icon-sm text-red" onClick={() => setDeleteConfirm(tx.id)} title="Delete">
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      <Modal isOpen={!!editingTx} onClose={() => setEditingTx(null)} title="Edit Transaction">
        {editingTx && (
          <div className="tx-form">
            <div className="form-group">
              <label className="form-label">Amount (₹)</label>
              <input type="number" className="form-input amount-input" value={editForm.amount}
                onChange={(e) => setEditForm({ ...editForm, amount: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">Date</label>
              <input type="date" className="form-input" value={editForm.date}
                onChange={(e) => setEditForm({ ...editForm, date: e.target.value })} />
            </div>
            {editingTx.type === 'expense' && (
              <div className="form-group">
                <label className="form-label">Category</label>
                <select className="form-input" value={editForm.category}
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}>
                  {EXPENSE_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            )}
            <div className="form-group">
              <label className="form-label">Note</label>
              <input className="form-input" value={editForm.note}
                onChange={(e) => setEditForm({ ...editForm, note: e.target.value })} />
            </div>
            <button className="btn btn-primary btn-full" onClick={saveEdit}>Save Changes</button>
          </div>
        )}
      </Modal>

      {/* Delete Confirmation */}
      <Modal isOpen={!!deleteConfirm} onClose={() => setDeleteConfirm(null)} title="Delete Transaction">
        <p>Are you sure? This will reverse the balance changes from this transaction.</p>
        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={() => setDeleteConfirm(null)}>Cancel</button>
          <button className="btn btn-danger" onClick={() => handleDelete(deleteConfirm)}>Delete</button>
        </div>
      </Modal>
    </div>
  );
}
