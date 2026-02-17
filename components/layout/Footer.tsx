import Link from 'next/link'
import { Truck, Phone, MessageCircle, Mail, MapPin, Shield, Leaf, Award, Star } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import config from '@/lib/config'

const services = [
  { name: 'One-Time Hauls', href: '/services/one-time-hauls' },
  { name: 'Construction Debris', href: '/services/construction-debris' },
  { name: 'Estate Cleanouts', href: '/services/estate-cleanouts' },
  { name: 'Furniture Removal', href: '/services/furniture-removal' },
  { name: 'Appliance Removal', href: '/services/appliance-removal' },
  { name: 'Hot Tub Removal', href: '/services/hot-tub-removal' },
  { name: 'Garage Cleanouts', href: '/services/garage-cleanouts' },
  { name: 'Yard Debris', href: '/services/yard-debris' },
  { name: 'Same-Day Removal', href: '/services/same-day-junk-removal' },
  { name: 'Commercial Removal', href: '/services/commercial-junk-removal' },
  { name: 'Hurricane Debris', href: '/services/hurricane-debris' },
  { name: 'All Services', href: '/services' },
]

const areas = [
  { name: 'Seaside', href: '/service-areas/seaside' },
  { name: 'Rosemary Beach', href: '/service-areas/rosemary-beach' },
  { name: 'Destin', href: '/service-areas/destin' },
  { name: 'Panama City Beach', href: '/service-areas/panama-city-beach' },
  { name: 'Santa Rosa Beach', href: '/service-areas/santa-rosa-beach' },
  { name: 'Fort Walton Beach', href: '/service-areas/fort-walton-beach' },
  { name: 'Miramar Beach', href: '/service-areas/miramar-beach' },
  { name: 'Inlet Beach', href: '/service-areas/inlet-beach' },
  { name: 'Walton County', href: '/service-areas/county/walton-county' },
  { name: 'Bay County', href: '/service-areas/county/bay-county' },
  { name: 'Okaloosa County', href: '/service-areas/county/okaloosa-county' },
  { name: 'All Areas', href: '/service-areas' },
]

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Our Work', href: '/our-work' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Trust Badges */}
      <div className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-gold-400 fill-gold-400" />
              </div>
              <span className="font-medium">4.9★ · 127+ Reviews</span>
              <span className="text-sm text-slate-400">Five-star rated service</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-ocean-600/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-ocean-400" />
              </div>
              <span className="font-medium">Fully Insured</span>
              <span className="text-sm text-slate-400">Professional service for your protection</span>
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
              <span className="font-medium">Locally Owned</span>
              <span className="text-sm text-slate-400">Part of the 30A community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-ocean-500 to-ocean-600 text-white">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-lg font-semibold">30A</span>
                <span className="text-lg font-light text-ocean-400 ml-1">Junk Removal</span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Premium junk removal for 30A homes and businesses. From quick cleanouts to full estate management, we handle it all.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-ocean-400" />
                {FORMATTED_PHONE}
              </a>
              <a
                href={`sms:${PHONE_NUMBER}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4 text-ocean-400" />
                Text for Quick Quote
              </a>
              <a
                href="mailto:30apcbjunkremoval@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-ocean-400" />
                30apcbjunkremoval@gmail.com
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-ocean-400" />
                Serving Destin to Panama City Beach
              </div>
            </div>
            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-6">
              {config.socialLinks.facebook && (
                <a
                  href={config.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-ocean-600 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              )}
              {config.socialLinks.instagram && (
                <a
                  href={config.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-ocean-600 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              )}
              {config.socialLinks.tiktok && (
                <a
                  href={config.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-ocean-600 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {areas.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
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
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} 30A Junk Removal. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-slate-500 hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-500 hover:text-slate-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
