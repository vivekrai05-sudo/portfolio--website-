import type { JourneyMilestone } from '../types/portfolio';

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: 'step-1',
    phase: 'MILESTONE 01',
    title: 'Exploring Programming',
    period: 'Foundations',
    description: 'Started exploring programming fundamentals, basic syntax, and algorithmic logic building.',
    keyLearnings: ['Programming Syntax', 'Logic Building', 'Problem Decomposition'],
    status: 'completed'
  },
  {
    id: 'step-2',
    phase: 'MILESTONE 02',
    title: 'Learning Data Structures and Algorithms',
    period: 'Core CS Fundamentals',
    description: 'Focused on solving data structures and algorithm problems in C++ to build strong problem-solving skills.',
    keyLearnings: ['C++ Basics', 'Arrays & Strings', 'Time & Space Complexity'],
    status: 'completed'
  },
  {
    id: 'step-3',
    phase: 'MILESTONE 03',
    title: 'Building Full Stack Applications',
    period: 'Web Development',
    description: 'Learning frontend interfaces using React.js alongside backend API development with Node.js, Express.js, and MongoDB.',
    keyLearnings: ['React UI Components', 'RESTful APIs', 'Database Schemas'],
    status: 'completed'
  },
  {
    id: 'step-4',
    phase: 'MILESTONE 04',
    title: 'Exploring Backend Development',
    period: 'Current Exploration',
    description: 'Exploring backend services, request handling, database indexing, and system design concepts.',
    keyLearnings: ['Backend Services', 'API Performance', 'System Design Concepts'],
    status: 'current'
  },
  {
    id: 'step-5',
    phase: 'MILESTONE 05',
    title: 'Preparing for Software Engineering Roles',
    period: 'Next Objective',
    description: 'Preparing technical skills and project portfolio to secure a Software Engineering / Full Stack / Backend Developer role.',
    keyLearnings: ['Technical Interview Prep', 'Software Engineering Practices', 'Production Code Quality'],
    status: 'upcoming'
  }
];
