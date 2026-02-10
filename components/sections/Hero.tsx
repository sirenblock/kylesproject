'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, MessageCircle, Sparkles, Star, Clock } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER, getSMSLink } from '@/lib/utils'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 -mt-20">
      {/* Static gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-ocean-900/50 to-slate-900" />

        {/* Static mesh gradient */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-ocean-600/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-seafoam-500/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Static wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <svg
            className="absolute bottom-0 w-full h-24 text-white"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80C180 40 360 100 540 80C720 60 900 100 1080 80C1260 60 1440 100 1440 80V120H0V80Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-28 md:pb-40">
        <div className="text-center">
          {/* Badge with subtle pulse */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-dark text-white text-sm mb-8 shadow-lg shadow-ocean-500/20"
          >
            <motion.span
              className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-seafoam-400 to-ocean-400"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-3 h-3 text-white" />
            </motion.span>
            <span className="font-medium">
              Serving{' '}
              <Link href="/service-areas" className="text-ocean-200 hover:underline">30A</Link> from{' '}
              <Link href="/service-areas/destin" className="text-ocean-200 hover:underline">Destin</Link> to{' '}
              <Link href="/service-areas/panama-city-beach" className="text-ocean-200 hover:underline">Panama City Beach</Link>
            </span>
          </motion.div>

          {/* Headline with entrance animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[1.1]"
          >
            <span className="block">Premium Junk Removal</span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-seafoam-300 via-ocean-300 to-seafoam-400"
            >
              for 30A Homes
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4"
          >
            From <Link href="/#quote" className="text-ocean-300 hover:underline">quick truck loads</Link> to{' '}
            <Link href="/services/estate-cleanout" className="text-ocean-300 hover:underline">full estate cleanouts</Link>.{' '}
            <span className="text-white/90 font-medium">Easy enough for a quick cleanout</span>,{' '}
            <span className="text-seafoam-300 font-medium">professional enough for{' '}
            <Link href="/services/property-management" className="text-seafoam-200 hover:underline">estate management</Link></span>.
          </motion.p>

          {/* Dual CTAs with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
          >
            {/* Primary CTA - Glowing button */}
            <Link
              href="/#quote"
              className="group relative w-full sm:w-auto"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-seafoam-400 to-ocean-400 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex flex-col items-center px-8 py-5 bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-slate-900 rounded-xl font-semibold shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02] btn-shine">
                <span className="flex items-center gap-2 text-lg md:text-xl">
                  Get Instant Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-sm font-normal text-slate-700 mt-1">
                  Got junk? Get your price in 60 seconds
                </span>
              </div>
            </Link>

            {/* Secondary CTA - Glass morphism */}
            <Link
              href="/services/property-management"
              className="group w-full sm:w-auto flex flex-col items-center px-8 py-5 glass-dark rounded-xl font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
            >
              <span className="flex items-center gap-2 text-lg md:text-xl text-white">
                <Star className="w-5 h-5 text-gold-400" />
                Property Management
              </span>
              <span className="text-sm font-normal text-white/60 mt-1">
                White-glove service for rental turnovers
              </span>
            </Link>
          </motion.div>

          {/* Prominent Call or Text CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 md:mt-12"
          >
            {/* Same-Day Service Badge */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500/20 border-2 border-emerald-400 rounded-full">
                <Clock className="w-4 h-4 text-emerald-300" />
                <span className="text-emerald-300 font-bold text-sm uppercase tracking-wide">Same-Day Service Available</span>
              </div>
            </div>

            {/* Large Phone Number Display */}
            <div className="text-center mb-6">
              <div className="text-white/70 text-sm uppercase tracking-widest mb-2">Call or Text for Quote</div>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="text-4xl md:text-5xl font-bold text-white hover:text-emerald-300 transition-colors"
              >
                {FORMATTED_PHONE}
              </a>
            </div>

            {/* Call/Text Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="relative w-full sm:flex-1 group"
                data-cta
              >
                {/* Pulse animation */}
                <div className="absolute -inset-1 bg-emerald-400 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                <div className="relative flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold text-xl shadow-xl transition-all hover:scale-105">
                  <Phone className="w-6 h-6" />
                  <span>Call Now</span>
                </div>
              </a>

              <a
                href={getSMSLink(PHONE_NUMBER, "Hi, I need a quote for junk removal")}
                className="w-full sm:flex-1 group relative"
                data-cta
              >
                <div className="absolute -inset-1 bg-orange-400 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-xl shadow-xl transition-all hover:scale-105">
                  <MessageCircle className="w-6 h-6" />
                  <span>Text for Quote</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-seafoam-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-seafoam-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Same Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-seafoam-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <a
                href="https://www.epa.gov/recycle/reducing-and-reusing-basics"
                target="_blank"
                rel="nofollow external noopener noreferrer"
                className="text-seafoam-300 hover:underline"
              >
                Eco-Friendly Disposal
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - simple fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-gradient-to-b from-white/60 to-white/20" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
