# Development Guide

Guide technique complet pour développer et déployer le AI Marketing Playbook.

## 🏗️ Architecture

### Stack Technique

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + Custom Brevo Theme
- **Icons:** Lucide React
- **Deployment:** Vercel (recommandé)

### Structure des Dossiers

```
brevo-playbook-ai/
├── app/                    # Pages Next.js 14 (App Router)
│   ├── layout.tsx         # Root layout + metadata
│   ├── page.tsx           # Homepage (4 entry points)
│   ├── getting-started/   # Section 1 (RÉFÉRENCE - 1200 lignes)
│   ├── strategic-foundations/
│   ├── content/, paid-media/, social/, email/, creative/, analytics/
│   ├── skills/, governance/, resources/
│   └── globals.css        # Tailwind + customs
│
├── components/            # Composants réutilisables
│   ├── Toggle.tsx        # Collapsible (le plus utilisé)
│   ├── Card.tsx          # Content cards (3 variants)
│   ├── CodeBlock.tsx     # Code/prompts avec copie
│   ├── Button.tsx        # CTA buttons
│   ├── Sidebar.tsx       # Navigation + SearchBar
│   ├── PageLayout.tsx    # Wrapper pages
│   └── Breadcrumb.tsx
│
├── public/               # Assets statiques
│   ├── favicon.png
│   └── brevo-logo-white.png
│
└── docs/                 # Documentation
    ├── CONTENT_GUIDELINES.md  # Pour content creators
    └── DEVELOPMENT.md         # Ce fichier
```

## 🎨 Composants Réutilisables

### Toggle (Collapsible Sections)

**Le composant le plus utilisé du projet.**

```tsx
import Toggle from '@/components/Toggle'

// Pattern standard (niveau 2)
;<Toggle title="Subsection Title" level={2}>
  <p>Content here</p>
</Toggle>

// IMPORTANT: Ne jamais utiliser defaultOpen
// ❌ <Toggle title="..." defaultOpen>
// ✅ <Toggle title="..." level={2}>
```

**Props:**

- `title: string` - Titre affiché
- `level?: 1 | 2` - Niveau hiérarchique (défaut: 1)
- `defaultOpen?: boolean` - NE PAS UTILISER (toujours false)
- `children: React.ReactNode` - Contenu

### Card

```tsx
import Card from '@/components/Card'
import { Lightbulb } from 'lucide-react'

// Carte simple
<Card
  title="Title"
  description="Description"
  variant="default"
/>

// Avec icône
<Card
  title="Quick Win"
  description="5 minutes"
  icon={Lightbulb}
  variant="success"
/>

// Contenu custom
<Card title="Custom" variant="default">
  <ul className="text-sm space-y-1">
    <li>• Item 1</li>
  </ul>
</Card>
```

**Variants:**

- `default` - Blanc, border gris
- `success` - Accent vert Brevo
- `highlight` - Background cream

### CodeBlock

```tsx
import CodeBlock from '@/components/CodeBlock'

;<CodeBlock
  title="Optional Title"
  language="text"
  code={`Your prompt here
Can be multi-line`}
/>
```

### Button

```tsx
import Button from '@/components/Button'
import { Download } from 'lucide-react'

<Button variant="primary" size="md">
  Get Started
</Button>

<Button
  icon={Download}
  variant="primary"
  href="/files/template.pdf"
>
  Download Template
</Button>
```

**Variants:** `primary`, `secondary`, `outline`
**Sizes:** `sm`, `md`, `lg`

### PageLayout

**Wrapper obligatoire pour toutes les pages de contenu.**

```tsx
import PageLayout from '@/components/PageLayout'

export default function MyPage() {
  return (
    <PageLayout breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Section Name' }]}>
      {/* Votre contenu ici */}
    </PageLayout>
  )
}
```

## 🎨 Design System

### Couleurs Brevo (Tailwind Classes)

```css
/* Primary - Utilisation principale */
bg-brevo-green    (#0B996E)
text-brevo-green
border-brevo-green

/* Cream - Backgrounds subtils */
bg-brevo-cream    (#FAF5E3)

/* Mint - UTILISER AVEC MODÉRATION */
bg-brevo-mint     (#D7FEC8)

/* Gris - Textes et borders */
text-gray-900, 800, 700, 600
bg-gray-50, 100
border-gray-200, 300
```

### Spacing System

```tsx
// Entre sections principales
<div className="space-y-16">

// Entre éléments dans une section
<div className="space-y-4">

// Entre items dans un bloc
<div className="space-y-3">
```

### Typography

```tsx
// Page title (auto dans PageLayout)
<h1 className="mb-4">Title</h1>

// Section headers (niveau 1)
<h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
  👋 Section Title
</h2>

// Card titles / Block headers
<h5 className="font-semibold text-brevo-green mb-2">Title</h5>

// Body text
<p className="text-sm text-gray-700">Regular text</p>
<p className="text-sm text-gray-600">Secondary text</p>
```

### Patterns de Blocs

```tsx
// Information block (PATTERN STANDARD)
<div className="bg-brevo-cream border-l-4 border-brevo-green p-5 rounded-lg">
  <h5 className="font-semibold text-brevo-green mb-2">Title</h5>
  <p className="text-sm text-gray-700">Content</p>
</div>

// Success criteria / Checklist
<div className="bg-brevo-cream border-l-4 border-brevo-green p-4 rounded-lg">
  <p className="text-sm font-semibold text-gray-dark mb-2">Success criteria:</p>
  <ul className="text-sm space-y-1 text-gray-700">
    <li>✅ Item 1</li>
    <li>✅ Item 2</li>
  </ul>
</div>

// Neutral info
<div className="bg-gray-50 border-l-4 border-gray-400 p-5">
  <p className="text-sm text-gray-700">Neutral information</p>
</div>
```

## 📝 Créer une Nouvelle Page

### 1. Créer le fichier

```bash
mkdir app/my-section
touch app/my-section/page.tsx
```

### 2. Template de base

```tsx
import PageLayout from '@/components/PageLayout'
import Toggle from '@/components/Toggle'
import Card from '@/components/Card'

export default function MySectionPage() {
  return (
    <PageLayout breadcrumb={[{ label: 'Home', href: '/' }, { label: 'My Section' }]}>
      <div className="mb-8">
        <h1 className="mb-4">My Section</h1>
        <p className="text-xl text-gray-600">Section description</p>
      </div>

      <div className="space-y-16">
        {/* Section principale */}
        <div>
          <h2 className="mb-6 border-b border-gray-200 pb-3 text-3xl font-bold text-gray-900">
            👋 First Section
          </h2>
          <div className="space-y-4">
            <Toggle title="Subsection" level={2}>
              <p className="text-gray-600">Content here</p>
            </Toggle>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
```

### 3. Ajouter à la navigation

Modifier `components/Sidebar.tsx` :

```tsx
const sections = [
  // ... existing sections
  {
    id: 'my-section',
    name: 'My Section',
    icon: MyIcon,
    path: '/my-section',
  },
]
```

## 🚀 Déploiement

### Déploiement Vercel (Recommandé)

**1. Push sur GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

**2. Déployer sur Vercel**

1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer "Add New Project"
3. Importer le repo GitHub
4. Vercel détecte auto Next.js
5. Cliquer "Deploy"

➜ Site live en ~2 minutes !

**3. Domaine custom (optionnel)**

1. Project Settings → Domains
2. Ajouter domaine
3. Configurer DNS

### Alternatives

**Netlify:**

```bash
npm run build
# Upload .next folder
```

**Self-hosted:**

```bash
npm run build
npm start  # Port 3000
```

### Updates

```bash
git add .
git commit -m "Update content"
git push
# Vercel auto-deploy
```

## ⚡ Performance

### Optimisations Intégrées

- ✅ Server-side rendering (SSR)
- ✅ Static generation
- ✅ Automatic code splitting
- ✅ Font optimization (Inter)
- ✅ Tailwind CSS purging

### Checklist Production

- [ ] Meta tags SEO
- [ ] og:image pour social sharing
- [ ] Analytics (Vercel Analytics)
- [ ] 404 page custom
- [ ] Sitemap.xml

## 🔧 Commandes

```bash
# Développement
npm run dev

# Build production
npm run build

# Lancer production en local
npm start

# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📊 Fichiers de Référence

**Pour comprendre la structure:**

- `app/getting-started/page.tsx` - Section complète (1200 lignes)
- `components/Toggle.tsx` - Composant le plus utilisé
- `components/PageLayout.tsx` - Layout wrapper

**Pour le design:**

- `tailwind.config.ts` - Config Brevo colors
- `app/globals.css` - Styles globaux
- `docs/CONTENT_GUIDELINES.md` - Guidelines de formatage

## 🐛 Debugging

### Server Won't Start

```bash
# Clear cache
rm -rf .next
npm install
npm run dev
```

### TypeScript Errors

```bash
npx tsc --noEmit
```

### Tailwind Classes Not Working

- Vérifier que le fichier est dans `content` de `tailwind.config.ts`
- Redémarrer le dev server

## 📚 Ressources

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [Vercel Docs](https://vercel.com/docs)

---

**Last Updated:** Octobre 2024
**Contact:** Voir CLAUDE.md pour le contexte complet
