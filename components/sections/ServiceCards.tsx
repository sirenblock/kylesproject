'use client'

// Animations removed for performance
import Link from 'next/link'
import { Truck, ClipboardCheck, ArrowRight, Check, Sparkles } from 'lucide-react'

const services = [
  {
    title: 'Quick Haul',
    subtitle: 'One-Time Removal',
    description: (
      <>
        Perfect for: <Link href="/services/furniture-removal" className="text-ocean-600 hover:underline">old furniture</Link>,{' '}
        <Link href="/services/appliance-removal" className="text-ocean-600 hover:underline">appliances</Link>, patio sets, garage cleanouts
      </>
    ),
    price: 'Starting at $150',
    cta: 'Get Quote',
    href: '/#quote',
    icon: Truck,
    gradient: 'from-ocean-500 to-seafoam-500',
    bgGradient: 'from-ocean-50 via-white to-seafoam-50',
    iconBg: 'bg-ocean-500',
    accentColor: 'ocean',
    features: [
      'Same-day service available',
      'Book online in 2 minutes',
      'Instant pricing',
      'No minimum commitment',
    ],
  },
  {
    title: 'Concierge Service',
    subtitle: 'Property Management',
    description: (
      <>
        Perfect for: <Link href="/services/vacation-rentals" className="text-gold-600 hover:underline">rental turnovers</Link>,{' '}
        <Link href="/services/estate-cleanouts" className="text-gold-600 hover:underline">estate cleanouts</Link>, ongoing service
      </>
    ),
    price: 'Custom pricing & scheduling',
    cta: 'Learn More',
    href: '/services/property-management',
    icon: ClipboardCheck,
    gradient: 'from-gold-500 to-amber-500',
    bgGradient: 'from-gold-50 via-white to-amber-50',
    iconBg: 'bg-gold-500',
    accentColor: 'gold',
    features: [
      'Photo documentation',
      'Donation receipts',
      'Priority scheduling',
      'Dedicated account manager',
    ],
    badge: 'Popular',
  },
]

export function ServiceCards() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-sand-50/30 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-64 h-64 bg-ocean-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-32 w-64 h-64 bg-gold-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sand-100 text-slate-600 text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4 text-gold-500" />
            Two Ways to Work With Us
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800"
          >
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-500 to-seafoam-500">
              Service Level
            </span>
          </h2>
          <p
            className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            From quick one-off pickups to{' '}
            <Link href="/services/property-management" className="text-ocean-600 hover:underline">full property management support</Link> for{' '}
            <a
              href="https://www.visitflorida.com/places-to-go/northwest/south-walton/"
              target="_blank"
              rel="nofollow external noopener noreferrer"
              className="text-seafoam-600 hover:underline"
            >
              South Walton
            </a>
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="relative group"
              >
                {/* Gradient border effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`} />

                <div className={`relative h-full rounded-2xl bg-gradient-to-br ${service.bgGradient} border border-sand-200 p-6 md:p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-gold-500 to-amber-500 text-white text-xs font-bold rounded-full shadow-lg">
                      {service.badge}
                    </div>
                  )}

                  {/* Decorative gradient orb */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />

                  {/* Icon */}
                  <div
                    className={`relative inline-flex items-center justify-center w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8" />
                    {/* Icon glow */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-50 blur-lg -z-10`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800">{service.title}</h3>
                  <p className={`text-sm font-semibold mt-1 ${service.accentColor === 'ocean' ? 'text-ocean-600' : 'text-gold-600'}`}>
                    {service.subtitle}
                  </p>
                  <p className="mt-4 text-slate-600 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <p className="mt-6 text-xl md:text-2xl font-bold text-slate-800">{service.price}</p>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className={`mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all btn-shine group/btn`}
                  >
                    {service.cta}
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
