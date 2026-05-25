import { ImageResponse } from 'next/og'
import { ogTemplate, ogImageMeta, ogImageResponseInit } from '@/lib/og-image-template'
import { getServiceDetail } from '@/lib/services'

export const runtime = 'edge'
export const alt = '30A Junk Removal — Yard Debris'
export const { size, contentType } = ogImageMeta

// Per-service OG image. Generated once per service so social shares
// (Facebook, LinkedIn, iMessage, Twitter) display branded service-
// specific cards instead of falling back to the generic /services
// hub OG. Per opengraph-image-generation skill.

export default function OGImage() {
  const service = getServiceDetail('yard-debris')
  return new ImageResponse(
    ogTemplate({
      title: service?.title ?? 'Yard Debris',
      subtitle:
        service?.description
          ? service.description.length > 130
            ? service.description.slice(0, 130).trim() + '...'
            : service.description
          : 'Same-day junk removal service across 30A, PCB, Walton & Bay Counties.',
      badge: 'service',
      tags: ['Same-Day', '4.9★', '+1 (850) 368-3495'],
      accentColor: 'ocean',
    }),
    { ...size, ...ogImageResponseInit }
  )
}
