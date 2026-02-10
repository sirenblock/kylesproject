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
