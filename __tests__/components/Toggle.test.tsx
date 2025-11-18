import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Toggle from '@/components/ui/Toggle'

describe('Toggle Component', () => {
  it('should render title correctly', () => {
    render(<Toggle title="Test Title">Content</Toggle>)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('should be closed by default', () => {
    render(<Toggle title="Test">Content</Toggle>)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it('should toggle content on click', () => {
    render(<Toggle title="Test">Content</Toggle>)
    const button = screen.getByRole('button')

    // Initially closed
    expect(screen.queryByText('Content')).not.toBeInTheDocument()

    // Open on click
    fireEvent.click(button)
    expect(screen.getByText('Content')).toBeInTheDocument()

    // Close on second click
    fireEvent.click(button)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it('should respect defaultOpen prop', () => {
    render(
      <Toggle title="Test" defaultOpen>
        Content
      </Toggle>
    )
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('should have proper ARIA attributes', () => {
    render(<Toggle title="Test">Content</Toggle>)
    const button = screen.getByRole('button')

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-controls')

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('should clamp level between 1 and 3', () => {
    const { container } = render(
      <Toggle title="Test" level={5 as any}>
        Content
      </Toggle>
    )
    // Level should be clamped to 3
    const heading = container.querySelector('[role="heading"]')
    expect(heading).toHaveAttribute('aria-level', '4') // level 3 + 1
  })

  it('should return null for invalid title', () => {
    const { container } = render(<Toggle title="">Content</Toggle>)
    expect(container).toBeEmptyDOMElement()
  })
})
