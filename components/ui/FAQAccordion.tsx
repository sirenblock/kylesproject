'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

// Relester SEO Method: FAQ Accordion Component
// Matches FAQPage schema with interactive visual component
// Google validates that structured data matches visible content

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
  title?: string
  className?: string
}

export function FAQAccordion({ faqs, title = 'Frequently Asked Questions', className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn('my-12 rounded-2xl border-2 border-ocean-200 bg-white p-6 md:p-8', className)}>
      <h2 className="mb-6 text-2xl md:text-3xl font-bold text-slate-900">
        {title}
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border-2 border-slate-200 bg-white transition-all hover:border-ocean-300"
          >
            {/* Question Button */}
            <button
              className="flex w-full items-center justify-between gap-4 p-4 md:p-5 text-left transition-colors hover:bg-ocean-50"
              onClick={() => toggleQuestion(index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-slate-900 text-base md:text-lg">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 flex-shrink-0 text-ocean-600 transition-transform duration-300',
                  openIndex === index && 'rotate-180'
                )}
              />
            </button>

            {/* Answer Panel */}
            <div
              className={cn(
                'overflow-hidden transition-all duration-300 ease-in-out',
                openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="border-t-2 border-slate-100 px-4 md:px-5 py-4 md:py-5 bg-slate-50">
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA at bottom of FAQ */}
      <div className="mt-6 pt-6 border-t-2 border-slate-200 text-center">
        <p className="text-sm text-slate-600 mb-3">
          Have more questions? We're here to help!
        </p>
        <a
          href="tel:8503683495"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
        >
          Call Now: (850) 368-3495
        </a>
      </div>
    </div>
  )
}
