import type { BlogClusterId } from '../i18n/types';

export interface BlogClusterDefinition {
  id: BlogClusterId;
  cta: {
    primaryHref: string;
    secondaryHref: string;
  };
  slugs: string[];
}

export const BLOG_CLUSTERS: BlogClusterDefinition[] = [
  {
    id: 'compare',
    cta: {
      primaryHref: '/#waitlist',
      secondaryHref: '/compare',
    },
    slugs: [
      'technical-interview-prep-market-2026',
      'ai-mock-interview-vs-leetcode',
      'peer-mock-interviews-vs-ai',
      'human-coach-vs-ai-interview-practice',
      'text-vs-voice-mock-interviews',
      'best-ai-tools-for-technical-interview-prep',
    ],
  },
  {
    id: 'system-design',
    cta: {
      primaryHref: '/#waitlist',
      secondaryHref: '/resources',
    },
    slugs: [
      'how-to-practice-system-design-alone',
      'thinking-out-loud-in-coding-interviews',
      'system-design-vs-coding-interviews',
      'inside-an-ai-interview-simulator',
    ],
  },
  {
    id: 'behavioral',
    cta: {
      primaryHref: '/#waitlist',
      secondaryHref: '/resources',
    },
    slugs: [
      'behavioral-interview-prep-for-software-engineers',
      'how-to-answer-tell-me-about-yourself-engineering',
    ],
  },
  {
    id: 'senior',
    cta: {
      primaryHref: '/#waitlist',
      secondaryHref: '/resources',
    },
    slugs: ['senior-software-engineer-interview-prep', 'staff-engineer-interview-preparation'],
  },
  {
    id: 'teams',
    cta: {
      primaryHref: '/enterprise#contact',
      secondaryHref: '/enterprise',
    },
    slugs: [
      'qa-interview-practice-plan',
      'ai-interview-practice-for-engineering-teams',
      'peer-mock-interviews-vs-ai',
      'inside-an-ai-interview-simulator',
    ],
  },
];

export function findClusterBySlug(slug: string): BlogClusterDefinition | null {
  return BLOG_CLUSTERS.find((cluster) => cluster.slugs.includes(slug)) ?? null;
}
