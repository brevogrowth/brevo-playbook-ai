export const aiMarketingPlaybook = {
  id: 'ai-marketing',
  name: 'AI Marketing Playbook',
  description: 'Your complete guide to adopting AI in marketing operations',
  color: '#0B996E',
  sections: [
    {
      slug: 'getting-started',
      title: 'Getting Started',
      emoji: '🚀',
      description: 'Maturity assessment & first steps',
      order: 1,
    },
    {
      slug: 'strategic-foundations',
      title: 'Strategic Foundations',
      emoji: '💼',
      description: 'Business case, ROI, team design',
      order: 2,
    },
    {
      slug: 'content',
      title: 'Content & SEO',
      emoji: '⭐',
      description: 'Create and optimize at scale',
      order: 3,
    },
    {
      slug: 'paid-media',
      title: 'Paid Media',
      emoji: '⭐',
      description: 'Performance marketing workflows',
      order: 4,
    },
    {
      slug: 'email',
      title: 'Email & Lifecycle',
      emoji: '⭐',
      description: 'AI-powered email campaigns',
      order: 5,
    },
    {
      slug: 'creative',
      title: 'Creative & Design',
      emoji: '⭐',
      description: 'Visual content creation',
      order: 6,
    },
    {
      slug: 'analytics',
      title: 'Analytics & Insights',
      emoji: '⭐',
      description: 'Data-driven decision making',
      order: 7,
    },
    {
      slug: 'skills',
      title: 'Skills & Mastery',
      emoji: '📚',
      description: 'Prompt engineering & training',
      order: 8,
    },
    {
      slug: 'governance',
      title: 'Governance',
      emoji: '🛡️',
      description: 'Quality, legal, risk management',
      order: 9,
    },
    {
      slug: 'resources',
      title: 'Resources Hub',
      emoji: '🎁',
      description: 'Tools, templates, community',
      order: 10,
    },
  ],
  entryPoints: [
    {
      title: "I'm a Leader 💼",
      description:
        'Strategic Foundations + Executive Summaries to drive AI adoption and build the business case',
      path: '/ai-marketing/strategic-foundations',
    },
    {
      title: 'I Need Quick Wins ⚡',
      description:
        'Ready-to-use workflows and prompts from all sections—implement today for immediate impact',
      path: '/ai-marketing/content',
    },
    {
      title: "I'm Executing 🎯",
      description:
        'Operational Playbooks (Content, Paid, Email, Creative, Analytics) for daily tasks',
      path: '/ai-marketing/content',
    },
    {
      title: "I'm Learning 📚",
      description: 'Skills & Mastery + Resources Hub—courses, tools, templates, and community',
      path: '/ai-marketing/skills',
    },
  ],
}

export type PlaybookConfig = typeof aiMarketingPlaybook
