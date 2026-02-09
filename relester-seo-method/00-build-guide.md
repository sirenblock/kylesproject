# Relester SEO Method - Master Build Guide

The step-by-step orchestration guide for building a complete Relester Method site from scratch. Each step references the specific skill file that contains the detailed implementation patterns.

**Pre-requisite:** Read `SKILL.md` first for the method overview and key principles.

**CRITICAL RULE:** Start with Phase 0. Do NOT write any code until the user has answered all discovery questions and confirmed the Project Brief.

---

## Phase 0: Discovery (Ask the User First)

**You MUST gather all the information below before writing a single line of code.** Use `AskUserQuestion` to collect answers in batches of 3-4 questions at a time. Don't dump all 29 questions at once — group them logically and ask conversationally.

### Batch 1: Business Identity (Ask First)

These feed into `lib/config.ts`, all schemas, all metadata, every page.

| # | Question | Where It's Used | Example |
|---|----------|----------------|---------|
| 1 | What is your **business name** (exact legal name)? | config.siteName, Organization schema, metadata | "Apex Plumbing Solutions, LLC" |
| 2 | What is your **tagline / one-line description** (150-160 chars)? | config.siteDescription, meta descriptions, OG | "Professional plumbing for residential and commercial properties in the Greater Denver area." |
| 3 | What is your **production domain**? (must include `www.`) | config.siteUrl, canonical URLs, sitemap, OG | "https://www.apexplumbing.com" |
| 4 | What is your **phone number**? (and secondary/sales phone if any) | config.phone, Header, Footer, schemas, mobile CTA | "(720) 555-1234" |
| 5 | What is your **contact email**? And what email(s) should receive form submissions? | config.email, config.notificationEmails | "info@apex.com" + "owner@apex.com, office@apex.com" |

### Batch 2: Services & Market (Ask Second)

These determine page structure, navigation, slug patterns, and location pages.

| # | Question | Where It's Used | Example |
|---|----------|----------------|---------|
| 6 | What are your **main services**? (list 2-5) | Service pages, nav, Homepage, FAQ content | "Emergency Plumbing, Drain Cleaning, Water Heater Install" |
| 7 | What **cities/locations** do you serve? | Location pages, LocalBusiness schema, slug generation | "Denver CO, Aurora CO, Lakewood CO, Boulder CO" |
| 8 | What is your **primary service keyword** for location slugs? | `isLocationPage()`, slug pattern like `[keyword]-in-[city]-[state]` | "plumbing-services" → `plumbing-services-in-denver-co` |
| 9 | Any other **slug prefixes** that identify service pages? | `isServicePage()` detection | "drain-cleaning, water-heater-installation" |

### Batch 3: Brand Design (Ask Third)

If the user has existing branding, use their colors/fonts. If not, suggest options.

| # | Question | Where It's Used | Example |
|---|----------|----------------|---------|
| 10 | Do you have **brand colors**? If yes, list hex codes. If no, describe the vibe (trustworthy, bold, modern, etc.) | globals.css @theme, all components | "#1B4D7A, #F59E0B, #DC5A2B" or "Professional and trustworthy" |
| 11 | Do you have **preferred fonts**? If no, I'll suggest a pairing. | globals.css, layout.tsx font imports | "Poppins + Inter" or "Suggest something" |
| 12 | Do you have a **logo file**? (SVG preferred, PNG min 112x112px) | public/logo.svg, Organization schema, Header | User provides file or "Not yet" |

**If user says "suggest something" for colors/fonts:** Recommend based on their niche. Professional services → navy + amber. Creative → purple + coral. Healthcare → teal + white. Provide 2-3 options and let them pick.

### Batch 4: CMS & Content (Ask Fourth)

| # | Question | Where It's Used | Example |
|---|----------|----------------|---------|
| 13 | What **CMS** are you using? (WordPress + WPGraphQL is the default) | Pillar 5 data layer, codegen, all queries | "WordPress on Hostinger" / "Need to set one up" |
| 14 | What is your **CMS GraphQL URL**? | .env NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL | "https://cms.apexplumbing.com/graphql" |
| 15 | What is your **CMS REST API URL**? | .env NEXT_PUBLIC_WORDPRESS_REST_API_URL | "https://cms.apexplumbing.com/wp-json/wp/v2" |
| 16 | Do you have **existing content to migrate**, or starting fresh? | Content sanitization pipeline, migration strategy | "355 posts from Webflow" / "Starting fresh" |
| 17 | What **SEO plugin** is installed? (Yoast SEO, RankMath, or none) | GraphQL seo field queries | "Yoast SEO" |

### Batch 5: Forms & Integrations (Ask Fifth)

| # | Question | Where It's Used | Example |
|---|----------|----------------|---------|
| 18 | What **fields** does your intake/quote form need? (beyond the standard contact form) | IntakeForm.tsx steps, API route fields | "Property type, Service needed, Urgency level, Address" |
| 19 | Where should form submissions go? **Webhook** (Make.com/Zapier), **Email** (Resend), or **Both**? | API routes, env vars | "Both" |
| 20 | If webhook: what is your **webhook URL**? | .env WEBHOOK_URL | "https://hook.us1.make.com/abc123" / "Need to set up" |
| 21 | Do you run **Google Ads**? (determines GCLID tracking) | IntakeForm searchParams | "Yes" / "Not yet" |
| 22 | Do you need **Google Maps address autocomplete** in your form? If yes, do you have an API key? | IntakeForm, .env NEXT_PUBLIC_GOOGLE_MAPS_API_KEY | "Yes, key is AIzaSy..." / "No map needed" |

### Batch 6: Author & Entity (Ask Sixth)

| # | Question | Where It's Used | Example |
|---|----------|----------------|---------|
| 23 | Who is the **author/expert** behind the content? (full name + title) | Person schema on every blog post (E-E-A-T) | "Mike Thompson, Master Plumber & CEO" |
| 24 | Is the business an **LLC, Inc, Corp**, or sole proprietorship? | Corporation schema on homepage (LLC/Inc/Corp = yes) | "LLC" → add Corporation schema |
| 25 | What are your **social media URLs**? (list whichever exist) | Organization schema `sameAs`, Footer links | "facebook.com/apex, instagram.com/apex" |

### Batch 7: Deployment (Ask Last, or Defer)

| # | Question | Where It's Used | Example |
|---|----------|----------------|---------|
| 26 | Do you have a **Vercel account** set up? | Phase 6 deployment | "Yes" / "No" |
| 27 | Do you have **Google Search Console** set up? | Phase 6 sitemap submission | "Yes" / "No" |

**Tip:** Questions 26-27 can be deferred until Phase 6 if the user doesn't have answers yet.

---

### Create Project Brief

After gathering all answers, compile a **Project Brief** and present it to the user for confirmation:

```markdown
## Project Brief: [Business Name]

**Identity**
- Name: [Business Name]
- Domain: [www.domain.com]
- Phone: [number] | Email: [email]
- Notifications: [email1, email2]
- Entity: [LLC/Inc/Corp/Sole Prop] → [Corporation schema: Yes/No]
- Author: [Name, Title]

**Services & Market**
- Services: [Service A, Service B, Service C]
- Locations: [X cities in Y state(s)]
- Location slug pattern: [keyword]-in-[city]-[state]
- Service slug prefixes: [prefix1, prefix2, prefix3]

**Design**
- Colors: [Primary #hex, Accent #hex, Action #hex]
- Fonts: [Heading Font + Body Font]
- Logo: [Provided / Not yet]

**CMS**
- Platform: [WordPress on Provider]
- GraphQL: [URL]
- REST: [URL]
- SEO Plugin: [Yoast/RankMath]
- Content: [Migrating X posts / Starting fresh]

**Forms**
- Contact form: 5 fields (name, email, phone, company, message)
- Intake form: [X steps: Step1, Step2, Step3...]
- Notification: [Webhook / Email / Both]
- Google Maps: [Yes/No]
- GCLID tracking: [Yes/No]

**Social**: [list URLs]

Proceed with build? [Yes / Adjust something]
```

**STOP HERE until the user confirms.** If they want changes, update the brief and re-confirm.

---

## Phase 1: Foundation

Set up the project skeleton. After this phase, you have a running Next.js app with Tailwind, brand theme, and SEO infrastructure.

**All values below come from the confirmed Project Brief.** No placeholders.

### Step 1: Create Next.js Project

```bash
npx create-next-app@latest [business-name-kebab] --typescript --tailwind --eslint --app --src-dir=no
cd [business-name-kebab]
```

### Step 2: Set Up Brand Theme

Create `app/globals.css` using the **exact colors and fonts from the Project Brief** per **SKILL.md** (Brand Design System section).

Add CMS content styling per **Pillar 4** (`04-page-architecture.md`, Section: CMS Content Styling).

### Step 3: Create Site Configuration

Create `lib/config.ts` using **all values from the Project Brief**:

```tsx
const config = {
  siteName: '[from Brief: business name]',
  siteDescription: '[from Brief: tagline]',
  siteUrl: '[from Brief: domain]',
  revalidate: 60,
  phone: '[from Brief: phone]',
  phoneLink: 'tel:+1[from Brief: phone digits]',
  email: '[from Brief: email]',
  notificationEmails: ['[from Brief: notification emails]'],
}
export default config
```

### Step 4: Set Up Root Layout

Create `app/layout.tsx` per **Pillar 1** (`01-technical-infrastructure.md`, Section 1: Root Layout).

Use the **fonts from the Brief**. Import them from `next/font/google`.

Key elements:
- Global metadata (title template, description, robots, OG tags)
- Font loading with `display: 'swap'`
- `metadataBase` set to `config.siteUrl`
- Canonical URL via `alternates.canonical`

### Step 5: Create robots.ts

Create `app/robots.ts` per **Pillar 1** (Section 2: robots.txt).

Block: `/preview/`, `/success`, `/thank-you`, admin paths.

### Step 6: Create 404 Page

Create `app/not-found.tsx` per **Pillar 1** (Section 6: 404 Page).

Must include custom metadata and navigation CTAs.

### Step 7: Set Up next.config.ts

Create `next.config.ts` per **Pillar 1** (Section 4: next.config.ts).

Key elements:
- X-Robots-Tag header matching the **production domain from Brief** (non-matching hosts get noindex)
- Image formats: `['image/avif', 'image/webp']`
- Remote image patterns for the **CMS hostname from Brief**
- Any slug redirects (301 permanent)

### Step 8: Set Up Environment Variables

Create `.env` using the **CMS URLs, API keys, and webhook URL from the Brief** per **Pillar 7** (`07-deployment.md`, Section 1).

### Step 9: Set Up Test Infrastructure

Install test dependencies and create the test scaffold per **Pillar 8** (`08-testing.md`):

```bash
npm install -D vitest @vitejs/plugin-react-swc @vitest/coverage-v8 @vitest/ui @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-axe @types/jest-axe jsdom msw
```

Create:
- `vitest.config.ts` per Pillar 8 (Section 2)
- `vitest.setup.ts` per Pillar 8 (Section 3)
- `test-utils/` directory with all files per Pillar 8 (Section 4)
- `test-utils/msw/handlers.ts` with default GraphQL handler per Pillar 8 (Section 5)

Add scripts to `package.json`:
```json
"test": "vitest run",
"test:watch": "vitest",
"test:coverage": "vitest run --coverage",
"validate": "npm run lint && npm run typecheck && npm run test"
```

**Checkpoint:** Run `npm test` — should pass (no test files yet, but the runner should start without errors). Run `npm run dev` — the site should start with the root layout and 404 page working.

---

## Phase 2: CMS Integration

Wire up the headless CMS. After this phase, you can fetch and display content from the CMS.

### Step 10: Install CMS Dependencies

```bash
npm install graphql
npm install -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations dotenv rimraf
```

### Step 11: Create GraphQL Client

Create `lib/functions.ts` per **Pillar 5** (`05-cms-data-layer.md`, Section 1: GraphQL Client).

### Step 12: Set Up Code Generation

Create `codegen.ts` per **Pillar 5** (Section 8: Code Generation).

Update `package.json` scripts:
```json
"codegen": "graphql-codegen --config codegen.ts",
"build": "npm run codegen && next build",
"dev": "npm run codegen && rimraf .next && next dev"
```

Run: `npm run codegen`

**If codegen fails:** The CMS GraphQL URL from the Brief may be wrong, or the CMS isn't running. Ask the user to verify.

### Step 13: Create Type Definitions

Create `lib/types.d.ts` per **Pillar 5** (Section 2: Type Definitions).

Re-export generated CMS types + add framework types (DynamicPageProps, GraphQLResponse, etc.).

### Step 14: Create Query Files

Create query files in `lib/queries/` per **Pillar 5** (Sections 3-4).

Minimum required queries:
- `getAllPosts.ts` — Paginated fetch of all posts (for sitemap + listing)
- `getAllPages.ts` — Paginated fetch of all pages (for sitemap)
- `getPostBySlug.ts` — Single post by slug (for blog post page)
- `getPageBySlug.ts` — Single page by slug (for service/location pages)
- `getMenuBySlug.ts` — Navigation menu items

**Include `seo` fields** based on the SEO plugin from the Brief (Yoast or RankMath).

### Step 15: Create Dynamic Sitemap

Create `app/sitemap.ts` per **Pillar 1** (Section 3: Dynamic Sitemap) + **Pillar 5** (Section 7: Sitemap Integration).

Use the **service slug prefixes from the Brief** to set correct priority tiers.

### Step 16: Create Search Function

Add `searchQuery()` to `lib/functions.ts` per **Pillar 5** (Section 6: REST API Search).

### Step 17: Write CMS Layer Tests

Write tests for every file created in this phase per **Pillar 8** (`08-testing.md`, Section 6):

- `lib/functions.test.ts` — fetchGraphQL (success, errors, variables) + searchQuery (success, errors)
- `lib/queries/getAllPosts.test.ts` — success, empty, error, null
- `lib/queries/getAllPages.test.ts` — success, empty, error, null
- `lib/queries/getPostBySlug.test.ts` — success, not found
- `lib/queries/getPageBySlug.test.ts` — success, not found

**Checkpoint:** Run `npm test` — all CMS layer tests pass. Run `npm run dev`, verify sitemap at `/sitemap.xml` shows all CMS content URLs.

---

## Phase 3: Page Architecture

Build all page types. After this phase, every URL in the sitemap renders a real page.

### Step 18: Build Header

Create `components/Header.tsx` per **Pillar 4** (`04-page-architecture.md`, Section: Header/Navigation).

Use the **services from the Brief** as nav links. Include the **phone number from the Brief** as CTA.

### Step 19: Build Footer

Create `components/Footer.tsx` per **Pillar 4** (Section: Footer).

Key elements:
- White CTA section above dark footer
- 4-column link grid: **Services from Brief**, Resources, **sample Locations from Brief**, Company
- **Phone + email from Brief**
- **Social links from Brief**

### Step 20: Build Homepage

Create `app/page.tsx` per **Pillar 4** (Section: Homepage) + **Pillar 2** (`02-structured-data-schema.md`, Sections 1-2).

8 sections: Hero → Services → Process → Audience CTA → Locations → Blog Preview → FAQ → Contact.

Schemas:
- Organization (always)
- Corporation (**only if Brief says LLC/Inc/Corp**)

Use the **business name, services, locations, phone, email, social URLs from the Brief** in schemas.

### Step 21: Build Service Pages

Add service page detection + rendering to `app/[slug]/page.tsx` per **Pillar 4** (Section: Service Pages) + **Pillar 2** (Section 4: FAQPage Schema).

Use the **service slug prefixes from the Brief** in `isServicePage()`.

**Decision point:** Ask the user to provide or approve 4-9 FAQs per service page. Suggest FAQs based on common questions in their niche, but get user confirmation.

### Step 22: Build Location Pages

Add location page detection + rendering to `app/[slug]/page.tsx` per **Pillar 4** (Section: Location Pages) + **Pillar 2** (Section 5: LocalBusiness Schema).

Use the **primary service keyword and location slug prefixes from the Brief** in `isLocationPage()` and `extractLocationFromSlug()`.

### Step 23: Build Blog Listing

Create `app/blog/page.tsx` per **Pillar 4** (Section: Blog Listing).

### Step 24: Build Blog Post Page

Create `app/blog/[slug]/page.tsx` per **Pillar 4** (Section: Blog Post) + **Pillar 2** (Sections 3-4: Person + FAQPage) + **Pillar 3** (`03-content-system.md`, Content Sanitization).

Use the **author name and title from the Brief** in Person schema.

### Step 25: Build Contact Page

Create `app/contact/page.tsx` per **Pillar 4** (Section: Contact Page).

### Step 26: Build FAQ Accordion

Create `components/BlogFAQ.tsx` per **Pillar 2** (Section 7: FAQ Accordion Component).

### Step 27: Build Table of Contents

Create `components/TableOfContents.tsx` per **Pillar 4** (Section: Table of Contents).

### Step 28: Add Floating Mobile CTA

Add floating phone button using the **phone number from the Brief** per **Pillar 4** (Section: Floating Mobile CTA).

### Step 29: Write Page & Component Tests

Write tests for all pages and components built in this phase per **Pillar 8** (Section 6):

- `app/page.test.tsx` — Homepage renders, accessibility check, notFound handling
- `app/blog/page.test.tsx` — Blog listing renders posts
- `app/blog/[slug]/page.test.tsx` — Blog post renders, missing post calls notFound
- `components/Header.test.tsx` — Renders nav links, phone CTA
- `components/Footer.test.tsx` — Renders link columns, contact info
- `components/BlogFAQ.test.tsx` — Accordion expand/collapse behavior
- `components/TableOfContents.test.tsx` — Renders headings, tracks active section

**Checkpoint:** Run `npm test` — all tests pass. Run `npm run build` — zero errors. Every page in the sitemap should render.

---

## Phase 4: Forms & Lead Capture

Wire up lead capture. After this phase, both forms submit and deliver notifications.

### Step 30: Build Contact Form

Create `components/ContactForm.tsx` per **Pillar 6** (`06-forms-and-leads.md`, Section 1).

5 fields, single page, submits to `/api/contact`.

### Step 31: Build Multi-Step Intake Form

Create `components/IntakeForm.tsx` per **Pillar 6** (Section 2).

Use the **intake form fields from the Brief** to define the steps. Each pill-button group and text input should match what the user specified.

**Decision point:** Present the proposed step breakdown to the user:
```
Step 1: [Category] — pill buttons: [Option A, Option B, Option C]
Step 2: Address — Google Maps autocomplete
Step 3: [Field] — pill buttons: [...]
Step 4: [Details] — text inputs (optional)
Step 5: Contact — first name, last name, phone
Step 6: Email — email confirmation + submit
```
Get user approval before building.

### Step 32: Set Up API Routes

Create `app/api/contact/route.ts` and `app/api/intake/route.ts` per **Pillar 6** (Section 4).

Use the **webhook URL from the Brief** (or `process.env.WEBHOOK_URL`).

If Brief says "Email" or "Both": also set up Resend per **Pillar 6** (Section 6, Option B/C).

### Step 33: Configure Webhook

If the user said "Need to set up" for the webhook URL in Phase 0:
- **Ask now:** "Please create a Make.com/Zapier scenario with a webhook trigger and share the URL."
- Wait for the URL before proceeding.

### Step 34: Wire Google Maps

**Skip if Brief says "No map needed."**

Otherwise, add Places Autocomplete per **Pillar 6** (Section 3). Use the **API key from the Brief**.

If the user said "I need to create one":
- **Ask now:** "You'll need a Google Maps API key with the Places API enabled. Go to console.cloud.google.com, create a key, restrict it to your domain, and share it."

### Step 35: Create Thank-You Page

Create `app/thank-you/page.tsx` per **Pillar 6** (Section 7).

Must have `robots: { index: false }`.

### Step 36: Write Form & API Route Tests

Write tests for all forms and API routes per **Pillar 8** (Section 6):

- `components/ContactForm.test.tsx` — Renders fields, disables button while sending, shows success message
- `components/IntakeForm.test.tsx` — Step navigation, pill selection, validation, submission
- `app/api/contact/route.test.ts` — 400 for missing fields, 200 for valid data, webhook dispatch
- `app/api/intake/route.test.ts` — 400 for missing fields, 200 for valid data, GCLID included

**Checkpoint:** Run `npm test` — all tests pass. Submit both forms manually, verify webhook/email receives the data.

---

## Phase 5: Content

Populate the site with content. After this phase, blog posts and location pages have real content.

### Step 37: Create Blog Posts

**If Brief says "Starting fresh":**
- Suggest 5-10 blog topic ideas based on the user's niche and services
- Use templates from **Pillar 3** (`03-content-system.md`)
- **Ask the user** to approve or modify the topic list before writing

**If Brief says "Migrating X posts":**
- Set up content migration pipeline
- Apply content sanitization per **Pillar 3** (Content Sanitization section)

### Step 38: Create Location Pages

Create location pages in the CMS using the **cities from the Brief** and template from **Pillar 3** (Section: Location Page Template).

### Step 39: Set Up Content Sanitization

Implement the content sanitization pipeline in the blog post page per **Pillar 3** (Section: Content Sanitization Pipeline).

### Step 40: Verify FAQ Extraction

Test that blog post FAQs are correctly extracted and rendered:
1. FAQPage schema in page source (JSON-LD)
2. BlogFAQ accordion visible on the page
3. Schema data matches visible accordion content

**Checkpoint:** Visit 5 blog posts, verify FAQs render and schema appears in source.

---

## Phase 6: Deployment

Ship to production. After this phase, the site is live and indexed by Google.

**If the user deferred deployment questions in Phase 0, ask now:**
- "Do you have a Vercel account? If not, create one at vercel.com."
- "Do you have access to your domain's DNS settings?"

### Step 41: Set Environment Variables

Set all production values in Vercel dashboard per **Pillar 7** (`07-deployment.md`, Section 1).

Use the **production CMS URLs, API keys, and secrets from the Brief**.

### Step 42: Configure Domain

Set up DNS using the **domain from the Brief** per **Pillar 7** (Section 4: Domain Setup).

- `www.[domain]` → primary
- `[domain]` → redirects to www

### Step 43: Deploy

Push to main branch or trigger manual deploy in Vercel.

### Step 44: Verify Staging Protection

Check X-Robots-Tag per **Pillar 7** (Section 5: Staging Protection).

```bash
curl -I https://[project].vercel.app | grep -i x-robots
# Should show: X-Robots-Tag: noindex, nofollow

curl -I https://www.[domain] | grep -i x-robots
# Should show nothing (no noindex on production)
```

### Step 45: Submit to Search Console

1. Go to Google Search Console
2. Add property: `https://www.[domain from Brief]`
3. Verify ownership (DNS TXT record or HTML file)
4. Submit sitemap: `https://www.[domain]/sitemap.xml`

**Checkpoint:** Site is live, domain works, sitemap submitted.

---

## Phase 7: Verification

Final quality check. Every item must pass before the site is considered complete.

### Step 46: Run Full Test Suite

```bash
npm run validate
```

This runs lint, typecheck, and all tests. Must pass with zero failures.

```bash
npm run build
```

Must complete with zero errors.

**If tests fail:** Fix the failing tests before proceeding. Do not skip or delete tests to make them pass. If a test failure reveals a bug in the implementation, fix the implementation first.

### Step 47: SEO Metadata Audit

For each page type (homepage, service, location, blog post, blog listing, contact):
- [ ] Unique `<title>` tag
- [ ] Unique `<meta name="description">`
- [ ] Canonical URL matches the page URL
- [ ] Open Graph title + description + image

Per **Pillar 1** (Checklist section).

### Step 48: Schema Validation

For each page type, verify JSON-LD using [Google Rich Results Test](https://search.google.com/test/rich-results):
- [ ] Homepage: Organization (+ Corporation **if Brief says LLC/Inc/Corp**)
- [ ] Blog posts: Person + FAQPage (if FAQs exist)
- [ ] Service pages: FAQPage
- [ ] Location pages: LocalBusiness

Per **Pillar 2** (Checklist section).

### Step 49: Mobile Responsiveness

Test every page type on mobile viewport (375px width):
- [ ] No horizontal scroll
- [ ] Text readable without zoom
- [ ] Buttons/links have 44px+ tap targets
- [ ] Images fit within viewport
- [ ] Floating phone CTA visible

### Step 50: Core Web Vitals

Run [PageSpeed Insights](https://pagespeed.web.dev/) on 3 representative pages:
- [ ] LCP < 2.5s
- [ ] FID/INP < 200ms
- [ ] CLS < 0.1

### Step 51: Form Testing (Manual)

- [ ] Contact form: fill + submit → webhook/email received
- [ ] Intake form: complete all steps → webhook/email received
- [ ] GCLID: add `?gclid=test123` to URL, submit form, verify GCLID in webhook data
- [ ] Error handling: disconnect webhook, verify error message shows

### Step 52: Content Spot-Check

Visit 5 random blog posts and verify:
- [ ] Content renders correctly (no broken HTML, no empty elements)
- [ ] Featured image displays
- [ ] FAQs extracted and accordion renders
- [ ] Table of Contents tracks scroll position
- [ ] Internal links work (no 404s)
- [ ] Person schema in page source

**Present the final checklist results to the user** and note any items that need attention.

---

## Quick Reference: Skill File Index

| Phase | Steps | Skill Files |
|-------|-------|------------|
| 0: Discovery | — | This file (Phase 0 questions) |
| 1: Foundation | 1-9 | `SKILL.md` + `01-technical-infrastructure.md` + `04-page-architecture.md` + `08-testing.md` |
| 2: CMS | 10-17 | `05-cms-data-layer.md` + `08-testing.md` |
| 3: Pages | 18-29 | `04-page-architecture.md` + `02-structured-data-schema.md` + `08-testing.md` |
| 4: Forms | 30-36 | `06-forms-and-leads.md` + `08-testing.md` |
| 5: Content | 37-40 | `03-content-system.md` + `02-structured-data-schema.md` |
| 6: Deploy | 41-45 | `07-deployment.md` |
| 7: Verify | 46-52 | All skills (checklists) + `08-testing.md` |

---

## Decision Points Summary

These are moments where you MUST pause and ask the user before proceeding:

| When | What to Ask | Why |
|------|-------------|-----|
| Phase 0 complete | "Confirm the Project Brief?" | Everything depends on these answers |
| Step 21 | "Approve these FAQs for [Service] page?" | Content accuracy — you can't guess industry FAQs |
| Step 31 | "Approve this intake form step breakdown?" | Form structure is business-specific |
| Step 33 | "Share your webhook URL" (if not provided) | Can't build API routes without it |
| Step 34 | "Share your Maps API key" (if not provided) | Can't build autocomplete without it |
| Step 37 | "Approve these blog topic ideas?" (if starting fresh) | Content strategy needs user buy-in |
| Phase 6 start | "Vercel account ready? DNS access?" (if deferred) | Can't deploy without these |
| Step 52 | "Here's the verification report" | User sees final quality status |

---

## Testing Rule

**`npm test` must pass after every phase checkpoint.** If a test fails:
1. Read the error message
2. Determine if it's a test bug or an implementation bug
3. Fix the root cause (not the test)
4. Re-run `npm test`
5. Only proceed to the next phase when all tests are green
