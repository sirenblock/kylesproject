'use client'

import { useState } from 'react'
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: 'one-time',
  })
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) errors.name = 'Name is required'
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Enter a valid email'
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required'
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Enter a valid 10-digit phone number'
    }
    if (!formData.message.trim()) errors.message = 'Message is required'

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send. Please call or text us instead.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  return (
    <div className="py-12">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-ocean-50 to-seafoam-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Ready to get rid of that junk? Get in touch and we&apos;ll help you out.
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
                The fastest way to get a quote is to call or text us. We typically respond within 30 minutes during business hours.
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
                    <div className="text-slate-600">Destin to Panama City Beach along 30A</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-ocean-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Hours</div>
                    <div className="text-slate-600">7 days a week, 7am - 6pm</div>
                    <div className="text-sm text-slate-500">Same-day service available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-sand-200 p-8">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-seafoam-100 text-seafoam-600 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 mb-6">
                    We&apos;ll get back to you within 30 minutes during business hours.
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

                  {status === 'error' && (
                    <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-800">Failed to send</p>
                        <p className="text-sm text-red-600 mt-1">{errorMessage}</p>
                        <p className="text-sm text-red-600 mt-1">
                          You can also reach us at{' '}
                          <a href={`tel:${PHONE_NUMBER}`} className="underline font-medium">{FORMATTED_PHONE}</a>
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${fieldErrors.name ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' : 'border-sand-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200'}`}
                        placeholder="Your name"
                      />
                      {fieldErrors.name && <p className="mt-1 text-sm text-red-500">{fieldErrors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border transition-colors ${fieldErrors.email ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' : 'border-sand-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200'}`}
                          placeholder="you@email.com"
                        />
                        {fieldErrors.email && <p className="mt-1 text-sm text-red-500">{fieldErrors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border transition-colors ${fieldErrors.phone ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' : 'border-sand-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200'}`}
                          placeholder="(850) 555-1234"
                        />
                        {fieldErrors.phone && <p className="mt-1 text-sm text-red-500">{fieldErrors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-2">
                        Service Type
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-sand-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200 transition-colors"
                      >
                        <option value="one-time">One-Time Junk Removal</option>
                        <option value="construction">Construction Debris</option>
                        <option value="property-management">Property Management Services</option>
                        <option value="estate">Estate Cleanout</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${fieldErrors.message ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' : 'border-sand-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200'}`}
                        placeholder="Tell us about your junk removal needs..."
                      />
                      {fieldErrors.message && <p className="mt-1 text-sm text-red-500">{fieldErrors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-lg font-semibold hover:from-ocean-600 hover:to-ocean-700 transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
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
    </div>
  )
}
