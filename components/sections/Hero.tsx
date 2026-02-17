import Link from 'next/link'
import { ArrowRight, Phone, MessageCircle, Star, Clock } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER, getSMSLink } from '@/lib/utils'
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 -mt-24">
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
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-8"
          >
            <span className="font-medium">
              Serving{' '}
              <Link href="/service-areas" className="text-white underline decoration-white/50 hover:decoration-white">30A</Link> from{' '}
              <Link href="/service-areas/destin" className="text-white underline decoration-white/50 hover:decoration-white">Destin</Link> to{' '}
              <Link href="/service-areas/panama-city-beach" className="text-white underline decoration-white/50 hover:decoration-white">Panama City Beach</Link>
            </span>
          </div>
          {/* Headline with entrance animation */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[1.1]"
          >
            <span className="block">Premium Junk Removal</span>
            <span
              className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-seafoam-300 via-ocean-300 to-seafoam-400"
            >
              for 30A Homes
            </span>
          </h1>
          {/* Subheadline */}
          <p
            className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4"
          >
            From <Link href="/#quote" className="text-white underline decoration-white/50 hover:decoration-white">quick truck loads</Link> to{' '}
            <Link href="/services/estate-cleanouts" className="text-white underline decoration-white/50 hover:decoration-white">full estate cleanouts</Link>.{' '}
            <span className="text-white/90 font-medium">Easy enough for a quick cleanout</span>,{' '}
            <span className="text-seafoam-300 font-medium">professional enough for{' '}
            <Link href="/services/property-management" className="text-white underline decoration-white/50 hover:decoration-white">estate management</Link></span>.
          </p>
          {/* CTAs */}
          <div
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <Link
              href="/#quote"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-seafoam-400 to-seafoam-500 text-slate-900 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
            >
              Get Instant Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/property-management"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-200"
            >
              <Star className="w-5 h-5 text-gold-400" />
              Property Management
            </Link>
          </div>
          {/* Contact Options */}
          <div
            className="mt-10 md:mt-12"
          >
            {/* Phone Number */}
            <div className="text-center mb-6">
              <div className="text-white/80 text-sm mb-2">Call or Text</div>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="text-3xl md:text-4xl font-bold text-white hover:text-seafoam-300 transition-colors"
              >
                {FORMATTED_PHONE}
              </a>
            </div>
            {/* Call/Text Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-full sm:flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
                data-cta
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href={getSMSLink(PHONE_NUMBER, "Hi, I need a quote for junk removal")}
                className="w-full sm:flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
                data-cta
              >
                <MessageCircle className="w-5 h-5" />
                <span>Text for Quote</span>
              </a>
            </div>
            {/* Same-Day Badge */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Same-Day Service Available</span>
            </div>
          </div>
          {/* Trust indicators */}
          <div
            className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm"
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
              <span>Eco-Friendly Disposal</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
