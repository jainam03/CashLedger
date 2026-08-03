import { useData } from '../../contexts/DataContext.jsx';
import { formatINR } from '../../utils/currency.js';
import { TRANSACTION_TYPES } from '../../utils/constants.js';
import { ArrowDownLeft, ArrowUpRight, ArrowLeftRight, TrendingUp, Landmark } from 'lucide-react';

function formatDate(dateVal) {
  if (!dateVal) return '';
  const d = dateVal.toDate ? dateVal.toDate() : new Date(dateVal);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
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

export default function RecentTransactions({ limit = 10, onViewAll }) {
  const { transactions, accounts } = useData();
  const recent = transactions.slice(0, limit);

  const getAccountName = (id) => {
    const acc = accounts.find((a) => a.id === id);
    return acc ? acc.name : '—';
  };

  const getDescription = (tx) => {
    switch (tx.type) {
      case 'income': return `${tx.category || 'Income'} → ${getAccountName(tx.accountId)}`;
      case 'expense': return `${tx.category || 'Expense'} • ${tx.paymentMode || ''}`;
      case 'withdrawal': return `${getAccountName(tx.accountId)} → ${getAccountName(tx.toAccountId)}`;
      case 'transfer': return `${getAccountName(tx.accountId)} → ${getAccountName(tx.toAccountId)}`;
      case 'investment': return `${tx.investmentType || 'Investment'} from ${getAccountName(tx.accountId)}`;
      default: return tx.note || '';
    }
  };

  const isDebit = (type) => ['expense', 'withdrawal', 'transfer', 'investment'].includes(type);

  return (
    <div className="glass-card recent-transactions">
      <div className="section-header">
        <h3 className="section-title">Recent Transactions</h3>
        {onViewAll && (
          <button className="btn-link" onClick={onViewAll}>View All →</button>
        )}
      </div>
      {recent.length === 0 ? (
        <p className="empty-state">No transactions yet</p>
      ) : (
        <div className="tx-list">
          {recent.map((tx) => {
            const info = getTypeInfo(tx.type);
            return (
              <div key={tx.id} className="tx-row">
                <div className="tx-icon" style={{ background: info.color + '15', borderColor: info.color + '30' }}>
                  {renderTypeIcon(tx.type, info.color)}
                </div>
                <div className="tx-details">
                  <div className="tx-desc">{getDescription(tx)}</div>
                  <div className="tx-meta">
                    <span className="tx-type-badge" style={{ color: info.color }}>{info.label}</span>
                    <span className="tx-date">{formatDate(tx.date)}</span>
                  </div>
                </div>
                <div className={`tx-amount ${isDebit(tx.type) ? 'tx-debit' : 'tx-credit'}`}>
                  {isDebit(tx.type) ? '−' : '+'}{formatINR(tx.amount)}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
