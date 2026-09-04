import React, { useState, useEffect } from 'react';
import { Terminal, Shield, CheckCircle, FastForward } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SystemBootProps {
  onBootComplete: () => void;
}

export const SystemBoot: React.FC<SystemBootProps> = ({ onBootComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user already booted in this session
    const hasBooted = sessionStorage.getItem('devspace_booted');
    if (hasBooted) {
      onBootComplete();
      return;
    }

    const bootSequence = [
      'INITIALIZING DEVELOPER OS v2.4.0...',
      'MOUNTING PROFILE: VIVEK KUMAR RAI',
      'LOADING TECH ECOSYSTEM (REACT, NODE, C++, DSA)...',
      'CONFIGURING CASE STUDY ARCHITECTURE MAPS...',
      'SYSTEM READY.'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < bootSequence.length) {
        setLogs((prev) => [...prev, bootSequence[currentStep]]);
        currentStep++;
        setProgress(Math.round((currentStep / bootSequence.length) * 100));
      } else {
        clearInterval(interval);
        setTimeout(() => {
          sessionStorage.setItem('devspace_booted', 'true');
          onBootComplete();
        }, 300);
      }
    }, 250); // Total boot duration ~1.2s - fast & responsive

    return () => clearInterval(interval);
  }, [onBootComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('devspace_booted', 'true');
    onBootComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090a0f] text-slate-100 p-4 font-mono select-none"
      >
        {/* Subtle Background Glow */}
        <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-lg glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
            <div className="flex items-center gap-2.5">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold tracking-wider text-slate-200">
                SYSTEM BOOT
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs text-cyan-400">BOOTING</span>
            </div>
          </div>

          {/* Logs */}
          <div className="space-y-2 text-xs sm:text-sm min-h-[140px] mb-6">
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-300">
                {idx === logs.length - 1 ? (
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                ) : (
                  <Shield className="w-4 h-4 text-blue-500/60 shrink-0" />
                )}
                <span>{log}</span>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-xs text-slate-400">
              <span>INITIALIZING SYSTEM...</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Skip Intro button */}
          <div className="flex justify-end">
            <button
              onClick={handleSkip}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 px-3 py-1.5 rounded-lg hover:bg-slate-800/60 transition-all cursor-pointer"
            >
              <span>Skip Intro</span>
              <FastForward className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
