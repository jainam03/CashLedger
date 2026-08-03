import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { useAuth } from './AuthContext.jsx';
import { subscribeAccounts, subscribeTransactions } from '../firebase/firestore.js';
import { seedInitialData } from '../firebase/seed.js';
import { computeFinancials } from '../utils/calculations.js';

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const { user } = useAuth();
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [error, setError] = useState(null);

  // Subscribe to Firestore real-time data
  useEffect(() => {
    if (!user) {
      setAccounts([]);
      setTransactions([]);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);
    let accountsLoaded = false;
    let txLoaded = false;

    const checkDone = () => {
      if (accountsLoaded && txLoaded) setLoading(false);
    };

    const handleError = (err) => {
      setError(err);
      setLoading(false);
    };

    const unsubAccounts = subscribeAccounts(
      user.uid,
      (accs) => {
        setAccounts(accs);
        accountsLoaded = true;
        checkDone();
      },
      handleError
    );

    const unsubTx = subscribeTransactions(
      user.uid,
      (txs) => {
        setTransactions(txs);
        txLoaded = true;
        checkDone();
      },
      handleError
    );

    return () => {
      unsubAccounts();
      unsubTx();
    };
  }, [user]);

  // Seed on first login if no data exists
  useEffect(() => {
    if (!user || loading || error) return;
    if (accounts.length === 0 && !seeding) {
      setSeeding(true);
      seedInitialData(user.uid)
        .catch((err) => {
          console.error('Seeding error:', err);
          setError(err);
        })
        .finally(() => setSeeding(false));
    }
  }, [user, loading, error, accounts.length, seeding]);

  // Derive all financial summaries (never stored, always computed)
  const financials = useMemo(
    () => computeFinancials(accounts, transactions),
    [accounts, transactions]
  );

  return (
    <DataContext.Provider value={{ accounts, transactions, financials, loading: loading || seeding, error }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
