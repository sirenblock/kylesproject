'use client'

// Animations removed for performance
import Link from 'next/link'
import { Phone, MessageCircle, ArrowRight, Sparkles, Clock, Truck } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-ocean-900 relative overflow-hidden">
      {/* Static background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/10"
        >
          <Sparkles className="w-4 h-4 text-seafoam-400" />
          Same-Day Service Available
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight"
        >
          Ready to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-seafoam-400 to-ocean-400">
            Clear the Clutter?
          </span>
        </h2>

        <p
          className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Get your instant quote online or give us a call. We're here 7 days a week to help.
        </p>

        {/* Feature pills */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            <Clock className="w-4 h-4 text-seafoam-400" />
            30-min response
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            <Truck className="w-4 h-4 text-ocean-400" />
            Same-day pickup
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/#quote"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-slate-900 rounded-xl font-bold shadow-lg shadow-seafoam-500/25 hover:shadow-xl hover:shadow-seafoam-500/40 transition-all hover:scale-105 btn-shine"
          >
            Get Instant Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 hover:border-white/50 transition-all"
          >
            <Phone className="w-5 h-5 group-hover:animate-pulse" />
            Call {FORMATTED_PHONE}
          </a>
        </div>

        {/* Text CTA */}
        <div
          className="mt-8"
        >
          <a
            href={`sms:${PHONE_NUMBER}`}
            className="group inline-flex items-center gap-2 text-ocean-300 hover:text-seafoam-300 transition-colors font-medium"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Or text us for a quick response
            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        </div>
      </div>
    </section>
  )
