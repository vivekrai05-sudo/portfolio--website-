export interface ProfileData {
  name: string;
  role: string;
  titles: string[];
  status: string;
  specialization: string;
  currentFocus: string[];
  mission: string;
  location?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  goal: string;
  resumeUrl?: string;
}

export type SkillCategoryType = 
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Programming'
  | 'Problem Solving'
  | 'Computer Science'
  | 'AI & Generative AI'
  | 'Software Engineering'
  | 'Dev Tools';

export type SkillStatusType = 'core' | 'proficient' | 'learning' | 'exploring';

export interface SkillItem {
  name: string;
  description: string;
  usedFor: string;
  status?: SkillStatusType;
  highlighted?: boolean;
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  categoryType: SkillCategoryType;
  skills: SkillItem[];
}

export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel: string;
  type: 'frontend' | 'api' | 'backend' | 'database' | 'tool';
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technicalChallenges: string[];
  architectureFlow: ArchitectureNode[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: string;
  metrics?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  project: string;
  period?: string;
  location?: string;
  techStack: string[];
  highlights: string[];
  architectureFlow?: ArchitectureNode[];
}

export interface JourneyMilestone {
  id: string;
  phase: string;
  title: string;
  period: string;
  description: string;
  keyLearnings: string[];
  status: 'completed' | 'current' | 'upcoming';
}

export interface DsaTopic {
  name: string;
  status: 'completed' | 'in_progress' | 'planned';
  problemCountPlaceholder?: string;
}

export interface DsaData {
  easyCount: string | number;
  mediumCount: string | number;
  hardCount: string | number;
  totalSolved: string | number;
  topics: DsaTopic[];
  approachSteps: {
    number: number;
    title: string;
    description: string;
  }[];
}

export interface MindsetPrinciple {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  quote?: string;
}

export interface CurrentBuildingItem {
  id: string;
  type: 'learning' | 'building' | 'goal';
  title: string;
  description: string;
  tags: string[];
}

export interface SocialLink {
  platform: string;
  label: string;
  url?: string;
  icon: string;
  handle?: string;
}
