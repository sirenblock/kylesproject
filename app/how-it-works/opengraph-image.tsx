import { ImageResponse } from 'next/og'
import { ogTemplate, ogImageMeta } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — How It Works'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  return new ImageResponse(
    ogTemplate({
      title: 'How 30A Junk Removal Works',
      subtitle:
        '5 steps from text to hauled. Upfront pricing, same-day service, no surprises.',
      badge: 'process',
      tags: ['Text Photos', 'Get Quote', 'Same-Day Haul'],
      accentColor: 'ocean',
    }),
    size
  )
}
