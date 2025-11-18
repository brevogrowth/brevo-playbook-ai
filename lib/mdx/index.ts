import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/playbooks')

export interface SectionFrontmatter {
  title: string
  emoji: string
  order: number
  description: string
}

export interface SectionData {
  frontmatter: SectionFrontmatter
  content: string
  slug: string
}

/**
 * Get section content from MDX file
 */
export async function getSectionContent(
  playbookId: string,
  sectionSlug: string
): Promise<SectionData | null> {
  const filePath = path.join(contentDirectory, playbookId, 'sections', `${sectionSlug}.mdx`)

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    frontmatter: data as SectionFrontmatter,
    content,
    slug: sectionSlug,
  }
}

/**
 * Get all section slugs for a playbook
 */
export function getSectionSlugs(playbookId: string): string[] {
  const sectionsPath = path.join(contentDirectory, playbookId, 'sections')

  if (!fs.existsSync(sectionsPath)) {
    return []
  }

  const files = fs.readdirSync(sectionsPath)

  return files.filter((file) => file.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ''))
}

/**
 * Get all playbook IDs
 */
export function getPlaybookIds(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  return fs.readdirSync(contentDirectory).filter((file) => {
    return fs.statSync(path.join(contentDirectory, file)).isDirectory()
  })
}
