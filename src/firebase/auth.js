import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult as fbGetRedirectResult, signOut as fbSignOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './config.js';

const googleProvider = new GoogleAuthProvider();

export async function signInWithGoogle(useRedirect = false) {
  if (useRedirect) {
    return await signInWithRedirect(auth, googleProvider);
  }
  try {
    return await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.warn('signInWithPopup error:', error);
    if (
      error.code === 'auth/popup-blocked' ||
      error.code === 'auth/popup-closed-by-user' ||
      error.code === 'auth/cancelled-popup-request'
    ) {
      console.log('Falling back to signInWithRedirect...');
      return await signInWithRedirect(auth, googleProvider);
    }
    throw error;
  }
}

export function getRedirectResult() {
  return fbGetRedirectResult(auth);
}

export function signOut() {
  return fbSignOut(auth);
}

export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}
