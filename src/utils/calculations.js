/**
 * Core financial engine.
 * ALL balances are derived from transactions — never stored directly.
 * This is the golden rule of CashLedger.
 */

/**
 * Compute the current balance for a single account from its opening balance + all transactions.
 */
export function computeAccountBalance(account, transactions) {
  let balance = account.openingBalance || 0;

  for (const tx of transactions) {
    switch (tx.type) {
      case 'income':
        if (tx.accountId === account.id) balance += tx.amount;
        break;
      case 'expense':
        if (tx.accountId === account.id) balance -= tx.amount;
        break;
      case 'withdrawal':
        // Withdrawal: source bank loses money, destination cash gains
        if (tx.accountId === account.id) balance -= tx.amount;
        if (tx.toAccountId === account.id) balance += tx.amount;
        break;
      case 'transfer':
        if (tx.accountId === account.id) balance -= tx.amount;
        if (tx.toAccountId === account.id) balance += tx.amount;
        break;
      case 'investment':
        if (tx.accountId === account.id) balance -= tx.amount;
        if (tx.toAccountId === account.id) balance += tx.amount;
        break;
      default:
        break;
    }
  }

  return balance;
}

/**
 * Compute all financial summaries from accounts + transactions.
 * Returns the 5 dashboard numbers + reconciliation check.
 */
export function computeFinancials(accounts, transactions) {
  // Compute each account's derived balance
  const accountBalances = accounts.map((acc) => ({
    ...acc,
    balance: computeAccountBalance(acc, transactions),
  }));

  const bankTotal = accountBalances
    .filter((a) => a.type === 'bank')
    .reduce((sum, a) => sum + a.balance, 0);

  const cashTotal = accountBalances
    .filter((a) => a.type === 'cash')
    .reduce((sum, a) => sum + a.balance, 0);

  const investmentTotal = accountBalances
    .filter((a) => a.type === 'investment')
    .reduce((sum, a) => sum + a.balance, 0);

  // Total spent = only expense transactions
  const totalSpent = transactions
    .filter((tx) => tx.type === 'expense')
    .reduce((sum, tx) => sum + tx.amount, 0);

  // Total income = only income transactions + opening balances
  const totalIncome = transactions
    .filter((tx) => tx.type === 'income')
    .reduce((sum, tx) => sum + tx.amount, 0) +
    accounts.reduce((sum, a) => sum + (a.openingBalance || 0), 0);

  const totalAcrossAccounts = bankTotal + cashTotal + investmentTotal;

  // Reconciliation: total across accounts + total spent should equal total income
  const reconciliationExpected = totalIncome;
  const reconciliationActual = totalAcrossAccounts + totalSpent;
  const isReconciled = Math.abs(reconciliationExpected - reconciliationActual) < 0.01;

  // Category breakdown (expenses only)
  const categoryBreakdown = {};
  transactions
    .filter((tx) => tx.type === 'expense')
    .forEach((tx) => {
      const cat = tx.category || 'Misc';
      categoryBreakdown[cat] = (categoryBreakdown[cat] || 0) + tx.amount;
    });

  // Investment breakdown by type
  const investmentBreakdown = {};
  transactions
    .filter((tx) => tx.type === 'investment')
    .forEach((tx) => {
      const t = tx.investmentType || 'other';
      investmentBreakdown[t] = (investmentBreakdown[t] || 0) + tx.amount;
    });

  // Payment mode breakdown
  const paymentModeBreakdown = {};
  transactions
    .filter((tx) => tx.type === 'expense' && tx.paymentMode)
    .forEach((tx) => {
      paymentModeBreakdown[tx.paymentMode] = (paymentModeBreakdown[tx.paymentMode] || 0) + tx.amount;
    });

  return {
    accountBalances,
    bankTotal,
    cashTotal,
    investmentTotal,
    totalSpent,
    totalIncome,
    totalAcrossAccounts,
    reconciliationExpected,
    reconciliationActual,
    isReconciled,
    categoryBreakdown,
    investmentBreakdown,
    paymentModeBreakdown,
  };
}
