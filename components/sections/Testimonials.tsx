'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

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
    <section className="py-20 bg-gradient-to-br from-ocean-600 to-ocean-700 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            What Our Customers Say
          </motion.h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
            <Quote className="w-8 h-8 text-white/50" />
          </div>

          {/* Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 relative overflow-hidden min-h-[280px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="text-center w-full"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl sm:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Author */}
                <div className="mt-8">
                  <p className="text-lg font-semibold text-white">
                    {testimonials[currentIndex].author}
                  </p>
                  {testimonials[currentIndex].title && (
                    <p className="text-ocean-200">{testimonials[currentIndex].title}</p>
                  )}
                  <p className="text-ocean-300">{testimonials[currentIndex].location}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
