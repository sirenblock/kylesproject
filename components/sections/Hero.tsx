'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, MessageCircle, Play } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for video background - coastal 30A imagery */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-ocean-700 via-ocean-600 to-seafoam-500"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />

        {/* Animated wave pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg
            className="absolute bottom-0 w-full h-32 text-white"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V120H0V60Z"
              fill="currentColor"
              initial={{ d: "M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V120H0V60Z" }}
              animate={{
                d: [
                  "M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V120H0V60Z",
                  "M0 80C240 40 480 80 720 40C960 80 1200 40 1440 80V120H0V80Z",
                  "M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V120H0V60Z",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-seafoam-400 animate-pulse" />
            Serving 30A from Destin to Panama City Beach
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
          >
            Premium Junk Removal
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-seafoam-300 to-ocean-300">
              for 30A Homes
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
          >
            From quick truck loads to full estate cleanouts. Easy enough for a quick cleanout, professional enough for estate management.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            {/* Primary CTA - One-off customers */}
            <Link
              href="/#quote"
              className="group relative flex flex-col items-center px-8 py-4 bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-slate-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <span className="flex items-center gap-2 text-lg">
                Get Instant Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-sm font-normal text-slate-700 mt-1">
                Got junk? Get your price in 60 seconds
              </span>
            </Link>

            {/* Secondary CTA - Property managers */}
            <Link
              href="/services/property-management"
              className="group flex flex-col items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              <span className="flex items-center gap-2 text-lg">
                Property Management Services
              </span>
              <span className="text-sm font-normal text-white/70 mt-1">
                White-glove service for rental turnovers & estates
              </span>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/90"
          >
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call: {FORMATTED_PHONE}</span>
            </a>
            <span className="hidden sm:inline text-white/50">|</span>
            <a
              href={`sms:${PHONE_NUMBER}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Text for Quick Quote</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
