import { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, RotateCcw } from 'lucide-react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success', duration = 4000, action = null) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type, action }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((t) => (
          <div key={t.id} className={`toast toast-${t.type}`}>
            <span className="toast-icon">
              {t.type === 'success' ? <CheckCircle2 size={18} /> : t.type === 'error' ? <AlertCircle size={18} /> : <Info size={18} />}
            </span>
            <span className="toast-message">{t.message}</span>
            {t.action && (
              <button
                className="toast-action-btn"
                onClick={() => {
                  t.action.onClick();
                  removeToast(t.id);
                }}
              >
                <RotateCcw size={14} />
                <span>{t.action.label || 'Undo'}</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
