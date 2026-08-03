import Modal from './Modal.jsx';
import { Keyboard } from 'lucide-react';

export default function ShortcutsModal({ isOpen, onClose }) {
  const shortcuts = [
    { key: 'N or +', desc: 'Add new transaction' },
    { key: '1 or D', desc: 'Go to Dashboard' },
    { key: '2 or T', desc: 'Go to Transactions' },
    { key: '3 or A', desc: 'Go to Accounts' },
    { key: 'Esc', desc: 'Close any active modal' },
    { key: '?', desc: 'Show this keyboard shortcuts guide' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Keyboard Shortcuts">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
        {shortcuts.map((s, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px',
              background: 'var(--surface)',
              borderRadius: '10px',
            }}
          >
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{s.desc}</span>
            <kbd
              style={{
                fontFamily: 'var(--font-mono)',
                background: 'var(--surface2)',
                border: '1px solid var(--border)',
                padding: '4px 8px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'var(--accent)',
              }}
            >
              {s.key}
            </kbd>
          </div>
        ))}
      </div>
    </Modal>
  );
}
