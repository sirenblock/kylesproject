'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle, Truck } from 'lucide-react'
import { cn, FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sand-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-ocean-500 to-ocean-600 text-white">
                <Truck className="w-6 h-6" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-semibold text-slate-800">30A</span>
                <span className="text-lg font-light text-ocean-600 ml-1">Junk Removal</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-ocean-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-ocean-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{FORMATTED_PHONE}</span>
            </a>
            <a
              href={`sms:${PHONE_NUMBER}`}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-ocean-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xl:inline">Text Us</span>
            </a>
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-ocean-500 to-ocean-600 rounded-lg shadow-sm hover:from-ocean-600 hover:to-ocean-700 transition-all hover:shadow-md"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:bg-sand-100 hover:text-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-sand-200"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-sand-50 hover:text-ocean-600 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-sand-200 space-y-2">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-slate-700 hover:bg-sand-50 rounded-lg"
                >
                  <Phone className="w-5 h-5 text-ocean-600" />
                  Call {FORMATTED_PHONE}
                </a>
                <a
                  href={`sms:${PHONE_NUMBER}`}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-slate-700 hover:bg-sand-50 rounded-lg"
                >
                  <MessageCircle className="w-5 h-5 text-ocean-600" />
                  Text Us
                </a>
                <Link
                  href="/#quote"
                  className="block w-full text-center px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-ocean-500 to-ocean-600 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Instant Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
