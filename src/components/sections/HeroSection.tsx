import { useState, useEffect } from 'react';
import { ArrowRight, FileText, Terminal, Code, Cpu, Database, CheckCircle2, Shield, Activity, Layers } from 'lucide-react';
import { profileData } from '../../data/profile';
import { SystemBadge } from '../ui/SystemBadge';
import { GlassCard } from '../ui/GlassCard';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/SocialIcons';

interface HeroSectionProps {
  onOpenTerminal: () => void;
  onShowToast?: (msg: string) => void;
}

export const HeroSection = ({ onOpenTerminal, onShowToast: _onShowToast }: HeroSectionProps) => {
  const [currentTextIdx, setCurrentTextIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIdx((prev) => (prev + 1) % profileData.titles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center pt-12 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Tag */}
            <div className="inline-flex">
              <SystemBadge variant="emerald" pulse icon={<CheckCircle2 className="w-3.5 h-3.5" />}>
                {profileData.status}
              </SystemBadge>
            </div>

            {/* Name & Title Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {profileData.name.toUpperCase()}
              </h1>
              <p className="text-gradient-primary text-xl sm:text-3xl font-bold font-mono">
                {profileData.role}
              </p>
            </div>

            {/* Dynamic Text Rotation Pill */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-cyan-400 font-mono text-xs sm:text-sm shadow-md">
                <Code className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="transition-all duration-300 font-semibold">
                  {profileData.titles[currentTextIdx]}
                </span>
              </div>
            </div>

            {/* Short Professional Intro */}
            <p className="max-w-xl mx-auto lg:mx-0 text-slate-300 text-sm sm:text-base leading-relaxed">
              Aspiring Software Engineer focused on constructing robust backend services, dynamic full-stack applications, and solving complex Data Structures & Algorithms in C++.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profileData.resumeUrl || '/resume.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Vivek Kumar Rai's Resume in a new tab"
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-slate-200 hover:text-white border border-slate-700/60 hover:border-slate-500 font-medium text-sm transition-all hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 text-cyan-400 hover:bg-cyan-950/50 border border-cyan-500/30 font-mono text-xs sm:text-sm transition-all hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <Terminal className="w-4 h-4" />
                <span>Launch CLI</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="https://github.com/vivekrai05-sudo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Vivek Kumar Rai's GitHub profile"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/vivek-kumar-rai-a167a5285/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Vivek Kumar Rai's LinkedIn profile"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all cursor-pointer shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="https://leetcode.com/u/Vivek_rai1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Vivek Kumar Rai's LeetCode profile"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all cursor-pointer shadow-sm flex items-center gap-1.5 px-3 font-mono text-xs"
              >
                <LeetcodeIcon className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">LeetCode</span>
              </a>
            </div>

            {/* Quick Tech Specs Bar */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>C++ / DSA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Code className="w-4 h-4 text-blue-400" />
                <span>React.js</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Database className="w-4 h-4 text-purple-400" />
                <span>Node & Express</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Database className="w-4 h-4 text-emerald-400" />
                <span>MongoDB</span>
              </div>
            </div>

          </div>

          {/* Right Column: Unique Developer Workspace System Panel Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <GlassCard glowColor="cyan" className="w-full max-w-md p-6 border-cyan-500/30 shadow-2xl space-y-5 relative">
              
              {/* Telemetry Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span className="font-mono text-xs font-bold text-white tracking-wider">
                    DEVELOPER OS TELEMETRY
                  </span>
                </div>
                <SystemBadge variant="cyan" className="py-0.5 text-[10px]">
                  ACTIVE
                </SystemBadge>
              </div>

              {/* Status Grid Visual Nodes */}
              <div className="space-y-3 font-mono">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" /> STATUS:
                  </span>
                  <span className="text-xs font-bold text-emerald-400">ONLINE</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" /> CURRENT MODE:
                  </span>
                  <span className="text-xs font-bold text-cyan-300">BUILDING</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-purple-400" /> FOCUS:
                  </span>
                  <span className="text-xs font-bold text-purple-300">FULL STACK ENGINEERING</span>
                </div>
              </div>

              {/* System Metric Bars */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>PROBLEM SOLVING (C++ DSA)</span>
                  <span className="text-cyan-400">OPTIMIZING</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 w-3/4 rounded-full" />
                </div>

                <div className="flex justify-between text-[11px] font-mono text-slate-400 pt-1">
                  <span>BACKEND ARCHITECTURE</span>
                  <span className="text-blue-400">SCALABLE</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-5/6 rounded-full" />
                </div>
              </div>

              {/* System Footer Tag */}
              <div className="pt-2 text-center text-[10px] font-mono text-slate-500">
                HOST: DEVSPACE_WORKSPACE • VIVEK KUMAR RAI
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};
