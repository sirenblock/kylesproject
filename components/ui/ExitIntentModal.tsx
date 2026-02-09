'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, MessageCircle, Zap, Phone } from 'lucide-react'
import { PHONE_NUMBER, getSMSLink } from '@/lib/utils'

interface ExitIntentModalProps {
  onClose?: () => void
}

export function ExitIntentModal({ onClose }: ExitIntentModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleClose = useCallback(() => {
    setIsVisible(false)
    // Store that modal was shown
    localStorage.setItem('exitIntentShown', 'true')
    onClose?.()
  }, [onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Send to webhook with EXIT INTENT tag
    try {
      await fetch('/api/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'EXIT_INTENT',
          phone: phoneNumber,
          timestamp: new Date().toISOString(),
          source: 'exit-intent-modal'
        })
      })
    } catch (error) {
      console.error('Failed to send exit intent webhook:', error)
    }

    setIsSubmitted(true)
    localStorage.setItem('exitIntentSubmitted', 'true')

    // Auto-close after showing success message
    setTimeout(() => {
      handleClose()
    }, 2000)
  }

  const handleTextNow = () => {
    localStorage.setItem('exitIntentSubmitted', 'true')
    handleClose()
  }

  useEffect(() => {
    // Don't show if already shown or submitted
    const hasShown = localStorage.getItem('exitIntentShown')
    const hasSubmitted = localStorage.getItem('exitIntentSubmitted')
    const hasInteracted = sessionStorage.getItem('ctaInteracted')

    if (hasShown || hasSubmitted || hasInteracted) {
      return
    }

    let mouseLeaveTimeout: NodeJS.Timeout

    // Desktop: Mouse leave detection
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the viewport
      if (e.clientY <= 0 && !isVisible) {
        mouseLeaveTimeout = setTimeout(() => {
          setIsVisible(true)
        }, 100)
      }
    }

    // Mobile: Scroll up detection
    let lastScrollY = window.scrollY
    let scrollUpCount = 0

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Detect scroll up
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        scrollUpCount++

        // Show after 3 consecutive scroll-ups
        if (scrollUpCount >= 3 && !isVisible) {
          setIsVisible(true)
        }
      } else {
        scrollUpCount = 0
      }

      lastScrollY = currentScrollY
    }

    // Add listeners
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll)

    // Track CTA interactions to prevent showing modal
    const handleCTAClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest('a[href^="tel:"]') ||
        target.closest('a[href^="sms:"]') ||
        target.closest('[data-cta]')
      ) {
        sessionStorage.setItem('ctaInteracted', 'true')
      }
    }

    document.addEventListener('click', handleCTAClick)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleCTAClick)
      clearTimeout(mouseLeaveTimeout)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none exit-intent-wrapper">
        <div
          className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full pointer-events-auto animate-slide-in-up md:animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors group"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-slate-400 group-hover:text-slate-600" />
          </button>

          {/* Content */}
          <div className="p-8">
            {!isSubmitted ? (
              <>
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20" />
                  </div>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-3">
                  Wait! Get Instant Quote
                </h2>

                {/* Subheadline */}
                <p className="text-lg text-slate-600 text-center mb-6">
                  Text us your address for a free quote in under 15 minutes
                </p>

                {/* Special offer */}
                <div className="bg-gradient-to-br from-gold-50 to-gold-100 border-2 border-gold-300 rounded-xl p-4 mb-6">
                  <p className="text-center font-bold text-gold-900">
                    Same-Day Service Available
                  </p>
                  <p className="text-center text-sm text-gold-700 mt-1">
                    Text now and we'll respond in minutes
                  </p>
                </div>

                {/* Text now button (primary option) */}
                <a
                  href={getSMSLink(PHONE_NUMBER, "Hi, I'd like a quote for junk removal. My address is:")}
                  onClick={handleTextNow}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 mb-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Text Me Quote
                </a>

                {/* Or call option */}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  onClick={handleTextNow}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Or Call Now
                </a>

                {/* Alternative: Phone number form */}
                {/* <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter your phone number"
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl
                               focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200
                               outline-none transition-all text-lg"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4
                             bg-gradient-to-r from-emerald-500 to-emerald-600 text-white
                             rounded-xl font-bold text-lg shadow-lg hover:shadow-xl
                             transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Text Me Quote
                  </button>
                </form> */}

                {/* Trust indicators */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Zap className="w-4 h-4 text-emerald-500" />
                      <span>Fast Response</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-emerald-500" />
                      <span>No Obligation</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // Success state
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Thanks! We'll Text You Soon
                </h3>
                <p className="text-slate-600">
                  Expect a response within 15 minutes
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

// Wrapper component to manage the exit intent modal
export function ExitIntentProvider({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {children}
      {showModal && <ExitIntentModal onClose={() => setShowModal(false)} />}
    </>
  )
}
