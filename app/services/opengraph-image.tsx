import { ImageResponse } from 'next/og'
import { getAllServiceSlugs } from '@/lib/services'
import { ogTemplate, ogImageMeta, ogImageResponseInit } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — Complete Service Catalog'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  const serviceCount = getAllServiceSlugs().length
  return new ImageResponse(
    ogTemplate({
      title: 'Junk Removal Services in 30A & PCB',
      subtitle: `${serviceCount} services from vacation rental cleanouts to estate liquidation, hot tub removal, and construction debris.`,
      badge: 'all services',
      tags: ['Same-Day Service', 'Licensed & Insured', '4.9★ Rated'],
      accentColor: 'ocean',
    }),
    { ...size, ...ogImageResponseInit }
  )
}
