---
name: relester-seo-method
description: "The Relester SEO Method - a comprehensive system for building SEO-dominant Next.js sites. Use when creating a new Next.js site from scratch that needs to rank in Google. This master file links to 9 detailed sub-skills covering every aspect of the method, from SEO infrastructure to CMS integration, forms, deployment, testing, and a step-by-step build guide."
---

# The Relester SEO Method

A complete, battle-tested SEO system extracted from a production Next.js + headless CMS site with **550+ indexed pages**, **400+ ranking blog posts**, and full Google Search Console coverage. This method enables any agent to build a site that ranks from day one.

## Method Overview

The Relester SEO Method has 8 pillars plus a master build guide, each covered in its own detailed skill file:

### Pillar 1: Technical Infrastructure (`01-technical-infrastructure.md`)
The foundation. Every technical element that tells Google your site is legit:
- Root layout metadata with fallback chains
- Dynamic sitemap with priority tiers
- robots.txt with strategic disallow rules
- X-Robots-Tag headers for staging protection
- next.config.ts redirects, headers, and image optimization
- ISR strategy for CMS content
- 404 page with proper HTTP status
- Performance patterns (fonts, images, Core Web Vitals)

### Pillar 2: Structured Data & Schema (`02-structured-data-schema.md`)
The rich results engine. Every JSON-LD schema type and when to use it:
- Organization schema (homepage)
- Corporation schema (homepage)
- Person/Author schema (blog posts)
- FAQPage schema (blog posts + service pages)
- LocalBusiness schema (location pages)
- FAQ extraction from CMS content (automatic)
- Schema rendering in React/Next.js

### Pillar 3: Content System (`03-content-system.md`)
The content machine. Templates, structures, and rules for creating content that ranks:
- 5 blog post templates (Guide, Comparison, Regulatory, Troubleshooting, Listicle)
- Location page template (scalable to 200+ cities)
- Service page template
- FAQ creation rules and format
- On-page SEO rules (title, description, slug, headings, keywords)
- Content sanitization pipeline for CMS content
- Publishing checklist

### Pillar 4: Page Architecture & Conversion (`04-page-architecture.md`)
The conversion engine. How to build pages that rank AND convert:
- Homepage structure (8-section layout)
- Service page structure (5-section layout)
- Location page structure (sidebar + content)
- Blog post page structure (article + sidebar)
- Blog listing page (bento grid + cards)
- Contact page and multi-step form
- Navigation and internal linking architecture
- Mobile-first responsive patterns
- CMS content styling system
- Floating mobile CTA
- Footer CTA and link structure

### Pillar 5: CMS Integration & Data Fetching (`05-cms-data-layer.md`)
The data layer. How to wire a headless CMS to Next.js:
- GraphQL client with caching, error handling, and preview auth
- Query file pattern (one file per query)
- Cursor-based pagination for fetching all content
- SEO field queries (Yoast/RankMath integration)
- Code generation for typed queries
- REST API search with client-side debouncing
- ISR cache tagging and revalidation

### Pillar 6: Forms, Lead Capture & Integrations (`06-forms-and-leads.md`)
The lead pipeline. Complete form → notification delivery system:
- Simple contact form (5 fields, single page)
- Multi-step intake wizard (5-10 steps, pill buttons, progress indicator)
- Google Maps Places Autocomplete with satellite map
- API route handlers with webhook dispatch
- Ad attribution tracking (GCLID capture)
- Alternative notification methods (webhook, email, both)

### Pillar 7: Deployment & Environment Setup (`07-deployment.md`)
The launch checklist. From local dev to production:
- Environment variable strategy (public vs server-only)
- Vercel deployment configuration
- Domain setup (www redirect, SSL, DNS)
- Staging protection (X-Robots-Tag on non-production)
- On-demand revalidation endpoint with rate limiting
- Build pipeline (codegen → build → ISR)
- Complete dependency list

### Pillar 8: Testing (`08-testing.md`)
The quality gate. Every site must pass tests before deployment:
- Vitest configuration with jsdom environment
- MSW (Mock Service Worker) for API mocking
- Test utilities: custom render, browser mocks, DOM shims
- Next.js mocks: next/image, next/navigation hooks
- Testing patterns for every file type (queries, pages, components, API routes)
- Accessibility checks with jest-axe
- Coverage requirements and build validation
- `npm test` must pass at every phase checkpoint

### Master Build Guide (`00-build-guide.md`)
The orchestration guide. Step-by-step instructions to build a complete site:
- **Phase 0: Discovery** — 27 questions in 7 batches to gather all project info before coding
- **Project Brief** — compiled from answers, confirmed by user before any code is written
- 52 build steps across 7 phases (Foundation → CMS → Pages → Forms → Content → Deploy → Verify)
- Test infrastructure set up in Phase 1, tests written after each phase
- 8 explicit decision points where the agent must pause and ask the user
- Checkpoints after each phase to verify progress (`npm test` must pass)
- Final verification: `npm run validate` + `npm run build` + manual checks

## How to Use This Method

### For Building from Scratch (Most Common)

**Follow `00-build-guide.md` step by step.** It starts with Phase 0 (Discovery) which gathers all project-specific information from the user before any code is written, then walks through 52 build steps across 7 phases. Tests are written after each phase and must pass before proceeding.

**CRITICAL AGENT RULE — Ask Before You Build:**
1. **Start with Phase 0 Discovery.** Ask the user all 27 questions in batches of 3-5 using `AskUserQuestion`.
2. **Compile the Project Brief.** Present it to the user for confirmation.
3. **Only then start Phase 1.** Every value in every file comes from the confirmed brief — no placeholders.
4. **Pause at Decision Points.** The build guide marks 8 specific moments where you must ask the user (service FAQs, form steps, blog topics, missing API keys, etc.).
5. **Present the Verification Report.** After Phase 7, show the user what passed and what needs attention.

### For Adding to an Existing Site

1. **Start with Pillar 1** — Set up the technical infrastructure. This is the skeleton.
2. **Add Pillar 5** — Wire up CMS data fetching.
3. **Add Pillar 2** — Wire up structured data schemas on every page type.
4. **Build with Pillar 4** — Create all page types following the architecture patterns.
5. **Add Pillar 6** — Build forms and lead capture.
6. **Fill with Pillar 3** — Create blog posts and content using the templates.
7. **Deploy with Pillar 7** — Configure environment, domain, and launch.

**Even for existing sites:** Ask the user questions from Phase 0 Batches 1-6 first. You still need business name, services, locations, colors, CMS URLs, etc.

## Key Principles

1. **Every page has a canonical URL.** No exceptions.
2. **Every page has unique metadata.** Title + description + OG tags.
3. **Every page with Q&A has FAQPage schema.** Rich results are free traffic.
4. **Every page type has its own schema type.** Organization, Person, LocalBusiness, FAQPage.
5. **Staging/preview URLs are never indexed.** X-Robots-Tag header on non-production domains.
6. **CMS content is always sanitized.** Remove old platform artifacts, fix URLs, clean empty elements.
7. **Mobile-first everything.** Google uses mobile-first indexing. Design for phones first.
8. **Performance is SEO.** AVIF/WebP images, font-display: swap, ISR over SSR, CSS animations over JS.
9. **Internal links on every page.** 2-4 contextual links, navigation links, sidebar links, footer links.
10. **FAQ at the end of every content piece.** 5-9 questions targeting "People Also Ask" queries.

## Site Configuration Pattern

Every Relester Method site uses a central config object:

```tsx
// lib/config.ts
const config = {
  siteName: 'Your Brand',
  siteDescription: 'Your 150-160 char description.',
  siteUrl: 'https://www.yourdomain.com',  // Always www, always https
  revalidate: 60,  // ISR revalidation in seconds
  phone: '(555) 555-5555',
  phoneLink: 'tel:+15555555555',
  email: 'contact@yourdomain.com',
  notificationEmails: ['primary@yourdomain.com', 'backup@yourdomain.com'],
}
```

This config is imported everywhere - metadata, schemas, headers, footers, CTAs. Single source of truth.

## Brand Design System (CSS/Tailwind)

```css
@theme {
  --color-brand-blue: #1a3a5c;    /* Primary - headers, nav, trust */
  --color-brand-yellow: #f5a623;  /* Accent - CTAs, highlights, borders */
  --color-brand-orange: #e8722a;  /* Action - buttons, links, hover */
  --color-brand-dark: #1a1a2e;    /* Text - headings, body dark */
  --color-brand-light: #f8f9fa;   /* Background - cards, sections */
  --color-brand-gray: #6b7280;    /* Secondary text */
  --font-heading: 'Your Heading Font', sans-serif;  /* e.g., Varela Round, Poppins, DM Sans */
  --font-body: 'Your Body Font', sans-serif;         /* e.g., Montserrat, Inter, Open Sans */
}
```

**Rules:**
- Two fonts maximum. Heading font for personality, body font for readability.
- Both loaded with `display: 'swap'` via Next.js font optimization.
- Choose colors that match your brand. The structure above (6 color roles + 2 fonts) is what matters, not the specific hex values.
- Good font pairings: Poppins + Inter, DM Sans + Source Sans, Varela Round + Montserrat, Playfair Display + Lato.

## File Structure

```
app/
  layout.tsx            # Root layout with global metadata + fonts
  page.tsx              # Homepage with Organization schema
  robots.ts             # robots.txt generator
  sitemap.ts            # Dynamic sitemap generator
  not-found.tsx         # 404 page with metadata
  globals.css           # Brand theme + CMS content styling
  [slug]/page.tsx       # Service, location, and default pages
  blog/
    page.tsx            # Blog listing page
    [slug]/page.tsx     # Individual blog posts with Person + FAQ schema
  contact/page.tsx      # Contact page
  api/
    contact/route.ts    # Contact form handler
    intake/route.ts     # Lead form handler
    revalidate/route.ts # On-demand ISR cache clearing
    preview/route.ts    # CMS preview mode
  thank-you/page.tsx    # Post-submission page (noindex)
components/
  Header.tsx            # Nav with transparent/solid scroll behavior
  Footer.tsx            # Footer with CTA section
  BlogFAQ.tsx           # FAQ accordion component
  TableOfContents.tsx   # TOC with scroll tracking
  ContactForm.tsx       # Contact form component
  IntakeForm.tsx        # Multi-step lead form
lib/
  config.ts             # Site configuration
  functions.ts          # GraphQL client + search
  queries/              # CMS data fetching (one file per query)
  types.d.ts            # TypeScript types (framework)
  generated.ts          # Auto-generated CMS types (from codegen)
codegen.ts              # GraphQL code generation config
next.config.ts          # Redirects, headers, image config
vitest.config.ts        # Test runner configuration
vitest.setup.ts         # Global test setup (MSW, mocks, polyfills)
test-utils/
  index.ts              # Single import for all test utilities
  render.tsx             # Custom render with providers
  renderHook.tsx         # Custom hook testing wrapper
  domShims.ts            # scrollIntoView polyfill for jsdom
  mocks/
    browserMocks.ts      # matchMedia, ResizeObserver, IntersectionObserver
  msw/
    server.ts            # MSW server setup
    handlers.ts          # Default API mock handlers
```
