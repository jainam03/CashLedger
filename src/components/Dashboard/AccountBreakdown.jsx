import { useData } from '../../contexts/DataContext.jsx';
import { formatINR } from '../../utils/currency.js';
import { Landmark, Banknote, TrendingUp, CreditCard } from 'lucide-react';

export default function AccountBreakdown() {
  const { financials } = useData();
  const { accountBalances } = financials;

  const renderIcon = (type) => {
    switch (type) {
      case 'bank': return <Landmark size={20} className="account-type-icon text-accent" />;
      case 'cash': return <Banknote size={20} className="account-type-icon text-green" />;
      case 'investment': return <TrendingUp size={20} className="account-type-icon text-purple" />;
      default: return <CreditCard size={20} className="account-type-icon" />;
    }
  };

  return (
    <div className="glass-card account-breakdown">
      <h3 className="section-title">Accounts</h3>
      <div className="account-list">
        {accountBalances.map((acc) => (
          <div key={acc.id} className="account-row">
            <div className="account-row-left">
              {renderIcon(acc.type)}
              <div>
                <div className="account-name">
                  {acc.name}
                  {acc.isPrimary && <span className="badge-primary">Primary</span>}
                </div>
                <div className="account-type-label">{acc.type}</div>
              </div>
            </div>
            <div className="account-balance">{formatINR(acc.balance)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
