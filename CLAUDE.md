# AI Marketing Playbook - Contexte Projet

## Vue d'ensemble

Mini-site Next.js 14 pour le **AI Marketing Playbook de Brevo** - guide complet pour aider les marketeurs (CMO → Practitioners) à adopter l'IA dans leurs opérations marketing quotidiennes.

## Architecture du Projet

### Structure des Pages (10 sections)

```
/getting-started       → 🚀 Getting Started (maturity assessment, welcome)
/strategic-foundations → 💼 Strategic Foundations (business case, ROI)
/content              → ⭐ Content & SEO
/paid-media           → ⭐ Paid Media
/email                → ⭐ Email & Lifecycle
/creative             → ⭐ Creative & Design
/analytics            → ⭐ Analytics & Insights
/skills               → 📚 Skills & Mastery
/governance           → 🛡️ Governance
/resources            → 🎁 Resources Hub
```

### Homepage - 4 Points d'Entrée

- **I'm a Leader** 💼 → Strategic summaries & business case
- **I Need Quick Wins** ⚡ → Ready-to-use workflows (3 par section)
- **I'm Executing** 🎯 → Operational playbooks (6-8 workflows détaillés)
- **I'm Learning** 📚 → Skills, training, resources

### Composants Réutilisables

- **Toggle** - Sections collapsibles (niveau 1, 2)
- **Card** - Cartes de contenu (variants: default, success, highlight)
- **CodeBlock** - Blocs de code/prompts avec copie
- **Button** - CTA et téléchargements
- **Sidebar** - Navigation latérale (mobile responsive)
- **SearchBar** - Recherche (intégrée dans sidebar)
- **Breadcrumb** - Fil d'Ariane
- **PageLayout** - Layout wrapper pour toutes les pages

## Design System Brevo

### Couleurs (Strict)

```css
#0B996E  → bg-brevo-green, text-brevo-green, border-brevo-green (Primary)
#D7FEC8  → bg-brevo-mint (À utiliser avec modération)
#FAF5E3  → bg-brevo-cream (Backgrounds subtils)
```

### Guidelines de Design

**✅ À FAIRE:**

- `bg-brevo-cream border-l-4 border-brevo-green` pour les blocs d'information
- `bg-white border border-gray-200` pour les cartes standards
- `space-y-16` entre les sections principales
- `text-3xl font-bold text-gray-900` pour les h2 avec `border-b border-gray-200`
- Un seul emoji par section principale (style Notion, subtil)
- Tous les Toggles fermés par défaut (`defaultOpen` jamais utilisé)

**❌ À ÉVITER:**

- ~~`bg-brevo-mint border-2 border-brevo-green`~~ (trop coloré)
- Blocs très colorés ou visuellement agressifs
- Emojis multiples ou excessifs
- Numéros dans les titres de sections
- Espacement insuffisant (`space-y-6` ou moins entre sections)

## Hiérarchie de Contenu

### Pattern Standard pour une Section

```tsx
<div className="space-y-16">
  {/* Section Principale */}
  <div>
    <h2 className="mb-6 border-b border-gray-200 pb-3 text-3xl font-bold text-gray-900">
      👋 Titre de Section
    </h2>
    <div className="space-y-4">
      <Toggle title="Sous-section" level={2}>
        {/* Contenu */}
      </Toggle>
    </div>
  </div>
</div>
```

### Blocs d'Information

```tsx
{
  /* Information Standard */
}
;<div className="rounded-lg border-l-4 border-brevo-green bg-brevo-cream p-5">
  <h5 className="mb-2 font-semibold text-brevo-green">Titre</h5>
  <p className="text-sm text-gray-700">Contenu</p>
</div>

{
  /* Checklist / Success Criteria */
}
;<div className="rounded-lg border-l-4 border-brevo-green bg-brevo-cream p-4">
  <p className="mb-2 text-sm font-semibold text-gray-dark">Success criteria:</p>
  <ul className="space-y-1 text-sm text-gray-700">
    <li>✅ Item 1</li>
  </ul>
</div>
```

## Statut des Sections

### ✅ Complètes (Référence)

- **Getting Started** - Contenu complet (1200+ lignes), structure finalisée
- **Strategic Foundations** - Business case, ROI, team design
- **Content & SEO** - Section DÉMO complète
- **Skills & Mastery** - Prompt engineering, training
- **Governance** - Quality, legal, risk
- **Resources Hub** - Tool directory, templates

### ⚠️ Structure Prête (En attente de contenu)

- **Paid Media** - Structure 4 niveaux en place
- **Social Media** - Structure 4 niveaux en place
- **Email & Lifecycle** - Structure 4 niveaux en place
- **Analytics** - Structure 4 niveaux en place

## Structure des Playbooks Opérationnels ⭐

Chaque playbook opérationnel (Content, Paid, Social, Email, Creative, Analytics) suit :

```
📊 EXECUTIVE SUMMARY
- 4 stat cards (métriques clés)
- Challenge actuel
- Opportunité AI
- Business case

⚡ QUICK WINS (3 workflows)
- Titre + description
- Time to value
- Prompt ready-to-use

💼 STRATEGIC PLAYBOOK
- [Placeholder pour le moment]

🎯 OPERATIONAL PLAYBOOK (8 workflows)
- Titre + icône
- Description
- Use cases
- Step-by-step

📚 RESOURCES
- Templates
- Tools
- Learning materials
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel-ready
- **No Database** (static pour l'instant)

## Fichiers Clés

```
/app/getting-started/page.tsx   → Section de référence (1200 lignes)
/components/Toggle.tsx          → Composant le plus utilisé
/components/PageLayout.tsx      → Wrapper toutes les pages
/components/Sidebar.tsx         → Navigation + SearchBar
/docs/CONTENT_GUIDELINES.md     → Guidelines de formatage (ESSENTIEL)
```

## Guidelines de Développement

### Quand Modifier du Contenu

1. **Lire CONTENT_GUIDELINES.md** en premier
2. Utiliser `getting-started/page.tsx` comme référence
3. Respecter les patterns de spacing et hiérarchie
4. Éviter les blocs trop colorés
5. Tester sur mobile

### Quand Ajouter un Composant

1. Créer dans `/components/`
2. Utiliser TypeScript strict
3. Ajouter 'use client' si nécessaire
4. Suivre le design system Brevo
5. Documenter dans DEVELOPMENT.md

### Pattern de Commit

- Pas de numéros dans les titres de sections
- Tous les Toggles sans `defaultOpen`
- Spacing cohérent (`space-y-16` entre sections)
- Couleurs Brevo uniquement

## Commandes Utiles

```bash
npm run dev       # Développement (localhost:3000)
npm run build     # Build production
npm run lint      # Vérification ESLint
```

## Points d'Attention

1. **Performance:** Getting Started fait 1200 lignes - pas de problème, mais attention à ne pas dépasser 2000 lignes par page
2. **Mobile First:** Toujours vérifier la responsive
3. **Branding:** Strictement respecter les couleurs Brevo
4. **Hiérarchie:** h2 visible + Toggles niveau 2 (jamais h2 dans Toggle)
5. **Search:** Intégrée dans Sidebar (pas dans PageLayout)

## Documentation Complète

- **docs/CONTENT_GUIDELINES.md** → Standards de formatage (pour content creators)
- **docs/DEVELOPMENT.md** → Guide technique complet (pour développeurs)

## Contexte Historique

Le projet a évolué en plusieurs itérations :

- **Phase 1:** Structure initiale avec 11 sections
- **Phase 2:** Getting Started complètement développé (référence)
- **Phase 3:** 4 playbooks opérationnels standardisés (Paid, Social, Email, Analytics)
- **Phase 4:** Refinements UI (spacing, hiérarchie, couleurs) - Octobre 2024
- **Phase actuelle:** Prêt pour injection de contenu dans les sections restantes

## Principes de Design

**Clean & Professional**

- Pas de "Christmas tree" (éviter les couleurs multiples)
- Style Notion : épuré, hiérarchie claire, breathing room
- Un seul accent fort : Brevo Green
- Emojis subtils et pertinents (1 par section max)

**Accessibility**

- Contraste suffisant pour le texte
- Hiérarchie visuelle forte (h2 avec border-bottom)
- Mobile responsive à 100%
- Navigation claire (breadcrumb + sidebar)

---

**Version:** Octobre 2024
**Dernière mise à jour:** Refinements UI (spacing, couleurs, hiérarchie)
