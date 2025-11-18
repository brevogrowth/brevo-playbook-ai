import {
  Rocket,
  Briefcase,
  FileText,
  DollarSign,
  Mail,
  Palette,
  BarChart,
  GraduationCap,
  Shield,
  Gift,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavigationSection {
  id: string
  name: string
  icon: LucideIcon
  path: string
}

export const NAVIGATION_SECTIONS: NavigationSection[] = [
  {
    id: 'getting-started',
    name: 'Getting Started',
    icon: Rocket,
    path: '/ai-marketing/getting-started',
  },
  {
    id: 'strategic-foundations',
    name: 'Strategic Foundations',
    icon: Briefcase,
    path: '/ai-marketing/strategic-foundations',
  },
  {
    id: 'content',
    name: 'Content & SEO',
    icon: FileText,
    path: '/ai-marketing/content',
  },
  {
    id: 'paid-media',
    name: 'Paid Media',
    icon: DollarSign,
    path: '/ai-marketing/paid-media',
  },
  {
    id: 'email',
    name: 'Email & Lifecycle',
    icon: Mail,
    path: '/ai-marketing/email',
  },
  {
    id: 'creative',
    name: 'Creative & Design',
    icon: Palette,
    path: '/ai-marketing/creative',
  },
  {
    id: 'analytics',
    name: 'Analytics & Insights',
    icon: BarChart,
    path: '/ai-marketing/analytics',
  },
  {
    id: 'skills',
    name: 'Skills & Mastery',
    icon: GraduationCap,
    path: '/ai-marketing/skills',
  },
  {
    id: 'governance',
    name: 'Governance',
    icon: Shield,
    path: '/ai-marketing/governance',
  },
  {
    id: 'resources',
    name: 'Resources Hub',
    icon: Gift,
    path: '/ai-marketing/resources',
  },
] as const
