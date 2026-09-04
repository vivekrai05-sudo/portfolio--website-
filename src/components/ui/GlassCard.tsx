import React from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  glowColor?: 'blue' | 'purple' | 'cyan' | 'none';
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  hoverEffect = false,
  glowColor = 'none',
  className,
  ...props
}) => {
  const glowStyles = {
    none: '',
    blue: 'hover:border-blue-500/40 hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.25)]',
    purple: 'hover:border-purple-500/40 hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]',
    cyan: 'hover:border-cyan-500/40 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.25)]'
  };

  return (
    <div
      className={cn(
        'glass-card rounded-xl p-5 md:p-6 transition-all duration-300 relative overflow-hidden',
        hoverEffect && 'hover:-translate-y-1 hover:bg-[#1a2233]/70',
        glowStyles[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
