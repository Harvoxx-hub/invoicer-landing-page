import { useEffect } from 'react';
import { HiCheckCircle, HiXCircle, HiInformationCircle, HiExclamation, HiX } from 'react-icons/hi';

const Toast = ({ id, type = 'info', message, onClose, duration = 5000 }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);

  const config = {
    success: {
      icon: HiCheckCircle,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-600',
      textColor: 'text-green-800',
    },
    error: {
      icon: HiXCircle,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      iconColor: 'text-red-600',
      textColor: 'text-red-800',
    },
    warning: {
      icon: HiExclamation,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      iconColor: 'text-yellow-600',
      textColor: 'text-yellow-800',
    },
    info: {
      icon: HiInformationCircle,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600',
      textColor: 'text-blue-800',
    },
  };

  const { icon: Icon, bgColor, borderColor, iconColor, textColor } = config[type];

  return (
    <div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      className={`
        ${bgColor} ${borderColor} ${textColor}
        border rounded-lg shadow-lg p-4 mb-3
        flex items-start gap-3 min-w-[300px] max-w-md
        animate-slide-in-right
      `}
    >
      <Icon className={`w-6 h-6 flex-shrink-0 ${iconColor}`} />

      <p className="flex-1 text-sm font-medium">{message}</p>

      <button
        onClick={() => onClose(id)}
        className={`flex-shrink-0 ${iconColor} hover:opacity-70 transition-opacity`}
        aria-label="Close notification"
      >
        <HiX className="w-5 h-5" />
      </button>

      <style>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Toast;
