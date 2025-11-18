# Migration vers MDX - Guide Complet

Ce document explique la nouvelle architecture MDX du playbook et comment migrer les sections existantes.

## 🎯 Objectifs de la Migration

1. **Séparer contenu et code** : Le contenu devient éditable sans toucher au code React
2. **Faciliter la duplication** : Créer un nouveau playbook = dupliquer un dossier
3. **Simplifier l'édition** : Markdown + composants React pour le meilleur des deux mondes
4. **Maintenir la richesse** : Garder tous les composants actuels (Toggle, Card, tables)

## 📁 Nouvelle Architecture

```
content/
  playbooks/
    ai-marketing/                    # 🆕 Dossier du playbook
      playbook.config.ts             # Config globale (sections, entry points)
      sections/                      # 🆕 Sections en MDX
        strategic-foundations.mdx
        content-seo.mdx
        ...

lib/
  mdx.ts                             # 🆕 Helpers pour charger le MDX

app/
  [playbook]/
    [section]/
      page.tsx                       # 🆕 Route dynamique
```

## 🔧 Setup Déjà Fait

### Dépendances Installées

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
npm install next-mdx-remote gray-matter
```

### Fichiers Créés

1. **`content/playbooks/ai-marketing/playbook.config.ts`**
   - Config centrale du playbook
   - Liste des sections avec metadata
   - Entry points

2. **`lib/mdx.ts`**
   - `getSectionContent(playbookId, sectionSlug)` - Charge et compile un fichier MDX
   - `getSectionSlugs(playbookId)` - Liste toutes les sections d'un playbook
   - `getPlaybookIds()` - Liste tous les playbooks

3. **`app/[playbook]/[section]/page.tsx`**
   - Route dynamique qui rend n'importe quelle section
   - Charge le MDX et l'affiche avec PageLayout

## 📝 Format MDX

### Structure d'un Fichier MDX

```mdx
---
title: Strategic Foundations
emoji: 💼
order: 2
description: Build the business case...
---

import Toggle from '@/components/Toggle'
import Card from '@/components/Card'

<div className="space-y-16">

{/* Section principale */}

<div>
  <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
    💼 The Business Case for AI
  </h2>

  <div className="space-y-4">
    <Toggle title="Why Invest Now" level={2}>
      <p className="text-gray-600 mb-4">
        Content here...
      </p>
    </Toggle>
  </div>
</div>

</div>
```

### Composants Disponibles

Tous les composants existants sont disponibles dans MDX :

- `<Toggle>` - Sections collapsibles
- `<Card>` - Content cards
- Tous les éléments HTML avec className Tailwind
- Tables, listes, etc.

## 🔄 Process de Migration (Par Section)

### Étape 1: Créer le Fichier MDX

```bash
touch content/playbooks/ai-marketing/sections/content-seo.mdx
```

### Étape 2: Ajouter le Frontmatter

```mdx
---
title: Content & SEO
emoji: ⭐
order: 3
description: Create and optimize at scale
---
```

### Étape 3: Importer les Composants

```mdx
import Toggle from '@/components/Toggle'
import Card from '@/components/Card

'
```

### Étape 4: Copier le Contenu TSX

Depuis `app/content/page.tsx` :

1. Copier tout le contenu **à l'intérieur du return()**
2. Coller dans le MDX (après les imports)
3. Supprimer le `<PageLayout>` wrapper (géré par la route dynamique)
4. Supprimer le header h1 (géré par la route dynamique)

### Étape 5: Adapter le JSX pour MDX

**Changements nécessaires :**

```diff
- {sections.map((section) => (
-   <div key={section.id}>
+ {[{id: 1, title: "..."}, {id: 2, title: "..."}].map((section) => (
+   <div key={section.id}>

- <Toggle title="Example" defaultOpen>
+ <Toggle title="Example" level={2}>

// Les commentaires JSX doivent être dans des blocs
- /* Comment */
+ {/* Comment */}
```

### Étape 6: Tester

```bash
# Naviguer vers:
http://localhost:3005/ai-marketing/content-seo
```

### Étape 7: Nettoyer (Une fois validé)

```bash
# Renommer l'ancien fichier TSX
mv app/content/page.tsx app/content/page.tsx.old

# Ou supprimer si tout fonctionne
rm app/content/page.tsx
```

## ✅ Checklist par Section

- [ ] **Getting Started**
  - [ ] Créer `getting-started.mdx`
  - [ ] Migrer le contenu
  - [ ] Tester la route
  - [ ] Supprimer `app/getting-started/page.tsx`

- [x] **Strategic Foundations** ✅ (POC fait)
  - [x] Créer `strategic-foundations.mdx`
  - [ ] Migrer TOUT le contenu (actuellement partiel)
  - [ ] Tester
  - [ ] Supprimer l'ancien

- [ ] **Content & SEO**
- [ ] **Paid Media**
- [ ] **Email & Lifecycle**
- [ ] **Creative & Design**
- [ ] **Analytics & Insights**
- [ ] **Skills & Mastery**
- [ ] **Governance**
- [ ] **Resources Hub**

## 🚀 Créer un Nouveau Playbook

### 1. Dupliquer le Dossier

```bash
cp -r content/playbooks/ai-marketing content/playbooks/sales-playbook
```

### 2. Éditer `playbook.config.ts`

```typescript
export const salesPlaybook = {
  id: 'sales-playbook',
  name: 'Sales Playbook',
  description: 'Your guide to AI in sales...',
  color: '#0B6E99', // Nouvelle couleur
  sections: [
    {
      slug: 'prospecting',
      title: 'AI-Powered Prospecting',
      emoji: '🎯',
      description: '...',
      order: 1,
    },
    // ...
  ],
}
```

### 3. Créer les Sections MDX

```bash
# Dans content/playbooks/sales-playbook/sections/
touch prospecting.mdx
touch outreach.mdx
# ...
```

### 4. C'est Tout !

Les routes sont générées automatiquement :

- `/sales-playbook/prospecting`
- `/sales-playbook/outreach`
- ...

## 🎨 Styles et Composants

### Pattern Standard : Section Principale

```mdx
<div>
  <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
    💼 Section Title
  </h2>

  <div className="space-y-4">
    <Toggle title="Subsection" level={2}>
      Content...
    </Toggle>
  </div>
</div>
```

### Pattern : Info Block

```mdx
<div className="rounded-lg border-l-4 border-brevo-green bg-brevo-cream p-5">
  <h5 className="mb-3 font-semibold text-brevo-green">Title:</h5>
  <ul className="space-y-2 text-sm text-gray-700">
    <li>• Point 1</li>
    <li>• Point 2</li>
  </ul>
</div>
```

### Pattern : Table

```mdx
<table className="w-full border border-gray-200 text-sm">
  <thead>
    <tr className="border-b bg-gray-50">
      <th className="p-3 text-left font-semibold">Column 1</th>
      <th className="p-3 text-left font-semibold">Column 2</th>
    </tr>
  </thead>
  <tbody className="text-gray-700">
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">Value 1</td>
      <td className="p-3">Value 2</td>
    </tr>
  </tbody>
</table>
```

## ⚠️ Limitations Connues

1. **Pas de logique complexe** : Pas de `useState`, `useEffect`, etc. dans MDX
   - Solution : Créer un composant React séparé si nécessaire

2. **Imports limités** : Seulement les composants explicitement importés
   - Solution : Ajouter les composants dans l'import list du MDX

3. **Pas de dynamic imports** : Tous les imports sont statiques
   - Solution : Pré-importer tous les composants nécessaires

## 🐛 Troubleshooting

### Erreur : "Cannot find module '@/lib/mdx'"

```bash
# Vérifier que lib/mdx.ts existe
ls lib/mdx.ts

# Redémarrer le serveur
npm run dev
```

### Erreur : "MDX component not found"

Ajouter le composant dans la liste des imports du fichier MDX :

```mdx
import MissingComponent from '@/components/MissingComponent

'
```

### Section ne s'affiche pas

1. Vérifier que le fichier `.mdx` existe dans `content/playbooks/{playbook}/sections/`
2. Vérifier que le slug dans `playbook.config.ts` correspond au nom du fichier
3. Clear cache : `rm -rf .next && npm run dev`

## 📊 Comparaison Avant/Après

### Avant (TSX)

```typescript
// app/strategic-foundations/page.tsx (1200+ lignes)
export default function StrategicFoundationsPage() {
  return (
    <PageLayout>
      <h1>Strategic Foundations</h1>
      <Toggle title="...">
        <p>Long content mixed with code...</p>
      </Toggle>
      {/* 1200 lignes de contenu + code mélangés */}
    </PageLayout>
  )
}
```

**Problèmes :**

- Contenu = Code
- Dupliquer = Copier 1200 lignes
- Éditer = Connaître React

### Après (MDX)

```mdx
## <!-- content/playbooks/ai-marketing/sections/strategic-foundations.mdx -->

title: Strategic Foundations
emoji: 💼

---

import Toggle from '@/components/Toggle'

<Toggle title="...">
  <p>Content separated from code</p>
</Toggle>
```

**Avantages :**

- Contenu séparé du code
- Dupliquer = Copier dossier
- Éditer = Markdown simple

## 🎯 Prochaines Étapes

1. ✅ POC validé (Strategic Foundations partiel)
2. **Phase 1** : Migrer toutes les sections existantes (8-10h)
3. **Phase 2** : Supprimer les anciens fichiers TSX
4. **Phase 3** : Documenter pour les content creators
5. **Phase 4** : Créer templates pour nouveaux playbooks

## 📚 Ressources

- [MDX Documentation](https://mdxjs.com/)
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- [Gray Matter](https://github.com/jonschlinkert/gray-matter)

---

**Date de création :** Octobre 2024
**Status :** Architecture validée, migration en cours
