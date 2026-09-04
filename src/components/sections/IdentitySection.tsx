import { User, ShieldCheck, Target, Compass, Briefcase } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { SystemBadge } from '../ui/SystemBadge';
import { profileData } from '../../data/profile';

export const IdentitySection = () => {
  return (
    <section id="identity" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SECTION 02 // DEVELOPER IDENTITY"
          title="Developer Profile & System Specs"
          subtitle="Systematic overview of core engineering specialization, mission, and current technical focus."
          icon={<User className="w-3.5 h-3.5" />}
        />

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Profile Spec Card */}
          <GlassCard glowColor="blue" className="md:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono text-sm font-bold">
                    VK
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{profileData.name}</h3>
                    <p className="text-xs font-mono text-slate-400">{profileData.role}</p>
                  </div>
                </div>

                <SystemBadge variant="emerald" pulse>
                  ONLINE
                </SystemBadge>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                    ENGINEERING MISSION
                  </span>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    "{profileData.mission}"
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/80">
                    <span className="text-[10px] font-mono text-cyan-400 block mb-1 flex items-center gap-1">
                      <Briefcase className="w-3 h-3" /> SPECIALIZATION
                    </span>
                    <span className="text-xs font-medium text-slate-200">
                      {profileData.specialization}
                    </span>
                  </div>

                  <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/80">
                    <span className="text-[10px] font-mono text-purple-400 block mb-1 flex items-center gap-1">
                      <Compass className="w-3 h-3" /> TARGET ROLE
                    </span>
                    <span className="text-xs font-medium text-slate-200">
                      {profileData.location ? `${profileData.location} • ` : ''}Software Engineer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Profile Status: Verified
              </span>
              <span className="text-slate-500">ID: VIVEK-DEV-OS</span>
            </div>
          </GlassCard>

          {/* Current Focus Sidebar Card */}
          <GlassCard glowColor="purple" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
                <Target className="w-4 h-4 text-purple-400" />
                <h3 className="text-sm font-bold font-mono text-white tracking-wider">
                  CURRENT FOCUS
                </h3>
              </div>

              <div className="space-y-3">
                {profileData.currentFocus.map((focusItem, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 hover:border-purple-500/30 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono text-xs shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <span className="text-xs text-slate-200 font-medium leading-snug">
                      {focusItem}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-cyan-300 text-xs font-mono flex items-center gap-2">
              <Compass className="w-4 h-4 shrink-0 text-cyan-400" />
              <span>Goal: {profileData.goal}</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
