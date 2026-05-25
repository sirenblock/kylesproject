import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

// Inline CTA shown mid-article (typically injected before the 4th h2).
// Per senior SEO playbook link-equity skill: this surface gives blog posts
// a CTA in the middle of long-form content, capturing readers who don't
// scroll to the EndOfArticleCTA. Two more inbound links to /contact from
// every blog post (phone + quote).
//
// Visually distinct from EndOfArticleCTA -- this one is compact, lighter
// styled, sits inline with the article flow rather than as a closing block.

export function InlineCTA() {
  return (
    <aside className="my-10 not-prose rounded-2xl border-2 border-ocean-200 bg-gradient-to-br from-ocean-50 via-white to-seafoam-50 p-6 md:p-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold text-ocean-700 uppercase tracking-wide mb-1">
            Need this handled now?
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
            Same-day junk removal across 30A &amp; PCB
          </h3>
          <p className="text-sm text-slate-600">
            Text photos for an instant quote · Transparent pricing from $150 · 4.9★ rated.
          </p>
        </div>
        <div className="flex flex-row gap-2 shrink-0">
          <a
            href="tel:+18503683495"
            data-cta="inline-cta-phone"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-ocean-600 text-white rounded-lg font-semibold hover:bg-ocean-700 transition-colors text-sm whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
          <Link
            href="/contact"
            data-cta="inline-cta-quote"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gold-500 text-slate-900 rounded-lg font-bold hover:bg-gold-400 transition-colors text-sm whitespace-nowrap"
          >
            Get Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </aside>
  )
}

// Inject the InlineCTA HTML before the 4th h2 in rendered article HTML.
// Per senior playbook: 4th h2 is roughly the 25-40% scroll point for most
// long-form articles -- prime placement for capturing engaged readers
// before they exit.
export function injectInlineCTA(html: string): string {
  // Count h2 occurrences
  let h2Count = 0
  let injectionIndex = -1
  const h2Regex = /<h2[\s>]/gi
  let match: RegExpExecArray | null
  while ((match = h2Regex.exec(html)) !== null) {
    h2Count++
    if (h2Count === 4) {
      injectionIndex = match.index
      break
    }
  }

  // Fallback to before the 3rd h2 if there's no 4th
  if (injectionIndex === -1 && h2Count >= 3) {
    h2Count = 0
    h2Regex.lastIndex = 0
    while ((match = h2Regex.exec(html)) !== null) {
      h2Count++
      if (h2Count === 3) {
        injectionIndex = match.index
        break
      }
    }
  }

  if (injectionIndex === -1) {
    return html
  }

  const ctaHtml = `
<aside class="my-10 not-prose rounded-2xl border-2 border-ocean-200 bg-gradient-to-br from-ocean-50 via-white to-seafoam-50 p-6 md:p-7">
  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
    <div class="flex-1 min-w-0">
      <div class="text-xs font-semibold text-ocean-700 uppercase tracking-wide mb-1">Need this handled now?</div>
      <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-1">Same-day junk removal across 30A &amp; PCB</h3>
      <p class="text-sm text-slate-600">Text photos for an instant quote &middot; Transparent pricing from $150 &middot; 4.9&starf; rated.</p>
    </div>
    <div class="flex flex-row gap-2 shrink-0">
      <a href="tel:+18503683495" data-cta="inline-cta-phone" class="inline-flex items-center justify-center gap-2 px-4 py-3 bg-ocean-600 text-white rounded-lg font-semibold hover:bg-ocean-700 transition-colors text-sm whitespace-nowrap">Call (850) 368-3495</a>
      <a href="/contact" data-cta="inline-cta-quote" class="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gold-500 text-slate-900 rounded-lg font-bold hover:bg-gold-400 transition-colors text-sm whitespace-nowrap">Get Quote &rarr;</a>
    </div>
  </div>
</aside>
`

  return html.slice(0, injectionIndex) + ctaHtml + html.slice(injectionIndex)
}
