'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Truck, ClipboardCheck, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Quick Haul',
    subtitle: 'One-Time Removal',
    description: 'Perfect for: old furniture, appliances, patio sets, garage cleanouts',
    price: 'Starting at $150',
    cta: 'Get Quote',
    href: '/#quote',
    icon: Truck,
    gradient: 'from-ocean-500 to-ocean-600',
    bgGradient: 'from-ocean-50 to-white',
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
    description: 'Perfect for: rental turnovers, estate cleanouts, ongoing service',
    price: 'Custom pricing & scheduling',
    cta: 'Learn More',
    href: '/services/property-management',
    icon: ClipboardCheck,
    gradient: 'from-gold-500 to-gold-600',
    bgGradient: 'from-gold-50 to-white',
    features: [
      'Photo documentation',
      'Donation receipts',
      'Priority scheduling',
      'Dedicated account manager',
    ],
  },
]

export function ServiceCards() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-800"
          >
            Choose Your Service Level
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
          >
            From quick one-off pickups to full property management support
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group rounded-2xl bg-gradient-to-br ${service.bgGradient} border border-sand-200 p-8 shadow-lg hover:shadow-xl transition-shadow`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                <p className="text-sm font-medium text-ocean-600 mt-1">{service.subtitle}</p>
                <p className="mt-4 text-slate-600">{service.description}</p>

                {/* Features */}
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <p className="mt-6 text-lg font-semibold text-slate-800">{service.price}</p>

                {/* CTA */}
                <Link
                  href={service.href}
                  className={`mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r ${service.gradient} text-white font-semibold hover:opacity-90 transition-opacity`}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
