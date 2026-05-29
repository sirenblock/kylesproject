import { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  Home,
  Building2,
  Hammer,
  Utensils,
  Store,
  Briefcase,
  Heart,
  ArrowRight,
} from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import { CollectionPageSchema } from '@/components/seo/PagedSchemas'
import { LinksSection } from '@/components/seo/LinksSection'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'B2B junk removal for 30A & PCB industries — vacation rental PM, real estate, hospitality, retail, construction, professional services.',
  alternates: {
    canonical: getCanonicalUrl('/industries'),
  },
  openGraph: {
    title: 'Industries We Serve | 30A Junk Removal',
    description: 'B2B junk removal services for 30A and PCB industries.',
    type: 'website',
    url: '/industries',
  },
}

const industries = [
  {
    icon: Home,
    name: 'Vacation Rental Property Management',
    slug: 'vacation-rental-property-management',
    audience: 'Property management companies handling 15-200+ rental units',
    keyChallenge: 'Saturday turnover capacity during peak season',
    pricing: '8-15% volume discount on preferred-vendor agreements',
    description:
      "30A and Panama City Beach are one of the densest short-term rental markets in Florida. The Saturday 10 AM checkout to 4 PM check-in window is the single most-demanding operational reality in our service area, and the preferred-vendor relationships we maintain with the area's major property management companies center on guaranteeing Saturday turnover capacity during peak season (March-August).",
    services: [
      { name: 'Vacation Rental Junk Removal', href: '/services/vacation-rentals' },
      { name: 'Mattress Removal', href: '/services/mattress-removal' },
      { name: 'Furniture Removal', href: '/services/furniture-removal' },
      { name: 'Appliance Removal', href: '/services/appliance-removal' },
    ],
    relatedGuides: [
      { name: 'Property Manager Playbook', href: '/blog/property-manager-junk-removal-playbook-30a' },
      { name: 'Vacation Rental Turnover Checklist', href: '/blog/vacation-rental-turnover-checklist-30a-property-managers' },
    ],
    standardTerms:
      '4-hour Saturday SLA when called by 11 AM, 4-photo documentation per billed removal, weekly invoicing with property-level line items, net-15 payment terms.',
  },
  {
    icon: Building2,
    name: 'Real Estate (Pre-Listing, Closing-Day, REO)',
    slug: 'real-estate',
    audience: 'Real estate agents, brokerages, REO asset managers, property preservation firms',
    keyChallenge: 'Closing-day timing pressure and pre-listing curb appeal',
    pricing: 'Per-call standard rates; volume pricing for high-frequency agents',
    description:
      'Real estate transactions across 30A and PCB generate three distinct junk removal needs: pre-listing cleanouts that maximize sale price and reduce time-on-market, closing-day cleanouts for items sellers leave behind or buyers identify during final walkthrough, and REO foreclosure cleanouts for bank-owned properties being prepared for resale.',
    services: [
      { name: 'Estate Cleanouts', href: '/services/estate-cleanouts' },
      { name: 'Foreclosure Cleanout', href: '/services/foreclosure-cleanout' },
      { name: 'One-Time Junk Removal', href: '/services/one-time-hauls' },
      { name: 'Garage Cleanouts', href: '/services/garage-cleanouts' },
    ],
    relatedGuides: [
      { name: 'Move-In Move-Out Junk Removal Guide', href: '/blog/move-in-move-out-junk-removal-30a-pcb-complete-guide' },
      { name: 'Estate Cleanout Services Guide', href: '/blog/estate-cleanout-services-30a-valuable-item-recovery' },
    ],
    standardTerms:
      'Same-day SLA for closing-day work if called by 11 AM, photo documentation for transaction records, W-9 and insurance certificate available for REO vendor agreements, net-30 invoicing for established commercial accounts.',
  },
  {
    icon: Utensils,
    name: 'Hospitality (Restaurants, Bars, Cafes)',
    slug: 'hospitality',
    audience: 'Restaurant owners, hospitality managers, food service operators',
    keyChallenge: 'After-hours service to minimize business disruption',
    pricing: 'After-hours rates; volume pricing for multi-location operators',
    description:
      'Restaurants, cafes, and bars throughout the 30A corridor and Panama City Beach generate consistent disposal needs from kitchen equipment turnover, dining room furniture refreshes during seasonal updates, walk-in cooler and refrigeration replacement, and the periodic full-buildout cleanouts during ownership transitions or major remodels.',
    services: [
      { name: 'Commercial Junk Removal', href: '/services/commercial-junk-removal' },
      { name: 'Appliance Removal', href: '/services/appliance-removal' },
      { name: 'Kitchen Demolition', href: '/services/kitchen-demolition' },
      { name: 'Office Furniture Removal', href: '/services/office-furniture' },
    ],
    relatedGuides: [
      { name: 'Refrigerator and Appliance Disposal Guide', href: '/blog/refrigerator-appliance-disposal-30a-pcb-complete-guide' },
    ],
    standardTerms:
      'After-hours service available (evenings and weekends), EPA Section 608 compliance for commercial refrigeration, disposal manifest documentation for environmental compliance records, recurring service options for high-turnover operations.',
  },
  {
    icon: Store,
    name: 'Retail and Boutique Storefronts',
    slug: 'retail',
    audience: 'Boutique owners, retail managers, gallery operators',
    keyChallenge: 'Seasonal merchandise rotation and brand-refresh cleanouts',
    pricing: 'Per-call rates; recurring schedule options for seasonal businesses',
    description:
      "Retail along 30A's tourist corridors (Seaside Town Center, Rosemary Beach Town Center, WaterColor Town Center) and Panama City Beach's Pier Park district drives ongoing disposal needs from seasonal merchandise rotation, display fixture replacement during brand refreshes, post-season inventory clearance, and the periodic full-store closeouts that come with leases ending or rebrands.",
    services: [
      { name: 'Commercial Junk Removal', href: '/services/commercial-junk-removal' },
      { name: 'Office Furniture Removal', href: '/services/office-furniture' },
      { name: 'Construction Debris Removal', href: '/services/construction-debris' },
      { name: 'Bulk Trash Pickup', href: '/services/bulk-trash-pickup' },
    ],
    relatedGuides: [],
    standardTerms:
      'Off-hours service to minimize business disruption, donation routing for usable merchandise and fixtures (recoverable tax-deduction value), photo documentation for inventory records.',
  },
  {
    icon: Hammer,
    name: 'Construction and Renovation',
    slug: 'construction',
    audience: 'General contractors, renovation specialists, custom home builders',
    keyChallenge: 'Project-timeline coordination and material sorting for scrap value',
    pricing: 'Project pricing with volume discounts; scheduled debris pickup',
    description:
      "30A and Panama City Beach's continuous renovation activity — driven by ownership turnovers, second-home upgrades, vacation rental refreshes, and ongoing Hurricane Michael rebuild work — keeps construction debris removal at consistent volume. We work directly with general contractors on multi-week projects with scheduled debris pickup, material sorting for scrap value recovery, and coordination with subcontractor schedules.",
    services: [
      { name: 'Construction Debris Removal', href: '/services/construction-debris' },
      { name: 'Bathroom Demolition', href: '/services/bathroom-demolition' },
      { name: 'Kitchen Demolition', href: '/services/kitchen-demolition' },
      { name: 'Carpet Removal', href: '/services/carpet-removal' },
      { name: 'Deck Removal', href: '/services/deck-removal' },
    ],
    relatedGuides: [
      { name: 'Construction Debris Removal Guide', href: '/blog/construction-debris-removal-what-to-know' },
      { name: '30A Renovation Debris Guide', href: '/blog/30a-homeowner-renovation-debris-removal-guide' },
      { name: 'Dumpster Rental vs Junk Removal', href: '/blog/junk-removal-vs-dumpster-rental-30a-comparison' },
    ],
    standardTerms:
      'Project-based contracts with scheduled multi-truck pickup, material sorting at job site (clean wood, metal, mixed C&D), scrap value recovery applied as credit against disposal cost, weekly invoicing with project-level cost tracking.',
  },
  {
    icon: Briefcase,
    name: 'Professional Services & Office',
    slug: 'professional-services',
    audience: 'Law firms, accounting offices, financial services, real estate agencies',
    keyChallenge: 'Secure document/data disposal alongside furniture refresh',
    pricing: 'Per-call standard rates; secure-disposal surcharge for certified handling',
    description:
      "Professional services offices throughout the 30A and PCB region periodically refresh office furniture, replace IT equipment, archive paper records, and occasionally handle complete relocations. We offer standard junk removal plus secure-disposal options for files, drives, and other items requiring certified destruction.",
    services: [
      { name: 'Office Furniture Removal', href: '/services/office-furniture' },
      { name: 'TV & Electronics Recycling', href: '/services/tv-electronics-recycling' },
      { name: 'Commercial Junk Removal', href: '/services/commercial-junk-removal' },
    ],
    relatedGuides: [],
    standardTerms:
      'Standard office hours service (weekday business hours), NIST 800-88 compliant data destruction for hard drives and storage media, certificate of destruction documentation, donation routing for usable office furniture.',
  },
  {
    icon: Heart,
    name: 'Estate Attorneys & Probate',
    slug: 'estate-attorneys',
    audience: 'Estate attorneys, probate administrators, executors handling estate liquidation',
    keyChallenge: 'Multi-decade accumulation with mixed donation and disposal value',
    pricing: 'Per-job estate cleanout pricing with itemized documentation',
    description:
      "Estate cleanouts following property owner death, downsizing transitions, or probate property liquidation involve more than standard disposal — they require sorting for items with potential resale value (vintage furniture, antiques, collectibles), donation routing for usable household goods (with tax-deduction receipts back to the estate), and respectful handling of personal property. We work with estate attorneys and probate administrators across 30A and PCB.",
    services: [
      { name: 'Estate Cleanouts', href: '/services/estate-cleanouts' },
      { name: 'Donation Pickup', href: '/services/donation-pickup' },
      { name: 'Hoarder Cleanout', href: '/services/hoarder-cleanout' },
    ],
    relatedGuides: [
      { name: 'Estate Cleanout Services Guide', href: '/blog/estate-cleanout-services-30a-valuable-item-recovery' },
      { name: 'Estate Sale Planning Guide', href: '/blog/estate-sale-planning-junk-removal-coordination-30a' },
      { name: 'Where to Donate Furniture', href: '/blog/where-to-donate-furniture-household-items-30a-florida' },
    ],
    standardTerms:
      'Photo documentation per estate cleanout, itemized donation receipts with fair-market-value calculations, IRS Form 8283 documentation support, coordination with estate attorneys and family members on items requiring legal disposition.',
  },
]

export default function IndustriesPage() {
  const internalLinks = getContextualLinks('core', '/industries')
  const externalLinks = getExternalLinks(5)

  return (
    <main className="min-h-screen">
      <CollectionPageSchema
        name="Industries We Serve | 30A Junk Removal"
        description="B2B junk removal vertical breakdowns for 30A and PCB: vacation rental property management, real estate, hospitality, retail, construction, professional services, estate attorneys."
        url="/industries"
        numberOfItems={industries.length}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/industries' },
        ]}
      />

      {/* Hero */}
      <section className="-mt-24 pt-32 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-seafoam-400/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium border border-white/10 rounded-full mb-6">
              <Briefcase className="w-4 h-4" />
              B2B Services
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-ocean-100 leading-relaxed">
              Operational junk removal partnerships for the businesses that drive the 30A and Panama City Beach economy. Preferred-vendor pricing, scheduled service, photo documentation, and the operational standards that match each industry&apos;s reality.
            </p>
          </div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <div
                  key={industry.slug}
                  id={industry.slug}
                  className="bg-white rounded-2xl border border-sand-200 shadow-sm p-6 md:p-10 scroll-mt-24"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-ocean-100 text-ocean-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                        {industry.name}
                      </h2>
                      <p className="text-sm text-slate-600 mb-3">
                        <span className="font-medium">Who this serves:</span> {industry.audience}
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        {industry.description}
                      </p>
                      {/* Link to dedicated industry page if it exists */}
                      {['vacation-rental-property-management', 'real-estate', 'hospitality', 'construction'].includes(industry.slug) && (
                        <Link
                          href={`/industries/${industry.slug}`}
                          className="mt-4 inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-700 font-semibold text-sm"
                          data-cta={`industries-hub-deep-${industry.slug}`}
                        >
                          Full {industry.name} details
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-sand-50 rounded-xl p-5">
                      <div className="text-xs font-semibold text-ocean-700 uppercase tracking-wide mb-1">
                        Key Challenge
                      </div>
                      <div className="text-slate-800">{industry.keyChallenge}</div>
                    </div>
                    <div className="bg-sand-50 rounded-xl p-5">
                      <div className="text-xs font-semibold text-ocean-700 uppercase tracking-wide mb-1">
                        Pricing Approach
                      </div>
                      <div className="text-slate-800">{industry.pricing}</div>
                    </div>
                  </div>

                  <div className="mt-6 bg-ocean-50 border border-ocean-100 rounded-xl p-5">
                    <div className="text-xs font-semibold text-ocean-700 uppercase tracking-wide mb-2">
                      Standard Terms
                    </div>
                    <div className="text-slate-700 text-sm leading-relaxed">
                      {industry.standardTerms}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                        Primary Services
                      </h3>
                      <ul className="space-y-1.5">
                        {industry.services.map((s) => (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              className="text-ocean-600 hover:text-ocean-700 hover:underline text-sm inline-flex items-center gap-1"
                            >
                              <ArrowRight className="w-3 h-3" />
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {industry.relatedGuides.length > 0 && (
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                          Related Guides
                        </h3>
                        <ul className="space-y-1.5">
                          {industry.relatedGuides.map((g) => (
                            <li key={g.href}>
                              <Link
                                href={g.href}
                                className="text-ocean-600 hover:text-ocean-700 hover:underline text-sm inline-flex items-center gap-1"
                              >
                                <ArrowRight className="w-3 h-3" />
                                {g.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean-600 to-ocean-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Discuss Your Industry&apos;s Needs?
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            We offer customized preferred-vendor agreements with volume discounts, scheduled service, and the operational standards your industry requires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ocean-600 rounded-xl font-bold hover:bg-sand-50 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              Request Vendor Agreement
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <LinksSection
        internalLinks={internalLinks}
        externalLinks={externalLinks}
        title="More From 30A Junk Removal"
      />
    </main>
  )
}
