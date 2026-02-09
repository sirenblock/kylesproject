# Relester SEO Method - Pillar 1: Technical Infrastructure

The technical foundation that tells Google your site is legitimate, fast, and properly structured. Every element here must be implemented before writing content.

---

## 1. Root Layout (`app/layout.tsx`)

The root layout establishes site-wide metadata that every page inherits.

### Complete Implementation

```tsx
import type { Metadata } from 'next'
// Choose any two Google Fonts that pair well (e.g., Montserrat + Varela Round, Inter + Poppins)
import { Montserrat, Varela_Round } from 'next/font/google'
import config from '@/lib/config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

// FONTS: Two fonts maximum. Load with display: 'swap' to prevent FOIT.
const bodyFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const headingFont = Varela_Round({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

// GLOBAL METADATA: Every page inherits this. Pages override with generateMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: `${config.siteName} : Your Tagline Here`,
  description: config.siteDescription,
  alternates: {
    canonical: config.siteUrl,
  },
  openGraph: {
    title: `${config.siteName} : Your Tagline Here`,
    description: config.siteDescription,
    url: config.siteUrl,
    siteName: config.siteName,
    type: 'website',
    images: [
      {
        url: `${config.siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: config.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${config.siteName} : Your Tagline Here`,
    description: config.siteDescription,
    images: [`${config.siteUrl}/images/og-image.png`],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>
        <Header />
        <div className="h-20" aria-hidden="true" />  {/* Spacer for fixed header */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

### Critical Details

| Element | Rule | Why |
|---------|------|-----|
| `metadataBase` | Set to production URL with `new URL()` | Enables relative URLs in all child page metadata |
| `lang="en"` | Set on `<html>` element | Google uses this for language detection |
| `display: 'swap'` | Set on all font imports | Prevents Flash of Invisible Text (FOIT), improves CLS |
| OG image | Must be exactly 1200x630px | Social platform standard, gets cropped otherwise |
| `canonical` | Always set, even on homepage | Prevents duplicate content from www vs non-www |
| Font variables | Applied to `<html>` as CSS variables | Available to all descendant elements via CSS |
| Spacer div | `h-20` with `aria-hidden="true"` | Pushes content below fixed header, invisible to screen readers |

### Font Strategy

- **Body font** (e.g., Montserrat, Inter, Open Sans): Clean, readable sans-serif for paragraphs and UI text
- **Heading font** (e.g., Varela Round, Poppins, DM Sans): Personality font for headings and CTAs
- Load both via Next.js built-in Google Fonts - automatically self-hosted, no external requests
- Never load more than 2 font families (performance)
- Set `display: 'swap'` on ALL fonts (prevents layout shift)

### Applied in CSS:

```css
body { font-family: var(--font-body); }
h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }
```

---

## 2. robots.txt (`app/robots.ts`)

Controls what Google can and cannot crawl.

```tsx
import config from '@/lib/config'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/preview/', '/success', '/thank-you'],
    },
    sitemap: `${config.siteUrl}/sitemap.xml`,
  }
}
```

### What to Disallow

| Path | Reason |
|------|--------|
| `/preview/` | Draft/preview pages have no SEO value |
| `/success` | Form success pages are thin content |
| `/thank-you` | Thank you pages are thin content |
| `/api/` | API routes should never be indexed |

### What NOT to Disallow
- Blog posts, service pages, location pages - these are your money pages
- The sitemap itself
- CSS/JS files (Google needs these to render pages)

---

## 3. Dynamic Sitemap (`app/sitemap.ts`)

Dynamically generates sitemap.xml from CMS content. Google uses this to discover all your pages.

```tsx
import config from '@/lib/config'
import getAllPages from '@/lib/queries/getAllPages'
import getAllPosts from '@/lib/queries/getAllPosts'
import { MetadataRoute } from 'next'

function generateEntries(items, urlPrefix: string, priority: number): MetadataRoute.Sitemap {
  return items.map((item) => ({
    url: `${config.siteUrl}${urlPrefix}${item.slug}`,
    lastModified: item.modified || item.date || undefined,
    changeFrequency: 'monthly',
    priority,
  }))
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getAllPosts()
  const allPages = await getAllPages()

  // STATIC ROUTES - hardcoded pages
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: config.siteUrl, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${config.siteUrl}/contact`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${config.siteUrl}/your-intake-form`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${config.siteUrl}/blog`, changeFrequency: 'daily', priority: 0.8 },
  ]

  // BLOG POSTS - 0.6 priority
  const posts = generateEntries(allPosts, '/blog/', 0.6)

  // SEPARATE service pages (higher priority) from location pages (lower)
  const servicePages = allPages.filter(
    (p) => !p.slug?.startsWith('your-service-prefix-')
  )
  const locationPages = allPages.filter(
    (p) => p.slug?.startsWith('your-service-prefix-')
  )

  const services = generateEntries(servicePages, '/', 0.7)
  const locations = generateEntries(locationPages, '/', 0.5)

  return [...staticRoutes, ...services, ...locations, ...posts]
}
```

### Priority Tier System

| Priority | Page Type | Change Frequency | Rationale |
|----------|-----------|-----------------|-----------|
| **1.0** | Homepage | weekly | Most authoritative page |
| **0.9** | Primary conversion page (intake form) | monthly | Highest business value |
| **0.8** | Blog listing, contact page | daily/monthly | Discovery hubs |
| **0.7** | Service pages | monthly | Core offer pages |
| **0.6** | Blog posts | monthly | Content pages |
| **0.5** | Location pages | monthly | Programmatic SEO pages |

### Key Implementation Details

- **`lastModified`:** Use the CMS `modified` field first, fall back to `date`. Google uses this to prioritize crawling.
- **Separate location pages from service pages:** Location pages are programmatic SEO (lower priority). Service pages are hand-crafted (higher priority).
- **Error handling:** Wrap in try/catch, return empty array on failure. A broken sitemap is worse than no sitemap.
- **No success/preview pages:** Only index pages with real content.

---

## 4. `next.config.ts` - Redirects, Headers, Images

The three most important SEO configurations in Next.js.

```tsx
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // REDIRECTS: 301 permanent redirects for any slug changes
  async redirects() {
    return [
      {
        source: '/blog/old-slug',
        destination: '/blog/new-slug',
        permanent: true,  // 301 redirect - transfers SEO value
      },
    ]
  },

  // HEADERS: Prevent non-production domains from being indexed
  async headers() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            // This regex matches any host EXCEPT your production domain
            value: '(?!www\\.yourdomain\\.com).*',
          },
        ],
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ]
  },

  // IMAGES: Enable modern formats and allow CMS image domains
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.yourimagedomain.com',
      },
      {
        protocol: 'https',
        hostname: '*.gravatar.com',
      },
    ],
  },
}

export default nextConfig
```

### Redirect Rules

- **ALWAYS** add a redirect when a URL slug changes. This transfers the old page's SEO authority to the new URL.
- Use `permanent: true` (301) for slug changes. Use `permanent: false` (302) for temporary moves.
- **Never** delete a URL that Google has indexed without adding a redirect.
- Track redirects in the config file so they're version-controlled.

### X-Robots-Tag Header (CRITICAL)

This is the **single most important** configuration for sites deployed on Vercel:

```
X-Robots-Tag: noindex, nofollow
```

Applied to ALL domains except your production domain. This prevents:
- `your-project.vercel.app` from being indexed
- `your-project-git-branch.vercel.app` preview URLs from being indexed
- Any staging domain from competing with your production site

Without this, Google will index your Vercel preview URLs and you'll have massive duplicate content issues.

### Image Optimization

- **AVIF first, WebP fallback:** AVIF is 50% smaller than WebP, 80% smaller than JPEG
- **Remote patterns:** Whitelist every domain where your CMS serves images
- **Next.js `<Image>` component:** Automatic lazy loading, responsive srcset, format conversion

---

## 5. Page-Level Metadata Pattern

Every page with dynamic content uses `generateMetadata()` with a fallback chain.

### The Metadata Fallback Chain

```
1. CMS SEO field (Yoast title, RankMath title)     → BEST
2. CMS content title (post.title, page.title)       → GOOD
3. Auto-extracted from content                       → FALLBACK
4. Site-wide default from layout.tsx                 → LAST RESORT
```

### Blog Post Metadata

```tsx
export async function generateMetadata({ params }): Promise<Metadata | null> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  // TITLE: CMS SEO title → post title. Strip hosting platform suffixes.
  const rawTitle = post.seo?.title ?? post.title ?? ''
  const title = rawTitle
    .replace(/\s*[-–|]\s*hostingplatform.*$/i, '')  // Strip CMS domain suffix
    .trim()

  // DESCRIPTION: CMS SEO desc → OG desc → auto-extract from content
  const rawDesc = post.seo?.metaDesc || post.seo?.opengraphDescription || ''
  const description =
    rawDesc && !rawDesc.match(/^https?:\/\/docs\.google\.com\//)  // Skip Google Docs URLs
      ? rawDesc
      : extractDescription(post.content ?? '')

  const canonicalUrl = `${config.siteUrl}/blog/${slug}`

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      type: 'article',
      url: canonicalUrl,
      siteName: config.siteName,
      publishedTime: post.date ?? undefined,
      modifiedTime: post.modified ?? undefined,
      authors: ['Your Brand'],
      images: post.featuredImage ? [post.featuredImage.node.sourceUrl] : [],
    },
  }
}
```

### Auto-Extract Description Function

When no SEO description is set in the CMS, extract from content:

```tsx
function extractDescription(html: string): string {
  const text = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')  // Remove scripts
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')     // Remove styles
    .replace(/<p[^>]*>\s*https?:\/\/docs\.google\.com\/[^<]*<\/p>/gi, '')  // Remove doc links
    .replace(/<[^>]+>/g, ' ')                            // Strip all HTML tags
    .replace(/&nbsp;/g, ' ')                             // Fix entities
    .replace(/&amp;/g, '&')
    .replace(/&#8220;|&#8221;|&#8216;|&#8217;/g, "'")
    .replace(/\s+/g, ' ')                               // Collapse whitespace
    .trim()
  return text.length > 155 ? text.slice(0, 152) + '...' : text
}
```

### Service/Location Page Metadata

```tsx
export async function generateMetadata({ params }): Promise<Metadata | null> {
  const { slug } = await params
  const page = await getPageBySlug(slug)
  if (!page) return {}

  const rawTitle = cleanTitle(page.seo?.title ?? page.title ?? '')
  // Append brand name if not already present
  const title = rawTitle.includes(config.siteName)
    ? rawTitle
    : `${rawTitle} | ${config.siteName}`

  const canonicalUrl = `${config.siteUrl}/${slug}`
  const ogImage = `${config.siteUrl}/images/og-image.png`

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: config.siteName,
      type: 'website',  // NOT 'article' - these are pages, not posts
      images: [{ url: ogImage, width: 1200, height: 630, alt: rawTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
```

### Title Cleaning Function

CMS platforms often append their domain to titles. Strip it:

```tsx
function cleanTitle(title: string): string {
  return title
    .replace(/\s*[-–|]\s*hostingplatform.*$/i, '')
    .replace(/\s*[-–|]\s*yourdomain\.com$/i, '')
    .trim()
}
```

---

## 6. ISR Strategy (Incremental Static Regeneration)

For sites with 100+ CMS pages, you cannot pre-render everything at build time.

### The Pattern

```tsx
// In every [slug]/page.tsx:

export const dynamicParams = true  // Allow pages not in generateStaticParams

export async function generateStaticParams() {
  return []  // Don't pre-render ANY pages at build time
}

// Pages are built on-demand when first requested, then cached.
// ISR revalidates cached pages every `revalidate` seconds.
```

### In `lib/config.ts`:

```tsx
revalidate: 60  // Revalidate ISR cache every 60 seconds
```

### Why This Matters

1. **Build time:** Pre-rendering 500+ pages from a CMS takes 10+ minutes and can overwhelm the CMS API
2. **Freshness:** ISR revalidates every 60 seconds, so content updates appear within a minute
3. **First visit:** First visitor to a new page triggers server-side rendering, then it's cached
4. **Vercel ISR cache** persists across deployments - pages rebuild on first visit after deploy

---

## 7. 404 Page (`app/not-found.tsx`)

Google cares about 404 behavior. A proper 404 page must:

1. **Return HTTP 404 status code** (Next.js does this automatically with `notFound()`)
2. **Have metadata** (title and description)
3. **Provide navigation** back to useful pages

```tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found - Your Brand',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex justify-center gap-4">
          <Link href="/" className="btn-primary">Go Home</Link>
          <Link href="/blog">Browse Blog</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </main>
  )
}
```

**Key:** Never return a 200 status for missing pages (soft 404). This tells Google the URL is valid when it isn't, wasting crawl budget.

---

## 8. Performance Patterns (Core Web Vitals)

Google uses Core Web Vitals as a ranking signal. These patterns ensure passing scores:

### Images
- **Always** use Next.js `<Image>` component
- Set `priority` on above-the-fold images (hero, featured)
- Let Next.js handle lazy loading for below-the-fold images
- Use `fill` with `object-cover` for responsive hero images
- Enable AVIF + WebP in next.config.ts

### Fonts
- Load via `next/font/google` (self-hosted, no external requests)
- Set `display: 'swap'` on ALL font imports
- Maximum 2 font families
- Apply via CSS variables, not direct className on body

### CSS Animations
- Use CSS-only animations, no JavaScript animation libraries
- `animation-timeline: view()` for scroll-triggered animations (zero JS)
- Custom keyframes for subtle effects (fade-in, spin)

```css
@supports (animation-timeline: view()) {
  .scroll-fade-in {
    animation: fade-in-up linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 30%;
  }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### ISR Over SSR
- ISR pages are served from edge cache (fast)
- SSR pages are computed on every request (slow)
- Use ISR with 60-second revalidation for CMS content

---

## 9. Site Configuration Pattern (`lib/config.ts`)

Central configuration object imported everywhere:

```tsx
const config = {
  siteName: 'Your Brand',
  siteDescription: 'Your 150-160 character description for search results.',
  siteUrl: 'https://www.yourdomain.com',
  revalidate: 60,
  phone: '(555) 555-5555',
  phoneLink: 'tel:+15555555555',
  salesPhone: '(555) 555-5556',
  salesPhoneLink: 'tel:+15555555556',
  email: 'contact@yourdomain.com',
  notificationEmails: [
    'primary@yourdomain.com',
    'backup@yourdomain.com',
  ],
}

export default config
```

### Rules:
- `siteUrl` is ALWAYS `https://www.` (consistent canonical)
- Phone numbers in both display and `tel:` formats
- Multiple notification emails for redundancy
- `revalidate` controls ISR globally
- Export as default, import in every file that needs site info

---

## Technical SEO Checklist

Before launching any Relester Method site, verify:

- [ ] `metadataBase` set in root layout
- [ ] OG image exists at `/images/og-image.png` (1200x630px)
- [ ] `robots.ts` blocks preview/success pages
- [ ] `sitemap.ts` generates all pages with correct priorities
- [ ] X-Robots-Tag header blocks non-production domains
- [ ] 301 redirects for any changed slugs
- [ ] ISR configured (empty `generateStaticParams`, `revalidate: 60`)
- [ ] 404 page returns proper HTTP status
- [ ] Fonts loaded with `display: 'swap'`
- [ ] Images use Next.js `<Image>` with AVIF/WebP
- [ ] `lang="en"` on `<html>` element
- [ ] Every page has unique `<title>` and canonical URL
- [ ] Production domain resolves to `www.` version (redirect non-www)
