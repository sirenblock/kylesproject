import Link from 'next/link'
import { Phone, Truck, MapPin, Star } from 'lucide-react'

// Author bio component shown at the end of every blog post.
// Per senior SEO playbook E-E-A-T pattern: dedicated author bio with
// credentials, area expertise, and contact CTAs strengthens the
// authority signal Google uses when assessing content quality.

interface Props {
  author?: string
  date?: string
  lastUpdated?: string
}

export function AuthorBio({ author = '30A Junk Removal LLC', date, lastUpdated }: Props) {
  const displayDate = lastUpdated || date
  return (
    <aside
      itemScope
      itemType="https://schema.org/Person"
      className="my-12 rounded-2xl border-2 border-ocean-100 bg-gradient-to-br from-ocean-50 to-seafoam-50 p-6 md:p-8 not-prose"
    >
      <div className="flex items-start gap-5">
        <div
          aria-hidden
          className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-ocean-500 to-ocean-700 text-white flex items-center justify-center text-xl font-bold shadow-md"
        >
          30A
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-2 mb-1">
            <h3 className="text-lg font-bold text-slate-900" itemProp="name">
              {author}
            </h3>
            <span className="text-sm text-slate-500" itemProp="jobTitle">
              — Locally Owned &amp; Operated
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed mb-3" itemProp="description">
            30A Junk Removal LLC has handled thousands of junk removal jobs across the 30A corridor and Panama City Beach — from vacation rental Saturday turnovers in Alys Beach and Rosemary Beach to estate cleanouts in Grayton Beach to hurricane debris work after coastal storms. Every guide on this site reflects the operational reality of doing this work locally, not generic templated advice.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1">
              <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
              <span itemProp="award">4.9★ (127+ reviews)</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-4 h-4 text-ocean-600" />
              <span itemProp="address">Panama City Beach, FL</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Truck className="w-4 h-4 text-ocean-600" />
              <span>Walton &amp; Bay Counties</span>
            </span>
            <meta itemProp="telephone" content="+18503683495" />
            <meta itemProp="url" content="https://www.30ajunkremoval.com" />
          </div>
          {displayDate && (
            <p className="text-xs text-slate-500 mt-3">
              Article last updated: <time dateTime={displayDate}>{displayDate}</time>
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="tel:+18503683495"
              className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-600 text-white text-sm font-semibold rounded-lg hover:bg-ocean-700 transition-colors"
              data-cta="author-bio-phone"
            >
              <Phone className="w-4 h-4" />
              (850) 368-3495
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-ocean-700 text-sm font-semibold rounded-lg border border-ocean-300 hover:bg-ocean-50 transition-colors"
              data-cta="author-bio-quote"
            >
              Get Free Quote
            </Link>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-700 text-sm font-medium rounded-lg border border-sand-300 hover:bg-sand-50 transition-colors"
            >
              See Reviews
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}
