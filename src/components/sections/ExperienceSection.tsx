import { useState } from 'react';
import { Briefcase, Building2, Terminal, Layers, ArrowRight, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { SystemBadge } from '../ui/SystemBadge';
import { experienceData } from '../../data/experience';

export const ExperienceSection = () => {
  const [expandedArchId, setExpandedArchId] = useState<string | null>(
    experienceData.length > 0 ? experienceData[0].id : null
  );

  const toggleArch = (id: string) => {
    setExpandedArchId(expandedArchId === id ? null : id);
  };

  return (
    <section id="experience" className="py-16 md:py-24 relative bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SECTION 03 // WORKSPACE EXPERIENCE"
          title="Engineering & Internship Experience"
          subtitle="Verified internship experience highlighting production backend architecture, security controls, and AI systems."
          icon={<Briefcase className="w-3.5 h-3.5" />}
        />

        <div className="space-y-8">
          {experienceData.map((item) => {
            const isArchExpanded = expandedArchId === item.id;

            return (
              <GlassCard
                key={item.id}
                glowColor="cyan"
                className="p-6 sm:p-8 space-y-6"
              >
                {/* Header & Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <SystemBadge variant="cyan" pulse icon={<Building2 className="w-3 h-3" />}>
                        {item.company}
                      </SystemBadge>
                      <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
                        {item.role}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                      <span>Project:</span>
                      <span className="text-cyan-400">{item.project}</span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {item.period && (
                      <span className="px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs font-mono border border-slate-800">
                        {item.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>VERIFIED TECH STACK</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-cyan-950/40 text-cyan-300 font-mono text-xs border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified Highlights */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>VERIFIED RESPONSIBILITIES & ACHIEVEMENTS</span>
                  </h4>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 bg-slate-900/50 p-3 rounded-xl border border-slate-800/80">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Architecture Toggle */}
                {item.architectureFlow && item.architectureFlow.length > 0 && (
                  <div className="pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => toggleArch(item.id)}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-700/80 text-xs font-mono text-cyan-300 transition-colors cursor-pointer"
                      aria-expanded={isArchExpanded}
                      aria-label={`Toggle architecture flow for ${item.project}`}
                    >
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-cyan-400" />
                        <span className="font-bold">SYSTEM ARCHITECTURE PREVIEW ({item.project})</span>
                      </div>
                      {isArchExpanded ? (
                        <ChevronUp className="w-4 h-4 text-cyan-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>

                    {isArchExpanded && (
                      <div className="mt-4 p-4 rounded-xl bg-[#090a0f] border border-cyan-500/20 space-y-4 animate-fadeIn">
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span>INTERN PIPELINE FLOW</span>
                          <span className="text-cyan-400">REST + Auth + AI Moderation</span>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-3 overflow-x-auto py-2">
                          {item.architectureFlow.map((node, nIdx) => (
                            <div key={node.id} className="contents">
                              <div className="w-full md:w-auto flex-1 min-w-[140px] bg-slate-900 p-3 rounded-lg border border-slate-700/80 text-center font-mono shadow-md">
                                <span className="text-[10px] text-cyan-400 block uppercase font-bold tracking-wider">
                                  {node.type}
                                </span>
                                <span className="text-xs font-bold text-white block mt-0.5">
                                  {node.label}
                                </span>
                                <span className="text-[10px] text-slate-400 block mt-0.5">
                                  {node.sublabel}
                                </span>
                              </div>

                              {item.architectureFlow && nIdx < item.architectureFlow.length - 1 && (
                                <ArrowRight className="w-4 h-4 text-cyan-500/60 shrink-0 rotate-90 md:rotate-0 my-1 md:my-0" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
