import { useState } from 'react';
import { Layers, Layout, Server, Database, Cpu, Wrench, Bot, BookOpen, Info } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { SystemBadge } from '../ui/SystemBadge';
import { skillCategories } from '../../data/skills';
import type { SkillItem, SkillStatusType } from '../../types/portfolio';

export const TechStackSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSkillName, setActiveSkillName] = useState<string | null>(null);

  const categoriesList = [
    { id: 'all', label: 'All Categories' },
    ...skillCategories.map((c) => ({ id: c.id, label: c.categoryName }))
  ];

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.id === selectedCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'frontend':
        return <Layout className="w-4 h-4 text-cyan-400" />;
      case 'backend':
        return <Server className="w-4 h-4 text-blue-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'ai':
        return <Bot className="w-4 h-4 text-rose-400" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      case 'cs':
        return <BookOpen className="w-4 h-4 text-indigo-400" />;
      default:
        return <Layers className="w-4 h-4 text-cyan-400" />;
    }
  };

  const getStatusBadgeVariant = (status?: SkillStatusType) => {
    switch (status) {
      case 'core':
        return 'cyan';
      case 'proficient':
        return 'blue';
      case 'learning':
        return 'amber';
      case 'exploring':
        return 'slate';
      default:
        return 'slate';
    }
  };

  const handleSkillCardClick = (skillName: string) => {
    setActiveSkillName(activeSkillName === skillName ? null : skillName);
  };

  return (
    <section id="techstack" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SECTION 04 // TECH STACK ECOSYSTEM"
          title="Technology Stack & Skills"
          subtitle="Categorized technical competencies with operational usage context and skill status levels."
          icon={<Layers className="w-3.5 h-3.5" />}
        />

        {/* Category Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none font-mono text-xs">
          {categoriesList.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                  isActive
                    ? 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300 font-semibold shadow-md'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
                aria-pressed={isActive}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <GlassCard key={category.id} glowColor="blue" className="flex flex-col justify-between">
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(category.id)}
                    <h3 className="text-xs font-mono font-bold tracking-wider text-slate-200">
                      {category.categoryName}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    {category.skills.length} Skills
                  </span>
                </div>

                {/* Skills List in Category */}
                <div className="space-y-3">
                  {category.skills.map((skill: SkillItem) => {
                    const isSelected = activeSkillName === skill.name;
                    const badgeVariant = getStatusBadgeVariant(skill.status);

                    return (
                      <div
                        key={skill.name}
                        onClick={() => handleSkillCardClick(skill.name)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleSkillCardClick(skill.name);
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-expanded={isSelected}
                        className={`group p-3 rounded-xl bg-slate-900/60 border transition-all cursor-pointer relative focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                          isSelected
                            ? 'border-cyan-500/50 bg-slate-800/80 shadow-md'
                            : 'border-slate-800/80 hover:border-cyan-500/30 hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>

                          <SystemBadge variant={badgeVariant} className="py-0.5 text-[10px] uppercase">
                            {skill.status || 'CORE'}
                          </SystemBadge>
                        </div>

                        <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                          {skill.description}
                        </p>

                        {/* Interactive Usage Context Banner (hover on desktop or tap/click toggle on mobile) */}
                        <div className={`mt-2 pt-2 border-t border-slate-800 transition-all ${
                          isSelected ? 'block' : 'hidden group-hover:block'
                        }`}>
                          <span className="text-[10px] font-mono text-cyan-400 block mb-0.5 flex items-center gap-1">
                            <Info className="w-3 h-3" /> USED FOR:
                          </span>
                          <p className="text-[11px] font-mono text-slate-300 leading-snug">
                            {skill.usedFor}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
