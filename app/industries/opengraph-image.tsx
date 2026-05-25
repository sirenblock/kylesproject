import { ImageResponse } from 'next/og'
import { ogTemplate, ogImageMeta } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — Industries We Serve'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  return new ImageResponse(
    ogTemplate({
      title: 'Industries We Serve — B2B Junk Removal',
      subtitle: 'Vacation rental, real estate, hospitality, construction, retail, professional services, estate attorneys.',
      badge: 'B2B services',
      tags: ['Preferred Vendor', 'Volume Pricing', 'Scheduled Service'],
      accentColor: 'gold',
    }),
    size
  )
}
