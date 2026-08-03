import {
  collection, doc, addDoc, updateDoc, deleteDoc,
  onSnapshot, query, orderBy, serverTimestamp, setDoc, getDocs,
} from 'firebase/firestore';
import { db } from './config.js';

// ---- Helpers ----
function userAccountsRef(uid) {
  return collection(db, 'users', uid, 'accounts');
}
function userTransactionsRef(uid) {
  return collection(db, 'users', uid, 'transactions');
}

// ---- Accounts ----
export function subscribeAccounts(uid, callback, onError) {
  const q = query(userAccountsRef(uid), orderBy('createdAt', 'asc'));
  return onSnapshot(
    q,
    (snap) => {
      const accounts = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      callback(accounts);
    },
    (err) => {
      console.error('Accounts snapshot error:', err);
      if (onError) onError(err);
    }
  );
}

export function addAccount(uid, account) {
  return addDoc(userAccountsRef(uid), {
    ...account,
    createdAt: serverTimestamp(),
  });
}

export function updateAccount(uid, accountId, data) {
  return updateDoc(doc(db, 'users', uid, 'accounts', accountId), data);
}

export function deleteAccount(uid, accountId) {
  return deleteDoc(doc(db, 'users', uid, 'accounts', accountId));
}

// ---- Transactions ----
export function subscribeTransactions(uid, callback, onError) {
  const q = query(userTransactionsRef(uid), orderBy('date', 'desc'));
  return onSnapshot(
    q,
    (snap) => {
      const txs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      callback(txs);
    },
    (err) => {
      console.error('Transactions snapshot error:', err);
      if (onError) onError(err);
    }
  );
}

export function addTransaction(uid, tx) {
  return addDoc(userTransactionsRef(uid), {
    ...tx,
    createdAt: serverTimestamp(),
  });
}

export function updateTransaction(uid, txId, data) {
  return updateDoc(doc(db, 'users', uid, 'transactions', txId), data);
}

export function deleteTransaction(uid, txId) {
  return deleteDoc(doc(db, 'users', uid, 'transactions', txId));
}

// ---- Seed check ----
export async function hasBeenSeeded(uid) {
  const snap = await getDocs(userAccountsRef(uid));
  return !snap.empty;
}

export function setSeedFlag(uid) {
  return setDoc(doc(db, 'users', uid, 'meta', 'seed'), { seeded: true });
}
