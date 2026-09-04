import { Code2, Mail } from 'lucide-react';
import { profileData } from '../../data/profile';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/SocialIcons';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#06070a] py-8 text-xs font-mono text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Branding */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-slate-200">{profileData.name}</span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="text-[11px] text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
            SYSTEM STATUS: ONLINE
          </span>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vivekrai05-sudo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Vivek Kumar Rai's GitHub profile"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/vivek-kumar-rai-a167a5285/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Vivek Kumar Rai's LinkedIn profile"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="https://leetcode.com/u/Vivek_rai1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Vivek Kumar Rai's LeetCode profile"
            className="text-slate-400 hover:text-amber-400 transition-colors"
          >
            <LeetcodeIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${profileData.email || 'vivek01234bxr@gmail.com'}`}
            aria-label="Send email to Vivek Kumar Rai"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right Copyright */}
        <div className="text-slate-500 text-[11px]">
          © {new Date().getFullYear()} Vivek Kumar Rai
        </div>
      </div>
    </footer>
  );
};
