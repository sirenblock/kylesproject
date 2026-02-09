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
  },

  // Enable React strict mode for better development warnings
  reactStrictMode: true,
};

export default nextConfig;
