'use client'

import Link from 'next/link'
import { Truck, Phone, MessageCircle, Mail, MapPin, Shield, Leaf, Award } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

const services = [
  { name: 'One-Time Hauls', href: '/services/one-time-hauls' },
  { name: 'Construction Debris', href: '/services/construction-debris' },
  { name: 'Property Management', href: '/services/property-management' },
  { name: 'Estate Cleanouts', href: '/services/estate-cleanouts' },
  { name: 'Appliance Removal', href: '/services/appliance-removal' },
  { name: 'Furniture Removal', href: '/services/furniture-removal' },
]

const areas = [
  { name: 'Seaside', href: '/service-areas/seaside' },
  { name: 'Rosemary Beach', href: '/service-areas/rosemary-beach' },
  { name: 'Alys Beach', href: '/service-areas/alys-beach' },
  { name: 'WaterColor', href: '/service-areas/watercolor' },
  { name: 'Santa Rosa Beach', href: '/service-areas/santa-rosa-beach' },
  { name: 'Inlet Beach', href: '/service-areas/inlet-beach' },
]

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-800 text-white">
      {/* Trust Badges */}
      <div className="border-b border-slate-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-ocean-600/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-ocean-400" />
              </div>
              <span className="font-medium">Fully Insured</span>
              <span className="text-sm text-slate-400">Licensed & bonded for your protection</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-seafoam-500/20 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-seafoam-400" />
              </div>
              <span className="font-medium">Eco-Friendly</span>
              <span className="text-sm text-slate-400">We recycle & donate whenever possible</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-gold-400" />
              </div>
              <span className="font-medium">5-Star Rated</span>
              <span className="text-sm text-slate-400">Trusted by 30A property owners</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-ocean-500 to-ocean-600 text-white">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-lg font-semibold">30A</span>
                <span className="text-lg font-light text-ocean-400 ml-1">Junk Removal</span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              Premium junk removal services for 30A homes. From quick cleanouts to full estate management, we handle it all with white-glove service.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-ocean-400" />
                {FORMATTED_PHONE}
              </a>
              <a
                href={`sms:${PHONE_NUMBER}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-ocean-400" />
                Text for Quick Quote
              </a>
              <a
                href="mailto:30apcbjunkremoval@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-ocean-400" />
                30apcbjunkremoval@gmail.com
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-ocean-400" />
                Serving Destin to Panama City Beach
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {areas.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} 30A Junk Removal. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
