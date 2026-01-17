import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Leaf, Heart, Clock, Users, Award, Phone } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'About Us | 30A Junk Removal',
  description: 'Learn about 30A Junk Removal - your trusted partner for premium junk removal services along the beautiful 30A corridor in Florida.',
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
  return (
    <div className="py-12">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-ocean-50 to-seafoam-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800">
              About 30A Junk Removal
            </h1>
            <p className="mt-6 text-xl text-slate-600">
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
                  30A Junk Removal was founded with a simple mission: provide premium junk removal services that match the quality and standards of the 30A community.
                </p>
                <p>
                  We noticed that property owners, vacation rental managers, and homeowners along 30A needed a reliable, professional junk removal service they could count on. Whether it's a quick furniture pickup between rental guests or a complete estate cleanout, we deliver the same high level of service.
                </p>
                <p>
                  Our team understands the unique needs of 30A properties - the tight turnaround times for vacation rentals, the care required for luxury estates, and the importance of maintaining the beauty of our coastal community.
                </p>
              </div>
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
      </section>

      {/* Values */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Our Values</h2>
            <p className="mt-4 text-lg text-slate-600">
              What sets us apart from other junk removal services
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

      {/* Community */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-seafoam-100 text-seafoam-600 mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Part of the 30A Community</h2>
            <p className="text-lg text-slate-600 mb-8">
              We're not just a service provider - we're your neighbors. We live and work along 30A, and we're committed to keeping our beautiful beaches and communities clean. When you work with us, you're supporting a local business that cares about this area as much as you do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean-600 text-white rounded-lg font-semibold hover:bg-ocean-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {FORMATTED_PHONE}
              </a>
              <Link
                href="/#quote"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-ocean-600 text-ocean-600 rounded-lg font-semibold hover:bg-ocean-50 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Shield className="w-10 h-10 text-ocean-400" />
              <span className="font-semibold">Fully Insured</span>
              <span className="text-sm text-slate-400">Licensed and bonded for your protection</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Leaf className="w-10 h-10 text-seafoam-400" />
              <span className="font-semibold">Eco-Friendly</span>
              <span className="text-sm text-slate-400">We recycle and donate whenever possible</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Award className="w-10 h-10 text-gold-400" />
              <span className="font-semibold">5-Star Rated</span>
              <span className="text-sm text-slate-400">Trusted by 30A property owners</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
