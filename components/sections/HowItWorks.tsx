'use client'

// Animations removed for performance
import Link from 'next/link'
import { Calculator, Truck, CheckCircle, Calendar, Camera, FileText } from 'lucide-react'

const quickHaulSteps = [
  {
    step: 1,
    title: 'Get Instant Quote Online',
    description: (
      <>
        Use our <Link href="/#quote" className="text-ocean-600 underline decoration-ocean-300 hover:decoration-ocean-600">calculator</Link> or text us photos for{' '}
        <Link href="/pricing" className="text-ocean-600 underline decoration-ocean-300 hover:decoration-ocean-600">pricing</Link> in minutes
      </>
    ),
    icon: Calculator,
  },
  {
    step: 2,
    title: 'We Come When Scheduled',
    description: (
      <>
        Choose your preferred date and time -{' '}
        <Link href="/services" className="text-ocean-600 underline decoration-ocean-300 hover:decoration-ocean-600">same day service</Link> available
      </>
    ),
    icon: Truck,
  },
  {
    step: 3,
    title: "Load & Go - You're Done!",
    description: 'We do all the heavy lifting and cleanup',
    icon: CheckCircle,
  },
]

const propertyManagerSteps = [
  {
    step: 1,
    title: 'Schedule Service',
    description: (
      <>
        Book recurring or one-time pickups for{' '}
        <Link href="/services/vacation-rentals" className="text-gold-600 underline decoration-gold-300 hover:decoration-gold-600">vacation rental turnovers</Link> around tenant schedules
      </>
    ),
    icon: Calendar,
  },
  {
    step: 2,
    title: 'Photo Documentation',
    description: 'Before and after photos sent for your records',
    icon: Camera,
  },
  {
    step: 3,
    title: 'Donation Receipts & Invoice',
    description: (
      <>
        <a
          href="https://www.irs.gov/charities-non-profits/charitable-contributions-written-acknowledgments"
          target="_blank"
          rel="nofollow external noopener noreferrer"
          className="text-seafoam-600 underline decoration-seafoam-300 hover:decoration-seafoam-600"
        >
          Tax receipts
        </a> for donations, detailed invoicing
      </>
    ),
    icon: FileText,
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-800"
          >
            How It Works
          </h2>
          <p
            className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Serving{' '}
            <Link href="/service-areas/seaside" className="text-ocean-600 underline decoration-ocean-300 hover:decoration-ocean-600">Seaside</Link>,{' '}
            <Link href="/service-areas/rosemary-beach" className="text-ocean-600 underline decoration-ocean-300 hover:decoration-ocean-600">Rosemary Beach</Link>, and{' '}
            <Link href="/service-areas" className="text-ocean-600 underline decoration-ocean-300 hover:decoration-ocean-600">all 30A communities</Link>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Quick Hauls */}
          <div
          >
            <div className="text-center lg:text-left mb-8">
              <span className="inline-block px-4 py-1.5 bg-ocean-100 text-ocean-700 rounded-full text-sm font-semibold mb-3">
                For Quick Hauls
              </span>
              <h3 className="text-2xl font-bold text-slate-800">Fast & Simple</h3>
            </div>

            <div className="space-y-6">
              {quickHaulSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.step}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-500 to-ocean-600 text-white flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-ocean-600">Step {step.step}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-slate-800">{step.title}</h4>
                      <p className="text-slate-600 mt-1">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Property Managers */}
          <div
          >
            <div className="text-center lg:text-left mb-8">
              <span className="inline-block px-4 py-1.5 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold mb-3">
                For Property Managers
              </span>
              <h3 className="text-2xl font-bold text-slate-800">White-Glove Service</h3>
            </div>

            <div className="space-y-6">
              {propertyManagerSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.step}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 text-white flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-gold-600">Step {step.step}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-slate-800">{step.title}</h4>
                      <p className="text-slate-600 mt-1">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
