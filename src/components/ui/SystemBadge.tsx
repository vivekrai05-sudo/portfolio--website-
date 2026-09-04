import React from 'react';
import { cn } from '../../utils/cn';

interface SystemBadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'blue' | 'purple' | 'emerald' | 'amber' | 'slate';
  icon?: React.ReactNode;
  pulse?: boolean;
  className?: string;
}

export const SystemBadge: React.FC<SystemBadgeProps> = ({
  children,
  variant = 'cyan',
  icon,
  pulse = false,
  className
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    slate: 'bg-slate-800/60 text-slate-300 border-slate-700/50'
  };

  const dotStyles = {
    cyan: 'bg-cyan-400',
    blue: 'bg-blue-400',
    purple: 'bg-purple-400',
    emerald: 'bg-emerald-400',
    amber: 'bg-amber-400',
    slate: 'bg-slate-400'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border backdrop-blur-md transition-all',
        variantStyles[variant],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className={cn('animate-ping absolute inline-flex h-full w-full rounded-full opacity-75', dotStyles[variant])}></span>
          <span className={cn('relative inline-flex rounded-full h-2 w-2', dotStyles[variant])}></span>
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
