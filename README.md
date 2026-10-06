# Matthew Ward, portfolio

Portfolio for Matthew Ward, a designer and front-end developer. Live at
[matthew-ward-portfolio.netlify.app](https://matthew-ward-portfolio.netlify.app).

It is a static [Astro](https://astro.build) site: one homepage, five case
studies, and a 404. There is no framework runtime. The only client JavaScript
is a small amount of vanilla TypeScript for the mobile menu, the active nav
state, and the project picker.

## Design and build decisions

- **One stylesheet, design tokens first.** `src/styles/global.css` defines
  color, type, spacing, and radius as CSS custom properties. Each case study
  sets its own theme color through the `accentColor` prop on `BaseLayout`,
  which sets `--color-project`, so components never hard-code a page color.
- **Accessible by default.** Skip link, landmarks, one `h1` per page, visible
  focus states, accessible names that include the visible label, and support
  for `prefers-reduced-motion`, `prefers-contrast`, and
  `prefers-reduced-transparency`.
- **Progressive motion.** Scroll reveals use CSS scroll-driven animations
  (`animation-timeline: view()`) behind `@supports` and a reduced-motion
  query. Browsers without support just show the content.
- **Images.** Astro's `<Image>` generates responsive `srcset` WebP with explicit
  dimensions. Only the first picker image loads eagerly.
- **Fonts.** Montserrat is self-hosted with `@fontsource` (weights 400, 600,
  and 700, Latin only), and the three upright files are preloaded.
- **SEO.** Per-page title, description, canonical, Open Graph and Twitter
  tags, JSON-LD (`WebSite` and `Person`), a sitemap, and `robots.txt`.

## Project structure

```text
public/                Static files: favicons, Open Graph image, resume PDF
src/
  assets/              Case study images (optimized at build time)
  components/          Header, Footer, PhilosophySection, AboutSection
  layouts/BaseLayout   Document shell, meta tags, structured data, fonts
  lib/site.ts          Site-wide copy, links, and per-project accent colors
  pages/               index, 404, and projects/* case studies
  styles/global.css    Tokens, base styles, and shared layout
```

## Commands

Run from the project root. Node 22.12 or newer is required.

| Command           | Action                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Install dependencies                            |
| `npm run dev`     | Start the dev server at `localhost:4321`        |
| `npm run check`   | Type-check `.astro` and TypeScript files        |
| `npm run build`   | Build the production site to `./dist/`          |
| `npm run preview` | Serve the production build locally              |

## Quality checks

Run `npm run check` (zero errors expected) and `npm run build` before
committing. Pages are audited against a production build with Lighthouse on
the mobile profile, which currently scores 100 for accessibility, best
practices, and SEO.
