import { useState, useEffect } from 'react';
import { SystemBoot } from './components/sections/SystemBoot';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { IdentitySection } from './components/sections/IdentitySection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { JourneySection } from './components/sections/JourneySection';
import { TechStackSection } from './components/sections/TechStackSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { DsaDashboardSection } from './components/sections/DsaDashboardSection';
import { MindsetSection } from './components/sections/MindsetSection';
import { CurrentlyBuildingSection } from './components/sections/CurrentlyBuildingSection';
import { CodingActivitySection } from './components/sections/CodingActivitySection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { InteractiveTerminal } from './components/terminal/InteractiveTerminal';
import { Toast } from './components/ui/Toast';
import { SystemStatusBar } from './components/layout/SystemStatusBar';
import { X, Terminal as TerminalIcon } from 'lucide-react';

export function App() {
  const [booting, setBooting] = useState(true);
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showGlobalToast = (msg: string) => {
    setToastMessage(msg);
  };

  // Global Keyboard Shortcut: Ctrl+K or Cmd+K toggles CLI modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 selection:bg-blue-500/30 selection:text-cyan-300 antialiased">
      {/* System Boot Loading Screen */}
      {booting && <SystemBoot onBootComplete={() => setBooting(false)} />}

      {/* Main OS Portfolio Interface */}
      {!booting && (
        <>
          <SystemStatusBar />
          <Navbar
            onOpenTerminalModal={() => setTerminalModalOpen(true)}
            onShowToast={showGlobalToast}
          />

          <main className="relative space-y-12">
            <HeroSection
              onOpenTerminal={() => setTerminalModalOpen(true)}
              onShowToast={showGlobalToast}
            />
            <IdentitySection />
            <ExperienceSection />
            <JourneySection />
            <TechStackSection />
            <ProjectsSection />
            <DsaDashboardSection />
            <MindsetSection />
            
            {/* Terminal Dedicated Embedded Section */}
            <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
                  SECTION 08 // CLI WORKSPACE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Interactive Terminal Console
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Type <code className="text-cyan-300 font-mono">help</code> or click quick commands to query developer profile specs.
                </p>
              </div>
              <InteractiveTerminal />
            </section>

            <CurrentlyBuildingSection />
            <CodingActivitySection />
            <ContactSection onShowToast={showGlobalToast} />
          </main>

          <Footer />

          {/* Floating Terminal Trigger Button */}
          <button
            onClick={() => setTerminalModalOpen(true)}
            className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900 hover:text-white shadow-xl backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
            title="Open CLI Modal (Ctrl+K)"
            aria-label="Open Interactive Terminal Modal"
          >
            <TerminalIcon className="w-5 h-5" />
          </button>

          {/* Modal Overlay Terminal */}
          {terminalModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
              <div className="w-full max-w-3xl relative">
                <button
                  onClick={() => setTerminalModalOpen(false)}
                  className="absolute -top-10 right-0 p-2 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close Terminal Modal"
                >
                  <X className="w-6 h-6" />
                </button>
                <InteractiveTerminal />
              </div>
            </div>
          )}

          {/* Global Toast Notification */}
          <Toast
            isOpen={!!toastMessage}
            message={toastMessage || ''}
            onClose={() => setToastMessage(null)}
          />
        </>
      )}
    </div>
  );
}

export default App;
