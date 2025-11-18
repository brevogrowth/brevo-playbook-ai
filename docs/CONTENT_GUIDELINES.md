# Content Formatting Guidelines

This document defines the standard formatting rules for all content sections in the AI Marketing Playbook. Follow these guidelines to ensure consistency and maintain the clean, professional design system.

---

## 1. Page Structure

### Page Title

```tsx
<h1 className="mb-4">Section Name</h1>
<p className="text-xl text-gray-600">
  Brief description of the section
</p>
```

### Main Content Container

```tsx
<div className="space-y-16">{/* All main sections go here */}</div>
```

- **Spacing between sections**: Use `space-y-16` for generous breathing room between major sections
- This creates visual separation and improves readability

---

## 2. Section Headers (Level 1)

### Visual Hierarchy

```tsx
<div>
  <h2 className="mb-6 border-b border-gray-200 pb-3 text-3xl font-bold text-gray-900">
    👋 Section Title
  </h2>
  <div className="space-y-4">{/* Toggles or content */}</div>
</div>
```

### Rules:

- **Typography**: `text-3xl font-bold text-gray-900`
- **Spacing**: `mb-6 pb-3`
- **Visual separator**: `border-b border-gray-200` (subtle bottom border)
- **Emoji**: One subtle, relevant emoji per section (not mandatory, but adds personality)
- **Content spacing**: `space-y-4` between Toggles within the section

### Emoji Usage:

- **Maximum**: 1 emoji per main section title
- **Style**: Notion-style - subtle and meaningful
- **Examples**: 👋 Welcome, 🚀 Getting Started, 📊 Analytics, 🎯 Action Items, ✨ Highlights
- **Avoid**: Multiple emojis, overly bright emojis, irrelevant decorations

---

## 3. Toggles (Level 2)

### Standard Pattern

```tsx
<Toggle title="Subsection Title" level={2}>
  {/* Content here */}
</Toggle>
```

### Rules:

- **All Toggles closed by default**: Never use `defaultOpen`
- **Title**: Clear, descriptive, sentence case
- **Level**: Always use `level={2}` for subsections within main sections
- **No emojis in Toggle titles**: Keep them clean and professional

---

## 4. Color Blocks & Information Panels

### Standard Information Block (Preferred)

```tsx
<div className="rounded-lg border-l-4 border-brevo-green bg-brevo-cream p-5">
  <h5 className="mb-2 font-semibold text-brevo-green">Title</h5>
  <p className="text-sm text-gray-700">Content</p>
</div>
```

### Success Criteria / Checklist Blocks

```tsx
<div className="rounded-lg border-l-4 border-brevo-green bg-brevo-cream p-4">
  <p className="mb-2 text-sm font-semibold text-gray-dark">Success criteria:</p>
  <ul className="space-y-1 text-sm text-gray-700">
    <li>✅ Item 1</li>
    <li>✅ Item 2</li>
  </ul>
</div>
```

### Neutral Information Blocks

```tsx
<div className="border-l-4 border-gray-400 bg-gray-50 p-5">
  <h5 className="mb-2 font-semibold text-gray-dark">Title</h5>
  <p className="text-sm text-gray-700">Content</p>
</div>
```

### White Cards with Border

```tsx
<div className="rounded-lg border border-gray-200 bg-white p-5">
  <h5 className="mb-2 font-semibold text-brevo-green">Title</h5>
  <p className="text-sm text-gray-600">Content</p>
</div>
```

### Color Usage Rules:

✅ **DO USE**:

- `bg-brevo-cream` with `border-l-4 border-brevo-green` for highlighted information
- `bg-white` with `border border-gray-200` for standard content blocks
- `bg-gray-50` with `border-l-4 border-gray-400` for neutral information

❌ **DON'T USE**:

- ~~`bg-brevo-mint border-2 border-brevo-green`~~ (too bright, visually overwhelming)
- ~~`bg-brevo-mint`~~ as background color (reserve for very subtle accents only)
- Thick borders (`border-2`, `border-4`) except for left accent (`border-l-4`)

---

## 5. Typography

### Headings

- **h1** (Page title): Default from global styles
- **h2** (Main sections): `text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200`
- **h3** (Cards/Blocks): Not used - use `h5` instead
- **h4**: `font-semibold text-brevo-green mb-3`
- **h5**: `font-semibold text-sm text-brevo-green mb-2` or `font-semibold text-brevo-green mb-2`

### Body Text

- **Standard**: `text-sm text-gray-700` or `text-gray-600`
- **Emphasis**: `font-semibold text-gray-dark`
- **Muted**: `text-xs text-gray-600`
- **Strong**: `<strong>` tags within paragraphs

### Lists

```tsx
<ul className="ml-4 space-y-1 text-sm text-gray-700">
  <li>• Item 1</li>
  <li>• Item 2</li>
</ul>
```

---

## 6. Spacing System

### Between Elements

- **Major sections**: `space-y-16` (generous spacing)
- **Within sections**: `space-y-4` (moderate spacing between Toggles)
- **Within blocks**: `space-y-3` (compact spacing for related items)
- **Lists**: `space-y-1` (tight spacing for list items)
- **Paragraphs**: `mb-4` or `mb-3`

### Padding

- **Large blocks**: `p-6` or `p-5`
- **Standard blocks**: `p-4`
- **Compact elements**: `p-3`

### Margins

- **Bottom of headers**: `mb-6` for h2, `mb-4` for h4/h5
- **Between components**: Let `space-y-X` handle it
- **Top margin for special sections**: `mt-6` or `mt-4`

---

## 7. Cards Component

### Standard Card Usage

```tsx
<Card title="Title" variant="default">
  <p className="text-sm text-gray-600">Content</p>
</Card>
```

### Variants:

- `default`: White background, standard styling
- `success`: Green accent (use sparingly for wins/achievements)
- `highlight`: Brevo cream background for emphasis

### Grid Layout

```tsx
<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
  <Card title="Card 1" variant="default">
    ...
  </Card>
  <Card title="Card 2" variant="default">
    ...
  </Card>
</div>
```

---

## 8. Code Blocks

### Usage

```tsx
<CodeBlock title="Copy & Paste This Prompt" language="text" code={`Prompt content here...`} />
```

### Rules:

- Use for prompts, code snippets, templates
- Always include a descriptive title
- Use appropriate language (text, javascript, json, etc.)
- Keep prompts well-formatted with clear structure

---

## 9. Common Patterns

### Welcome/Introduction Pattern

```tsx
<div>
  <h2 className="mb-6 border-b border-gray-200 pb-3 text-3xl font-bold text-gray-900">
    👋 Welcome
  </h2>
  <div className="space-y-4">
    <Toggle title="First Topic" level={2}>
      {/* Content */}
    </Toggle>
    <Toggle title="Second Topic" level={2}>
      {/* Content */}
    </Toggle>
  </div>
</div>
```

### Phased Roadmap Pattern

```tsx
<Toggle title="PHASE 1: NAME (Timeline)" level={2}>
  <p className="mb-3 text-sm font-semibold text-brevo-green">Goal: Brief goal description</p>

  <div className="space-y-3">{/* Action items */}</div>

  <div className="mt-4 rounded-lg border-l-4 border-brevo-green bg-brevo-cream p-4">
    <p className="mb-2 text-sm font-semibold text-gray-dark">Success criteria:</p>
    <ul className="space-y-1 text-sm text-gray-700">
      <li>✅ Item 1</li>
    </ul>
  </div>
</Toggle>
```

### Comparison Pattern

```tsx
<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
  <div className="rounded bg-gray-100 p-4">
    <p className="text-sm font-semibold text-gray-dark">Old Way:</p>
    <p className="text-sm text-gray-600">Description</p>
  </div>
  <div className="rounded bg-brevo-cream p-4">
    <p className="text-sm font-semibold text-brevo-green">AI Way:</p>
    <p className="text-sm text-gray-700">Description</p>
  </div>
</div>
```

---

## 10. Quality Checklist

Before finalizing any section, verify:

- [ ] All h2 headers use the standard styling with emoji
- [ ] Spacing is `space-y-16` between major sections
- [ ] All Toggles are `level={2}` without `defaultOpen`
- [ ] No bright mint blocks (`bg-brevo-mint border-2`)
- [ ] Information blocks use `bg-brevo-cream border-l-4 border-brevo-green`
- [ ] Typography is consistent (sizes, colors, weights)
- [ ] Lists have proper spacing and bullets
- [ ] Cards are used appropriately with correct variants
- [ ] Mobile responsiveness is considered (grid layouts)
- [ ] Content is scannable with clear hierarchy

---

## 11. Brevo Color Palette Reference

### Primary Colors (Use These)

- **Brevo Green**: `#0B996E` (class: `bg-brevo-green`, `text-brevo-green`, `border-brevo-green`)
- **Brevo Cream**: `#FAF5E3` (class: `bg-brevo-cream`) - For subtle backgrounds
- **Brevo Mint**: `#D7FEC8` - ⚠️ Use VERY sparingly for small accents only

### Neutral Colors

- **Text Dark**: `text-gray-900` (main headings)
- **Text Medium**: `text-gray-800`, `text-gray-700` (body)
- **Text Light**: `text-gray-600`, `text-gray-500` (secondary)
- **Borders**: `border-gray-200`, `border-gray-300`
- **Backgrounds**: `bg-white`, `bg-gray-50`, `bg-gray-100`

---

## 12. Anti-Patterns (What NOT to Do)

❌ **Avoid these patterns**:

- Using `bg-brevo-mint border-2 border-brevo-green` for large blocks
- Multiple emojis in titles
- Dense spacing (`space-y-2` or `space-y-3` between major sections)
- Inconsistent heading levels
- `defaultOpen` on Toggles
- Mixing different border styles (stick to `border-l-4` for accents)
- Very small text (`text-xs`) for important content
- Numbers in section titles ("1. Getting Started" → "Getting Started")

---

## Version History

- **v1.0** - Initial guidelines based on Getting Started section refinements (2025)
