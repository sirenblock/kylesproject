import { ImageResponse } from 'next/og'
import { ogTemplate, ogImageMeta } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — Hot Tub Removal Cost Calculator'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  return new ImageResponse(
    ogTemplate({
      title: 'Hot Tub Removal Cost Calculator',
      subtitle: 'Instant cost estimate based on size, access, and community type.',
      badge: 'interactive tool',
      tags: ['Hot Tub Removal', 'Cost Estimate', '30A & PCB'],
      accentColor: 'seafoam',
    }),
    size
  )
}
