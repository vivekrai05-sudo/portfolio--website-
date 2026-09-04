import { useState, useEffect } from 'react';
import { Terminal, Menu, X, Code2, ArrowUpRight } from 'lucide-react';
import { SystemBadge } from '../ui/SystemBadge';
import { profileData } from '../../data/profile';

interface NavbarProps {
  onOpenTerminalModal: () => void;
  onShowToast?: (msg: string) => void;
}

export const Navbar = ({ onOpenTerminalModal, onShowToast: _onShowToast }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Profile', href: '#identity' },
    { name: 'Experience', href: '#experience' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#techstack' },
    { name: 'Projects', href: '#projects' },
    { name: 'DSA', href: '#dsa' },
    { name: 'Contact', href: '#contact' }
  ];

  // Sticky & ScrollSpy observer
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Escape key closes mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl'
          : 'bg-[#090a0f]/60 backdrop-blur-sm py-4 border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-xl p-1">
          <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-all shadow-md">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white tracking-tight text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
                {profileData.name}
              </span>
              <span className="hidden sm:inline-block">
                <SystemBadge variant="emerald" pulse className="py-0.5 text-[10px]">
                  ONLINE
                </SystemBadge>
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:block">
              Full Stack Engineer Workspace
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Terminal CLI Modal Launcher */}
          <button
            onClick={onOpenTerminalModal}
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-950/50 hover:border-cyan-400 transition-all cursor-pointer font-mono text-xs shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            title="Open CLI Terminal (Ctrl+K)"
            aria-label="Open CLI Terminal Modal"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold hidden sm:inline">Terminal</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-slate-800 text-slate-400 rounded border border-slate-700">
              Ctrl+K
            </kbd>
          </button>

          {/* Resume CTA Button */}
          <a
            href={profileData.resumeUrl || '/resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Vivek Kumar Rai's Resume PDF in a new tab"
            className="hidden sm:flex items-center gap-1 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-all shadow-md shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Drawer Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Mobile Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden glass-panel border-b border-slate-800 px-6 py-5 mt-3 space-y-2 font-mono text-sm shadow-2xl animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Menu"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2.5 px-3 rounded-lg transition-colors ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 font-semibold'
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={profileData.resumeUrl || '/resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Open Vivek Kumar Rai's Resume PDF in a new tab"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-600 text-white font-medium text-xs text-center"
            >
              <span>View Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
