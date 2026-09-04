import { profileData } from '../../data/profile';
import { ShieldCheck, Activity, Terminal } from 'lucide-react';

export const SystemStatusBar = () => {
  return (
    <div className="w-full bg-[#07080c]/90 border-b border-slate-800/80 py-1.5 px-4 font-mono text-[11px] text-slate-400 select-none backdrop-blur-md relative z-30">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* Status indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="font-bold text-white tracking-wider">SYSTEM STATUS: ONLINE</span>
          </div>
          <span className="hidden md:inline-block text-slate-700">|</span>
          <span className="hidden md:inline-flex items-center gap-1 text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            {profileData.status}
          </span>
        </div>

        {/* Current focus readout */}
        <div className="hidden lg:flex items-center gap-2 text-slate-300">
          <Activity className="w-3.5 h-3.5 text-cyan-400" />
          <span>CURRENT FOCUS:</span>
          <span className="text-cyan-300 font-semibold">DSA • BACKEND • SYSTEM DESIGN</span>
        </div>

        {/* OS info badge */}
        <div className="flex items-center gap-2 ml-auto sm:ml-0 text-slate-500 text-[10px]">
          <Terminal className="w-3 h-3 text-cyan-400" />
          <span>DEV_OS_v2.4</span>
        </div>
      </div>
    </div>
  );
};
