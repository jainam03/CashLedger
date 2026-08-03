import { GoogleAuthProvider, signInWithPopup, signOut as fbSignOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './config.js';

const googleProvider = new GoogleAuthProvider();

export function signInWithGoogle() {
  return signInWithPopup(auth, googleProvider);
}

export function signOut() {
  return fbSignOut(auth);
}

export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}
