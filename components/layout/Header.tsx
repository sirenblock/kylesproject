'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
// Animations removed for performance
import { Menu, X, Phone, MessageCircle, Truck, Sparkles } from 'lucide-react'
import { cn, FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Areas', href: '/service-areas' },
  { name: 'Our Work', href: '/our-work' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'pt-3 pb-3' : 'pt-4 pb-4'
      )}
    >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className={cn(
              'relative rounded-2xl transition-all duration-300 border border-slate-200/50',
              scrolled
                ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5'
                : 'bg-white/85 backdrop-blur-md shadow-md shadow-slate-900/5'
            )}
            aria-label="Top"
          >

            <div className="relative flex h-16 items-center justify-between px-4 lg:px-6">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-ocean-500 to-ocean-600 text-white shadow-sm">
                    <Truck className="w-5 h-5" />
                  </div>
                </div>
                <div className="hidden sm:block">
                  <span className="text-base font-bold text-slate-800 tracking-tight">30A</span>
                  <span className="text-base font-normal text-slate-600 ml-1.5">Junk Removal</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:gap-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-slate-700 hover:text-ocean-600 transition-all duration-200 group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 rounded-lg bg-ocean-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hidden md:flex items-center gap-2">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  aria-label={`Call ${FORMATTED_PHONE}`}
                  className="group flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-ocean-600 transition-all duration-200 rounded-lg hover:bg-ocean-50/50"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="hidden xl:inline">{FORMATTED_PHONE}</span>
                </a>
                <a
                  href={`sms:${PHONE_NUMBER}`}
                  aria-label="Text us for a quote"
                  className="group flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-ocean-600 transition-all duration-200 rounded-lg hover:bg-ocean-50/50"
                >
                  <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="hidden xl:inline">Text</span>
                </a>
                <Link
                  href="/#quote"
                  className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-ocean-500 to-ocean-600 hover:from-ocean-600 hover:to-ocean-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>Get Quote</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-slate-600 hover:bg-ocean-50 hover:text-ocean-600 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                
                  {mobileMenuOpen ? (
                    <div
                      key="close"
                    >
                      <X className="h-6 w-6" />
                    </div>
                  ) : (
                    <div
                      key="menu"
                    >
                      <Menu className="h-6 w-6" />
                    </div>
                  )}
                
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        
          {mobileMenuOpen && (
            <div
              className="lg:hidden mt-2 mx-4 sm:mx-6"
            >
              <div className="rounded-2xl bg-white/80 backdrop-blur-xl shadow-xl border border-slate-200/50 overflow-hidden">
                <div className="p-4 space-y-1">
                  {navigation.map((item, index) => (
                    <div
                      key={item.name}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-ocean-600 hover:bg-ocean-50/50 rounded-xl transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}

                  <div className="pt-4 mt-4 border-t border-slate-200/50 space-y-2">
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="flex items-center gap-3 px-4 py-3 text-base font-medium text-slate-700 hover:bg-ocean-50/50 rounded-xl transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-ocean-100 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-ocean-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Call us</div>
                        <div className="font-semibold">{FORMATTED_PHONE}</div>
                      </div>
                    </a>
                    <a
                      href={`sms:${PHONE_NUMBER}`}
                      className="flex items-center gap-3 px-4 py-3 text-base font-medium text-slate-700 hover:bg-ocean-50/50 rounded-xl transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-seafoam-100 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-seafoam-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Text us</div>
                        <div className="font-semibold">Send a message</div>
                      </div>
                    </a>
                    <Link
                      href="/#quote"
                      className="relative flex items-center justify-center gap-2 w-full px-4 py-4 text-base font-semibold text-white rounded-xl overflow-hidden group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-ocean-500 to-seafoam-600" />
                      <Sparkles className="relative w-5 h-5" />
                      <span className="relative">Get Instant Quote</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        
      </header>
  )
}
