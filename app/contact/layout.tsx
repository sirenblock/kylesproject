import { Metadata } from 'next'
import { getCanonicalUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Contact Us | 30A Junk Removal',
  description: 'Get in touch with 30A Junk Removal. Call, text, or send us a message for fast junk removal quotes and service.',
  alternates: {
    canonical: getCanonicalUrl('/contact'),
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
