import { ImageResponse } from 'next/og'
import { glossaryTerms } from '@/lib/glossary'
import { ogTemplate, ogImageMeta, ogImageResponseInit } from '@/lib/og-image-template'

export const runtime = 'edge'
export const alt = '30A Junk Removal — Industry Glossary'
export const { size, contentType } = ogImageMeta

export default function OGImage() {
  return new ImageResponse(
    ogTemplate({
      title: 'Junk Removal Industry Glossary',
      subtitle: `${glossaryTerms.length} terms defined — EPA Section 608, refrigerant recovery, HHW, Florida plastic-bag rule, and more.`,
      badge: 'glossary',
      tags: ['Pricing & Volume', 'Regulations', 'Disposal'],
      accentColor: 'ocean',
    }),
    { ...size, ...ogImageResponseInit }
  )
}
