import type { MetadataRoute } from 'next'

// PWA web app manifest. Enables Android "Add to Home Screen" banner
// and gives the site proper branding when bookmarked. Per
// nextjs-seo-baseline skill.

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '30A Junk Removal',
    short_name: '30A Junk',
    description:
      'Same-day junk removal on 30A and Panama City Beach. From $150. 4.9-star on 127+ reviews.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0369a1',
    orientation: 'portrait-primary',
    categories: ['business', 'services', 'lifestyle'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        src: '/images/og-image.jpg',
        sizes: '1200x630',
        type: 'image/jpeg',
        purpose: 'any',
      },
    ],
  }
}
