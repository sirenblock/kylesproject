import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Camera, FileText, Clock, Shield, Phone, ArrowRight } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Property Management Services | 30A Junk Removal',
  description: 'White-glove junk removal for 30A property managers. Vacation rental turnovers, estate cleanouts, photo documentation, and donation receipts. Priority scheduling available.',
}

const features = [
  {
    icon: Camera,
    title: 'Photo Documentation',
    description: 'Before and after photos for every job, sent directly to you or your client.',
  },
  {
    icon: FileText,
    title: 'Detailed Invoicing',
    description: 'Professional invoices with itemized services. Monthly billing available.',
  },
  {
    icon: Clock,
    title: 'Priority Scheduling',
    description: 'Work around tenant schedules and check-in/check-out times.',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Licensed and insured for your peace of mind and property protection.',
  },
]

const services = [
  'Vacation Rental Turnovers',
  'Estate Cleanouts',
  'Tenant Move-Out Cleanups',
  'Recurring Junk Removal',
  'Donation Coordination',
  'Emergency Same-Day Service',
]

export default function PropertyManagementPage() {
  return (
    <div className="py-12">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-gold-500/20 text-gold-400 rounded-full text-sm font-semibold mb-6">
              For Property Managers
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              White-Glove Junk Removal for 30A Properties
            </h1>
            <p className="mt-6 text-xl text-slate-300">
              From vacation rental turnovers to full estate cleanouts. We handle the heavy lifting so you can focus on your properties.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-slate-900 rounded-xl font-semibold hover:bg-gold-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {FORMATTED_PHONE}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Request a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Built for Property Professionals</h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to manage junk removal across your properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold-100 text-gold-600 mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Services Tailored for Property Management
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We understand the unique challenges of managing vacation rentals and investment properties on 30A. Our services are designed to make your life easier.
              </p>

              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-seafoam-500 shrink-0" />
                    <span className="text-slate-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-sand-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Preferred Partner Pricing
              </h3>
              <p className="text-slate-600 mb-6">
                Property managers with recurring needs receive:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Discounted rates on all services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Priority scheduling - same day when available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Monthly invoicing option</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Dedicated account manager</span>
                </li>
              </ul>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-colors"
              >
                Discuss Partnership Options
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ocean-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Simplify Your Property Management</h2>
          <p className="text-xl text-ocean-100 mb-8">
            Join dozens of 30A property managers who trust us for their junk removal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ocean-600 rounded-xl font-semibold hover:bg-ocean-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {FORMATTED_PHONE}
            </a>
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
