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
    const removedLocations = [
      'destin',
      'fort-walton-beach',
      'niceville',
      'crestview',
      'mary-esther',
      'shalimar',
      'valparaiso',
    ]
    return [
      {
        source: '/service-areas/:location/:service',
        destination: '/service-areas/:location',
        permanent: true,
      },
      // Okaloosa County locations removed from service area (2026-05-24)
      ...removedLocations.map((slug) => ({
        source: `/service-areas/${slug}`,
        destination: '/service-areas',
        permanent: true,
      })),
      {
        source: '/service-areas/county/okaloosa-county',
        destination: '/service-areas',
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
