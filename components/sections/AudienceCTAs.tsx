import Link from 'next/link'
import { Home, Building2, Hammer, ArrowRight } from 'lucide-react'

// Audience-segmented CTA grid for the homepage. Per Play 6 and
// audience-aware-ctas skill: speaking to specific reader intent
// (homeowner / property manager / contractor) lifts CTA CTR 3-5x
// vs a generic "Contact Us" prompt.
//
// Each card has a specific value prop and a direct route to either
// the relevant industry page (B2B) or the conversion page.

const audiences = [
  {
    icon: Home,
    audience: 'Homeowner',
    headline: 'Cleaning out your beach property?',
    description:
      'Garage cleanouts, furniture removal, hot tub disposal, estate cleanouts. Locally-owned crew that knows the 30A HOA gates and back routes.',
    href: '/contact',
    cta: 'Get a Quote',
    color: 'from-ocean-500 to-ocean-600',
    iconBg: 'bg-ocean-100',
    iconColor: 'text-ocean-700',
  },
  {
    icon: Building2,
    audience: 'Vacation Rental PM',
    headline: 'Running Saturday turnovers?',
    description:
      '90-minute SLA. Photo documentation. Owner-billable line items. Net-15 terms. The vendor relationship 30A property managers actually want.',
    href: '/industries/vacation-rental-property-management',
    cta: 'See B2B Terms',
    color: 'from-emerald-500 to-emerald-600',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
  },
  {
    icon: Hammer,
    audience: 'Contractor',
    headline: 'Job site debris piling up?',
    description:
      'Same-day pickup. HOA-restricted property alternative to dumpsters. Permit manifest documentation. Net-30 contractor accounts after 30 days.',
    href: '/industries/construction',
    cta: 'Contractor Accounts',
    color: 'from-amber-500 to-amber-600',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
  },
]

export function AudienceCTAs() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Built for your specific situation
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Different jobs, different needs. We have specialized workflows for homeowners, vacation rental property managers, and contractors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon
            return (
              <Link
                key={idx}
                href={aud.href}
                data-cta={`audience-card-${aud.audience.toLowerCase().replace(/\s/g, '-')}`}
                className="group block bg-white rounded-2xl p-7 border-2 border-slate-200 shadow-sm hover:shadow-lg hover:border-ocean-300 transition-all"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${aud.iconBg} ${aud.iconColor} mb-5`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">
                  {aud.audience}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-ocean-700 transition-colors">
                  {aud.headline}
                </h3>
                <p className="text-slate-600 mb-5 leading-relaxed">{aud.description}</p>
                <span className="inline-flex items-center gap-2 text-ocean-600 group-hover:text-ocean-700 font-semibold">
                  {aud.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
