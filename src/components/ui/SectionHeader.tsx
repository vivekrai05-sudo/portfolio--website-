import React from 'react';
import { SystemBadge } from './SystemBadge';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  icon,
  centered = false
}) => {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
      <SystemBadge variant="cyan" icon={icon} className="mb-3">
        {badge}
      </SystemBadge>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
