import { ImageResponse } from 'next/og'
import { ogTemplate, ogImageMeta } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — Same-Day Service'
export const { size, contentType } = ogImageMeta

// Homepage OG image -- the most-shared URL on the site (root domain).
// Per opengraph-image-generation skill: a branded homepage OG image
// is the highest-leverage social share asset on any site.
export default function OGImage() {
  return new ImageResponse(
    ogTemplate({
      title: '30A Junk Removal',
      subtitle:
        'Same-day service across 30A, PCB, Walton & Bay Counties. From $150. 4.9★ on 127+ reviews.',
      badge: 'same-day junk removal',
      tags: ['$150 Minimum', 'Same-Day Service', '4.9★ Rated'],
      accentColor: 'gold',
    }),
    size
  )
}
