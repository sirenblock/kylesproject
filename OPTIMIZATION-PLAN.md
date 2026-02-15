# 30A Junk Removal - Site Optimization Plan

## Conversion, SEO & UI/UX Analysis

**Date:** February 15, 2026
**Site:** 30ajunkremoval.com
**Stack:** Next.js 16.1.2, React 19, Tailwind CSS 4, TypeScript

---

## EXECUTIVE SUMMARY

The site is well-built with a modern stack, good SEO foundations, and strong branding. However, there are **critical gaps in conversion infrastructure, local SEO depth, and performance** that are leaving leads on the table. Below are prioritized recommendations organized by impact.

---

## 1. CONVERSION OPTIMIZATION

### CRITICAL (Highest Impact)

#### 1.1 Contact Form Has No Backend
**File:** `app/contact/page.tsx:17-19`
**Problem:** The contact form `console.log()`s submissions instead of sending them anywhere. Every form submission is lost.
**Fix:**
- Integrate a form backend (Formspree, Resend, or a Next.js API route)
- Send submissions to email + store in a CRM/spreadsheet
- Add GCLID/UTM data to form submissions for ad attribution
- Track `trackFBLead()` and GA4 `generate_lead` event on successful submit

#### 1.2 Quote Calculator Doesn't Capture Leads
**File:** `components/sections/QuoteCalculator.tsx`
**Problem:** Users get a price estimate but there's no mechanism to capture their contact info or send the quote. The calculator is engagement-only, not a lead generator.
**Fix:**
- Add a "Get This Quote Sent to You" step after price calculation
- Collect name + phone (minimum) to send the quote
- Auto-attach GCLID/UTM params for attribution
- Fire `trackFBQuote()` and GA4 conversion events
- Optional: Add SMS opt-in checkbox for follow-up

#### 1.3 No SMS/Text Lead Capture Integration
**Problem:** "Text Us" links open the native SMS app but there's no pre-filled message, making it harder for users.
**Fix:**
- Add pre-filled SMS body: `sms:+18503683495?body=Hi, I need a junk removal quote for...`
- Track all SMS link clicks as conversion events in GA4/FB

#### 1.4 Missing Urgency & Social Proof on CTAs
**Problem:** CTAs lack urgency triggers that drive immediate action.
**Fix:**
- Add dynamic availability messaging: "Available Today" / "Next Available: Tomorrow"
- Show recent activity: "Sarah in Rosemary Beach got a quote 12 min ago"
- Add review count next to CTAs: "Rated 5.0 from 47 reviews"

### HIGH PRIORITY

#### 1.5 No Exit-Intent or Scroll-Triggered Popups
**Problem:** Users who leave without converting get no retention attempt.
**Fix:**
- Add exit-intent popup on desktop offering "Get 10% off your first haul"
- Add scroll-depth triggered CTA after 60% scroll on service pages
- Keep it lightweight - single field (phone number) is enough

#### 1.6 Contact Form Missing Validation Feedback
**File:** `app/contact/page.tsx`
**Problem:** Uses basic HTML `required` attributes only. No inline validation, no error messages, no phone formatting.
**Fix:**
- Migrate to `react-hook-form` + `zod` (already installed, not used on this form)
- Add inline validation errors
- Auto-format phone number input
- Add field-level error states with visual feedback

#### 1.7 No Thank-You / Confirmation Flow
**Problem:** After form submission, user sees a static "Message Sent!" div. No next steps.
**Fix:**
- Redirect to a dedicated `/thank-you` page (better for conversion tracking pixels)
- Include expected response time, alternative contact methods
- Fire conversion pixels on the thank-you page for accurate attribution

#### 1.8 Property Management Page Lacks Dedicated Lead Form
**File:** `app/services/property-management/page.tsx`
**Problem:** B2B property managers are a high-value segment but share the generic contact flow.
**Fix:**
- Add a dedicated "Schedule Property Management Consultation" form
- Include fields: number of properties, service frequency, property type
- This data qualifies the lead before the call

---

## 2. SEO OPTIMIZATION

### CRITICAL

#### 2.1 Empty `next.config.ts` - Missing Performance Optimizations
**File:** `next.config.ts`
**Problem:** Config is completely empty. Missing image optimization, compression, and security headers.
**Fix:**
```typescript
const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  compress: true,
  poweredByHeader: false,
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
      ],
    },
  ],
}
```

#### 2.2 No Individual Service Area Pages
**Problem:** Sitemap lists 10 service area routes (`/service-areas/seaside`, `/service-areas/rosemary-beach`, etc.) but only `/service-areas` exists as a page. The individual routes are 404s.
**Impact:** These are your most valuable local SEO pages. "Junk removal Seaside FL" and similar long-tail queries need dedicated landing pages.
**Fix:**
- Create `app/service-areas/[slug]/page.tsx` with dynamic routing
- Each page should have:
  - Unique H1: "Junk Removal in [City], FL"
  - City-specific content (landmarks, neighborhoods, distances)
  - LocalBusiness structured data with city-specific `areaServed`
  - Embedded Google Map
  - Testimonials filtered by that city
  - Dedicated CTA

#### 2.3 No Individual Service Pages
**Problem:** Service links in the footer and services page point to routes like `/services/one-time-hauls`, `/services/construction-debris`, etc. - but only `/services` and `/services/property-management` exist. Everything else is a 404.
**Fix:**
- Create `app/services/[slug]/page.tsx` for each service
- Each page should target specific keywords: "construction debris removal 30A", "hot tub removal near me"
- Include service-specific FAQ with `FAQSchema`
- Include pricing details and process steps

#### 2.4 Missing Open Graph Images
**Problem:** No OG images configured. Social shares show no preview image.
**Fix:**
- Create `app/opengraph-image.tsx` using Next.js OG Image generation
- Create page-specific OG images for key landing pages
- Include brand logo, page title, and coastal imagery

#### 2.5 No Google Business Profile Link
**File:** `components/seo/StructuredData.tsx:49`
**Problem:** `sameAs` array is empty - no social profiles or Google Business Profile linked.
**Fix:**
- Add Google Business Profile URL
- Add any social media profiles (Facebook, Instagram, Yelp)
- This strengthens the Knowledge Graph entity

### HIGH PRIORITY

#### 2.6 Blog Posts Need Better Internal Linking
**File:** `lib/blog.ts`
**Problem:** Blog posts are static content in a TypeScript file with no cross-linking to service pages or service area pages.
**Fix:**
- Add contextual links within blog content to relevant service pages
- Add "Related Services" section at bottom of each blog post
- Add "Serving [City]" callouts linking to service area pages
- Consider adding "Related Posts" component

#### 2.7 Sitemap Priority Values Need Tuning
**File:** `app/sitemap.ts`
**Problem:** Services pages get 0.8 priority but pricing gets 0.6. For a service business, pricing is a key conversion page.
**Fix:**
- `/pricing` should be 0.9 (high-intent page)
- `/contact` should be 0.9
- Service area pages should be 0.8 (local SEO value)
- Blog index should be 0.7, not 0.9

#### 2.8 Missing Canonical URLs on Pages
**Problem:** No explicit canonical URLs set per page. While Next.js handles this with `metadataBase`, explicit canonicals on key pages prevent duplicate content issues.
**Fix:**
- Add `alternates: { canonical: '/services' }` to each page's metadata

#### 2.9 No `<h1>` Tag in Homepage
**File:** `components/sections/Hero.tsx:163`
**Problem:** The hero uses `<h1>` correctly, but the text "Premium Junk Removal for 30A Homes" could be more keyword-rich.
**Fix:**
- Consider: "Premium Junk Removal Services on 30A, Florida"
- Include target keyword "junk removal 30A" naturally in the H1

#### 2.10 Footer Links Point to Non-Existent Pages
**File:** `components/layout/Footer.tsx:180-185`
**Problem:** `/privacy` and `/terms` pages don't exist (404). Service sub-pages and service area sub-pages in footer also 404.
**Fix:**
- Create `/privacy` and `/terms` pages (required for trust and compliance)
- Ensure all footer links resolve to real pages

---

## 3. UI/UX OPTIMIZATION

### CRITICAL

#### 3.1 No Real Images Anywhere on the Site
**Problem:** The entire site uses CSS gradients, icons, and color blocks instead of actual photos. For a service business, real photos are essential for trust.
**Fix:**
- Add hero image/video of the team or truck in action
- Add before/after photos on service pages
- Add team photos on the about page
- Use `next/image` component for optimization (lazy loading, responsive sizes, WebP/AVIF)
- Add `alt` text with keywords for SEO

#### 3.2 Homepage Section Order Could Be Optimized
**File:** `app/page.tsx`
**Current order:** Hero > QuoteCalculator > ServiceCards > HowItWorks > PricingTable > ServicesGrid > Testimonials > ServiceArea > FAQ > CTASection
**Problem:** `ServicesGrid` and `ServiceCards` are redundant (both show services). Testimonials appear too late.
**Fix - Recommended order:**
1. Hero (with stronger CTA)
2. Trust Bar (reviews count, years in business, jobs completed - currently missing)
3. QuoteCalculator
4. HowItWorks (simplified 3-step)
5. Testimonials (move UP - social proof before pricing)
6. PricingTable
7. ServiceCards (remove ServicesGrid - it's redundant)
8. ServiceArea
9. FAQ
10. CTASection

#### 3.3 Mobile CTA Bar Could Be Stronger
**File:** `components/ui/MobileCTA.tsx`
**Problem:** Three equal-weight buttons dilute the primary action. "Quote" button doesn't stand out enough.
**Fix:**
- Make "Call" the visually dominant action (for service businesses, phone calls convert highest)
- Or use a single prominent "Call Now" button with a secondary "Text" option
- Add a pulsing dot or "Available Now" indicator

#### 3.4 Page Load Performance - Heavy Animations
**Problem:** Framer Motion is loaded on every page for animations. The Hero alone has 6+ animated SVG paths, 4 floating orbs with continuous animations, and multiple gradient animations.
**Fix:**
- Use CSS animations for simple effects (already defined in globals.css but not used)
- Lazy-load Framer Motion only where needed using `dynamic()` import
- Reduce hero SVG wave animations from 3 layers to 1
- Use `prefers-reduced-motion` media query to disable animations for users who prefer it

### HIGH PRIORITY

#### 3.5 No Loading States or Skeleton Screens
**Problem:** Pages render with animation delays (stagger children), creating a "blank then pop" experience.
**Fix:**
- Add skeleton loading states for dynamic content
- Use `loading.tsx` files in Next.js app router
- Consider instant static rendering for above-the-fold content

#### 3.6 Testimonials Section - Show Multiple at Once on Desktop
**File:** `components/sections/Testimonials.tsx`
**Problem:** Shows one testimonial at a time in a carousel. Carousels have notoriously low engagement.
**Fix:**
- Show 3 testimonial cards in a grid on desktop
- Keep carousel on mobile only
- Add Google Reviews badge/link for authenticity
- Include review dates for freshness signals

#### 3.7 No "Sticky" Quote CTA While Scrolling
**Problem:** On desktop, once users scroll past the hero, there's no persistent CTA until the bottom CTA section.
**Fix:**
- Add a subtle sticky bar at the top (below header) on desktop that appears after scrolling past the hero
- Include phone number + "Get Quote" button
- Auto-hide when user scrolls back up to hero

#### 3.8 FAQ Section Needs Structured Data
**File:** `components/sections/FAQ.tsx`
**Problem:** FAQ component exists and has great content, but doesn't use the `FAQSchema` component for structured data.
**Fix:**
- Add `FAQSchema` to the FAQ page and homepage FAQ section
- This enables FAQ rich results in Google Search

#### 3.9 Blog Post Pages Need Better Layout
**Problem:** Blog posts render raw markdown-style content without images, author info, or publish dates visible.
**Fix:**
- Add author byline with photo
- Add publish date and reading time
- Add table of contents for longer posts
- Add "Related Posts" at bottom
- Add share buttons (native share API)
- Add a CTA banner between content sections

#### 3.10 Accessibility Gaps
**Problem:** Several interactive elements lack proper ARIA attributes.
**Fix:**
- Add `aria-expanded` to FAQ accordion buttons
- Add `role="region"` to FAQ answer panels
- Ensure all color combinations meet WCAG AA contrast (especially white text on gradient backgrounds)
- Add skip-to-content link
- Test with screen reader

---

## 4. PERFORMANCE OPTIMIZATION

#### 4.1 No Font Optimization
**Problem:** `globals.css` references `--font-inter` and `--font-playfair` but no fonts are loaded via `next/font`.
**Fix:**
- Use `next/font/google` to load Inter and Playfair Display
- This eliminates font layout shift and blocks render until fonts are ready

#### 4.2 No Image Optimization Pipeline
**Problem:** No images exist yet, but when added they need optimization.
**Fix:**
- Use `next/image` exclusively
- Configure image sizes in `next.config.ts`
- Use `priority` prop for above-the-fold images
- Implement blur placeholder for below-the-fold images

#### 4.3 Analytics Scripts Could Defer Better
**File:** `components/analytics/GoogleAnalytics.tsx`, `FacebookPixel.tsx`
**Problem:** Analytics scripts load `afterInteractive` which is fine, but could be pushed to `lazyOnload` if not needed immediately.
**Fix:**
- Consider `strategy="lazyOnload"` for Facebook Pixel (GA4 should stay `afterInteractive`)
- This improves Lighthouse scores

---

## 5. QUICK WINS (Implement First)

| # | Item | Impact | Effort |
|---|------|--------|--------|
| 1 | Wire up contact form to Formspree/API route | Critical - leads are being lost | Low |
| 2 | Add lead capture to quote calculator | Critical - biggest conversion unlock | Medium |
| 3 | Pre-fill SMS body text | High - reduces friction | Low |
| 4 | Create service area dynamic pages | High - local SEO | Medium |
| 5 | Create individual service pages | High - keyword targeting | Medium |
| 6 | Add FAQ structured data | High - rich results | Low |
| 7 | Add real photos/images | High - trust & engagement | Medium |
| 8 | Fix 404 footer links (privacy, terms) | Medium - trust signals | Low |
| 9 | Populate next.config.ts | Medium - performance & security | Low |
| 10 | Add next/font optimization | Medium - performance | Low |

---

## 6. MEASUREMENT PLAN

To track optimization impact, ensure these are properly configured:

### Conversion Events to Track
- `form_submit` - Contact form completions
- `quote_complete` - Quote calculator final step
- `phone_click` - Phone number link clicks
- `sms_click` - SMS link clicks
- `email_click` - Email link clicks
- `quote_start` - Quote calculator interactions

### Key Metrics to Monitor
- **Conversion Rate:** Form submissions / unique visitors
- **Quote Calculator Completion Rate:** Starts vs. completes
- **Phone Call Rate:** Click-to-call / unique mobile visitors
- **Bounce Rate by Page:** Identify weak landing pages
- **Local Pack Ranking:** Track for target service area keywords

---

## PRIORITY IMPLEMENTATION ORDER

### Phase 1: Stop Losing Leads (Week 1)
1. Wire up contact form backend
2. Add lead capture step to quote calculator
3. Pre-fill SMS body messages
4. Fire conversion events on all lead actions

### Phase 2: Local SEO Foundation (Week 2)
5. Create service area dynamic pages (10 pages)
6. Create individual service pages (6 pages)
7. Add FAQ structured data to homepage + FAQ page
8. Create privacy/terms pages
9. Fix all broken footer links

### Phase 3: Trust & Performance (Week 3)
10. Add real photography (hero, services, team)
11. Configure next/font for Inter + Playfair Display
12. Configure next.config.ts (images, headers, compression)
13. Add OG images for social sharing
14. Link Google Business Profile in structured data

### Phase 4: UX Polish (Week 4)
15. Reorder homepage sections
16. Remove redundant ServicesGrid component
17. Improve testimonials layout (grid vs carousel)
18. Add sticky desktop CTA bar
19. Strengthen mobile CTA bar
20. Reduce animation weight

---

*This plan is based on analysis of all source files in the repository as of February 15, 2026.*
