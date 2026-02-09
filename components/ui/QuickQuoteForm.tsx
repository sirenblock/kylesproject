'use client'

import { useState } from 'react'
import { MessageCircle, CheckCircle } from 'lucide-react'

const LOCATIONS = [
  { value: 'seaside', label: 'Seaside' },
  { value: 'rosemary-beach', label: 'Rosemary Beach' },
  { value: 'alys-beach', label: 'Alys Beach' },
  { value: 'watercolor', label: 'WaterColor' },
  { value: 'grayton-beach', label: 'Grayton Beach' },
  { value: 'santa-rosa-beach', label: 'Santa Rosa Beach' },
  { value: 'inlet-beach', label: 'Inlet Beach' },
  { value: 'seacrest', label: 'Seacrest' },
  { value: 'seagrove-beach', label: 'Seagrove Beach' },
  { value: 'blue-mountain-beach', label: 'Blue Mountain Beach' },
  { value: 'destin', label: 'Destin' },
  { value: 'panama-city-beach', label: 'Panama City Beach' },
]

export function QuickQuoteForm() {
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    if (cleaned.length <= 3) return cleaned
    if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: 'QUICK QUOTE REQUEST',
          phone,
          location,
          type: 'quick-quote',
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setPhone('')
        setLocation('')
      }
    } catch (error) {
      console.error('Error submitting quote request:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-gradient-to-br from-emerald-50 to-seafoam-50 rounded-2xl p-8 border-2 border-emerald-200 shadow-xl text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thanks!</h3>
        <p className="text-lg text-slate-700 mb-4">We'll text you in under 15 minutes</p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-emerald-600 hover:text-emerald-700 font-semibold"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 md:p-8 border-2 border-slate-200 shadow-xl">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold mb-3">
          <MessageCircle className="w-4 h-4" />
          <span>Get a Quote in Minutes</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Quick Quote Request</h3>
        <p className="text-slate-600">We'll text you back in under 15 minutes</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Phone Number Input */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
            Your Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={phone}
            onChange={handlePhoneChange}
            maxLength={14}
            placeholder="(850) 123-4567"
            className="w-full px-6 py-4 text-lg border-2 border-slate-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none"
          />
        </div>

        {/* Location Dropdown */}
        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-slate-700 mb-2">
            Service Location *
          </label>
          <select
            id="location"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-6 py-4 text-lg border-2 border-slate-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none bg-white appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: 'right 1rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em',
            }}
          >
            <option value="">Select your location...</option>
            {LOCATIONS.map((loc) => (
              <option key={loc.value} value={loc.value}>
                {loc.label}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold text-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <MessageCircle className="w-6 h-6" />
          <span>{isSubmitting ? 'Sending...' : 'Text Me a Quote'}</span>
        </button>

        <p className="text-center text-sm text-slate-500">
          We respect your privacy. Your information is never shared.
        </p>
      </form>
    </div>
  )
}
