'use client'

import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui'
import Sidebar from '@/components/layout/Sidebar'
import { Briefcase, Zap, Target, BookOpen } from 'lucide-react'

export default function Home() {
  const router = useRouter()

  const entryPoints = [
    {
      title: "I'm a Leader 💼",
      description:
        'Strategic Foundations + Executive Summaries to drive AI adoption and build the business case',
      icon: Briefcase,
      path: '/ai-marketing/strategic-foundations',
      variant: 'default' as const,
    },
    {
      title: 'I Need Quick Wins ⚡',
      description:
        'Ready-to-use workflows and prompts from all sections—implement today for immediate impact',
      icon: Zap,
      path: '/ai-marketing/content-seo',
      variant: 'default' as const,
    },
    {
      title: "I'm Executing 🎯",
      description:
        'Operational Playbooks (Content, Paid, Social, Email, Creative, Analytics) for daily tasks',
      icon: Target,
      path: '/ai-marketing/content-seo',
      variant: 'default' as const,
    },
    {
      title: "I'm Learning 📚",
      description: 'Skills & Mastery + Resources Hub—courses, tools, templates, and community',
      icon: BookOpen,
      path: '/ai-marketing/skills-mastery',
      variant: 'default' as const,
    },
  ]

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Sidebar />
      <main className="flex-1 lg:ml-64">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-20 text-center">
            <div className="mb-8 inline-block">
              <h1 className="-rotate-1 transform whitespace-nowrap rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-brevo-cream to-gray-100 px-8 py-6 text-5xl font-black text-gray-900 shadow-lg transition-transform hover:rotate-0 md:text-6xl lg:text-7xl">
                AI Marketing Playbook
              </h1>
            </div>

            <p className="mx-auto mb-16 max-w-3xl text-2xl font-medium text-gray-700">
              Your complete guide to adopting AI in marketing operations
            </p>

            <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-lg italic leading-relaxed text-gray-800">
                "As AI transforms business, marketers hold a pivotal role in shaping how their
                company evolves.
                <br />
                You can choose to simply adapt and react. Or you can be the driving force.
                <br />
                Leading this transformation requires staying ahead of AI practices. Understanding
                new capabilities. Knowing how to apply them strategically.
                <br />
                This playbook gives you that edge. It turns you from an observer of change into an
                architect of your company's AI-powered future."
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="mb-16">
            <h2 className="mb-3 text-center text-3xl font-bold text-gray-900">Choose Your Path</h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">
              Jump straight to what matters most for your role and goals
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {entryPoints.map((entry) => (
                <button
                  key={entry.title}
                  onClick={() => router.push(entry.path)}
                  className="group transform cursor-pointer text-left transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2"
                >
                  <Card
                    title={entry.title}
                    description={entry.description}
                    icon={entry.icon}
                    variant={entry.variant}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* What's Inside */}
          <div className="mb-16">
            <h2 className="mb-3 text-center text-3xl font-bold text-gray-900">What's Inside</h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">
              10 comprehensive sections covering every aspect of AI adoption in marketing
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <button
                onClick={() => router.push('/ai-marketing/getting-started')}
                className="cursor-pointer rounded-lg border border-gray-200 bg-white p-5 text-left transition-all hover:border-brevo-green hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2"
              >
                <h3 className="mb-2 font-semibold text-gray-900">Getting Started 🚀</h3>
                <p className="text-sm text-gray-600">Maturity assessment & first steps</p>
              </button>
              <button
                onClick={() => router.push('/ai-marketing/strategic-foundations')}
                className="cursor-pointer rounded-lg border border-gray-200 bg-white p-5 text-left transition-all hover:border-brevo-green hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2"
              >
                <h3 className="mb-2 font-semibold text-gray-900">Strategic Foundations 💼</h3>
                <p className="text-sm text-gray-600">Business case, ROI, team design</p>
              </button>
              <button
                onClick={() => router.push('/ai-marketing/content-seo')}
                className="cursor-pointer rounded-lg border border-gray-200 bg-white p-5 text-left transition-all hover:border-brevo-green hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2"
              >
                <h3 className="mb-2 font-semibold text-gray-900">Content & SEO ⭐</h3>
                <p className="text-sm text-gray-600">Create and optimize at scale</p>
              </button>
              <button
                onClick={() => router.push('/ai-marketing/paid-media')}
                className="cursor-pointer rounded-lg border border-gray-200 bg-white p-5 text-left transition-all hover:border-brevo-green hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2"
              >
                <h3 className="mb-2 font-semibold text-gray-900">Paid Media ⭐</h3>
                <p className="text-sm text-gray-600">Performance marketing workflows</p>
              </button>
              <button
                onClick={() => router.push('/ai-marketing/email-lifecycle')}
                className="cursor-pointer rounded-lg border border-gray-200 bg-white p-5 text-left transition-all hover:border-brevo-green hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2"
              >
                <h3 className="mb-2 font-semibold text-gray-900">Email & Lifecycle ⭐</h3>
                <p className="text-sm text-gray-600">AI-powered email campaigns</p>
              </button>
              <button
                onClick={() => router.push('/ai-marketing/creative-design')}
                className="cursor-pointer rounded-lg border border-gray-200 bg-white p-5 text-left transition-all hover:border-brevo-green hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2"
              >
                <h3 className="mb-2 font-semibold text-gray-900">Creative & Design ⭐</h3>
                <p className="text-sm text-gray-600">Visual content creation</p>
              </button>
              <button
                onClick={() => router.push('/ai-marketing/analytics-insights')}
                className="cursor-pointer rounded-lg border border-gray-200 bg-white p-5 text-left transition-all hover:border-brevo-green hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2"
              >
                <h3 className="mb-2 font-semibold text-gray-900">Analytics & Insights ⭐</h3>
                <p className="text-sm text-gray-600">Data-driven decision making</p>
              </button>
              <button
                onClick={() => router.push('/ai-marketing/skills-mastery')}
                className="cursor-pointer rounded-lg border border-gray-200 bg-white p-5 text-left transition-all hover:border-brevo-green hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2"
              >
                <h3 className="mb-2 font-semibold text-gray-900">Skills & Mastery 📚</h3>
                <p className="text-sm text-gray-600">Prompt engineering & training</p>
              </button>
              <button
                onClick={() => router.push('/ai-marketing/governance')}
                className="cursor-pointer rounded-lg border border-gray-200 bg-white p-5 text-left transition-all hover:border-brevo-green hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2"
              >
                <h3 className="mb-2 font-semibold text-gray-900">Governance 🛡️</h3>
                <p className="text-sm text-gray-600">Quality, legal, risk management</p>
              </button>
              <button
                onClick={() => router.push('/ai-marketing/resources')}
                className="cursor-pointer rounded-lg border border-gray-200 bg-white p-5 text-left transition-all hover:border-brevo-green hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2"
              >
                <h3 className="mb-2 font-semibold text-gray-900">Resources Hub 🎁</h3>
                <p className="text-sm text-gray-600">Tools, templates, community</p>
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-brevo-green/20 bg-gradient-to-r from-brevo-green/5 to-emerald-50 p-8 text-center">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Ready to Get Started?</h3>
            <p className="mx-auto mb-4 max-w-xl text-gray-600">
              Use the sidebar to navigate through all 11 sections, or jump directly to what matters
              most for you
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => router.push('/ai-marketing/getting-started')}
                className="rounded-lg bg-brevo-green px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2"
              >
                Start with Foundations
              </button>
              <button
                onClick={() => router.push('/ai-marketing/content-seo')}
                className="rounded-lg border border-brevo-green bg-white px-6 py-3 font-medium text-brevo-green transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brevo-green focus:ring-offset-2"
              >
                Jump to Quick Wins
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
