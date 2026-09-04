import type { MindsetPrinciple } from '../types/portfolio';

export const mindsetPrinciples: MindsetPrinciple[] = [
  {
    id: 'problem-first',
    title: 'Problem First',
    tagline: 'Deep understanding before writing a single line of code.',
    description: 'I focus on thoroughly understanding the problem, edge cases, and user needs before jumping straight into implementation.',
    icon: 'Target',
    quote: '"If I had an hour to solve a problem, I’d spend 55 minutes thinking about the problem and 5 minutes thinking about solutions."'
  },
  {
    id: 'system-thinking',
    title: 'System Thinking',
    tagline: 'Architecting how individual components interconnect.',
    description: 'I evaluate how client-side state, API networks, backend servers, and database queries interact as an integrated system.',
    icon: 'Layers',
    quote: '"System design is about making trade-offs explicit and manageable."'
  },
  {
    id: 'clean-code',
    title: 'Clean Code',
    tagline: 'Writing code for human engineers, not just compilers.',
    description: 'I prioritize readable, self-documenting code with clear variable naming, modular structure, and maintainable patterns.',
    icon: 'Code2',
    quote: '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."'
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    tagline: 'Relentless growth and curiosity.',
    description: 'Technology moves fast. I consistently dedicate time to mastering algorithmic patterns, system design, and emerging frameworks.',
    icon: 'Cpu',
    quote: '"The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."'
  }
];
