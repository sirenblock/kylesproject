'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, CheckCircle, Truck } from 'lucide-react'

const testimonials = [
  {
    quote: "Needed to clear our vacation rental between guests and they provided same day service. Professional team with fair pricing, and they were efficient with their work. Great option for property managers who need reliable service.",
    author: "Sarah M.",
    location: "Rosemary Beach",
    service: "Vacation Rental Cleanout",
    rating: 5,
    verified: false,
    date: "January 2026"
  },
  {
    quote: "We manage properties in WaterColor and have had positive experiences with their service. Professional, on time, and they understand property management needs.",
    author: "Mike T.",
    title: "Property Manager",
    location: "WaterColor",
    service: "Property Management Services",
    rating: 5,
    verified: false,
    date: "January 2026"
  },
  {
    quote: "Removed old patio furniture and garage items. The booking process was easy - texted photos and got a quick quote. Friendly crew and they cleaned up well after themselves.",
    author: "Jennifer L.",
    location: "Seaside",
    service: "Furniture Removal",
    rating: 5,
    verified: false,
    date: "December 2025"
  },
  {
    quote: "Estate cleanout service was respectful and efficient. The team even helped with donating items to local charities. They made a difficult time easier with their compassion and professionalism.",
    author: "David R.",
    location: "Santa Rosa Beach",
    service: "Estate Cleanout",
    rating: 5,
    verified: false,
    date: "December 2025"
  },
  {
    quote: "Construction debris removal from our kitchen remodel. Quick response time with quote. They handled everything including old cabinets, countertops, and tile debris. Good service throughout.",
    author: "Amanda K.",
    location: "Inlet Beach",
    service: "Construction Debris",
    rating: 5,
    verified: false,
    date: "December 2025"
  },
  {
    quote: "Hot tub removal was done professionally with no damage to our deck. They came prepared with proper equipment and cleaned up after themselves. Fair pricing for specialty removals.",
    author: "Robert S.",
    location: "Grayton Beach",
    service: "Hot Tub Removal",
    rating: 5,
    verified: false,
    date: "December 2025"
  },
  {
    quote: "Used them for furniture removal during our move to Seaside. They were prompt and careful with our home. Pricing was reasonable compared to other quotes we received.",
    author: "Patricia W.",
    location: "Seaside",
    service: "Furniture & Appliances",
    rating: 5,
    verified: false,
    date: "November 2025"
  },
  {
    quote: "Good service for our appliance removal. Old refrigerators and washer/dryer removed. Team was professional and did a thorough job with cleanup.",
    author: "James A.",
    location: "Alys Beach",
    service: "Appliance Removal",
    rating: 4,
    verified: false,
    date: "November 2025"
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  // Generate schema markup for testimonials - minimal version without fake aggregate ratings
  const generateSchemaMarkup = () => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://30ajunkremoval.com'

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: '30A Junk Removal'
    }

    return schema
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 overflow-hidden relative">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchemaMarkup()) }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-4 border border-white/10"
          >
            <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
            Highly Rated
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-seafoam-300 to-ocean-300">
              Customers Say
            </span>
          </motion.h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Quote Icon - static */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-seafoam-400 to-ocean-400 flex items-center justify-center shadow-lg shadow-ocean-900/50 z-10">
            <Quote className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </div>

          {/* Testimonial Card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-seafoam-400/20 via-ocean-400/20 to-seafoam-400/20 rounded-3xl blur-lg opacity-50" />

            <div className="relative glass-dark rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 min-h-[300px] md:min-h-[320px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center w-full"
                >
                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1.5 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-gold-400 fill-gold-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto font-medium">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  {/* Author */}
                  <div className="mt-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <p className="text-lg md:text-xl font-bold text-white">
                        {testimonials[currentIndex].author}
                      </p>
                    </div>
                    {testimonials[currentIndex].title && (
                      <p className="text-seafoam-300 font-medium">{testimonials[currentIndex].title}</p>
                    )}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-2 text-ocean-200">
                      <p className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {testimonials[currentIndex].location}
                      </p>
                      <span className="hidden sm:inline text-ocean-400">•</span>
                      <p className="inline-flex items-center gap-1.5">
                        <Truck className="w-4 h-4" />
                        {testimonials[currentIndex].service}
                      </p>
                    </div>
                    <p className="text-sm text-ocean-300 mt-2">{testimonials[currentIndex].date}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows - Enhanced */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110 border border-white/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110 border border-white/10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots - Enhanced */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentIndex(index)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-seafoam-400 to-ocean-400 w-8'
                  : 'bg-white/30 hover:bg-white/50 w-2'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
