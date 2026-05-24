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

  // CRITICAL: Prevent non-production domains from being indexed
  // This blocks Vercel preview URLs from competing with your production site
  async headers() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            // Match any host EXCEPT www.30ajunkremoval.com
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
