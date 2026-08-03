import { useTheme } from '../../contexts/ThemeContext.jsx';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { signOut } from '../../firebase/auth.js';
import { LayoutDashboard, ArrowLeftRight, Landmark, Sun, Moon, LogOut, Wallet } from 'lucide-react';

export default function Navbar({ currentView, onNavigate }) {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  const navItems = [
    { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { key: 'transactions', label: 'Transactions', icon: ArrowLeftRight },
    { key: 'accounts', label: 'Accounts', icon: Landmark },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => onNavigate('dashboard')} style={{ cursor: 'pointer' }}>
        <div className="navbar-logo-wrap">
          <Wallet className="navbar-logo-icon" size={24} />
        </div>
        <span className="navbar-title">CashLedger</span>
      </div>

      <div className="navbar-links">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.key}
              id={`nav-${item.key}`}
              className={`nav-link ${currentView === item.key ? 'nav-link-active' : ''}`}
              onClick={() => onNavigate(item.key)}
            >
              <Icon size={18} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="navbar-actions">
        <button className="btn-icon" onClick={toggleTheme} id="theme-toggle" title="Toggle theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        {user && (
          <div className="navbar-user">
            {user.photoURL && (
              <img src={user.photoURL} alt="" className="navbar-avatar" referrerPolicy="no-referrer" />
            )}
            <button className="btn-signout" onClick={signOut} id="sign-out-btn" title="Sign Out">
              <LogOut size={16} />
              <span className="btn-signout-text">Sign Out</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
