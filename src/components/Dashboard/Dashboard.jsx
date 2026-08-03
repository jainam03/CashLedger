import SummaryCards from './SummaryCards.jsx';
import BalanceCheck from './BalanceCheck.jsx';
import StipendProgress from './StipendProgress.jsx';
import CategoryBreakdown from './CategoryBreakdown.jsx';
import AccountBreakdown from './AccountBreakdown.jsx';
import RecentTransactions from './RecentTransactions.jsx';

export default function Dashboard({ onNavigate }) {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Your stipend & personal financial overview at a glance</p>
      </div>
      <BalanceCheck />
      <StipendProgress />
      <SummaryCards />
      <div className="dashboard-grid">
        <CategoryBreakdown />
        <AccountBreakdown />
      </div>
      <RecentTransactions limit={8} onViewAll={() => onNavigate('transactions')} />
    </div>
  );
}
