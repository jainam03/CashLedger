import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext.jsx';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { signOut } from '../../firebase/auth.js';
import { LayoutDashboard, ArrowLeftRight, Landmark, Sun, Moon, LogOut, Wallet, Menu, X } from 'lucide-react';

export default function Navbar({ currentView, onNavigate }) {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { key: 'transactions', label: 'Transactions', icon: ArrowLeftRight },
    { key: 'accounts', label: 'Accounts', icon: Landmark },
  ];

  const handleNavClick = (key) => {
    onNavigate(key);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => handleNavClick('dashboard')} style={{ cursor: 'pointer' }}>
        <div className="navbar-logo-wrap">
          <Wallet className="navbar-logo-icon" size={24} />
        </div>
        <span className="navbar-title">CashLedger</span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="navbar-links">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.key}
              id={`nav-${item.key}`}
              className={`nav-link ${currentView === item.key ? 'nav-link-active' : ''}`}
              onClick={() => handleNavClick(item.key)}
            >
              <Icon size={18} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Desktop Actions */}
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

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="hamburger-menu-toggle"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {user && (
            <div className="mobile-user-profile">
              {user.photoURL ? (
                <img src={user.photoURL} alt="" className="mobile-avatar" referrerPolicy="no-referrer" />
              ) : (
                <div className="mobile-avatar-placeholder">{user.displayName ? user.displayName[0] : 'U'}</div>
              )}
              <div className="mobile-user-info">
                <p className="mobile-user-name">{user.displayName || 'User'}</p>
                <p className="mobile-user-email">{user.email}</p>
              </div>
            </div>
          )}

          <div className="mobile-drawer-links">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  className={`mobile-drawer-link ${currentView === item.key ? 'mobile-drawer-link-active' : ''}`}
                  onClick={() => handleNavClick(item.key)}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mobile-drawer-footer">
            <button className="mobile-drawer-btn" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
            </button>
            {user && (
              <button className="mobile-drawer-btn mobile-drawer-btn-danger" onClick={signOut}>
                <LogOut size={18} />
                <span>Sign Out</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
