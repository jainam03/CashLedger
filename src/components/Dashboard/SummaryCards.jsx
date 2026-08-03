import { useData } from '../../contexts/DataContext.jsx';
import { formatINR } from '../../utils/currency.js';
import { Wallet, Landmark, Banknote, TrendingUp, Receipt } from 'lucide-react';

export default function SummaryCards() {
  const { financials } = useData();
  const { totalAcrossAccounts, bankTotal, cashTotal, investmentTotal, totalSpent } = financials;

  const cards = [
    { label: 'Total Balance', value: totalAcrossAccounts, icon: Wallet, className: 'card-total' },
    { label: 'Bank Accounts', value: bankTotal, icon: Landmark, className: 'card-bank' },
    { label: 'Cash in Hand', value: cashTotal, icon: Banknote, className: 'card-cash' },
    { label: 'Total Invested', value: investmentTotal, icon: TrendingUp, className: 'card-invest' },
    { label: 'Total Spent', value: totalSpent, icon: Receipt, className: 'card-spent' },
  ];

  return (
    <div className="summary-cards">
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <div key={c.label} className={`summary-card ${c.className}`}>
            <div className="summary-card-header">
              <span className="summary-card-icon-wrap">
                <Icon size={20} className="summary-card-icon" />
              </span>
              <span className="summary-card-label">{c.label}</span>
            </div>
            <div className="summary-card-value">{formatINR(c.value)}</div>
          </div>
        );
      })}
    </div>
  );
}
