import { createContext, useContext, useState, useCallback } from 'react';
import Toast from '../components/shared/widgets/Toast';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((type, message, duration = 5000) => {
    const id = Date.now() + Math.random();
    const newToast = { id, type, message, duration };

    setToasts((prev) => [...prev, newToast]);

    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const value = {
    showToast,
    success: (message, duration) => showToast('success', message, duration),
    error: (message, duration) => showToast('error', message, duration),
    warning: (message, duration) => showToast('warning', message, duration),
    info: (message, duration) => showToast('info', message, duration),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}

      {/* Toast Container */}
      <div
        className="fixed top-4 right-4 z-50 pointer-events-none"
        aria-live="polite"
        aria-atomic="false"
      >
        <div className="pointer-events-auto">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              id={toast.id}
              type={toast.type}
              message={toast.message}
              duration={toast.duration}
              onClose={removeToast}
            />
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};
