# Portafolio-React – CLAUDE.md

## Project overview

Personal developer portfolio for **Francisco Villagra** — a Senior .NET Backend / Full Stack Engineer.
Deployed to GitHub Pages at `https://franvillagra.github.io/Portafolio-React/`.

## Tech stack

- **React 18** (Create React App)
- **Tailwind CSS v3** — utility-first styling; configured in `tailwind.config.js`
- **No Bootstrap** (removed in the 2025 redesign; don't re-add it)
- **No Redux** — component-level state only
- **react-router-dom** — kept for the GitHub Pages `basename` but no client-side routing used
- **EmailJS** — wired in the old Contact component; currently replaced by simple links

## Folder structure

```
src/
  assets/img/          Company logos, UTN logo, etc.
  components/          One file per section
  data/portfolioData.js  All content (experience, techStack, certifications)
  hooks/useInView.js   Intersection Observer for scroll animations
  App.js               Root layout (no Router needed unless adding routes)
  index.css            Tailwind directives + global CSS vars
  App.css              Minimal legacy override
```

## Key design decisions

- **Dark theme only** — background `#080c16`, surface `#0d1424`, card `#111827`
- **Accent color** — `#3b82f6` (blue-500); hover `#60a5fa` (blue-400)
- **Font** — Inter from Google Fonts (loaded in `index.css`)
- **Animations** — CSS class `fade-in-section` + `.visible` driven by `useInView` hook; no animate.css
- **No heavy libraries** — no react-multi-carousel, no react-bootstrap, no react-on-screen
- Sections in order: NavBar → Hero → About → TechStack → Experience → Certifications → Contact → Footer

## Content updates

All portfolio content lives in `src/data/portfolioData.js`:
- `experiences` — work history array
- `techStack` — grouped technology categories
- `certifications` — education & certs

Update that file to change content; don't scatter data into individual components.

## Deployment

```bash
npm run deploy   # builds and pushes to gh-pages branch
```

PUBLIC_URL is set to `/Portafolio-React` in package.json for GitHub Pages.

## Conventions

- Tailwind utility classes directly in JSX — no separate CSS files per component
- `useInView` for all scroll-triggered fade-in animations
- Company logos imported in `portfolioData.js`; fallback to initials if image fails to load
- Keep components focused on layout/presentation; data in `portfolioData.js`
