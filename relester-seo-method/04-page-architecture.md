# Relester SEO Method - Pillar 4: Page Architecture & Conversion

How to build pages that rank AND convert. Every section, every CTA placement, every responsive breakpoint is intentional. This pillar covers the visual architecture of every page type.

---

## 1. Homepage Architecture

The homepage establishes brand authority, provides internal link juice to all key pages, and drives primary conversions.

### Section Order (8 sections)

```
1. HERO SECTION
   - Yellow gradient background (from-yellow-50 via-yellow-100/80 to-yellow-200)
   - H1: Primary business keyword
   - Subtitle: Value proposition
   - 2 CTAs: Primary (Submit Form) + Secondary (Contact Us)
   - Decorative element: Rotating SVG arc (hidden on mobile, 300px tablet, 500px desktop)
   - Generous padding: pt-36 pb-48 md:pb-72 lg:pt-48 lg:pb-96

2. VALUE PROPOSITIONS
   - 2-column layout (features left, image right)
   - 4 feature cards in 2x2 grid on left
   - Each card: Icon (56x56) + H3 + Description paragraph
   - Right: Product/service image + trust badge

3. SERVICES OVERVIEW
   - Header with H2 + description + 2 CTA buttons
   - 2 large cards (rounded-3xl, border, shadow-sm)
   - Each card: 3 checkmark items with H3 + bullet list
   - Checkmark icon in circle border (border-brand-yellow)

4. PROCESS STEPS
   - H2: "How It Works"
   - 4-column grid (collapses to 2 on tablet, 1 on mobile)
   - Each step: Number (01-04), H3 title, description
   - Dashed SVG arrow connectors between steps (hidden on mobile)
   - Alternating arc directions (up, down, up)

5. CONTACT SECTION
   - Yellow gradient background
   - 2 columns: Contact info (left) + Contact form (right)
   - Contact info: Email card + Phone card (rounded-xl, shadow-sm)
   - Form: White card (rounded-2xl, shadow-lg)

6. FAQ SECTION
   - Yellow bar divider at top
   - FAQ accordion component
   - 4-6 questions

7. AUDIENCE CTA SECTION
   - "Choosing [Brand]" heading
   - 3 audience cards (Homeowners, Businesses, Professionals)
   - Each with description + CTA button

8. LATEST BLOG POSTS
   - H2: "Latest from Our Blog"
   - 3-column grid of post cards
   - Each: Title, excerpt (3-line clamp), "Read More" link
```

### Homepage JSON-LD Schemas

```tsx
// Organization schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: config.siteName,
  alternateName: 'Brand - Tagline',
  url: config.siteUrl,
  logo: `${config.siteUrl}/logo.svg`,
  contactPoint: { '@type': 'ContactPoint', telephone: '+1-555-555-5555', contactType: 'customer service', email: config.email },
  sameAs: [],
}

// Corporation schema
const corporationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Corporation',
  name: config.siteName,
  alternateName: 'Brand - Tagline',
  url: config.siteUrl,
  logo: `${config.siteUrl}/logo.svg`,
}
```

---

## 2. Service Page Architecture

Service pages convert visitors who are researching specific services.

### Section Order (5 sections)

```
1. HERO
   - Yellow gradient (same as homepage)
   - H1: Service name from CMS
   - Subtitle with inline internal link to related service
   - 2 CTAs: Submit Form + Contact us
   - Decorative rotating SVG (visible on all screen sizes)
   - Full-width, overflow hidden

2. VALUE PROPOSITIONS
   - Same 2-column layout as homepage
   - 4 feature cards (2x2 grid) + product image

3. COMPREHENSIVE SERVICES
   - H2 + description + 2 CTA buttons (pill-rounded)
   - 2 large detail cards with checkmark items

4. PROCESS STEPS
   - 4 numbered steps with dashed arrow connectors
   - Alternating arc SVG connectors

5. CONTACT SECTION
   - Yellow gradient
   - Contact info cards + form side-by-side

6. FAQ SECTION
   - Yellow bar divider
   - Native <details> accordion (no JS needed)
   - FAQPage schema
```

### Page Type Detection

```tsx
// Customize these arrays for your niche
function isServicePage(slug: string) {
  const serviceSlugs = [
    'services',           // Main services overview
    'service-type-a',     // e.g., 'residential-design', 'personal-injury'
    'service-type-b',     // e.g., 'commercial-design', 'family-law'
    'service-type-c',     // e.g., 'consultation', 'free-estimate'
  ]
  return serviceSlugs.includes(slug)
}

// Match your location page slug prefixes from the Content System
function isLocationPage(slug: string) {
  return (
    slug.startsWith('your-service-in-') ||
    slug.startsWith('your-service-services-in-') ||
    slug.startsWith('your-service-specialist-in-')
    // Add all your slug prefixes here
  )
}
```

### Routing Pattern

```tsx
function RenderPage({ page, slug }) {
  if (isServicePage(slug)) return <RenderServicePage page={page} />
  if (isLocationPage(slug)) return <RenderLocationPage page={page} slug={slug} />
  return <RenderDefaultPage page={page} />  // Fallback for misc pages
}
```

---

## 3. Location Page Architecture

Location pages rank for "[service] in [city]" searches. They use a content + sidebar layout.

### Layout

```
1. HERO
   - Blue gradient (from-brand-blue to-brand-dark)
   - Location badge: pin icon + "Local Services" (pill, bg-white/10)
   - H1: Page title from CMS (includes city name)
   - Subtitle: "Professional [service] in [City], [State]"

2. CONTENT + SIDEBAR (2-column on desktop, stacked on mobile)

   MAIN CONTENT (flex-1):
   - CMS content rendered with wp-content class
   - CTA block at bottom: yellow border, gradient background
     - H3: "Get Started in [City]"
     - Phone number link
     - Primary + Secondary CTA buttons

   SIDEBAR (w-72 xl:w-80, sticky top-24):
   - Contact Card: Blue background, white text
     - H4: "Get a Free Quote"
     - Price starting point
     - CTA button + phone link
   - Services List: Bordered card
     - Arrow bullet links to each service page
   - Resources List: Bordered card
     - Arrow bullet links to blog, form, contact
```

### LocalBusiness Schema

Built dynamically from the slug:

```tsx
const schema = buildLocalBusinessSchema(slug, title)
// Renders: name, description, url, telephone, email,
// address (city, state, US), areaServed, priceRange,
// serviceType, hasOfferCatalog
```

---

## 4. Blog Post Page Architecture

Blog posts are the primary content engine. Layout: article + sticky sidebar.

### Layout

```
1. HERO
   - Blue gradient (from-brand-blue to-brand-dark)
   - "All Articles" back link (pill button with arrow)
   - H1: Post title
   - Meta row: Calendar icon + date | Clock icon + read time

2. FEATURED IMAGE
   - Pulled up with negative margin (-mt-8)
   - Rounded corners (rounded-xl), shadow
   - Full width within max-w-4xl container
   - Next.js Image with priority loading

3. CONTENT + SIDEBAR (flex-col-reverse lg:flex-row)

   MAIN ARTICLE (flex-1):
   - .wp-content class for CMS content styling
   - Content with heading IDs for anchor links
   - BlogFAQ accordion component (if FAQs exist)
   - Divider (hr)
   - CTA block: gradient card with sun icon
     - "Need Professional Help?"
     - Primary button + phone link
   - "View All Articles" back link

   SIDEBAR (w-72 xl:w-80, sticky top-24):
   - Table of Contents (if >2 headings)
     - "In this article" header
     - H2 headings only
     - border-l-2 active indicator
     - IntersectionObserver scroll tracking
     - Smooth scroll on click
   - Quick Links card
     - Chain icon header
     - 5 links with chevron arrows
   - Mini CTA card
     - Blue gradient background
     - "Get Expert Help"
     - Yellow CTA button
```

### Read Time Calculation

```tsx
function estimateReadTime(content: string) {
  const text = content.replace(/<[^>]*>/g, '')
  const words = text.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}
```

### Content Processing Pipeline

```
Raw CMS HTML
  → extractFaqs()           // Pull out FAQ data
  → sanitizeContent()       // Clean CMS artifacts
  → removeFaqSection()      // Remove FAQ from article body
  → addHeadingIds()         // Add id attrs for anchor links
  → extractHeadings()       // Pull out heading data for TOC
  → render with wp-content class
```

---

## 5. Blog Listing Page Architecture

Hub page for discovering blog content.

### Layout

```
1. HERO
   - White background (clean, minimal)
   - Eyebrow: "OUR BLOG" (uppercase, tracking-widest, brand-orange)
   - H1: "Insights & Updates" (4xl-6xl)
   - Subtitle paragraph

2. FEATURED POSTS (Bento Grid)
   - 2-column grid
   - LEFT: Large card (rounded-3xl, gradient bg, full-height image overlay)
     - Date, H3 title, excerpt, "Read Article" button (white pill)
   - RIGHT: Card with image top + content below
     - Featured image in 48px height container
     - Date, H3 title, excerpt, "Read Article" button (dark pill)

3. RECENT ARTICLES (Grid)
   - 3-column grid (sm:2, lg:3)
   - 9 post cards (total 11 posts shown including featured)
   - Each card: Featured image (h-48) or gradient placeholder
     - Date, H3 title, excerpt (100 chars), "Read more" link
   - Hover: border darkens, shadow grows, image scales 105%
```

### Post Filtering

```tsx
// Filter out WordPress defaults
const filteredPosts = posts.filter(
  (post) => post.slug !== 'hello-world' && post.title !== 'Hello world!'
)

// Split featured vs regular
const featuredPosts = filteredPosts.slice(0, 2)
const remainingPosts = filteredPosts.slice(2, 11)
```

---

## 6. Contact Page Architecture

Trust-building conversion page.

### Layout

```
1. HERO
   - Clean gradient or solid color
   - H1: "Contact Us" or "Get In Touch"
   - Subtitle about responsiveness

2. TWO-COLUMN LAYOUT
   Left: Contact information
   - Email with icon
   - Phone with icon
   - Hours (if applicable)
   - Link to intake form for detailed projects

   Right: Quick contact form
   - Name, Email, Phone, Company, Message
   - Submit button
```

---

## 7. Multi-Step Intake Form Architecture

Primary conversion funnel for qualified leads.

### Layout

```
1. HERO
   - Eyebrow label: "START YOUR PROJECT"
   - H1: "Get Your [Service] Started"
   - Subtitle

2. STEP INDICATOR
   - Numbered steps (1-7) with connecting lines
   - Current step highlighted
   - Completed steps marked with check

3. FORM BODY (one step visible at a time)
   Step 1: User type selection (pill buttons)
   Step 2: Address with Google Maps autocomplete
   Step 3: Property details (pill buttons)
   Step 4: Project specifics (text inputs)
   Step 5: Building type (pill buttons)
   Step 6: Contact info (name, phone)
   Step 7: Email confirmation

4. NAVIGATION
   - Back button (ghost/outline style)
   - Continue button (solid primary)
   - Submit on final step
```

### Sitemap Priority: **0.9** (second only to homepage)

---

## 8. Navigation Architecture

### Header Pattern

```tsx
// Transparent on hero pages, solid white on scroll/blog/contact
const alwaysSolid = pathname.startsWith('/blog') || pathname === '/contact'
  || pathname === '/search' || pathname === '/your-form'

const headerClass = alwaysSolid || scrolled
  ? 'bg-white shadow-md border-b border-gray-200'
  : 'bg-transparent'
```

### Desktop Navigation

```
[Logo]     Home | Services ▼ | Blog | Contact     [Phone] [Get Started ▶]

Services dropdown:
  ┌─────────────────────┐
  │ Service Type A      │
  │ Service Type B      │
  │ Service Type C      │
  └─────────────────────┘
```

### Mobile Navigation

```
[Logo]                                              [☰]

Mobile menu (slide down):
  Home
  Services
    └─ Service Type A
    └─ Service Type B
    └─ Service Type C
  Blog
  Contact
  ──────────
  [📞 Call (555) 555-5555]
  [Get Started]
```

### Floating Mobile Phone Button

Always visible on mobile, fixed position:

```tsx
<a
  href={config.phoneLink}
  className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center
    justify-center rounded-full bg-gray-900 text-white shadow-lg
    md:hidden"
  aria-label="Call us"
>
  {/* Phone SVG icon */}
</a>
```

**Why:** Mobile users should always be one tap away from calling. This single element can increase phone conversions 20-40%.

---

## 9. Footer Architecture

### Structure

```
1. CTA SECTION (white background, above footer)
   - Eyebrow: Brand name (uppercase, tracking-widest, text-gray-400)
   - H2: "Need [Your Service]?"
   - Description paragraph
   - 2 CTAs: Dark pill button + outline phone button
   - Generous vertical padding (py-24 lg:py-32)

2. MAIN FOOTER (dark background: bg-[#0a0a0a])
   4-column grid (lg:12 cols):

   Col 1 (span-4): Brand
   - Logo on white background pill
   - Site description
   - Phone link with icon
   - Email link with icon

   Col 2 (span-3): Services
   - All service page links

   Col 3 (span-2): Company
   - Home, Blog, Contact, Submit Project

   Col 4 (span-3): Get In Touch
   - Description + Contact Us button (white pill)

3. BOTTOM BAR
   - Copyright with dynamic year
   - Privacy Policy + Terms links
```

**Key:** The footer CTA section is technically part of the footer component but has a white background, creating a visual separation. This gives every page a conversion opportunity at the bottom.

---

## 10. CMS Content Styling System

When rendering HTML from a CMS, wrap it in a `.wp-content` class and apply comprehensive styles:

```css
/* Typography */
.wp-content h2 {
  @apply mt-10 mb-4 text-2xl font-bold;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f5a623;  /* Brand accent underline */
}

.wp-content h3 { @apply mt-8 mb-3 text-xl font-semibold; }
.wp-content h4 { @apply mt-6 mb-2 text-lg font-semibold; }

.wp-content p {
  @apply my-4 text-base leading-relaxed text-gray-700;
  font-size: 1.05rem;
  line-height: 1.8;
}

/* Lists */
.wp-content ul { @apply my-4 ml-6 space-y-2; }
.wp-content ol { @apply my-4 ml-6 space-y-2; }
.wp-content li { @apply text-gray-700; line-height: 1.7; }

/* Images - CRITICAL: Override CMS inline styles */
.wp-content img {
  @apply my-6 rounded-lg shadow-md;
  width: 100% !important;
  max-width: 100% !important;
  height: auto !important;
}

.wp-content figure {
  @apply my-6;
  max-width: 100% !important;
  width: 100% !important;
}

.wp-content figcaption {
  @apply mt-2 text-center text-sm text-gray-500 italic;
}

/* Links */
.wp-content a {
  @apply font-medium underline underline-offset-2;
  @apply text-brand-blue hover:text-brand-orange;
  @apply decoration-brand-yellow/50 hover:decoration-brand-orange;
}

/* Tables */
.wp-content table { @apply my-6 w-full border-collapse overflow-hidden rounded-lg; }
.wp-content th { @apply bg-brand-blue px-4 py-3 text-left text-sm font-semibold text-white; }
.wp-content td { @apply border-b border-gray-200 px-4 py-3 text-sm text-gray-700; }
.wp-content tr:hover td { @apply bg-brand-light; }

/* Blockquotes */
.wp-content blockquote {
  @apply border-brand-yellow my-6 border-l-4 pl-6 text-gray-600 italic;
}

/* Code */
.wp-content pre { @apply my-6 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100; }
.wp-content code { @apply rounded bg-gray-100 px-1.5 py-0.5 text-sm; }
.wp-content pre code { @apply bg-transparent p-0 text-inherit; }

/* Bold */
.wp-content strong { @apply font-semibold; }

/* Spacing */
.wp-content h2 + p, .wp-content h3 + p { @apply mt-2; }
.wp-content hr { @apply my-8 border-gray-200; }

/* Nested lists */
.wp-content ul ul, .wp-content ol ul { @apply mt-2 ml-4; }
.wp-content ul ol, .wp-content ol ol { @apply mt-2 ml-4; }
```

### Why `!important` on Images

CMS editors (WordPress Gutenberg, Webflow Rich Text, etc.) add inline styles like `style="width: 350px; height: 233px"` to images. These override external CSS. The `!important` declarations ensure images are always responsive regardless of CMS inline styles.

---

## 11. Table of Contents Component

Auto-generated from H2 headings with scroll tracking.

```tsx
'use client'
import { useEffect, useState } from 'react'

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    )

    for (const heading of headings) {
      const el = document.getElementById(heading.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [headings])

  const h2Headings = headings.filter((h) => h.level === 2)
  if (h2Headings.length === 0) return null

  return (
    <nav className="rounded-xl border border-gray-200 bg-white">
      <div className="border-b border-gray-100 px-4 py-3">
        <span className="text-sm font-semibold">In this article</span>
      </div>
      <div className="max-h-[60vh] overflow-y-auto py-2">
        {h2Headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(heading.id)?.scrollIntoView({
                behavior: 'smooth', block: 'start'
              })
              setActiveId(heading.id)
            }}
            className={`block border-l-2 px-4 py-2 text-[13px] no-underline transition-all ${
              activeId === heading.id
                ? 'border-gray-900 text-gray-900 font-medium bg-gray-50'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {heading.text}
          </a>
        ))}
      </div>
    </nav>
  )
}
```

### Key Implementation Details

| Detail | Value | Why |
|--------|-------|-----|
| `rootMargin` | `-80px 0px -70% 0px` | Account for fixed header (80px) and highlight when heading is in top 30% |
| `threshold` | `0` | Trigger as soon as any part of heading is visible |
| Filter to H2 only | `headings.filter(h => h.level === 2)` | H3s are too granular for TOC |
| Show if >2 headings | `headings.length > 2` | TOC adds no value for short articles |
| `border-l-2` indicator | Active state | Clear visual of current reading position |
| `max-h-[60vh]` | Scrollable TOC | Long articles don't overflow sidebar |
| Smooth scroll | `behavior: 'smooth'` | Professional UX |
| `sticky top-24` | On parent div | TOC follows as user scrolls |

---

## 12. Responsive Breakpoint Strategy

Mobile-first design. Every element designed for phones first, enhanced for larger screens.

### Breakpoint Usage

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Default | <640px | Phone (portrait) |
| `sm:` | 640px+ | Phone (landscape) |
| `md:` | 768px+ | Tablet / hide mobile elements |
| `lg:` | 1024px+ | Desktop / show sidebars |
| `xl:` | 1280px+ | Wide desktop / wider sidebars |

### Common Responsive Patterns

```css
/* Hero padding: compact on mobile, generous on desktop */
pt-36 pb-48 md:pb-72 lg:pt-48 lg:pb-96

/* Grid columns: stack → 2 → 3 → 4 */
grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4

/* Sidebar: below content on mobile, beside on desktop */
flex-col-reverse lg:flex-row

/* Font sizes: scale up with screen */
text-3xl md:text-4xl lg:text-5xl

/* Decorative elements: hidden on mobile */
hidden md:block

/* Phone button: visible only on mobile */
md:hidden

/* Sidebar width: fixed on desktop */
w-full lg:w-72 xl:w-80
```

### Mobile-First Rules

1. **Hide decorative SVGs on mobile** (`hidden md:block`)
2. **Stack all grids to single column** by default
3. **Reduce padding/margins** on mobile (50-60% of desktop)
4. **Show floating phone button** only on mobile (`md:hidden`)
5. **Sidebar below content** on mobile (`flex-col-reverse lg:flex-row`)
6. **Full-width buttons** on mobile, inline on desktop
7. **Hamburger menu** on mobile, full nav on desktop

---

## 13. CSS Animation Patterns

Subtle animations improve perceived quality without hurting performance.

### Slow Spin (Decorative Elements)

```css
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow { animation: spin-slow 20s linear infinite; }
```

### Fade-in on Scroll (CSS-only, no JS)

```css
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up { animation: fade-in-up 0.6s ease-out both; }

@supports (animation-timeline: view()) {
  .scroll-fade-in {
    animation: fade-in-up linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 30%;
  }
}
```

### Hover Effects

```css
/* Card hover: lift + shadow */
.card:hover { @apply shadow-lg -translate-y-1; transition: all 0.2s; }

/* Image hover: subtle zoom */
.card img { transition: transform 0.5s; }
.card:hover img { transform: scale(1.05); }

/* Link hover: color shift */
.link:hover { @apply text-brand-orange; transition: color 0.2s; }
```

### Performance Rule

**Never use JavaScript animation libraries** (Framer Motion, GSAP, etc.) for basic animations. CSS animations are GPU-accelerated and don't block the main thread. Use `animation-timeline: view()` for scroll-triggered effects with zero JavaScript.

---

## Button Style System

```css
/* Primary: Orange/Yellow, high contrast */
.btn-primary {
  @apply bg-brand-orange hover:bg-brand-yellow hover:text-brand-dark
    inline-flex items-center justify-center rounded-lg px-6 py-3
    font-semibold text-white transition-all;
}

/* Secondary: Outline, professional */
.btn-secondary {
  @apply border-brand-blue text-brand-blue hover:bg-brand-blue
    inline-flex items-center justify-center rounded-lg border-2 px-6 py-3
    font-semibold transition-all hover:text-white;
}

/* Submit: Dark, trustworthy */
.btn-submit {
  @apply bg-brand-blue hover:bg-brand-dark
    inline-flex items-center justify-center rounded-lg px-6 py-3
    font-semibold text-white transition-all;
}
```

### CTA Placement Rules

| Page Section | CTA Type | Purpose |
|--------------|----------|---------|
| Hero | Primary + Secondary | Main conversion |
| Mid-page | Primary + Outline | Re-engage scrollers |
| After content | Gradient card with Primary | Capture post-read intent |
| Sidebar | Gradient mini card | Persistent conversion |
| Footer | Dark pill + Outline phone | Final catch |
| Mobile | Floating phone button | Always accessible |

Every page should have **minimum 3 CTA touchpoints**: hero, mid-page, post-content.

---

## Architecture Checklist

- [ ] Homepage has all 8 sections in correct order
- [ ] Service pages have hero + features + services + process + contact + FAQ
- [ ] Location pages have hero + content + sidebar + CTA
- [ ] Blog posts have hero + image + article + sidebar (TOC + links + mini CTA)
- [ ] Blog listing has hero + featured grid + article grid
- [ ] Header is transparent on hero pages, solid on scroll/blog/contact
- [ ] Floating phone button visible on mobile only
- [ ] Footer has CTA section + 4-column links + bottom bar
- [ ] All grids stack to single column on mobile
- [ ] Decorative elements hidden on mobile
- [ ] Sidebar below content on mobile, beside on desktop
- [ ] Every page has minimum 3 CTA touchpoints
- [ ] Table of Contents appears on blog posts with >2 headings
- [ ] CMS content uses wp-content class with full styling
- [ ] Images use !important width overrides for CMS inline styles
