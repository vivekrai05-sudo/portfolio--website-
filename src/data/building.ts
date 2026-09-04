import type { CurrentBuildingItem } from '../types/portfolio';

export const currentlyBuildingItems: CurrentBuildingItem[] = [
  {
    id: '1',
    type: 'learning',
    title: 'Data Structures & Algorithms in C++',
    description: 'Mastering Graph algorithms (BFS/DFS, Dijkstra), Trees, and Dynamic Programming pattern classification.',
    tags: ['C++', 'DSA', 'Algorithms', 'Problem Solving']
  },
  {
    id: '2',
    type: 'learning',
    title: 'System Design & Backend Scalability',
    description: 'Studying RESTful API best practices, microservice concepts, caching strategies, and database indexing.',
    tags: ['System Design', 'Backend Architecture', 'Node.js']
  },
  {
    id: '3',
    type: 'building',
    title: 'Full Stack Web Applications',
    description: 'Building end-to-end full stack projects with React, Node.js, Express, and MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB', 'REST APIs']
  },
  {
    id: '4',
    type: 'goal',
    title: 'Software Engineering Role',
    description: 'Actively seeking opportunities as a Software Engineer, Full Stack Developer, or Backend Developer.',
    tags: ['Full Stack', 'Backend Developer', 'Software Engineer']
  }
];
