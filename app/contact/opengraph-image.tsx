import { ImageResponse } from 'next/og'
import { ogTemplate, ogImageMeta } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — Contact Us'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  return new ImageResponse(
    ogTemplate({
      title: 'Get a Junk Removal Quote',
      subtitle:
        'Text photos to +1 (850) 368-3495 for a confirmed price within 10 minutes. Same-day service across 30A & PCB.',
      badge: 'contact',
      tags: ['Instant Quote', 'Same-Day Service', '+1 (850) 368-3495'],
      accentColor: 'ocean',
    }),
    size
  )
}
