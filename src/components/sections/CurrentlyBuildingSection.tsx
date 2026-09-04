import React from 'react';
import { Activity, BookOpen, Hammer, Compass } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { SystemBadge } from '../ui/SystemBadge';
import { currentlyBuildingItems } from '../../data/building';

export const CurrentlyBuildingSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SECTION 08 // REAL-TIME STATUS"
          title="Currently Learning & Building"
          subtitle="Real-time developer status telemetry reflecting active learning focus, projects under development, and target career goals."
          icon={<Activity className="w-3.5 h-3.5" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Learning Column */}
          <GlassCard glowColor="blue" className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xs font-mono font-bold text-slate-200 tracking-wider">
                  CURRENTLY LEARNING
                </h3>
              </div>
              <SystemBadge variant="cyan">IN PROGRESS</SystemBadge>
            </div>

            <div className="space-y-3">
              {currentlyBuildingItems
                .filter((item) => item.type === 'learning')
                .map((item) => (
                  <div key={item.id} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-bold text-white">{item.title}</h4>
                    <p className="text-[11px] text-slate-300 leading-snug">{item.description}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </GlassCard>

          {/* Building Column */}
          <GlassCard glowColor="purple" className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Hammer className="w-4 h-4 text-purple-400" />
                <h3 className="text-xs font-mono font-bold text-slate-200 tracking-wider">
                  CURRENTLY BUILDING
                </h3>
              </div>
              <SystemBadge variant="purple">ACTIVE CODE</SystemBadge>
            </div>

            <div className="space-y-3">
              {currentlyBuildingItems
                .filter((item) => item.type === 'building')
                .map((item) => (
                  <div key={item.id} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-bold text-white">{item.title}</h4>
                    <p className="text-[11px] text-slate-300 leading-snug">{item.description}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </GlassCard>

          {/* Target Goal Column */}
          <GlassCard glowColor="cyan" className="space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-xs font-mono font-bold text-slate-200 tracking-wider">
                    TARGET CAREER GOAL
                  </h3>
                </div>
                <SystemBadge variant="emerald" pulse>
                  OPEN
                </SystemBadge>
              </div>

              {currentlyBuildingItems
                .filter((item) => item.type === 'goal')
                .map((item) => (
                  <div key={item.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <h4 className="text-sm font-extrabold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-blue-950/20 border border-blue-500/20 text-blue-300 text-xs font-mono text-center">
              Available for full-time roles & internships
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
