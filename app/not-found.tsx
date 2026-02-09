import Link from 'next/link'
import { Metadata } from 'next'
import config from '@/lib/config'
import { Phone, MessageCircle, Home, MapPin } from 'lucide-react'
import { PHONE_NUMBER, getSMSLink } from '@/lib/utils'

// Relester SEO Method: Proper 404 page with metadata
export const metadata: Metadata = {
  title: `Page Not Found - ${config.siteName}`,
  description: 'The page you are looking for could not be found. Contact us for junk removal services on 30A.',
  alternates: {
    canonical: `${config.siteUrl}/404`,
  },
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-sand-50 via-white to-ocean-50">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Code */}
        <h1 className="text-9xl font-bold text-ocean-600 mb-4">404</h1>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
          But we're still here to help with your junk removal needs!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </Link>

          <Link
            href={getSMSLink(PHONE_NUMBER, "Hi, I need junk removal help")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-ocean-500 text-ocean-600 rounded-xl font-bold text-lg hover:bg-ocean-50 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Text Us
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
            Helpful Links
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-slate-200 hover:border-ocean-400 hover:text-ocean-600 transition-colors font-medium"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-slate-200 hover:border-ocean-400 hover:text-ocean-600 transition-colors font-medium"
            >
              Our Services
            </Link>

            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-slate-200 hover:border-ocean-400 hover:text-ocean-600 transition-colors font-medium"
            >
              <MapPin className="w-4 h-4" />
              Service Areas
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-slate-200 hover:border-ocean-400 hover:text-ocean-600 transition-colors font-medium"
            >
              Contact Us
            </Link>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-slate-200 hover:border-ocean-400 hover:text-ocean-600 transition-colors font-medium"
            >
              Browse Blog
            </Link>
          </div>
        </div>

        {/* Quick Info */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-slate-600 mb-2">
            <strong>Serving the entire 30A corridor</strong>
          </p>
          <p className="text-sm text-slate-500">
            From Seaside to Rosemary Beach and beyond. Same-day service available.
          </p>
        </div>
      </div>
    </main>
  )
}
