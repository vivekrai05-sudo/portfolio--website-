import type { DsaData } from '../types/portfolio';

export const dsaData: DsaData = {
  easyCount: "—",
  mediumCount: "—",
  hardCount: "—",
  totalSolved: "ACTIVE PROBLEM SOLVER",
  topics: [
    { name: 'Arrays & Hashing', status: 'completed', problemCountPlaceholder: 'Core Focus' },
    { name: 'Strings & Two Pointers', status: 'completed', problemCountPlaceholder: 'Core Focus' },
    { name: 'Sliding Window', status: 'completed', problemCountPlaceholder: 'Core Focus' },
    { name: 'Linked Lists & Stacks', status: 'completed', problemCountPlaceholder: 'Core Focus' },
    { name: 'Binary Search & Fast Pointers', status: 'completed', problemCountPlaceholder: 'Core Focus' },
    { name: 'Trees & Recursion', status: 'in_progress', problemCountPlaceholder: 'Current Focus' },
    { name: 'Graphs & Traversals (BFS/DFS)', status: 'in_progress', problemCountPlaceholder: 'Current Focus' },
    { name: 'Dynamic Programming', status: 'planned', problemCountPlaceholder: 'Upcoming' }
  ],
  approachSteps: [
    {
      number: 1,
      title: 'Understand the Problem',
      description: 'Analyze inputs, expected outputs, constraints, and implicit assumptions. Clarify edge cases before writing code.'
    },
    {
      number: 2,
      title: 'Identify Patterns',
      description: 'Recognize underlying algorithmic paradigms such as Sliding Window, Two Pointers, Divide & Conquer, or Graph BFS/DFS.'
    },
    {
      number: 3,
      title: 'Break into Smaller Parts',
      description: 'Deconstruct complex problem constraints into manageable modular steps or mathematical recurrences.'
    },
    {
      number: 4,
      title: 'Optimize the Solution',
      description: 'Refine brute-force approaches to achieve optimal time and space efficiency (e.g., O(N log N) or O(N)).'
    },
    {
      number: 5,
      title: 'Analyze Time and Space Complexity',
      description: 'Evaluate Big-O time and space complexity, test against boundary cases, empty inputs, and large inputs.'
    }
  ]
};
