/**
 * Compute the active billing cycle range for UPI Circle (default 19th of month to 18th of next month).
 */
export function getUpiCircleCycleRange(resetDay = 19, referenceDate = new Date()) {
  const now = new Date(referenceDate);
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();

  let cycleStart, cycleEnd;

  if (currentDay >= resetDay) {
    cycleStart = new Date(currentYear, currentMonth, resetDay, 0, 0, 0);
    cycleEnd = new Date(currentYear, currentMonth + 1, resetDay - 1, 23, 59, 59);
  } else {
    cycleStart = new Date(currentYear, currentMonth - 1, resetDay, 0, 0, 0);
    cycleEnd = new Date(currentYear, currentMonth, resetDay - 1, 23, 59, 59);
  }

  const resetDate = new Date(cycleEnd);
  resetDate.setDate(resetDate.getDate() + 1);
  resetDate.setHours(0, 0, 0, 0);

  const diffMs = resetDate.getTime() - now.getTime();
  const daysUntilReset = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));

  return { cycleStart, cycleEnd, daysUntilReset, resetDate };
}

/**
 * Compute the current balance for a single account from its opening balance + all transactions.
 */
export function computeAccountBalance(account, transactions) {
  if (account.type === 'upi_circle') {
    const resetDay = account.resetDay || 19;
    const limit = account.monthlyLimit || 2500;
    const { cycleStart, cycleEnd } = getUpiCircleCycleRange(resetDay);

    const spentThisCycle = transactions
      .filter((tx) => tx.type === 'expense' && (tx.accountId === account.id || tx.paymentMode === 'upi_circle'))
      .filter((tx) => {
        const txDate = tx.date?.toDate ? tx.date.toDate() : new Date(tx.date);
        return txDate >= cycleStart && txDate <= cycleEnd;
      })
      .reduce((sum, tx) => sum + tx.amount, 0);

    return Math.max(0, limit - spentThisCycle);
  }

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
 * Returns the dashboard numbers + reconciliation check + UPI Circle summary.
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

  // Find UPI Circle Account
  const upiCircleAcc = accounts.find((a) => a.type === 'upi_circle');
  const upiLimit = upiCircleAcc ? (upiCircleAcc.monthlyLimit || 2500) : 2500;
  const upiResetDay = upiCircleAcc ? (upiCircleAcc.resetDay || 19) : 19;
  const { cycleStart, cycleEnd, daysUntilReset } = getUpiCircleCycleRange(upiResetDay);

  const upiCircleSpentThisCycle = transactions
    .filter((tx) => tx.type === 'expense' && (tx.paymentMode === 'upi_circle' || (upiCircleAcc && tx.accountId === upiCircleAcc.id)))
    .filter((tx) => {
      const txDate = tx.date?.toDate ? tx.date.toDate() : new Date(tx.date);
      return txDate >= cycleStart && txDate <= cycleEnd;
    })
    .reduce((sum, tx) => sum + tx.amount, 0);

  const upiCircleRemaining = Math.max(0, upiLimit - upiCircleSpentThisCycle);
  const upiCirclePercentUsed = Math.min(100, Math.round((upiCircleSpentThisCycle / upiLimit) * 100));

  // Personal Total Spent (Expenses from personal bank/cash/investments)
  const personalSpent = transactions
    .filter((tx) => tx.type === 'expense' && tx.paymentMode !== 'upi_circle' && (!upiCircleAcc || tx.accountId !== upiCircleAcc.id))
    .reduce((sum, tx) => sum + tx.amount, 0);

  // Total spent across everything (including UPI Circle)
  const totalSpent = transactions
    .filter((tx) => tx.type === 'expense')
    .reduce((sum, tx) => sum + tx.amount, 0);

  // Total income = only personal income transactions + opening balances (excludes delegated funds)
  const totalIncome = transactions
    .filter((tx) => tx.type === 'income')
    .reduce((sum, tx) => sum + tx.amount, 0) +
    accounts
      .filter((a) => a.type !== 'upi_circle')
      .reduce((sum, a) => sum + (a.openingBalance || 0), 0);

  // Personal Net Worth: Only bank + cash + investment (UPI Circle allowance is excluded!)
  const totalAcrossAccounts = bankTotal + cashTotal + investmentTotal;

  // Personal Reconciliation Check
  const reconciliationExpected = totalIncome;
  const reconciliationActual = totalAcrossAccounts + personalSpent;
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
    personalSpent,
    totalIncome,
    totalAcrossAccounts,
    reconciliationExpected,
    reconciliationActual,
    isReconciled,
    categoryBreakdown,
    investmentBreakdown,
    paymentModeBreakdown,
    upiCircleSummary: {
      account: upiCircleAcc || null,
      monthlyLimit: upiLimit,
      resetDay: upiResetDay,
      spentThisCycle: upiCircleSpentThisCycle,
      remainingLimit: upiCircleRemaining,
      percentUsed: upiCirclePercentUsed,
      cycleStart,
      cycleEnd,
      daysUntilReset,
    },
  };
}
