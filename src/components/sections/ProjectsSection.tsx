import { useState } from 'react';
import { FolderGit2, ExternalLink, ChevronDown, ChevronUp, Layers, AlertCircle, CheckCircle2, ArrowRight, Database, Terminal, BarChart3 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { SystemBadge } from '../ui/SystemBadge';
import { projectsData } from '../../data/projects';
import { GithubIcon } from '../ui/SocialIcons';

export const ProjectsSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(
    projectsData.length > 0 ? projectsData[0].id : null
  );

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-16 md:py-24 relative bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SECTION 05 // PROJECT CASE STUDIES"
          title="Featured Engineering Projects"
          subtitle="In-depth case studies detailing problem statements, architectural design, technical challenges, and verified metrics."
          icon={<FolderGit2 className="w-3.5 h-3.5" />}
        />

        {/* Empty State when no projects are in data file */}
        {projectsData.length === 0 ? (
          <GlassCard glowColor="cyan" className="p-8 sm:p-12 text-center space-y-4">
            <div className="inline-flex p-4 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 mb-2">
              <Database className="w-8 h-8" />
            </div>

            <div className="inline-block">
              <SystemBadge variant="cyan" pulse icon={<Terminal className="w-3 h-3" />}>
                PROJECT DATA READY
              </SystemBadge>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Project Case Studies Architecture Configured
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              The project case study architecture is configured and ready. Real projects, repositories, and technical details will be added soon.
            </p>

            <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 max-w-md mx-auto">
              * Add real project entries into <code className="text-cyan-300">src/data/projects.ts</code> to render case studies.
            </div>
          </GlassCard>
        ) : (
          /* Rendered Projects List when real projects exist */
          <div className="space-y-6">
            {projectsData.map((project, index) => {
              const isExpanded = expandedId === project.id;
              const projectNumber = String(index + 1).padStart(2, '0');

              return (
                <GlassCard
                  key={project.id}
                  glowColor={isExpanded ? 'cyan' : 'blue'}
                  className={`transition-all duration-300 ${
                    isExpanded ? 'border-cyan-500/40 ring-1 ring-cyan-500/20' : ''
                  }`}
                >
                  {/* Summary Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                          #{projectNumber}
                        </span>
                        <SystemBadge variant="blue">{project.category}</SystemBadge>
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded font-semibold">
                          FEATURED PROJECT
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-950/40 text-cyan-300 hover:bg-cyan-900/50 border border-cyan-500/30 text-xs font-mono transition-colors cursor-pointer"
                        aria-expanded={isExpanded}
                        aria-label={`Toggle case study details for ${project.title}`}
                      >
                        <span>{isExpanded ? 'Hide Case Study' : 'View Case Study'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800/80">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 font-mono text-[11px] border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Inline Expandable Details Panel */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-slate-800 space-y-6 animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900/60 p-4 rounded-xl border border-rose-500/20">
                          <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold mb-2">
                            <AlertCircle className="w-4 h-4" />
                            <span>THE PROBLEM</span>
                          </div>
                          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        <div className="bg-slate-900/60 p-4 rounded-xl border border-emerald-500/20">
                          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold mb-2">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>THE ENGINEERING SOLUTION</span>
                          </div>
                          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Architecture Flow */}
                      <div className="bg-slate-900/80 p-4 sm:p-5 rounded-xl border border-slate-800">
                        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-4">
                          <Layers className="w-4 h-4" />
                          <span>SYSTEM ARCHITECTURE FLOW</span>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-3 overflow-x-auto py-2">
                          {project.architectureFlow.map((node, nIdx) => (
                            <div key={node.id} className="contents">
                              <div className="w-full md:w-auto flex-1 min-w-[140px] bg-[#090a0f] p-3 rounded-lg border border-slate-700/80 text-center font-mono shadow-md">
                                <span className="text-[10px] text-cyan-400 block uppercase font-bold tracking-wider">
                                  {node.type}
                                </span>
                                <span className="text-xs font-bold text-white block mt-0.5">
                                  {node.label}
                                </span>
                                <span className="text-[10px] text-slate-400 block mt-0.5">
                                  {node.sublabel}
                                </span>
                              </div>

                              {nIdx < project.architectureFlow.length - 1 && (
                                <ArrowRight className="w-5 h-5 text-slate-500 shrink-0 rotate-90 md:rotate-0 my-1 md:my-0" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Features & Challenges */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-xs font-mono font-bold text-slate-300 mb-2.5">
                            KEY FEATURES IMPLEMENTED:
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                            {project.keyFeatures.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <span className="text-cyan-400 font-mono">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-mono font-bold text-slate-300 mb-2.5">
                            TECHNICAL CHALLENGES OVERCOME:
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                            {project.technicalChallenges.map((challenge, cIdx) => (
                              <li key={cIdx} className="flex items-start gap-2">
                                <span className="text-purple-400 font-mono">•</span>
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Verified Impact Metrics */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="p-4 rounded-xl bg-slate-900/40 border border-cyan-500/20">
                          <h4 className="text-xs font-mono font-bold text-cyan-300 mb-3 flex items-center gap-1.5">
                            <BarChart3 className="w-3.5 h-3.5" />
                            <span>VERIFIED METRICS & HIGHLIGHTS:</span>
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                            {project.metrics.map((metric, mIdx) => (
                              <div
                                key={mIdx}
                                className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-center font-mono"
                              >
                                <span className="text-xs font-bold text-cyan-300 block">{metric}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 text-xs font-mono transition-colors"
                          >
                            <GithubIcon className="w-4 h-4 text-cyan-400" />
                            <span>GitHub Repository</span>
                          </a>
                        )}

                        {project.liveUrl && project.liveUrl !== '#' && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono transition-colors shadow-md shadow-blue-600/20"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demonstration</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </GlassCard>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

