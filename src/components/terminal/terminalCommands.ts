import { profileData } from '../../data/profile';
import { socialProfiles } from '../../data/socials';
import { skillCategories } from '../../data/skills';
import { projectsData } from '../../data/projects';
import { experienceData } from '../../data/experience';
import { journeyMilestones } from '../../data/journey';
import { dsaData } from '../../data/dsa';

export interface CommandOutput {
  type: 'text' | 'success' | 'error' | 'list' | 'info';
  content: string | string[];
}

export const executeCommand = (input: string): CommandOutput => {
  const cleanInput = input.trim().toLowerCase();

  switch (cleanInput) {
    case 'help':
      return {
        type: 'info',
        content: [
          'AVAILABLE COMMANDS:',
          '  about       - View developer profile & mission',
          '  skills      - List verified tech stack & skills',
          '  experience  - View internship & engineering experience log',
          '  projects    - View project case studies status',
          '  journey     - View developer milestone timeline',
          '  dsa         - Display DSA topics & approach methodology',
          '  contact     - Get verified contact channels',
          '  github      - View official GitHub profile link',
          '  linkedin    - View official LinkedIn profile link',
          '  leetcode    - View official LeetCode profile link',
          '  resume      - View official resume PDF link',
          '  clear       - Clear terminal buffer'
        ]
      };

    case 'about':
      return {
        type: 'text',
        content: [
          `NAME: ${profileData.name}`,
          `ROLE: ${profileData.role}`,
          `STATUS: ${profileData.status}`,
          `SPECIALIZATION: ${profileData.specialization}`,
          `MISSION: ${profileData.mission}`,
          `EMAIL: ${profileData.email}`
        ]
      };

    case 'skills':
      const skillList = skillCategories.flatMap((cat) => [
        `[ ${cat.categoryName} ]`,
        ...cat.skills.map((s) => `  • ${s.name} - ${s.usedFor}`)
      ]);
      return {
        type: 'text',
        content: skillList
      };

    case 'experience':
      if (experienceData.length === 0) {
        return {
          type: 'info',
          content: ['EXPERIENCE LOG:', '  No experience entries configured.']
        };
      }
      const expList = experienceData.flatMap((item) => [
        `COMPANY: ${item.company}`,
        `ROLE: ${item.role}`,
        `PROJECT: ${item.project}`,
        `STACK: ${item.techStack.join(', ')}`,
        'HIGHLIGHTS:',
        ...item.highlights.map((h) => `  • ${h}`)
      ]);
      return {
        type: 'text',
        content: ['INTERNSHIP & ENGINEERING EXPERIENCE LOG:', ...expList]
      };

    case 'projects':
      if (projectsData.length === 0) {
        return {
          type: 'info',
          content: [
            'PROJECT CASE STUDIES:',
            '  Status: Architecture Ready',
            '  Real project case studies and repository details will be added soon.'
          ]
        };
      }
      const projList = projectsData.map(
        (p) => `▸ ${p.title} (${p.category})\n  Tagline: ${p.tagline}\n  Stack: ${p.techStack.join(', ')}`
      );
      return {
        type: 'text',
        content: ['FEATURED PROJECTS:', ...projList]
      };

    case 'journey':
      const journeyList = journeyMilestones.map(
        (j) => `[ ${j.phase} ] ${j.title} (${j.period})\n  ${j.description}`
      );
      return {
        type: 'text',
        content: ['DEVELOPER JOURNEY:', ...journeyList]
      };

    case 'dsa':
      const topicList = dsaData.topics.map((t) => `  [${t.status === 'completed' ? '✔' : '⏳'}] ${t.name}`);
      const stepsList = dsaData.approachSteps.map((s) => `  ${s.number}. ${s.title}: ${s.description}`);
      return {
        type: 'text',
        content: [
          'DSA & PROBLEM SOLVING DASHBOARD:',
          `  Total Solved: ${dsaData.totalSolved}`,
          'CURRENT TOPICS:',
          ...topicList,
          'PROBLEM SOLVING METHODOLOGY:',
          ...stepsList
        ]
      };

    case 'contact':
      return {
        type: 'success',
        content: [
          'VERIFIED CONTACT CHANNELS:',
          `  EMAIL: ${socialProfiles.email}`,
          `  GitHub: ${socialProfiles.github}`,
          `  LinkedIn: ${socialProfiles.linkedin}`,
          `  LeetCode: ${socialProfiles.leetcode}`
        ]
      };

    case 'github':
      return {
        type: 'success',
        content: `GitHub Profile: ${socialProfiles.github}`
      };

    case 'linkedin':
      return {
        type: 'success',
        content: `LinkedIn Profile: ${socialProfiles.linkedin}`
      };

    case 'leetcode':
      return {
        type: 'success',
        content: `LeetCode Profile: ${socialProfiles.leetcode}`
      };

    case 'resume':
      return {
        type: 'success',
        content: `Resume available at: ${profileData.resumeUrl || '/resume.pdf'}`
      };

    default:
      return {
        type: 'error',
        content: `Command not found: '${input}'. Type "help" to see available commands.`
      };
  }
};
