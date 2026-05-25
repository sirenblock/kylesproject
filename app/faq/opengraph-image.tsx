import { ImageResponse } from 'next/og'
import { ogTemplate, ogImageMeta, ogImageResponseInit } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — FAQ'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  return new ImageResponse(
    ogTemplate({
      title: 'Junk Removal FAQ',
      subtitle:
        'Everything you need to know about 30A and PCB junk removal — pricing, scheduling, what we haul, and more.',
      badge: 'frequently asked',
      tags: ['Pricing', 'Process', 'Scheduling'],
      accentColor: 'seafoam',
    }),
    { ...size, ...ogImageResponseInit }
  )
}
