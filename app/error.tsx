'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCw, Phone, Home, ArrowRight } from 'lucide-react'
import { PHONE_NUMBER, FORMATTED_PHONE } from '@/lib/utils'

// Per nextjs-app-router-patterns skill: every Next.js App Router site
// needs an error.tsx for runtime error recovery. Without it, uncaught
// errors fall through to Next's default error page (poor UX, no recovery).
//
// This boundary catches render errors in the (root) layout and below,
// preserves the user's ability to call us directly, and provides a
// reset() that retries the render.

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to console for development debugging; production errors
    // can be wired to Sentry/Datadog here if added later.
    console.error('Page error:', error)
  }, [error])

  return (
    <main className="min-h-screen bg-gradient-to-br from-ocean-50 via-white to-seafoam-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-xl w-full">
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-200">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center">
              <AlertTriangle className="w-12 h-12 text-amber-600" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 text-center mb-3">
            Something went wrong
          </h1>
          <p className="text-slate-600 text-center mb-6 leading-relaxed">
            We hit a snag loading this page. You can try again, head back to the homepage, or call us directly for immediate help.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button
              onClick={() => reset()}
              data-cta="error-retry"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean-600 text-white rounded-xl font-bold hover:bg-ocean-700 transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>
            <Link
              href="/"
              data-cta="error-home"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-ocean-700 rounded-xl font-bold border-2 border-ocean-200 hover:bg-ocean-50 transition-colors"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </div>

          <div className="pt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-600 mb-3">
              Need junk removal right now?
            </p>
            <a
              href={`tel:${PHONE_NUMBER}`}
              data-cta="error-phone"
              className="inline-flex items-center gap-2 text-ocean-600 font-bold text-lg hover:text-ocean-700"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
          </div>

          {error.digest && (
            <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-400">
              Error reference: <code className="font-mono">{error.digest}</code>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
