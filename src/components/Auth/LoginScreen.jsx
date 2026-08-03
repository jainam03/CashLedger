import { useState } from 'react';
import { signInWithGoogle } from '../../firebase/auth.js';
import { Wallet, AlertTriangle, RefreshCw } from 'lucide-react';

export default function LoginScreen() {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleLogin = async (useRedirect = false) => {
    setIsSigningIn(true);
    setErrorMsg(null);
    try {
      await signInWithGoogle(useRedirect);
    } catch (err) {
      console.error('Sign-in failed:', err);
      let userFriendlyMessage = 'Sign-in failed. Please try again.';
      
      if (err.code === 'auth/unauthorized-domain') {
        userFriendlyMessage = 'Domain not authorized! Please add this domain (e.g. localhost) in Firebase Console → Authentication → Settings → Authorized domains.';
      } else if (err.message && err.message.includes('API_KEY_HTTP_REFERRER_BLOCKED')) {
        userFriendlyMessage = 'Google Cloud API Key Restriction Error: Please add "https://cashledger-75e4e.firebaseapp.com/*" to Website Restrictions in Google Cloud Console → APIs & Services → Credentials → API Key.';
      } else if (err.code === 'auth/popup-blocked') {
        userFriendlyMessage = 'Popup was blocked by your browser. Use the redirect option below.';
      } else if (err.code === 'auth/network-request-failed') {
        userFriendlyMessage = 'Network error. Please check your internet connection or disable ad-blocker.';
      } else if (err.message) {
        userFriendlyMessage = err.message;
      }
      
      setErrorMsg(userFriendlyMessage);
      setIsSigningIn(false);
    }
  };

  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-logo">
          <div className="navbar-logo-wrap" style={{ width: '56px', height: '56px', borderRadius: '16px', margin: '0 auto 12px' }}>
            <Wallet size={28} className="navbar-logo-icon" />
          </div>
          <h1 className="login-title">CashLedger</h1>
        </div>
        <p className="login-subtitle">
          Your personal finance companion.<br />
          Track every rupee across all your accounts.
        </p>

        {errorMsg && (
          <div className="overdraft-warning" style={{ marginBottom: '20px', textAlign: 'left', padding: '14px', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', fontWeight: 600, color: 'var(--red)' }}>
              <AlertTriangle size={18} />
              <span>Authentication Error</span>
            </div>
            <p style={{ margin: 0, color: 'var(--text-primary)', fontSize: '0.8rem', lineHeight: '1.4' }}>
              {errorMsg}
            </p>
          </div>
        )}

        <button 
          className="btn-google" 
          onClick={() => handleLogin(false)} 
          id="google-sign-in-btn" 
          disabled={isSigningIn}
          aria-label="Sign in with Google"
        >
          {isSigningIn ? (
            <>
              <RefreshCw size={18} className="loading-spinner" style={{ width: '18px', height: '18px', borderWidth: '2px' }} />
              Connecting to Google...
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" width="20" height="20" className="google-icon" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </>
          )}
        </button>

        {errorMsg && (
          <button 
            className="btn btn-secondary btn-full" 
            onClick={() => handleLogin(true)} 
            style={{ marginTop: '12px', fontSize: '0.85rem' }}
            disabled={isSigningIn}
          >
            Try Sign-In via Full Page Redirect
          </button>
        )}

        <p className="login-footer">
          Your data is securely synced via Firebase.<br />
          Access it from any device.
        </p>
      </div>
      <div className="login-bg-orb login-bg-orb-1"></div>
      <div className="login-bg-orb login-bg-orb-2"></div>
      <div className="login-bg-orb login-bg-orb-3"></div>
    </div>
  );
}
