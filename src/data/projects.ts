import type { ProjectCaseStudy } from '../types/portfolio';

export const projectsData: ProjectCaseStudy[] = [
  {
    id: 'codeguardian-ai',
    title: 'CodeGuardianAI',
    tagline: 'An AI-powered code security platform designed to analyze source code, identify syntax and vulnerability patterns, and generate security insights.',
    category: 'AI-Powered Code Security Platform',
    problem: 'Developers need faster assistance identifying potential issues and vulnerabilities in source code.',
    solution: 'CodeGuardianAI combines static analysis with multiple AI providers to analyze code and generate security insights.',
    keyFeatures: [
      'Built a static-analysis engine for syntax and vulnerability patterns across 12+ programming languages.',
      'Integrated multiple LLM providers through an asynchronous analysis pipeline.',
      'Comprehensive security report generation with actionable remediation insights.',
      'Addressed 50+ critical vulnerability edge cases during stress testing.'
    ],
    technicalChallenges: [
      'Orchestrating asynchronous API calls across multiple LLM providers (OpenAI, Gemini, Groq) without blocking code analysis.',
      'Handling complex edge cases and syntax variations across 12+ target programming languages.'
    ],
    architectureFlow: [
      { id: '1', label: 'User Source Code', sublabel: 'Input Layer', type: 'frontend' },
      { id: '2', label: 'Static Analysis Engine', sublabel: 'Syntax & Pattern Matcher', type: 'backend' },
      { id: '3', label: 'AI Analysis Pipeline', sublabel: 'OpenAI / Gemini / Groq', type: 'api' },
      { id: '4', label: 'Security & Vulnerability', sublabel: 'Rule Engine & Detection', type: 'backend' },
      { id: '5', label: 'Security Report', sublabel: 'Generated Insights', type: 'tool' }
    ],
    techStack: ['React.js', 'Node.js', 'OpenAI API', 'Google Gemini API', 'Groq API'],
    metrics: [
      '12+ Programming Languages',
      '~95% Detection Precision',
      '~40% Reduction in Manual Code-Auditing Overhead',
      '50+ Critical Vulnerability Edge Cases'
    ],
    githubUrl: 'https://github.com/vivekrai05-sudo/code-analyzer',
    liveUrl: undefined,
    featured: true
  },
  {
    id: 'tiffin-delivery-system',
    title: 'Tiffin Delivery Management System',
    tagline: 'End-to-end food and tiffin management platform providing seamless ordering, vendor management, Razorpay payment reconciliation, and role-based access.',
    category: 'Full-Stack Food & Tiffin Management Platform',
    problem: 'Tiffin service vendors and customers lack a streamlined digital platform to manage daily meal subscriptions, financial transactions, and user access.',
    solution: 'A full-stack food management solution featuring role-based dashboards, secure Razorpay payment gateway integration with webhooks, and optimized MongoDB data indexing.',
    keyFeatures: [
      'End-to-end food and tiffin management platform for customers and vendors.',
      'Razorpay payment integration with webhook architecture for reliable payment processing.',
      'JWT authentication with Role-Based Access Control (RBAC).',
      'MongoDB indexing and API optimization for fast response times.'
    ],
    technicalChallenges: [
      'Designing an idempotent Razorpay webhook handler to process financial transactions reliably without double-counting updates.',
      'Structuring granular Role-Based Access Control (RBAC) for customer ordering vs vendor administrative workflows.'
    ],
    architectureFlow: [
      { id: '1', label: 'Customer / Vendor', sublabel: 'User Interface', type: 'frontend' },
      { id: '2', label: 'React.js Frontend', sublabel: 'State & Views', type: 'frontend' },
      { id: '3', label: 'Node.js + Express API', sublabel: 'REST Endpoints', type: 'backend' },
      { id: '4', label: 'Auth + RBAC', sublabel: 'JWT Security', type: 'tool' },
      { id: '5', label: 'MongoDB Database', sublabel: 'Indexed Collections', type: 'database' },
      { id: '6', label: 'Razorpay Payments', sublabel: 'Gateway Interface', type: 'api' },
      { id: '7', label: 'Webhook Processing', sublabel: 'Async Reconciliation', type: 'api' }
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'JWT'],
    metrics: [
      '500+ Secure Financial Transactions',
      '100+ Concurrent Customers & Vendors',
      '~30% Performance Improvement'
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    featured: true
  },
  {
    id: 'interviewiq',
    title: 'InterviewIQ',
    tagline: 'An AI-powered mock interview platform utilizing Groq AI (llama-3.3-70b), Retrieval-Augmented Generation (RAG), real-time face tracking, and dynamic PDF reporting.',
    category: 'AI-Powered Mock Interview Platform',
    problem: 'Job seekers lack realistic, accessible, and automated mock technical interview practice with real-time feedback, domain-specific evaluation, and biometric engagement tracking.',
    solution: 'InterviewIQ leverages Groq AI with RAG for context-aware technical questions, real-time emotion/face monitoring via face-api.js, automated scoring, and downloadable PDF reports.',
    keyFeatures: [
      'AI-driven mock interview session engine powered by Groq AI (llama-3.3-70b) and Retrieval-Augmented Generation (RAG).',
      'Candidate focus and expression monitoring using TensorFlow.js / face-api.js integration.',
      'Automated candidate response evaluation with score breakdowns, feedback, and performance analytics.',
      'Interactive results dashboard featuring Recharts visualization and instant jsPDF report downloads.',
      'JWT authentication and Nodemailer automated notification service.'
    ],
    technicalChallenges: [
      'Maintaining continuous canvas-based face tracking using face-api.js without affecting UI responsiveness during interview sessions.',
      'Designing vector RAG context schemas for Groq AI to ensure precise, hallucination-free technical interview scoring.'
    ],
    architectureFlow: [
      { id: '1', label: 'User / Candidate', sublabel: 'Web Client', type: 'frontend' },
      { id: '2', label: 'React 19 App', sublabel: 'Redux Toolkit UI', type: 'frontend' },
      { id: '3', label: 'Auth & Monitoring', sublabel: 'JWT & face-api.js', type: 'tool' },
      { id: '4', label: 'Interview Session Engine', sublabel: 'Node.js + Express API', type: 'backend' },
      { id: '5', label: 'AI Processing', sublabel: 'Groq AI + RAG Engine', type: 'api' },
      { id: '6', label: 'MongoDB Database', sublabel: 'Sessions & Reports', type: 'database' },
      { id: '7', label: 'Evaluation Dashboard', sublabel: 'Recharts & jsPDF Export', type: 'frontend' }
    ],
    techStack: [
      'React 19',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Groq AI (llama-3.3-70b)',
      'Redux Toolkit',
      'Tailwind CSS',
      'TensorFlow.js / face-api.js',
      'jsPDF',
      'Recharts'
    ],
    metrics: [
      'Groq AI (llama-3.3-70b) Powered',
      'Real-Time Face-api.js Biometrics',
      'Instant Automated PDF Reports'
    ],
    githubUrl: 'https://github.com/vivekrai05-sudo/Mock_Interview',
    liveUrl: 'https://mock-interview-five-nu.vercel.app',
    featured: true
  }
];
