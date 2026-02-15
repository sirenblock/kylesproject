'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, MessageCircle, Sparkles, Star } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

// Floating orbs for background decoration
const FloatingOrb = ({ delay = 0, size = 'md', color = 'ocean' }: { delay?: number; size?: 'sm' | 'md' | 'lg'; color?: 'ocean' | 'seafoam' | 'gold' }) => {
  const sizes = { sm: 'w-32 h-32', md: 'w-48 h-48', lg: 'w-64 h-64' }
  const colors = {
    ocean: 'from-ocean-400/30 to-ocean-600/20',
    seafoam: 'from-seafoam-400/30 to-seafoam-600/20',
    gold: 'from-gold-400/20 to-gold-600/10',
  }

  return (
    <motion.div
      className={`absolute ${sizes[size]} rounded-full bg-gradient-to-br ${colors[color]} blur-3xl`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-ocean-900/50 to-slate-900" />

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-ocean-600/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-seafoam-500/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 md:left-20">
          <FloatingOrb delay={0} size="lg" color="ocean" />
        </div>
        <div className="absolute top-40 right-10 md:right-32">
          <FloatingOrb delay={2} size="md" color="seafoam" />
        </div>
        <div className="absolute bottom-40 left-1/4">
          <FloatingOrb delay={4} size="sm" color="gold" />
        </div>
        <div className="absolute bottom-20 right-1/4">
          <FloatingOrb delay={1} size="md" color="ocean" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Multiple wave layers */}
        <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
          {/* Back wave */}
          <svg
            className="absolute bottom-0 w-[200%] h-40 text-ocean-900/50"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 40C360 80 720 0 1080 40C1440 80 1800 0 2160 40V120H0V40Z"
              fill="currentColor"
              animate={{
                d: [
                  "M0 40C360 80 720 0 1080 40C1440 80 1800 0 2160 40V120H0V40Z",
                  "M0 60C360 20 720 80 1080 60C1440 20 1800 80 2160 60V120H0V60Z",
                  "M0 40C360 80 720 0 1080 40C1440 80 1800 0 2160 40V120H0V40Z",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>

          {/* Middle wave */}
          <svg
            className="absolute bottom-0 w-[200%] h-32 text-ocean-800/30"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V120H0V60Z"
              fill="currentColor"
              animate={{
                d: [
                  "M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V120H0V60Z",
                  "M0 80C240 40 480 80 720 40C960 80 1200 40 1440 80V120H0V80Z",
                  "M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V120H0V60Z",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>

          {/* Front wave */}
          <svg
            className="absolute bottom-0 w-full h-24 text-white"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 80C180 40 360 100 540 80C720 60 900 100 1080 80C1260 60 1440 100 1440 80V120H0V80Z"
              fill="currentColor"
              animate={{
                d: [
                  "M0 80C180 40 360 100 540 80C720 60 900 100 1080 80C1260 60 1440 100 1440 80V120H0V80Z",
                  "M0 70C180 90 360 50 540 70C720 90 900 50 1080 70C1260 90 1440 50 1440 70V120H0V70Z",
                  "M0 80C180 40 360 100 540 80C720 60 900 100 1080 80C1260 60 1440 100 1440 80V120H0V80Z",
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-40 md:pt-24 md:pb-40">
        <div className="text-center">
          {/* Badge with glow */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-dark text-white text-sm mb-8 shadow-lg shadow-ocean-500/20"
          >
            <motion.span
              className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-seafoam-400 to-ocean-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-3 h-3 text-white" />
            </motion.span>
            <span className="font-medium">Serving 30A from Destin to Panama City Beach</span>
          </motion.div>

          {/* Headline with stagger animation */}
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
              className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-seafoam-300 via-ocean-300 to-seafoam-400 animate-gradient-x"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 5s ease infinite',
              }}
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
            From quick truck loads to full estate cleanouts.{' '}
            <span className="text-white/90 font-medium">Easy enough for a quick cleanout</span>,{' '}
            <span className="text-seafoam-300 font-medium">professional enough for estate management</span>.
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

          {/* Contact Info with icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          >
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="group flex items-center gap-3 px-6 py-3 rounded-full glass-dark hover:bg-white/20 transition-all"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-ocean-400 to-ocean-600 shadow-lg shadow-ocean-500/30">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-white/50 uppercase tracking-wider">Call Now</div>
                <div className="text-white font-semibold">{FORMATTED_PHONE}</div>
              </div>
            </a>

            <a
              href={`sms:${PHONE_NUMBER}`}
              className="group flex items-center gap-3 px-6 py-3 rounded-full glass-dark hover:bg-white/20 transition-all"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-seafoam-400 to-seafoam-600 shadow-lg shadow-seafoam-500/30">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-white/50 uppercase tracking-wider">Text Us</div>
                <div className="text-white font-semibold">Quick Quote</div>
              </div>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm"
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
              <span>47 Five-Star Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-seafoam-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-seafoam-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-seafoam-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Eco-Friendly Disposal</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 rounded-full bg-gradient-to-b from-white/60 to-white/20"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
