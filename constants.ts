import { QuizQuestion } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "What's your approximate budget for your baby's travel gear?",
    key: 'budget',
    options: [
      {
        value: 'budget-friendly',
        label: 'Budget-Friendly',
        description: 'Under $500',
      },
      {
        value: 'mid-range',
        label: 'Mid-Range',
        description: '$500 - $1000',
      },
      {
        value: 'premium',
        label: 'Premium',
        description: '$1000+',
      },
    ],
  },
  {
    question: 'Which of these best describes your daily routine?',
    key: 'lifestyle',
    options: [
      {
        value: 'city-dweller',
        label: 'City Dweller',
        description: 'Navigating sidewalks, public transit, and tight spaces.',
      },
      {
        value: 'suburban-explorer',
        label: 'Suburban Explorer',
        description: 'Frequent car trips, shopping, and park visits.',
      },
      {
        value: 'active-outdoorsy',
        label: 'Active & Outdoorsy',
        description: 'Hiking trails, jogging, and uneven terrain.',
      },
    ],
  },
  {
    question: 'What feature is most important to you?',
    key: 'features',
    options: [
      {
        value: 'lightweight-compact',
        label: 'Lightweight & Compact',
        description: 'Easy to carry, fold, and store.',
      },
      {
        value: 'durability-all-terrain',
        label: 'Durability & All-Terrain',
        description: 'Built to last and handle any surface.',
      },
      {
        value: 'luxury-convenience',
        label: 'Luxury & Convenience',
        description: 'High-end materials and smart features.',
      },
    ],
  },
    {
    question: 'How many cars will you be using for the baby?',
    key: 'cars',
    options: [
      {
        value: 'one-car',
        label: 'One Primary Car',
        description: "We'll focus on a single, easy-to-install setup.",
      },
      {
        value: 'multi-car',
        label: 'Two+ Cars / Taxis',
        description: "We'll look for flexible options like extra bases or baseless seats.",
      },
    ],
  },
];