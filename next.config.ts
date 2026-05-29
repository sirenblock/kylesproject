import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable compression for better performance
  compress: true,

  // Disable source maps in production for smaller bundle sizes
  productionBrowserSourceMaps: false,

  // Optimize images with modern formats
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  // Enable React strict mode for better development warnings
  reactStrictMode: true,

  async redirects() {
    // Okaloosa County removal (2026-05-24). Per url-redirects-recovery
    // skill: avoid the soft-404 anti-pattern of redirecting many removed
    // pages to a single hub. Route each removed city to its nearest
    // still-serviced neighbor so equity flows to relevant local content.
    const okaloosaRedirects: Array<{ source: string; destination: string }> = [
      // Destin -> Miramar Beach (nearest Walton County coastal location)
      { source: '/service-areas/destin', destination: '/service-areas/miramar-beach' },
      // Fort Walton Beach -> Miramar Beach (closest geographic match)
      { source: '/service-areas/fort-walton-beach', destination: '/service-areas/miramar-beach' },
      // Niceville -> Walton County hub (inland, near Choctawhatchee Bay)
      { source: '/service-areas/niceville', destination: '/service-areas/county/walton-county' },
      // Crestview -> Walton County hub (inland, north Walton area)
      { source: '/service-areas/crestview', destination: '/service-areas/county/walton-county' },
      // Mary Esther -> Miramar Beach (closest geographic neighbor)
      { source: '/service-areas/mary-esther', destination: '/service-areas/miramar-beach' },
      // Shalimar -> Miramar Beach (closest geographic neighbor)
      { source: '/service-areas/shalimar', destination: '/service-areas/miramar-beach' },
      // Valparaiso -> Walton County hub (inland, near Niceville)
      { source: '/service-areas/valparaiso', destination: '/service-areas/county/walton-county' },
    ]
    // Removed the catch-all `/service-areas/:location/:service` wildcard
    // (2026-05-25 live-site audit) -- the path-to-regexp negative
    // lookahead approach was unreliable and was 308-redirecting the
    // real /service-areas/county/[county] route to a 404. The original
    // intent (collapsing deleted doorway pages back to location parents)
    // is now better handled by letting Google's crawler discover the
    // 404 and drop the doorway URLs naturally over a few weeks.
    // Belt-and-suspenders 301s for previously-broken internal service slugs
    // (found in 2026-05-27 live audit). These slugs were linked from county
    // pages, the FAQ component, and every blog post but never existed as
    // real routes -- 5 dead URLs that returned 404. Source links are now
    // pointed to the canonical slugs, but external backlinks (old
    // shared URLs in social posts, AI chat citations, prior crawls) may
    // still hit these so we 301 them for equity recovery.
    const brokenServiceRedirects: Array<{ source: string; destination: string }> = [
      // These slugs previously pointed to non-existent service routes.
      // Now all /services/* slugs consolidate to /services anchor sections.
      { source: '/services/residential', destination: '/services#one-time-hauls' },
      { source: '/services/commercial', destination: '/services#commercial-junk-removal' },
      { source: '/services/construction', destination: '/services#construction-debris' },
      { source: '/services/construction-debris-removal', destination: '/services#construction-debris' },
      { source: '/services/property-management-junk-removal', destination: '/services#property-management' },
    ]

    // CONSOLIDATION REDIRECTS (2026-05-28 AI compliance audit Phase 1):
    // 31 templated /services/[name] pages consolidated to /services
    // hub with anchor sections. Each old URL 308s to /services#[slug].
    const serviceSlugs = [
      'appliance-removal', 'attic-cleanout', 'bathroom-demolition',
      'bulk-trash-pickup', 'carpet-removal', 'commercial-junk-removal',
      'concrete-removal', 'construction-debris', 'deck-removal',
      'donation-pickup', 'estate-cleanouts', 'exercise-equipment',
      'fence-removal', 'foreclosure-cleanout', 'furniture-removal',
      'garage-cleanouts', 'hoarder-cleanout', 'hot-tub-removal',
      'hurricane-debris', 'kitchen-demolition', 'mattress-removal',
      'office-furniture', 'one-time-hauls', 'piano-removal',
      'property-management', 'same-day-junk-removal', 'shed-demolition',
      'storage-unit-cleanout', 'tv-electronics-recycling',
      'vacation-rentals', 'yard-debris',
    ]
    const serviceConsolidationRedirects = serviceSlugs.map((slug) => ({
      source: `/services/${slug}`,
      destination: `/services#${slug}`,
      permanent: true,
    }))

    // 27 templated /service-areas/[town] pages consolidated to
    // /service-areas hub with anchor sections per town.
    const locationSlugs = [
      'seaside', 'rosemary-beach', 'alys-beach', 'watercolor',
      'grayton-beach', 'santa-rosa-beach', 'inlet-beach', 'seacrest',
      'seagrove-beach', 'blue-mountain-beach', 'panama-city-beach',
      'miramar-beach', 'sandestin', 'dune-allen-beach', 'point-washington',
      'watersound', 'seacrest-beach', 'freeport', 'defuniak-springs',
      'watersound-beach', 'panama-city', 'lynn-haven', 'callaway',
      'springfield', 'parker', 'laguna-beach', 'mexico-beach',
    ]
    const locationConsolidationRedirects = locationSlugs.map((slug) => ({
      source: `/service-areas/${slug}`,
      destination: `/service-areas#${slug}`,
      permanent: true,
    }))

    // 2 templated /service-areas/county/[county] pages consolidated.
    const countyConsolidationRedirects = [
      { source: '/service-areas/county/walton-county', destination: '/service-areas#walton-county' },
      { source: '/service-areas/county/bay-county', destination: '/service-areas#bay-county' },
    ]

    // 14 templated /blog/[location]-junk-removal-complete-guide posts
    // consolidated to /service-areas#[town] anchors. Plus the
    // /blog/move-in-move-out post (templated location-table style).
    const locationBlogRedirects: Array<{ source: string; destination: string }> = [
      { source: '/blog/alys-beach-junk-removal-complete-guide', destination: '/service-areas#alys-beach' },
      { source: '/blog/blue-mountain-beach-junk-removal-complete-guide', destination: '/service-areas#blue-mountain-beach' },
      { source: '/blog/grayton-beach-junk-removal-complete-guide', destination: '/service-areas#grayton-beach' },
      { source: '/blog/inlet-beach-junk-removal-complete-guide', destination: '/service-areas#inlet-beach' },
      { source: '/blog/lynn-haven-junk-removal-complete-guide', destination: '/service-areas#lynn-haven' },
      { source: '/blog/mexico-beach-junk-removal-complete-guide', destination: '/service-areas#mexico-beach' },
      { source: '/blog/miramar-beach-junk-removal-complete-guide', destination: '/service-areas#miramar-beach' },
      { source: '/blog/panama-city-beach-junk-removal-complete-guide', destination: '/service-areas#panama-city-beach' },
      { source: '/blog/rosemary-beach-junk-removal-complete-guide', destination: '/service-areas#rosemary-beach' },
      { source: '/blog/sandestin-junk-removal-resort-community-guide', destination: '/service-areas#sandestin' },
      { source: '/blog/santa-rosa-beach-junk-removal-complete-guide', destination: '/service-areas#santa-rosa-beach' },
      { source: '/blog/seaside-florida-junk-removal-complete-guide', destination: '/service-areas#seaside' },
      { source: '/blog/watercolor-junk-removal-complete-guide', destination: '/service-areas#watercolor' },
      { source: '/blog/watersound-junk-removal-complete-guide', destination: '/service-areas#watersound' },
      { source: '/blog/move-in-move-out-junk-removal-30a-pcb-complete-guide', destination: '/blog' },
    ]

    return [
      // Okaloosa city pages -> nearest still-serviced neighbor (no soft-404)
      ...okaloosaRedirects.map((r) => ({ ...r, permanent: true })),
      // Broken service slugs -> canonical /services anchors
      ...brokenServiceRedirects.map((r) => ({ ...r, permanent: true })),
      // Phase 1 consolidation per AI compliance audit (2026-05-28)
      ...serviceConsolidationRedirects,
      ...locationConsolidationRedirects,
      ...countyConsolidationRedirects.map((r) => ({ ...r, permanent: true })),
      ...locationBlogRedirects.map((r) => ({ ...r, permanent: true })),
      // Legacy Okaloosa County -> Walton County hub anchor
      {
        source: '/service-areas/county/okaloosa-county',
        destination: '/service-areas#walton-county',
        permanent: true,
      },
      {
        source: '/blog/junk-removal-okaloosa-county-florida-complete-guide',
        destination: '/blog/junk-removal-walton-county-florida-complete-guide',
        permanent: true,
      },
    ]
  },

  // Two header() blocks:
  // 1. Security headers on ALL routes (HSTS, CSP, anti-clickjack, etc.)
  // 2. X-Robots-Tag: noindex on non-production hosts to keep Vercel
  //    preview URLs and apex (non-www) domains out of the SERP.
  async headers() {
    // Content Security Policy -- allowlist the third-party domains the
    // site actually loads (GTM, GA, Facebook, Stripe, Unsplash, Google
    // Maps) plus 'self'. 'unsafe-inline' and 'unsafe-eval' are required
    // for Next.js inline scripts; the alternative (per-request nonces)
    // would require server middleware and disable static export of
    // protected pages.
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://connect.facebook.net https://js.stripe.com https://maps.googleapis.com https://www.googleadservices.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://images.unsplash.com https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com https://maps.gstatic.com https://www.facebook.com https://*.fbcdn.net https://stats.g.doubleclick.net https://www.googleadservices.com https://googleads.g.doubleclick.net",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.facebook.com https://stats.g.doubleclick.net https://maps.googleapis.com",
      "frame-src 'self' https://www.googletagmanager.com https://td.doubleclick.net https://www.facebook.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      'upgrade-insecure-requests',
    ].join('; ')

    return [
      // Security headers on every route
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Content-Security-Policy',
            value: csp,
          },
        ],
      },
      // Block indexing on non-canonical hosts (Vercel previews + apex)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?!www\\.30ajunkremoval\\.com).*',
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
};

export default nextConfig;
