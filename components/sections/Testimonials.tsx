'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react'

const testimonials = [
  {
    quote: "Needed to clear rental between guests - same day service! $275 and they were in and out in under an hour.",
    author: "Sarah M.",
    location: "Rosemary Beach",
    rating: 5,
  },
  {
    quote: "We've used them for 20+ turnovers now. Always professional, always on time. They understand property management.",
    author: "Mike T.",
    title: "Property Manager",
    location: "WaterColor",
    rating: 5,
  },
  {
    quote: "$425 for patio furniture and garage junk. Easy booking, friendly crew. Highly recommend!",
    author: "Jennifer L.",
    location: "Seaside",
    rating: 5,
  },
  {
    quote: "Estate cleanout after my mother passed. They were respectful, efficient, and even donated items on our behalf. Can't thank them enough.",
    author: "David R.",
    location: "Santa Rosa Beach",
    rating: 5,
  },
  {
    quote: "Construction debris from our kitchen remodel. Texted photos and had an exact quote in 20 minutes. Great service!",
    author: "Amanda K.",
    location: "Inlet Beach",
    rating: 5,
  },
  {
    quote: "Hot tub removal done professionally. No damage to the deck, completely cleaned up after. Worth every penny.",
    author: "Robert S.",
    location: "Grayton Beach",
    rating: 5,
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

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-seafoam-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 3 }}
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-ocean-400 rounded-full blur-3xl"
        />
      </div>

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
            5-Star Reviews
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
          {/* Quote Icon - floating */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-seafoam-400 to-ocean-400 flex items-center justify-center shadow-lg shadow-ocean-900/50 z-10"
          >
            <Quote className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </motion.div>

          {/* Testimonial Card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-seafoam-400/20 via-ocean-400/20 to-seafoam-400/20 rounded-3xl blur-lg opacity-50" />

            <div className="relative glass-dark rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 min-h-[300px] md:min-h-[320px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center w-full"
                >
                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1.5 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 md:w-6 md:h-6 text-gold-400 fill-gold-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto font-medium">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  {/* Author */}
                  <div className="mt-8">
                    <p className="text-lg md:text-xl font-bold text-white">
                      {testimonials[currentIndex].author}
                    </p>
                    {testimonials[currentIndex].title && (
                      <p className="text-seafoam-300 font-medium">{testimonials[currentIndex].title}</p>
                    )}
                    <p className="inline-flex items-center gap-1.5 text-ocean-200 mt-1">
                      <MapPin className="w-4 h-4" />
                      {testimonials[currentIndex].location}
                    </p>
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
