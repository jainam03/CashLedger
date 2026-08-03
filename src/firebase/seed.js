import { addAccount, addTransaction, hasBeenSeeded } from './firestore.js';
import { Timestamp } from 'firebase/firestore';

/**
 * Seed the database with starting accounts and transactions on first login.
 * Only runs if the user has no accounts yet.
 */
export async function seedInitialData(uid) {
  const alreadySeeded = await hasBeenSeeded(uid);
  if (alreadySeeded) return false;

  // Create accounts (openingBalance = 0, balances come from transactions)
  const bankRef = await addAccount(uid, {
    name: 'Bank Account',
    type: 'bank',
    openingBalance: 0,
    isPrimary: true,
  });

  const cashRef = await addAccount(uid, {
    name: 'Cash in Hand',
    type: 'cash',
    openingBalance: 0,
    isPrimary: false,
  });

  const upiCircleRef = await addAccount(uid, {
    name: 'UPI Circle (Parent)',
    type: 'upi_circle',
    monthlyLimit: 2500,
    resetDay: 19,
    openingBalance: 2500,
    isPrimary: false,
  });

  const baseDate = new Date('2026-07-15');

  // Transaction 1: Stipend income → Bank
  await addTransaction(uid, {
    type: 'income',
    amount: 40000,
    accountId: bankRef.id,
    toAccountId: null,
    category: 'Stipend',
    paymentMode: null,
    investmentType: null,
    note: 'Stipend credited',
    date: Timestamp.fromDate(baseDate),
  });

  // Transaction 2: ATM Withdrawal → Bank to Cash
  const withdrawDate = new Date('2026-07-16');
  await addTransaction(uid, {
    type: 'withdrawal',
    amount: 4500,
    accountId: bankRef.id,
    toAccountId: cashRef.id,
    category: null,
    paymentMode: null,
    investmentType: null,
    note: 'ATM withdrawal',
    date: Timestamp.fromDate(withdrawDate),
  });

  // Transaction 3: Expense from Cash
  const expenseDate = new Date('2026-07-17');
  await addTransaction(uid, {
    type: 'expense',
    amount: 1800,
    accountId: cashRef.id,
    toAccountId: null,
    category: 'Spiritual',
    paymentMode: 'cash',
    investmentType: null,
    note: 'Reserved for spiritual purpose',
    date: Timestamp.fromDate(expenseDate),
  });

  return true;
}
