# Cadrage Migration MDX - Résumé Exécutif

## 🎯 Objectif Global

Transformer le playbook d'une architecture "contenu codé en dur dans TSX" vers une architecture "contenu dans fichiers MDX séparés" pour:

1. Faciliter l'édition du contenu (sans toucher au code)
2. Permettre la duplication facile pour créer de nouveaux playbooks
3. Maintenir toute la richesse visuelle actuelle

## ✅ Ce Qui Est Fait (POC Validé)

### 1. Infrastructure MDX Installée

**Packages installés:**

- `@next/mdx` - Support MDX dans Next.js
- `next-mdx-remote` - Rendering MDX dynamique
- `gray-matter` - Parser les frontmatter YAML
- `@types/mdx` - Types TypeScript

### 2. Structure de Dossiers Créée

```
content/
  playbooks/
    ai-marketing/
      playbook.config.ts          ✅ Config centrale
      sections/
        strategic-foundations.mdx ✅ POC section en MDX
```

### 3. Fichiers Clés Créés

| Fichier                                                             | Rôle                                    | Status            |
| ------------------------------------------------------------------- | --------------------------------------- | ----------------- |
| `content/playbooks/ai-marketing/playbook.config.ts`                 | Config du playbook (sections, metadata) | ✅ Créé           |
| `content/playbooks/ai-marketing/sections/strategic-foundations.mdx` | Exemple de section MDX                  | ✅ Créé (partiel) |
| `lib/mdx.ts`                                                        | Helpers pour loader le MDX              | ✅ Créé           |
| `app/[playbook]/[section]/page.tsx`                                 | Route dynamique                         | ✅ Créé           |
| `docs/MIGRATION_MDX.md`                                             | Guide complet de migration              | ✅ Créé           |

### 4. POC Fonctionnel

**Route de test:** `http://localhost:3005/ai-marketing/strategic-foundations`

Cette route:

- ✅ Charge le fichier MDX
- ✅ Parse le frontmatter (title, emoji, description)
- ✅ Rend les composants React (Toggle, Card)
- ✅ Applique les styles Tailwind
- ✅ S'intègre avec PageLayout existant

## 📊 État Actuel vs. État Cible

### Actuellement (Hybride)

```
app/
  strategic-foundations/
    page.tsx              ❌ Ancien (1200 lignes TSX)
  [playbook]/
    [section]/
      page.tsx            ✅ Nouveau (route dynamique MDX)

content/
  playbooks/
    ai-marketing/
      sections/
        strategic-foundations.mdx  ✅ POC (partiel, ~200 lignes)
```

### État Cible (100% MDX)

```
app/
  [playbook]/
    [section]/
      page.tsx            ✅ Route dynamique (seul fichier TSX)

content/
  playbooks/
    ai-marketing/
      sections/
        strategic-foundations.mdx   ✅ ~1200 lignes
        getting-started.mdx
        content-seo.mdx
        paid-media.mdx
        email.mdx
        creative.mdx
        analytics.mdx
        skills.mdx
        governance.mdx
        resources.mdx

// Pour dupliquer vers un nouveau playbook
content/
  playbooks/
    sales-playbook/          🆕 Copie du dossier
      playbook.config.ts     🆕 Adapter la config
      sections/
        prospecting.mdx      🆕 Nouveau contenu
        outreach.mdx
        ...
```

## 📋 Plan de Migration (Estimation: 8-10h)

### Phase 1: Compléter Strategic Foundations (1h)

- [ ] Migrer TOUT le contenu actuel de `app/strategic-foundations/page.tsx` → MDX
- [ ] Tester toutes les sections (Business Case, Use Case, Stakeholders, etc.)
- [ ] Valider que rien n'est cassé visuellement

### Phase 2: Migrer Section par Section (6-8h)

**Par section (~40-60min chacune):**

1. Créer le fichier MDX dans `content/playbooks/ai-marketing/sections/`
2. Copier le frontmatter (title, emoji, order, description)
3. Importer les composants (Toggle, Card, etc.)
4. Copier le contenu JSX depuis l'ancien fichier TSX
5. Adapter les patterns si nécessaire (comments JSX, map functions)
6. Tester la route `/ai-marketing/{section-slug}`
7. Renommer l'ancien fichier TSX en `.old` (pour backup)

**Ordre suggéré:**

- [ ] Getting Started
- [ ] Content & SEO
- [ ] Paid Media
- [ ] Email & Lifecycle
- [ ] Creative & Design
- [ ] Analytics & Insights
- [ ] Skills & Mastery
- [ ] Governance
- [ ] Resources Hub

### Phase 3: Nettoyage (1h)

- [ ] Supprimer tous les anciens fichiers `.tsx.old`
- [ ] Supprimer les dossiers de routes statiques (`app/getting-started/`, etc.)
- [ ] Mettre à jour la sidebar pour pointer vers `/ai-marketing/{section}`
- [ ] Tester toutes les routes
- [ ] Vérifier la navigation

### Phase 4: Documentation (1h)

- [ ] Template pour créer une nouvelle section
- [ ] Template pour créer un nouveau playbook
- [ ] Guide pour les content creators (non-devs)

## 💡 Exemple Concret: Dupliquer vers "Sales Playbook"

Une fois la migration terminée, créer un nouveau playbook sera trivial:

```bash
# 1. Dupliquer le dossier (2 min)
cp -r content/playbooks/ai-marketing content/playbooks/sales-playbook

# 2. Éditer playbook.config.ts (5 min)
# Changer id, name, description, sections

# 3. Éditer les fichiers MDX (variable selon le contenu)
# Remplacer le contenu marketing par du contenu sales

# 4. C'est tout ! Les routes sont auto-générées:
# /sales-playbook/prospecting
# /sales-playbook/outreach
# /sales-playbook/negotiation
# ...
```

## ⚖️ Avantages vs. Inconvénients

### ✅ Avantages

| Avant (TSX)                   | Après (MDX)                        |
| ----------------------------- | ---------------------------------- |
| Éditer = Coder React          | Éditer = Markdown simple           |
| 1200 lignes par fichier       | Contenu séparé du code             |
| Dupliquer = Copy-paste massif | Dupliquer = Copier dossier         |
| Risque de casser le code      | Contenu isolé, code protégé        |
| 10 fichiers TSX à maintenir   | 1 route dynamique + N fichiers MDX |

### ⚠️ Inconvénients

| Limitation                       | Impact | Mitigation                       |
| -------------------------------- | ------ | -------------------------------- |
| Pas de logique complexe dans MDX | Faible | Créer composants React si besoin |
| Setup initial (cette migration)  | Moyen  | POC déjà fait, process documenté |
| Courbe d'apprentissage MDX       | Faible | Ressemble à Markdown standard    |

## 🔢 Métriques

### Avant Migration

- **Fichiers à maintenir:** 10 fichiers TSX (1 par section)
- **Lignes de code totales:** ~12,000 lignes (estimation)
- **Temps pour créer un nouveau playbook:** 20-30h (réécrire tout le code)
- **Compétences requises:** React, TypeScript, Tailwind

### Après Migration

- **Fichiers à maintenir:** 1 route dynamique + 1 config par playbook
- **Lignes de code totales:** ~500 lignes (route + helpers)
- **Temps pour créer un nouveau playbook:** 2-4h (dupliquer + éditer contenu)
- **Compétences requises:** Markdown basique

**ROI estimé:**

- Setup: 8-10h
- Gain par nouveau playbook: 16-26h
- Break-even: Dès le 1er nouveau playbook !

## 🚦 Status Actuel

### ✅ Infrastructure Ready

- Architecture validée
- Route dynamique fonctionnelle
- Helpers MDX opérationnels
- POC testé et validé

### 🟡 Migration en Attente

- Strategic Foundations à compléter (90% restant)
- 9 autres sections à migrer
- Nettoyage des anciens fichiers

### 🔴 Bloquants

Aucun ! Tout est prêt pour migrer.

## 🎬 Next Steps Recommandés

**Option 1: Migration Complète Maintenant** (8-10h)

- Avantage: Tout est propre d'un coup
- Inconvénient: Temps conséquent à bloquer

**Option 2: Migration Progressive** (2h par semaine pendant 4-5 semaines)

- Semaine 1: Strategic Foundations + Getting Started
- Semaine 2: Content + Paid Media
- Semaine 3: Email + Creative + Analytics
- Semaine 4: Skills + Governance + Resources
- Semaine 5: Nettoyage + doc

**Option 3: Hybride (Recommandé pour tester)**

- Migrer 2-3 sections maintenant
- Valider que ça fonctionne bien en prod
- Migrer le reste si validé

## 📞 Support

Pour toute question sur la migration:

- **Documentation complète:** `docs/MIGRATION_MDX.md`
- **Config playbook:** `content/playbooks/ai-marketing/playbook.config.ts`
- **Exemple MDX:** `content/playbooks/ai-marketing/sections/strategic-foundations.mdx`
- **Route dynamique:** `app/[playbook]/[section]/page.tsx`

---

**Date:** Octobre 2024
**Status:** POC validé, prêt pour migration complète
**Décision:** À prendre avec l'équipe
