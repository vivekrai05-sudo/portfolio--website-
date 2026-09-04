import { ExternalLink, Terminal, Info } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { SystemBadge } from '../ui/SystemBadge';
import { GithubIcon, LeetcodeIcon } from '../ui/SocialIcons';

export const CodingActivitySection = () => {
  return (
    <section className="py-16 md:py-24 relative bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SECTION 09 // REPOSITORY METRICS"
          title="GitHub & Coding Activity"
          subtitle="Modular developer activity panel designed for direct API synchronization with GitHub & competitive programming platforms."
          icon={<GithubIcon className="w-3.5 h-3.5 text-cyan-400" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main GitHub Integration Card */}
          <GlassCard glowColor="cyan" className="md:col-span-2 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <GithubIcon className="w-5 h-5 text-cyan-400" />
                <div>
                  <h3 className="text-sm font-bold text-white">GitHub Integration Module</h3>
                  <span className="text-[11px] font-mono text-slate-400">@vivekrai05-sudo</span>
                </div>
              </div>
              <SystemBadge variant="emerald">VERIFIED PROFILE</SystemBadge>
            </div>

            {/* Clear Labeled Placeholder Banner */}
            <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 text-center space-y-3">
              <div className="inline-flex p-3 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 mb-1">
                <Terminal className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">
                Live GitHub Activity & Coding Profiles
              </h4>
              <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                Connect directly to official coding profiles across GitHub and LeetCode to inspect real source code repositories, commits, and problem solving.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://github.com/vivekrai05-sudo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Vivek Kumar Rai's GitHub profile"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-mono transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub (@vivekrai05-sudo)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://leetcode.com/u/Vivek_rai1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Vivek Kumar Rai's LeetCode profile"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-950/40 hover:bg-amber-900/50 text-amber-300 border border-amber-500/30 text-xs font-mono transition-colors"
                >
                  <LeetcodeIcon className="w-4 h-4 text-amber-400" />
                  <span>LeetCode (@Vivek_rai1)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-2">
              <Info className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Modular endpoint wrapper ready in <code className="text-cyan-300">src/components/sections/CodingActivitySection.tsx</code></span>
            </div>
          </GlassCard>

          {/* Languages & Platforms Card */}
          <GlassCard glowColor="purple" className="flex flex-col justify-between space-y-4">
            <div>
              <div className="border-b border-slate-800 pb-3 mb-4">
                <h3 className="text-xs font-mono font-bold text-slate-200 tracking-wider">
                  PRIMARY LANGUAGES & PLATFORMS
                </h3>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">C++ (DSA & Problem Solving)</span>
                  <SystemBadge variant="purple">CORE</SystemBadge>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">JavaScript / React.js</span>
                  <SystemBadge variant="cyan">CORE</SystemBadge>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">Node.js / Express / MongoDB</span>
                  <SystemBadge variant="blue">BACKEND</SystemBadge>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Verified Profiles:</span>
              <span className="text-cyan-400">GitHub • LeetCode</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
