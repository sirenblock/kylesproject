'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { contactFormSchema, type ContactFormData } from '@/lib/validation'
import { LinksSection } from '@/components/seo/LinksSection'
import { getContextualLinks, getExternalLinks } from '@/lib/seo'

export default function ContactPage() {
  const internalLinks = getContextualLinks('core', '/contact')
  const externalLinks = getExternalLinks(5)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      serviceType: 'one-time',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        if (response.status === 429) {
          setSubmitError('Too many requests. Please try again later.')
        } else if (result.details) {
          // Validation errors from backend
          setSubmitError(result.details.map((d: any) => d.message).join(', '))
        } else {
          setSubmitError(result.error || 'Failed to send message. Please try again.')
        }
        return
      }

      // Success
      setFormSubmitted(true)
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="-mt-16 pt-32 pb-16 bg-gradient-to-br from-ocean-50 to-seafoam-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Ready to get rid of that junk? Whether you need <Link href="/services/furniture-removal" className="text-ocean-600 hover:underline font-medium">furniture removal</Link>, <Link href="/services/construction-debris" className="text-ocean-600 hover:underline font-medium">construction debris hauling</Link>, or <Link href="/services/estate-cleanouts" className="text-ocean-600 hover:underline font-medium">estate cleanout services</Link>, we're here to help. Serving communities from <Link href="/service-areas/seaside" className="text-ocean-600 hover:underline font-medium">Seaside</Link> to <Link href="/service-areas/panama-city-beach" className="text-ocean-600 hover:underline font-medium">Panama City Beach</Link>, get in touch and we'll help you out.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Get In Touch</h2>
              <p className="text-slate-600 mb-8">
                The fastest way to get a quote is to call or text us. We typically respond within 30 minutes during business hours. Our team specializes in <Link href="/services/appliance-removal" className="text-ocean-600 hover:underline font-medium">appliance removal</Link>, <Link href="/services/yard-debris" className="text-ocean-600 hover:underline font-medium">yard waste</Link>, and comprehensive <Link href="/services" className="text-ocean-600 hover:underline font-medium">junk removal services</Link> throughout the <a href="https://www.visitflorida.com/en-us/cities/south-walton.html" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">South Walton area</a>. Check out our <Link href="/pricing" className="text-ocean-600 hover:underline font-medium">transparent pricing</Link> or learn more in our <Link href="/faq" className="text-ocean-600 hover:underline font-medium">FAQ section</Link>.
              </p>

              <div className="space-y-6">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-ocean-50 hover:bg-ocean-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-ocean-600 text-white flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Call Us</div>
                    <div className="text-ocean-600">{FORMATTED_PHONE}</div>
                  </div>
                </a>

                <a
                  href={`sms:${PHONE_NUMBER}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-seafoam-50 hover:bg-seafoam-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-seafoam-600 text-white flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Text Us</div>
                    <div className="text-seafoam-600">Quick response, send photos for quotes</div>
                  </div>
                </a>

                <a
                  href="mailto:30apcbjunkremoval@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gold-50 hover:bg-gold-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold-600 text-white flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Email Us</div>
                    <div className="text-gold-600">30apcbjunkremoval@gmail.com</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-6 rounded-xl bg-sand-50 border border-sand-200">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-ocean-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Service Area</div>
                    <div className="text-slate-600">
                      <Link href="/service-areas/destin" className="text-ocean-600 hover:underline font-medium">Destin</Link> to <Link href="/service-areas/panama-city-beach" className="text-ocean-600 hover:underline font-medium">Panama City Beach</Link> along the scenic <a href="https://www.30aescapes.com/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">30A corridor</a>. We proudly serve <Link href="/service-areas/rosemary-beach" className="text-ocean-600 hover:underline font-medium">Rosemary Beach</Link>, <Link href="/service-areas/alys-beach" className="text-ocean-600 hover:underline font-medium">Alys Beach</Link>, and all surrounding communities. Our eco-friendly disposal practices align with <a href="https://www.epa.gov/recycle" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">EPA recycling guidelines</a>.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-ocean-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Hours</div>
                    <div className="text-slate-600">7 days a week, 7am - 6pm</div>
                    <div className="text-sm text-slate-500">Same-day service available. We support local organizations like <a href="https://www.habitatemeraldcoast.org/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Habitat for Humanity Emerald Coast</a> through furniture donations.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-sand-200 p-8">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-seafoam-100 text-seafoam-600 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 mb-6">
                    We'll get back to you within 30 minutes during business hours. Find us on <a href="https://www.google.com/maps/search/junk+removal+30a" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Google Maps</a> for directions and reviews.
                  </p>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center gap-2 text-ocean-600 font-medium hover:text-ocean-700"
                  >
                    <Phone className="w-4 h-4" />
                    Or call us now: {FORMATTED_PHONE}
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h2>

                  {submitError && (
                    <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div className="text-sm text-red-800">{submitError}</div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name')}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-sand-300 focus:border-ocean-500 focus:ring-ocean-200'
                        } focus:ring-2 transition-colors`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register('email')}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-sand-300 focus:border-ocean-500 focus:ring-ocean-200'
                          } focus:ring-2 transition-colors`}
                          placeholder="you@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register('phone')}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-sand-300 focus:border-ocean-500 focus:ring-ocean-200'
                          } focus:ring-2 transition-colors`}
                          placeholder="8505551234"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-2">
                        Service Type
                      </label>
                      <select
                        id="serviceType"
                        {...register('serviceType')}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.serviceType ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-sand-300 focus:border-ocean-500 focus:ring-ocean-200'
                        } focus:ring-2 transition-colors`}
                      >
                        <option value="one-time">One-Time Junk Removal</option>
                        <option value="construction">Construction Debris</option>
                        <option value="property-management">Property Management Services</option>
                        <option value="estate-cleanout">Estate Cleanout</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.serviceType && (
                        <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        {...register('message')}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-sand-300 focus:border-ocean-500 focus:ring-ocean-200'
                        } focus:ring-2 transition-colors resize-none`}
                        placeholder="Tell us about your junk removal needs..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-lg font-semibold hover:from-ocean-600 hover:to-ocean-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <LinksSection
        internalLinks={internalLinks}
        externalLinks={externalLinks}
        title="Related Resources"
      />
    </div>
  )
}
