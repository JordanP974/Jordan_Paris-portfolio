# Portfolio — Jordan Paris

Portfolio personnel de développeur web Full Stack, construit avec React 19, TypeScript et Vite. Déployé sur [jordan-paris-portfolio.vercel.app](https://jordan-paris-portfolio.vercel.app).

## Stack technique

| Outil | Version | Rôle |
|-------|---------|------|
| React | 19 | UI / composants |
| TypeScript | ~6.0 | Typage statique |
| Vite | 8 | Bundler / dev server |
| React Router DOM | 7 | Navigation client |
| lucide-react | — | Icônes (soleil / lune) |
| react-icons | — | Icônes contact (GitHub, email, téléphone) |
| @vercel/speed-insights | — | Métriques de performance Vercel |

**Polices** (Google Fonts) : Space Grotesk · Hanken Grotesk · JetBrains Mono

## Démarrage rapide

```bash
pnpm install     # installer les dépendances
pnpm dev         # lancer le serveur de développement
pnpm build       # build de production
pnpm preview     # prévisualiser le build
```

## Structure du projet

```
portfolio/
├── index.html                        # Point d'entrée HTML, lang="fr", meta viewport
├── public/
│   └── logo-monogram-caret.svg       # Favicon
├── src/
│   ├── main.tsx                      # Initialisation React + BrowserRouter
│   ├── App.tsx                       # Composition des sections + skip link + <main>
│   ├── index.css                     # Variables CSS (dark/light), reset, typographie
│   ├── App.css                       # Styles partagés (.block, .sec-head, .reveal)
│   ├── assets/
│   │   ├── logo-monogram-dark.svg    # Logo monogramme — thème sombre
│   │   └── logo-monogram-light.svg   # Logo monogramme — thème clair
│   ├── hooks/
│   │   └── useTheme.ts               # Hook dark/light mode + persistance localStorage
│   ├── @types/
│   │   └── index.d.tsx               # Interfaces TypeScript (ISkills)
│   ├── data/
│   │   ├── profile.ts                # Données personnelles (nom, email, liens)
│   │   └── skills.ts                 # Compétences par catégorie
│   └── components/
│       ├── Header/                   # Nav sticky, logo adaptatif, toggle dark/light
│       ├── Hero/                     # Accroche, CTA, métadonnées
│       ├── About/                    # Présentation + fiche récapitulative
│       ├── Skills/                   # Grille de compétences avec tags
│       ├── Projects/                 # Liste de projets (année, stack, liens)
│       ├── Timelines/                # Parcours formation & expérience
│       ├── Contact/                  # CTA email + liens sociaux
│       └── Footer/                   # Pied de page + navigation secondaire
```

## Fonctionnalités

- **Dark / Light mode** — toggle dans le header, persisté en `localStorage`, transition CSS fluide
- **Mobile-first** — CSS en `min-width`, menu burger sur mobile
- **Animations au scroll** — `IntersectionObserver` sur les éléments `.reveal`
- **Logo adaptatif** — monogramme SVG qui change selon le thème
- **Accessibilité** — `lang="fr"`, skip link, `<main>`, `aria-hidden` sur éléments décoratifs, `aria-expanded` + `aria-controls` sur le menu mobile, `prefers-reduced-motion`



## Déploiement

Le projet est déployé automatiquement sur **Vercel** à chaque `git push` sur `main`.
