import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import PageLayout from '@/components/layout/PageLayout'
import { Toggle, Card, CodeBlock } from '@/components/ui'
import { getSectionContent, getSectionSlugs, getPlaybookIds } from '@/lib/mdx'
import { aiMarketingPlaybook } from '@/content/playbooks/ai-marketing/playbook.config'

// Components available in MDX
const components = {
  Toggle,
  Card,
  CodeBlock,
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props}>{children}</h2>
  ),
  h5: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 {...props}>{children}</h5>
  ),
  h6: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6 {...props}>{children}</h6>
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => <table {...props} />,
  th: (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => <th {...props} />,
  td: (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => <td {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul {...props} />,
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => <li {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p {...props} />,
  div: (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
}

interface PageProps {
  params: {
    playbook: string
    section: string
  }
}

export async function generateStaticParams() {
  const playbookIds = getPlaybookIds()
  const paths: Array<{ playbook: string; section: string }> = []

  for (const playbookId of playbookIds) {
    const sectionSlugs = getSectionSlugs(playbookId)
    for (const sectionSlug of sectionSlugs) {
      paths.push({
        playbook: playbookId,
        section: sectionSlug,
      })
    }
  }

  return paths
}

export default async function SectionPage({ params }: PageProps) {
  const { playbook, section } = params

  // Get section content
  const sectionData = await getSectionContent(playbook, section)

  if (!sectionData) {
    notFound()
  }

  const { frontmatter, content } = sectionData

  // Get playbook config (for now hardcoded, later can be dynamic)
  const sectionConfig = aiMarketingPlaybook.sections.find((s) => s.slug === section)

  return (
    <PageLayout
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: sectionConfig?.title || frontmatter.title },
      ]}
    >
      <div className="mb-8">
        <h1 className="mb-4">
          {frontmatter.emoji} {frontmatter.title}
        </h1>
        {frontmatter.description && (
          <p className="text-xl text-gray-600">{frontmatter.description}</p>
        )}
      </div>

      <MDXRemote source={content} components={components} />
    </PageLayout>
  )
}
