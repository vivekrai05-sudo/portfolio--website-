import React from 'react';
import { GitCommit, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { SystemBadge } from '../ui/SystemBadge';
import { journeyMilestones } from '../../data/journey';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-16 md:py-24 relative bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SECTION 03 // EVOLUTION TIMELINE"
          title="Programming Journey & Growth"
          subtitle="Chronological roadmap tracing foundational coding exploration to advanced backend engineering."
          icon={<GitCommit className="w-3.5 h-3.5" />}
        />

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-8 md:space-y-10 ml-2 sm:ml-4">
          {journeyMilestones.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Node Icon Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#090a0f] border-2 border-slate-700 flex items-center justify-center group-hover:border-cyan-400 transition-colors shadow-lg">
                {item.status === 'completed' ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                ) : item.status === 'current' ? (
                  <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                ) : (
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                )}
              </div>

              {/* Milestone Card */}
              <GlassCard hoverEffect glowColor={item.status === 'current' ? 'purple' : 'blue'}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-cyan-400">
                      {item.phase}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <SystemBadge
                    variant={
                      item.status === 'completed'
                        ? 'cyan'
                        : item.status === 'current'
                        ? 'purple'
                        : 'slate'
                    }
                    pulse={item.status === 'current'}
                  >
                    {item.period}
                  </SystemBadge>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Takeaway Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono text-slate-500 self-center">
                    KEY TAKEAWAYS:
                  </span>
                  {item.keyLearnings.map((learning, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {learning}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
