import { ImageResponse } from 'next/og'
import { ogTemplate, ogImageMeta } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — Junk Removal Cost Calculator'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  return new ImageResponse(
    ogTemplate({
      title: 'Junk Removal Cost Calculator',
      subtitle: 'Instant cost estimate for any volume — 30A and Panama City Beach pricing.',
      badge: 'interactive tool',
      tags: ['Cost Estimate', 'All Services', '30A & PCB'],
      accentColor: 'gold',
    }),
    size
  )
}
