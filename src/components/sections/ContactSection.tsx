import { useState } from 'react';
import { Mail, Send, Copy, Check, FileText, Sparkles, AlertCircle, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { Toast } from '../ui/Toast';
import { profileData } from '../../data/profile';
import { socialLinks } from '../../data/socials';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/SocialIcons';

interface ContactSectionProps {
  onShowToast?: (msg: string) => void;
}

export const ContactSection = ({ onShowToast }: ContactSectionProps) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    if (onShowToast) {
      onShowToast(msg);
    } else {
      setToastMessage(msg);
    }
  };

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email address is required';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      // Honest state: Do not simulate fake delivery
      triggerToast('Contact form is currently being configured.');
    }, 600);
  };

  const copyEmailToClipboard = () => {
    const targetEmail = profileData.email || 'vivek01234bxr@gmail.com';
    navigator.clipboard.writeText(targetEmail);
    setCopiedEmail(true);
    triggerToast('EMAIL COPIED TO CLIPBOARD');
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SECTION 10 // GET IN TOUCH"
          title="Let's Build Something Great."
          subtitle="Open for Software Engineering, Full Stack, and Backend Developer roles. Reach out via form or direct channels."
          icon={<Mail className="w-3.5 h-3.5" />}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Quick Info & Socials Sidebar */}
          <GlassCard glowColor="cyan" className="lg:col-span-2 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold font-mono text-white tracking-wider">
                  DIRECT CHANNELS
                </h3>
              </div>

              {/* Primary Email Box */}
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">
                  PRIMARY EMAIL
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${profileData.email || 'vivek01234bxr@gmail.com'}`}
                    className="text-xs sm:text-sm font-mono text-cyan-300 hover:text-cyan-200 underline underline-offset-4 truncate"
                    title="Send Email"
                  >
                    {profileData.email || 'vivek01234bxr@gmail.com'}
                  </a>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email Address to Clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="space-y-2.5">
                {socialLinks.map((social) => (
                  <div key={social.platform}>
                    {social.url && (
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open Vivek Kumar Rai's ${social.platform} profile`}
                        className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-800/60 flex items-center justify-between text-xs transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          {social.platform === 'GitHub' && <GithubIcon className="w-4 h-4 text-cyan-400" />}
                          {social.platform === 'LinkedIn' && <LinkedinIcon className="w-4 h-4 text-blue-400" />}
                          {social.platform === 'LeetCode' && <LeetcodeIcon className="w-4 h-4 text-amber-400" />}
                          {social.platform === 'Email' && <Mail className="w-4 h-4 text-emerald-400" />}
                          <div>
                            <span className="font-semibold text-slate-200 group-hover:text-white transition-colors block">
                              {social.platform}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              {social.handle || social.url}
                            </span>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </a>
                    )}
                  </div>
                ))}

                {/* Resume Card Link */}
                <a
                  href={profileData.resumeUrl || '/resume.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Vivek Kumar Rai's official resume PDF"
                  className="p-3 rounded-xl bg-blue-950/30 border border-blue-500/30 hover:bg-blue-900/40 flex items-center justify-between text-xs transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <div>
                      <span className="font-semibold text-white block">Official Resume</span>
                      <span className="text-[10px] font-mono text-slate-400">
                        PDF Document
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-blue-300 flex items-center gap-1">
                    <span>View PDF</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 text-[11px] font-mono text-slate-400">
              ⚡ Contact channels ready for direct integration.
            </div>
          </GlassCard>

          {/* Interactive Contact Form */}
          <GlassCard glowColor="purple" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-slate-800 pb-3 mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold font-mono text-white tracking-wider">
                  SEND TRANSMISSION
                </h3>
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 text-cyan-400" /> Form Validation Enabled
                </span>
              </div>

              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1">
                  YOUR NAME <span className="text-rose-400">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Hiring Manager / Recruiter"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs sm:text-sm font-sans focus:outline-none focus:border-cyan-500 transition-colors"
                />
                {errors.name && <p className="text-rose-400 text-[11px] font-mono mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1">
                  YOUR EMAIL ADDRESS <span className="text-rose-400">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. recruiter@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs sm:text-sm font-sans focus:outline-none focus:border-cyan-500 transition-colors"
                />
                {errors.email && <p className="text-rose-400 text-[11px] font-mono mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1">
                  MESSAGE / INQUIRY <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Discuss an opportunity, project, or role..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs sm:text-sm font-sans focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
                {errors.message && <p className="text-rose-400 text-[11px] font-mono mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-xs sm:text-sm font-mono flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/25 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING...</span>
                ) : (
                  <>
                    <span>Submit Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        isOpen={!!toastMessage}
        message={toastMessage || ''}
        onClose={() => setToastMessage(null)}
      />
    </section>
  );
};
