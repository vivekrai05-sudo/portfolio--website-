import React from 'react';
import { Cpu, CheckCircle2, Clock, Calendar, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { SystemBadge } from '../ui/SystemBadge';
import { dsaData } from '../../data/dsa';
import { LeetcodeIcon } from '../ui/SocialIcons';

export const DsaDashboardSection: React.FC = () => {
  return (
    <section id="dsa" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SECTION 06 // ALGORITHMIC METRICS"
          title="Data Structures & Algorithms Dashboard"
          subtitle="Configurable problem-solving progress tracker, topic status, and 5-step engineering methodology."
          icon={<Cpu className="w-3.5 h-3.5" />}
        />

        {/* LeetCode Profile Quick Banner */}
        <div className="mb-6">
          <a
            href="https://leetcode.com/u/Vivek_rai1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Vivek Kumar Rai's LeetCode profile"
            className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 hover:bg-amber-950/40 hover:border-amber-400 transition-all flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-400">
                <LeetcodeIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-amber-300 block uppercase tracking-wider">
                  LEETCODE PROFILE
                </span>
                <span className="text-xs font-mono text-slate-300">
                  @Vivek_rai1 • Competitive Programming & Problem Solving
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-semibold group-hover:bg-amber-500/30 transition-colors">
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* Dashboard Top Row: Problem Solved Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <GlassCard glowColor="cyan" className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono text-slate-400 block uppercase">
                TOTAL SOLVED
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-cyan-300 font-mono mt-1 block tracking-tight">
                {dsaData.totalSolved}
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold">
              DSA
            </div>
          </GlassCard>

          <GlassCard glowColor="blue" className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono text-emerald-400 block uppercase">
                EASY PROBLEMS
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-white font-mono mt-1 block">
                {dsaData.easyCount}
              </span>
            </div>
            <SystemBadge variant="emerald">EASY</SystemBadge>
          </GlassCard>

          <GlassCard glowColor="purple" className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono text-amber-400 block uppercase">
                MEDIUM PROBLEMS
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-white font-mono mt-1 block">
                {dsaData.mediumCount}
              </span>
            </div>
            <SystemBadge variant="amber">MEDIUM</SystemBadge>
          </GlassCard>

          <GlassCard glowColor="none" className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono text-rose-400 block uppercase">
                HARD PROBLEMS
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-white font-mono mt-1 block">
                {dsaData.hardCount}
              </span>
            </div>
            <SystemBadge variant="slate">HARD</SystemBadge>
          </GlassCard>
        </div>

        {/* Middle Grid: Topic Progress & Methodology */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Topic Progress Checklist */}
          <GlassCard glowColor="blue" className="lg:col-span-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <h3 className="text-xs font-mono font-bold text-slate-200 tracking-wider">
                  ALGORITHMIC TOPICS
                </h3>
                <SystemBadge variant="cyan">C++</SystemBadge>
              </div>

              <div className="space-y-2.5">
                {dsaData.topics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2">
                      {topic.status === 'completed' ? (
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      ) : topic.status === 'in_progress' ? (
                        <Clock className="w-4 h-4 text-purple-400 shrink-0 animate-pulse" />
                      ) : (
                        <Calendar className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                      <span className="font-medium text-slate-200">{topic.name}</span>
                    </div>

                    <span className="text-[10px] font-mono text-slate-400">
                      {topic.problemCountPlaceholder}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
              * Statistics configured via <code className="text-cyan-400">src/data/dsa.ts</code>
            </div>
          </GlassCard>

          {/* Problem Solving Approach Step-by-Step */}
          <GlassCard glowColor="purple" className="lg:col-span-2">
            <div className="border-b border-slate-800 pb-3 mb-4">
              <h3 className="text-xs font-mono font-bold text-slate-200 tracking-wider">
                MY 5-STEP PROBLEM SOLVING METHODOLOGY
              </h3>
            </div>

            <div className="space-y-3">
              {dsaData.approachSteps.map((step) => (
                <div
                  key={step.number}
                  className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-purple-500/30 transition-all flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                    0{step.number}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                      <span>{step.title}</span>
                    </h4>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
