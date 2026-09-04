import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  isOpen,
  onClose,
  duration = 4000
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  const typeStyles = {
    success: 'bg-emerald-950/90 border-emerald-500/50 text-emerald-200',
    error: 'bg-rose-950/90 border-rose-500/50 text-rose-200',
    info: 'bg-blue-950/90 border-blue-500/50 text-blue-200'
  };

  return (
    <div
      role="alert"
      aria-live="polite"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-lg border shadow-xl backdrop-blur-md transition-all duration-300 font-mono text-xs sm:text-sm',
        typeStyles[type]
      )}
    >
      {type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
      {type === 'error' && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
      {type === 'info' && <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />}
      
      <span>{message}</span>

      <button
        onClick={onClose}
        className="p-1 hover:bg-white/10 rounded transition-colors text-slate-400 hover:text-white"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
