import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Leaf, Heart, Clock, Phone, CheckCircle, BadgeCheck } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { LinksSection } from '@/components/seo/LinksSection'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'
import { TrustBadges } from '@/components/ui/TrustBadges'

export const metadata: Metadata = {
  title: 'About Us | 30A Junk Removal',
  description: 'Learn about 30A Junk Removal - your trusted partner for premium junk removal services along the beautiful 30A corridor in Florida.',
  alternates: {
    canonical: getCanonicalUrl('/about'),
  },
}

const values = [
  {
    icon: Shield,
    title: 'Reliability',
    description: 'We show up when we say we will, every time. Your schedule matters to us.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We recycle and donate whenever possible, keeping items out of landfills.',
  },
  {
    icon: Heart,
    title: 'Care',
    description: 'We treat your property with respect and your belongings with dignity.',
  },
  {
    icon: Clock,
    title: 'Efficiency',
    description: 'Quick, professional service that respects your time and gets the job done right.',
  },
]

const stats = [
  { value: '500+', label: 'Jobs Completed' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: 'Same Day', label: 'Service Available' },
  { value: '30A', label: 'Communities Served' },
]

export default function AboutPage() {
  const internalLinks = getContextualLinks('core', '/about')
  const externalLinks = getExternalLinks(5)

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="-mt-24 pt-32 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white overflow-hidden relative">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-seafoam-400/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium border border-white/10 rounded-full mb-6">
              <Heart className="w-4 h-4" />
              Locally Owned &amp; Operated
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              About 30A Junk Removal
            </h1>
            <p className="mt-6 text-xl text-ocean-100">
              Premium junk removal services for the beautiful 30A corridor. We combine coastal hospitality with professional efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  30A Junk Removal was founded with a simple mission: provide premium junk removal services that match the quality and standards of the <Link href="/service-areas" className="text-ocean-600 hover:underline font-medium">30A community</Link>.
                </p>
                <p>
                  We noticed that property owners, <Link href="/services/vacation-rentals" className="text-ocean-600 hover:underline font-medium">vacation rental managers</Link>, and homeowners along <Link href="/service-areas/rosemary-beach" className="text-ocean-600 hover:underline font-medium">Rosemary Beach</Link>, <Link href="/service-areas/seaside" className="text-ocean-600 hover:underline font-medium">Seaside</Link>, and <Link href="/service-areas/watercolor" className="text-ocean-600 hover:underline font-medium">WaterColor</Link> needed a reliable, professional junk removal service they could count on. Whether it's a quick <Link href="/services/furniture-removal" className="text-ocean-600 hover:underline font-medium">furniture pickup</Link> between rental guests or a complete <Link href="/services/estate-cleanouts" className="text-ocean-600 hover:underline font-medium">estate cleanout</Link>, we deliver the same high level of service.
                </p>
                <p>
                  Our team understands the unique needs of 30A properties - the tight turnaround times for vacation rentals, the care required for luxury estates, and the importance of maintaining the beauty of our coastal community.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop"
                  alt="Beautiful white sand beach along the 30A Florida Emerald Coast where 30A Junk Removal serves local homeowners and businesses"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="bg-gradient-to-br from-ocean-100 to-seafoam-100 rounded-2xl p-8 border border-sand-200">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold text-ocean-600">{stat.value}</div>
                      <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Our Values</h2>
            <p className="mt-4 text-lg text-slate-600">
              What sets us apart from other junk removal services. Check our <Link href="/pricing" className="text-ocean-600 hover:underline font-medium">transparent pricing</Link> or view our <Link href="/faq" className="text-ocean-600 hover:underline font-medium">frequently asked questions</Link> to learn more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="bg-white rounded-xl p-6 shadow-sm border border-sand-200">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-ocean-100 text-ocean-600 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Professional Service */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ocean-100 text-ocean-600 mb-6">
              <BadgeCheck className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Professional Service You Can Trust</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Dedicated to providing reliable, professional junk removal services throughout 30A.
            </p>
          </div>

          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl mb-12 max-w-5xl mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=500&fit=crop"
              alt="Professional junk removal service truck ready for same-day pickup along the 30A Florida corridor"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1024px"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-ocean-50 to-seafoam-50 rounded-xl p-8 border border-sand-200">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-ocean-600" />
                Why Choose Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-ocean-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Fully Insured</div>
                    <div className="text-sm text-slate-600">Professional service with complete protection</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-ocean-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Locally Owned</div>
                    <div className="text-sm text-slate-600">Part of the 30A community</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-ocean-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Reliable Service</div>
                    <div className="text-sm text-slate-600">On-time, professional service every time</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-seafoam-50 to-sand-50 rounded-xl p-8 border border-sand-200">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Leaf className="w-6 h-6 text-seafoam-600" />
                Our Commitment
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-seafoam-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Eco-Friendly</div>
                    <div className="text-sm text-slate-600">We recycle and donate whenever possible</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-seafoam-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Customer Focused</div>
                    <div className="text-sm text-slate-600">Your satisfaction is our priority</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-seafoam-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Transparent Pricing</div>
                    <div className="text-sm text-slate-600">No hidden fees, fair quotes</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-20 bg-gradient-to-r from-ocean-600 to-ocean-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Part of the 30A Community</h2>
          <p className="text-xl text-ocean-100 mb-8">
            We're not just a service provider - we're your neighbors. We live and work along <a href="https://www.visitflorida.com/en-us/places-to-go/northwest/south-walton.html" target="_blank" rel="nofollow external noopener noreferrer" className="text-white hover:text-seafoam-200 underline">30A's beautiful South Walton beaches</a>, and we're committed to keeping our communities clean. We partner with local organizations like <a href="https://www.goodwill.org/" target="_blank" rel="nofollow external noopener noreferrer" className="text-white hover:text-seafoam-200 underline">Goodwill</a> to donate usable items and follow <a href="https://www.epa.gov/recycle" target="_blank" rel="nofollow external noopener noreferrer" className="text-white hover:text-seafoam-200 underline">EPA recycling guidelines</a> to minimize our environmental impact.
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
              href="/#quote"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <LinksSection
        internalLinks={internalLinks}
        externalLinks={externalLinks}
        title="Learn More About Our Services"
      />

      {/* Trust Badges */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">Why Choose 30A Junk Removal</h2>
          <TrustBadges />
        </div>
      </section>
    </main>
  )
}
