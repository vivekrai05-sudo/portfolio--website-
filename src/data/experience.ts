import type { ExperienceItem } from '../types/portfolio';

export const experienceData: ExperienceItem[] = [
  {
    id: 'coding-arena-campuswire',
    company: 'Coding Arena',
    role: 'Full-Stack Engineering Intern',
    project: 'CampusWire',
    period: 'Full-Stack Engineering Internship',
    location: 'Remote',
    techStack: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Supabase',
      'Groq API',
      'Sightengine API',
      'JWT'
    ],
    highlights: [
      'Built and maintained 15+ REST APIs using Node.js and Express.js to power core campus management workflows.',
      'Designed database schemas and optimized queries in PostgreSQL hosted on Supabase, supporting 1,000+ active campus users.',
      'Implemented robust authentication and security mechanisms including OTP login, JWT claims, Supabase Row Level Security (RLS), rate limiting, and audit logging.',
      'Integrated Groq API and Sightengine API for real-time AI-assisted content moderation, enforcing platform safety guidelines.',
      'Practiced industry-standard software engineering methods including unit testing, CI/CD automated review pipelines, Agile sprints, and code reviews.'
    ],
    architectureFlow: [
      { id: '1', label: 'Campus User', sublabel: 'Frontend Interface', type: 'frontend' },
      { id: '2', label: 'REST APIs', sublabel: 'Node.js + Express.js', type: 'backend' },
      { id: '3', label: 'Authentication Layer', sublabel: 'OTP + JWT Claims', type: 'tool' },
      { id: '4', label: 'Database Layer', sublabel: 'PostgreSQL / Supabase', type: 'database' },
      { id: '5', label: 'Security Layer', sublabel: 'RLS + Rate Limiting + Audit Logging', type: 'tool' },
      { id: '6', label: 'AI Content Moderation', sublabel: 'Groq API + Sightengine', type: 'api' }
    ]
  }
];
