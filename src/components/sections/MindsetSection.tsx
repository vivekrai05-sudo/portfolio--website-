import React from 'react';
import { Target, Layers, Code2, Cpu, Brain, Quote } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { mindsetPrinciples } from '../../data/mindset';

export const MindsetSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="mindset" className="py-16 md:py-24 relative bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SECTION 07 // ENGINEERING PHILOSOPHY"
          title="How I Think & Approach Code"
          subtitle="Core engineering principles driving problem understanding, architecture decisions, and code quality."
          icon={<Brain className="w-3.5 h-3.5" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mindsetPrinciples.map((item) => (
            <GlassCard key={item.id} hoverEffect glowColor="blue" className="flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {getIcon(item.icon)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <span className="text-xs font-mono text-cyan-400 block">{item.tagline}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.quote && (
                <div className="mt-4 pt-3 border-t border-slate-800/80 bg-slate-900/40 p-3 rounded-xl border border-slate-800/50 flex items-start gap-2 text-[11px] font-mono text-slate-400 italic">
                  <Quote className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item.quote}</span>
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
