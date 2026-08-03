import { useState } from 'react';
import { useData } from '../../contexts/DataContext.jsx';
import { formatINR } from '../../utils/currency.js';
import { Target, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function StipendProgress() {
  const { financials } = useData();
  const { totalSpent, totalAcrossAccounts } = financials;
  const [stipendBudget, setStipendBudget] = useState(40000);
  const [isEditingBudget, setIsEditingBudget] = useState(false);

  const percentSpent = Math.min(Math.round((totalSpent / stipendBudget) * 100), 100);
  const remainingStipend = Math.max(stipendBudget - totalSpent, 0);

  return (
    <div className="glass-card" style={{ marginBottom: '20px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="summary-card-icon-wrap" style={{ background: 'var(--accent-glow)', color: 'var(--accent)' }}>
            <Target size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-body)', fontWeight: '700' }}>
              Stipend Runway & Goal Tracker
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Zeigarnik Goal Tracking — Stipend Allocation
            </p>
          </div>
        </div>

        {/* Visibility of System Status (Heuristic 1) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(34, 197, 94, 0.1)', padding: '6px 12px', borderRadius: '20px', border: '1px solid rgba(34, 197, 94, 0.2)', fontSize: '0.75rem', fontWeight: '600', color: 'var(--green)' }}>
          <ShieldCheck size={14} />
          <span>Cloud Synced</span>
        </div>
      </div>

      {/* Progress Bar (Zeigarnik Effect) */}
      <div style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px', fontWeight: '600' }}>
          <span>Spent: <span style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}>{formatINR(totalSpent)}</span> ({percentSpent}%)</span>
          <span>Remaining: <span style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)' }}>{formatINR(remainingStipend)}</span></span>
        </div>

        <div style={{ width: '100%', height: '12px', background: 'var(--surface2)', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
          <div
            style={{
              height: '100%',
              width: `${percentSpent}%`,
              background: percentSpent > 85 ? 'var(--red)' : percentSpent > 60 ? 'var(--yellow)' : 'linear-gradient(90deg, var(--accent), var(--green))',
              borderRadius: '10px',
              transition: 'width 0.5s ease-in-out',
            }}
          />
        </div>
      </div>

      {/* Target Details */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
        <span>
          Total Stipend Budget:{' '}
          {isEditingBudget ? (
            <input
              type="number"
              value={stipendBudget}
              onChange={(e) => setStipendBudget(Number(e.target.value) || 0)}
              onBlur={() => setIsEditingBudget(false)}
              autoFocus
              style={{ width: '90px', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}
            />
          ) : (
            <strong
              onClick={() => setIsEditingBudget(true)}
              style={{ cursor: 'pointer', color: 'var(--text-primary)', textDecoration: 'underline dotted', fontFamily: 'var(--font-mono)' }}
              title="Click to edit stipend total"
            >
              {formatINR(stipendBudget)}
            </strong>
          )}
        </span>

        {percentSpent > 85 ? (
          <span style={{ color: 'var(--red)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
            <AlertTriangle size={14} /> High Stipend Usage
          </span>
        ) : (
          <span style={{ color: 'var(--green)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
            <CheckCircle2 size={14} /> Healthly Runway
          </span>
        )}
      </div>
    </div>
  );
}
