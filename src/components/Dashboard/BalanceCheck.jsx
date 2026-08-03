import { useData } from '../../contexts/DataContext.jsx';
import { formatINR } from '../../utils/currency.js';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

export default function BalanceCheck() {
  const { financials } = useData();
  const { isReconciled, reconciliationActual, reconciliationExpected } = financials;

  return (
    <div className={`balance-check ${isReconciled ? 'balance-ok' : 'balance-error'}`}>
      <span className="balance-check-icon">
        {isReconciled ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
      </span>
      <span className="balance-check-text">
        {isReconciled
          ? `Reconciliation OK — All balances + spending = ${formatINR(reconciliationExpected)}`
          : `Mismatch! Balances + spending = ${formatINR(reconciliationActual)}, expected ${formatINR(reconciliationExpected)}`}
      </span>
    </div>
  );
}
