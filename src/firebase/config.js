import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyC424Dv1kTsqYsgnkJZ6mLSX6ha0vzaoS4',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'cashledger-75e4e.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'cashledger-75e4e',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'cashledger-75e4e.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '410774611421',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:410774611421:web:d87d19ed745ac0abc78234',
};

// Check if Firebase config is properly set
export const isFirebaseConfigured = !!(
  firebaseConfig.apiKey &&
  firebaseConfig.apiKey !== 'your-api-key-here' &&
  firebaseConfig.projectId &&
  firebaseConfig.projectId !== 'your-project-id'
);

let app = null;
let auth = null;
let db = null;

if (isFirebaseConfigured) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  
  // Use Firebase v11 persistentLocalCache API to avoid deprecation warning
  db = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager()
    })
  });
}

export { auth, db };
export default app;
