import { useData } from '../../contexts/DataContext.jsx';
import { formatINR } from '../../utils/currency.js';
import { Users, Calendar, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function UpiCircleTracker({ onLogUpiExpense }) {
  const { financials } = useData();
  const upi = financials?.upiCircleSummary;

  if (!upi) return null;

  const formatDate = (d) => {
    if (!d) return '';
    const dateObj = d instanceof Date ? d : new Date(d);
    return dateObj.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  };

  const cycleStartText = formatDate(upi.cycleStart);
  const cycleEndText = formatDate(upi.cycleEnd);

  return (
    <div className="glass-card upi-circle-tracker">
      <div className="upi-circle-header">
        <div className="flex-center gap-2">
          <div className="upi-circle-icon-badge">
            <Users size={20} className="text-purple" />
          </div>
          <div>
            <h3 className="upi-circle-title">UPI Circle Allowance Tracker</h3>
            <p className="upi-circle-subtitle flex-center gap-1">
              <ShieldCheck size={13} className="text-green" />
              <span>Delegated Parent Fund • Separate from Bank/Stipend</span>
            </p>
          </div>
        </div>
        {onLogUpiExpense && (
          <button className="btn btn-secondary btn-sm flex-center gap-1" onClick={onLogUpiExpense}>
            <ArrowUpRight size={14} /> Log UPI Expense
          </button>
        )}
      </div>

      <div className="upi-circle-metrics-grid">
        <div className="upi-metric">
          <span className="upi-metric-label">Monthly Limit</span>
          <span className="upi-metric-val">{formatINR(upi.monthlyLimit)}</span>
        </div>
        <div className="upi-metric">
          <span className="upi-metric-label">Spent (19th-18th)</span>
          <span className="upi-metric-val text-red">−{formatINR(upi.spentThisCycle)}</span>
        </div>
        <div className="upi-metric highlight">
          <span className="upi-metric-label">Remaining Allowance</span>
          <span className={`upi-metric-val ${upi.remainingLimit <= 300 ? 'text-red' : 'text-green'}`}>
            {formatINR(upi.remainingLimit)}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="upi-progress-section">
        <div className="upi-progress-bar-bg">
          <div
            className={`upi-progress-bar-fill ${upi.percentUsed > 85 ? 'fill-danger' : upi.percentUsed > 60 ? 'fill-warning' : 'fill-purple'}`}
            style={{ width: `${upi.percentUsed}%` }}
          />
        </div>
        <div className="upi-progress-meta">
          <span>{upi.percentUsed}% of cycle limit used</span>
          <span className="flex-center gap-1">
            <Calendar size={13} />
            Cycle: {cycleStartText} – {cycleEndText} • Resets in {upi.daysUntilReset} {upi.daysUntilReset === 1 ? 'day' : 'days'}
          </span>
        </div>
      </div>
    </div>
  );
}
