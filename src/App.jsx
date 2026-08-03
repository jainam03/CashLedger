import { useState, useEffect } from 'react';
import { isFirebaseConfigured } from './firebase/config.js';
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { DataProvider, useData } from './contexts/DataContext.jsx';
import { ToastProvider } from './components/common/Toast.jsx';
import LoginScreen from './components/Auth/LoginScreen.jsx';
import Navbar from './components/Layout/Navbar.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import TransactionList from './components/Transactions/TransactionList.jsx';
import AddTransaction from './components/Transactions/AddTransaction.jsx';
import AccountManager from './components/Accounts/AccountManager.jsx';
import ShortcutsModal from './components/common/ShortcutsModal.jsx';

import { LayoutDashboard, ArrowLeftRight, Landmark, Plus, Wrench, ShieldAlert } from 'lucide-react';

function SetupScreen() {
  return (
    <div className="login-screen">
      <div className="login-card" style={{ textAlign: 'left', maxWidth: '520px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div className="flex-center" style={{ width: '80px', height: '80px', margin: '0 auto 16px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', color: 'var(--accent)' }}>
            <Wrench size={40} />
          </div>
          <h1 className="login-title">Setup Required</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
          CashLedger needs a Firebase project to store your data. Follow these steps:
        </p>
        <ol style={{ color: 'var(--text-secondary)', lineHeight: '2', paddingLeft: '20px', fontSize: '0.9rem' }}>
          <li>Go to <a href="https://console.firebase.google.com/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>Firebase Console</a> and create a project</li>
          <li>Enable <strong>Google Sign-In</strong> under Authentication → Sign-in method</li>
          <li>Create a <strong>Firestore Database</strong> (production mode)</li>
          <li>Add a <strong>Web App</strong> and copy the config</li>
          <li>Create a <code style={{ background: 'var(--surface)', padding: '2px 6px', borderRadius: '4px' }}>.env</code> file from <code style={{ background: 'var(--surface)', padding: '2px 6px', borderRadius: '4px' }}>.env.example</code></li>
          <li>Paste your Firebase config values and restart the dev server</li>
        </ol>
      </div>
      <div className="login-bg-orb login-bg-orb-1"></div>
      <div className="login-bg-orb login-bg-orb-2"></div>
    </div>
  );
}

function AppContent() {
  const { user, loading: authLoading } = useAuth();
  const [currentView, setCurrentView] = useState('dashboard');
  const [showAddTx, setShowAddTx] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);

  // Global Keyboard Shortcuts Listener (Shneiderman Rule 2)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Avoid triggering when user is typing inside input, select, or textarea
      const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      if (['input', 'select', 'textarea'].includes(tag)) {
        if (e.key === 'Escape') {
          document.activeElement.blur();
        }
        return;
      }

      if (e.key === 'n' || e.key === 'N' || e.key === '+') {
        e.preventDefault();
        setShowAddTx(true);
      } else if (e.key === '1' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        setCurrentView('dashboard');
      } else if (e.key === '2' || e.key === 't' || e.key === 'T') {
        e.preventDefault();
        setCurrentView('transactions');
      } else if (e.key === '3' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        setCurrentView('accounts');
      } else if (e.key === '/' || e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        setCurrentView('transactions');
        setTimeout(() => {
          const searchInput = document.getElementById('tx-search-input');
          if (searchInput) searchInput.focus();
        }, 100);
      } else if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        setShowShortcuts(true);
      } else if (e.key === 'Escape') {
        setShowAddTx(false);
        setShowShortcuts(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (authLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Loading CashLedger...</p>
      </div>
    );
  }

  if (!user) return <LoginScreen />;

  return (
    <DataProvider>
      <AppMain
        currentView={currentView}
        onNavigate={setCurrentView}
        showAddTx={showAddTx}
        setShowAddTx={setShowAddTx}
        showShortcuts={showShortcuts}
        setShowShortcuts={setShowShortcuts}
      />
    </DataProvider>
  );
}

function AppMain({ currentView, onNavigate, showAddTx, setShowAddTx, showShortcuts, setShowShortcuts }) {
  const { loading, error } = useData();

  if (error) {
    return (
      <div className="login-screen">
        <div className="login-card" style={{ textAlign: 'left', maxWidth: '520px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div className="flex-center" style={{ width: '80px', height: '80px', margin: '0 auto 16px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '50%', color: 'var(--red)' }}>
              <ShieldAlert size={40} />
            </div>
            <h1 className="login-title" style={{ fontSize: '2rem' }}>Firestore Permission Error</h1>
          </div>
          <p style={{ color: 'var(--red)', marginBottom: '16px', fontWeight: '600' }}>
            {error.code || error.message || 'Missing or insufficient permissions'}
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Firebase blocked read/write access. You need to update your <strong>Firestore Security Rules</strong> in the Firebase Console:
          </p>
          <ol style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '20px', fontSize: '0.85rem', marginBottom: '20px' }}>
            <li>Go to <a href="https://console.firebase.google.com/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>Firebase Console</a> → <strong>Firestore Database</strong> → <strong>Rules</strong> tab</li>
            <li>Replace rules with:
              <pre style={{ background: 'var(--surface)', padding: '12px', borderRadius: '8px', overflowX: 'auto', marginTop: '8px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
{`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}`}
              </pre>
            </li>
            <li>Click <strong>Publish</strong> and refresh this page.</li>
          </ol>
          <button className="btn btn-primary btn-full" onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Setting up your ledger...</p>
      </div>
    );
  }

  const mobileNavItems = [
    { key: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { key: 'transactions', icon: ArrowLeftRight, label: 'Transactions' },
    { key: 'accounts', icon: Landmark, label: 'Accounts' },
  ];

  return (
    <div className="app-layout">
      <Navbar currentView={currentView} onNavigate={onNavigate} onOpenShortcuts={() => setShowShortcuts(true)} />
      <main className="main-content">
        {currentView === 'dashboard' && <Dashboard onNavigate={onNavigate} onOpenAddTransaction={() => setShowAddTx(true)} />}
        {currentView === 'transactions' && <TransactionList />}
        {currentView === 'accounts' && <AccountManager />}
      </main>

      {/* Floating Action Button */}
      <button className="fab" onClick={() => setShowAddTx(true)} id="fab-add-transaction" title="Add Transaction (Press N)" aria-label="Add Transaction">
        <Plus size={24} className="fab-icon" />
      </button>

      <AddTransaction isOpen={showAddTx} onClose={() => setShowAddTx(false)} />
      <ShortcutsModal isOpen={showShortcuts} onClose={() => setShowShortcuts(false)} />

      {/* Mobile Bottom Nav */}
      <nav className="mobile-nav">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.key}
              className={`mobile-nav-btn ${currentView === item.key ? 'mobile-nav-active' : ''}`}
              onClick={() => onNavigate(item.key)}
            >
              <Icon size={20} />
              <span className="mobile-nav-label">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default function App() {
  if (!isFirebaseConfigured) {
    return (
      <ThemeProvider>
        <SetupScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          <AppContent />
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
