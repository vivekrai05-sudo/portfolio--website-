import type { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    categoryName: 'PROGRAMMING LANGUAGES',
    categoryType: 'Programming',
    skills: [
      {
        name: 'C++',
        status: 'core',
        description: 'High-performance compiled language used for data structures and algorithmic problem solving.',
        usedFor: 'Algorithmic problem solving, Data Structures, and computational performance.',
        highlighted: true
      },
      {
        name: 'JavaScript',
        status: 'core',
        description: 'Core web programming language for interactive applications and asynchronous request pipelines.',
        usedFor: 'Full stack development, async logic, and REST API consumption.',
        highlighted: true
      },
      {
        name: 'TypeScript',
        status: 'proficient',
        description: 'Strongly typed programming language built on JavaScript for type safety.',
        usedFor: 'Writing typed application code, component interfaces, and scalable schemas.',
        highlighted: false
      },
      {
        name: 'HTML5',
        status: 'proficient',
        description: 'Standard markup language for constructing semantic web page elements.',
        usedFor: 'Structuring accessible web pages and semantic UI nodes.',
        highlighted: false
      },
      {
        name: 'CSS3',
        status: 'proficient',
        description: 'Style sheet language for modern web layouts, animations, and typography.',
        usedFor: 'Custom styling, dark themes, flexbox/grid layouts, and glassmorphic designs.',
        highlighted: false
      },
      {
        name: 'SQL',
        status: 'proficient',
        description: 'Standard domain-specific language for querying and managing relational databases.',
        usedFor: 'Relational table queries, data joining, and schema manipulations.',
        highlighted: false
      }
    ]
  },
  {
    id: 'frontend',
    categoryName: 'FRONTEND DEVELOPMENT',
    categoryType: 'Frontend',
    skills: [
      {
        name: 'React.js',
        status: 'core',
        description: 'Declarative component-based user interface library.',
        usedFor: 'Building single-page applications, custom hooks, and dynamic workspace interfaces.',
        highlighted: true
      },
      {
        name: 'Next.js 14',
        status: 'proficient',
        description: 'React framework for server-side rendering and static site generation.',
        usedFor: 'Full stack web applications, API routes, and optimized web pages.',
        highlighted: false
      },
      {
        name: 'Tailwind CSS',
        status: 'proficient',
        description: 'Utility-first CSS framework for rapid modern UI creation.',
        usedFor: 'Design systems, glassmorphism UI components, and dark theme tokens.',
        highlighted: true
      },
      {
        name: 'Responsive Design',
        status: 'proficient',
        description: 'Web development approach creating layouts adaptable across device screen sizes.',
        usedFor: 'Mobile-first layouts, fluid grids, and responsive viewport interfaces.',
        highlighted: false
      },
      {
        name: 'State Management',
        status: 'proficient',
        description: 'Patterns for managing application state flow and data synchronization.',
        usedFor: 'Managing client-side component state, global state, and interactive UI sync.',
        highlighted: false
      },
      {
        name: 'Monaco Editor',
        status: 'proficient',
        description: 'Browser-based code editor engine powering VS Code.',
        usedFor: 'Integrating interactive code editing panels and syntax highlighted text areas.',
        highlighted: false
      }
    ]
  },
  {
    id: 'backend',
    categoryName: 'BACKEND & APIS',
    categoryType: 'Backend',
    skills: [
      {
        name: 'Node.js',
        status: 'core',
        description: 'Asynchronous event-driven JavaScript runtime environment.',
        usedFor: 'Building backend services, handling concurrent requests, and API servers.',
        highlighted: true
      },
      {
        name: 'Express.js',
        status: 'core',
        description: 'Minimalist web application framework for Node.js.',
        usedFor: 'Routing endpoints, HTTP request/response pipelines, and REST services.',
        highlighted: true
      },
      {
        name: 'RESTful APIs',
        description: 'Standard architectural design for HTTP networked services.',
        usedFor: 'Designing clean API endpoints, status code handling, and JSON payloads.',
        status: 'core',
        highlighted: true
      },
      {
        name: 'Microservices',
        status: 'learning',
        description: 'Architectural pattern structuring applications as loosely coupled services.',
        usedFor: 'Decoupling monolithic services into modular, independent server units.',
        highlighted: false
      },
      {
        name: 'JWT Authentication',
        status: 'proficient',
        description: 'JSON Web Token compact stateless security standard for user authentication.',
        usedFor: 'Securing API endpoints, token verification, and user authorization pipelines.',
        highlighted: false
      },
      {
        name: 'API Rate Limiting',
        status: 'learning',
        description: 'Technique to limit network traffic and prevent API request overload.',
        usedFor: 'Protecting backend services against excessive or malicious requests.',
        highlighted: false
      },
      {
        name: 'Middleware',
        status: 'learning',
        description: 'Functions executing between request intake and final response execution.',
        usedFor: 'Request validation, error logging, and authorization verification headers.',
        highlighted: false
      }
    ]
  },
  {
    id: 'database',
    categoryName: 'DATABASES & CLOUD',
    categoryType: 'Database',
    skills: [
      {
        name: 'MongoDB',
        status: 'core',
        description: 'NoSQL document-oriented database for modern flexible data schemas.',
        usedFor: 'Structuring JSON-like collections and Mongoose document models.',
        highlighted: true
      },
      {
        name: 'PostgreSQL',
        status: 'proficient',
        description: 'Advanced open-source relational database system.',
        usedFor: 'Relational data modeling, ACID transactions, and structured SQL queries.',
        highlighted: false
      },
      {
        name: 'MySQL',
        status: 'proficient',
        description: 'Relational database management system.',
        usedFor: 'Managing relational tables, foreign key constraints, and SQL data storage.',
        highlighted: false
      },
      {
        name: 'Supabase',
        status: 'exploring',
        description: 'Open-source Firebase alternative providing Postgres backend services.',
        usedFor: 'Instant database APIs, authentication, and real-time backend data storage.',
        highlighted: false
      },
      {
        name: 'Query Optimization',
        status: 'learning',
        description: 'Techniques for improving database query execution speed.',
        usedFor: 'Database indexing, execution plan tuning, and query speedups.',
        highlighted: false
      },
      {
        name: 'Vercel',
        status: 'exploring',
        description: 'Cloud platform for static sites and serverless web deployment.',
        usedFor: 'Deploying frontend web applications and serverless API endpoints.',
        highlighted: false
      },
      {
        name: 'Render',
        status: 'exploring',
        description: 'Unified cloud platform for hosting web applications and databases.',
        usedFor: 'Deploying Node.js backend web services and database instances.',
        highlighted: false
      }
    ]
  },
  {
    id: 'ai',
    categoryName: 'AI & GENERATIVE AI',
    categoryType: 'AI & Generative AI',
    skills: [
      {
        name: 'OpenAI API',
        status: 'exploring',
        description: 'API suite for integrating GPT large language models into applications.',
        usedFor: 'Building intelligent text completion, summarization, and AI features.',
        highlighted: false
      },
      {
        name: 'Google Gemini API',
        status: 'exploring',
        description: 'Multimodal AI model API suite for advanced text, code, and vision tasks.',
        usedFor: 'Integrating generative AI capabilities, smart assistants, and code analysis.',
        highlighted: false
      },
      {
        name: 'Groq API',
        status: 'exploring',
        description: 'Ultra-high-speed LLM inference API powered by LPU hardware.',
        usedFor: 'Real-time low-latency AI responses and fast conversational agents.',
        highlighted: false
      },
      {
        name: 'Sightengine API',
        status: 'exploring',
        description: 'Image and video content moderation and computer vision API.',
        usedFor: 'Automated content moderation, image analysis, and safety checks.',
        highlighted: false
      },
      {
        name: 'Prompt Engineering',
        status: 'exploring',
        description: 'Designing structured prompts to guide generative AI outputs reliably.',
        usedFor: 'Crafting contextual system instructions and optimizing LLM responses.',
        highlighted: false
      }
    ]
  },
  {
    id: 'tools',
    categoryName: 'DEVOPS & DEVELOPMENT TOOLS',
    categoryType: 'Dev Tools',
    skills: [
      {
        name: 'Git',
        status: 'core',
        description: 'Distributed version control system for tracking code changes.',
        usedFor: 'Managing version history, branching strategies, and commit tracking.',
        highlighted: true
      },
      {
        name: 'GitHub',
        status: 'core',
        description: 'Cloud hosting platform for code repositories and developer collaboration.',
        usedFor: 'Remote repository management, open-source workflow, and code reviews.',
        highlighted: true
      },
      {
        name: 'Postman',
        status: 'proficient',
        description: 'API platform for building, testing, and documenting HTTP services.',
        usedFor: 'Testing REST API endpoints, inspecting JSON responses, and debugging.',
        highlighted: false
      },
      {
        name: 'CI/CD Pipelines',
        status: 'learning',
        description: 'Automated workflows for continuous integration and continuous deployment.',
        usedFor: 'Automating build checks, running tests, and deployment pipelines.',
        highlighted: false
      },
      {
        name: 'Unit Testing',
        status: 'learning',
        description: 'Software testing method where individual units or components are verified.',
        usedFor: 'Writing test suites to verify function correctness and prevent regressions.',
        highlighted: false
      },
      {
        name: 'Agile / Scrum',
        status: 'proficient',
        description: 'Iterative project management methodology for software development.',
        usedFor: 'Sprint planning, iterative feature delivery, and task tracking.',
        highlighted: false
      },
      {
        name: 'Code Review',
        status: 'proficient',
        description: 'Systematic examination of computer source code intended to find bugs.',
        usedFor: 'Maintaining code quality, checking architectural adherence, and sharing knowledge.',
        highlighted: false
      }
    ]
  },
  {
    id: 'cs',
    categoryName: 'CS & PROBLEM SOLVING',
    categoryType: 'Computer Science',
    skills: [
      {
        name: 'Data Structures & Algorithms',
        status: 'core',
        description: 'Core computer science principles for efficient data organization and problem solving.',
        usedFor: 'Solving complex algorithmic problems, memory optimization, and Big-O complexity.',
        highlighted: true
      },
      {
        name: 'Object-Oriented Programming',
        status: 'proficient',
        description: 'Programming paradigm based on concepts of objects containing data and methods.',
        usedFor: 'Encapsulation, inheritance, polymorphism, and abstraction design patterns.',
        highlighted: false
      },
      {
        name: 'DBMS',
        status: 'proficient',
        description: 'Database Management Systems principles covering storage, indexing, and transactions.',
        usedFor: 'Database normalization, indexing concepts, and transaction management.',
        highlighted: false
      },
      {
        name: 'Operating Systems',
        status: 'learning',
        description: 'System software managing computer hardware, processes, and memory resources.',
        usedFor: 'Understanding process management, concurrency, memory allocation, and I/O.',
        highlighted: false
      },
      {
        name: 'System Design',
        status: 'learning',
        description: 'Process of defining architecture, components, and interfaces to satisfy requirements.',
        usedFor: 'Designing scalable web systems, load balancing, caching, and database scaling.',
        highlighted: false
      },
      {
        name: 'Computer Networks',
        status: 'learning',
        description: 'Network communication protocols, TCP/IP stack, and HTTP fundamentals.',
        usedFor: 'Understanding network protocols, HTTP methods, headers, and socket connections.',
        highlighted: false
      }
    ]
  }
];
