import { ImageResponse } from 'next/og'
import { ogTemplate, ogImageMeta, ogImageResponseInit } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — Hurricane Prep'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  return new ImageResponse(
    ogTemplate({
      title: 'Hurricane Prep Junk Removal',
      subtitle:
        'Pre-season prep (May/June). Storm-watch emergency service. Post-storm cleanup. Atlantic season June 1 - Nov 30.',
      badge: 'hurricane season',
      tags: ['Pre-Season', 'Emergency', 'Post-Storm'],
      accentColor: 'gold',
    }),
    { ...size, ...ogImageResponseInit }
  )
}
