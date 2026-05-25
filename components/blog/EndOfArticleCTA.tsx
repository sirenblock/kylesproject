import Link from 'next/link'
import { Phone, ArrowRight, Truck, Star, Clock, MapPin } from 'lucide-react'

// End-of-article CTA shown after the post content and before the FAQ section.
// Per senior SEO playbook link-equity skill: this surface gives blog posts
// two of their six inbound links to the conversion page (phone + quote).
// Trust signals embedded match the consistency pattern from secret-sauce
// pattern #9 -- same 4.9★ · 127+ Reviews / Same-Day / Walton + Bay values
// repeated across surfaces.

export function EndOfArticleCTA() {
  return (
    <aside className="my-12 not-prose">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-800 text-white p-8 md:p-10 shadow-xl">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-80 h-80 bg-seafoam-400/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-0 w-72 h-72 bg-ocean-400/15 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"
        />

        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Accepting new projects · Same-day available
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
            Ready to clear the clutter?
          </h2>
          <p className="text-ocean-100 text-base md:text-lg mb-6 max-w-2xl">
            Same-day junk removal across 30A and Panama City Beach. Transparent pricing from $150. Text photos for an instant quote — or call and talk to a real person.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="tel:+18503683495"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-colors shadow-md"
              data-cta="end-of-article-phone"
            >
              <Phone className="w-5 h-5" />
              Call (850) 368-3495
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-ocean-700 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-md"
              data-cta="end-of-article-quote"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust signals -- consistency per secret-sauce pattern #9 */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ocean-200 pt-5 border-t border-white/10">
            <span className="inline-flex items-center gap-1.5">
              <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
              4.9★ · 127+ Reviews
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              Same-Day Service
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-seafoam-300" />
              Licensed &amp; Insured
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-seafoam-300" />
              Walton &amp; Bay Counties
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}
