'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Truck, Hammer, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqCategories = [
  {
    title: 'Quick Hauls',
    icon: Truck,
    color: 'ocean',
    questions: [
      {
        q: "What's the minimum charge?",
        a: "Our minimum is $150 for a 1/4 truck load. This covers items like a single couch, dresser, or grill.",
      },
      {
        q: "Is same-day service available?",
        a: "Yes! We offer same-day service based on availability. The earlier you call, the better chance we can fit you in. Text or call and we'll do our best to accommodate.",
      },
      {
        q: "Do I need to be home?",
        a: "Not necessarily! As long as we can access the items (garage code, unlocked shed, etc.), we can handle the removal while you're away. We'll send before and after photos.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, cash, Venmo, and Zelle. Payment is due upon completion of the job.",
      },
      {
        q: "How quickly can you come out?",
        a: "Often same-day or next-day. We understand junk removal is often time-sensitive, especially for property turnovers. Give us a call and we'll work to accommodate your schedule.",
      },
    ],
  },
  {
    title: 'Construction Debris',
    icon: Hammer,
    color: 'gold',
    questions: [
      {
        q: "Why is construction debris priced differently?",
        a: "Construction materials like concrete, tile, drywall, and lumber are significantly heavier and require special disposal facilities with weight-based fees. We price these jobs based on material type and volume to give you the most accurate quote.",
      },
      {
        q: "How do I get a quote for construction debris?",
        a: "Just text us photos of your debris! We'll respond with an exact quote within 30 minutes. Photos help us assess material type, volume, and weight to give you accurate pricing.",
      },
      {
        q: "What construction materials do you remove?",
        a: "Everything! Drywall, tile, flooring, cabinets, fixtures, lumber, concrete, brick, stone, roofing materials, and more. If it came from a renovation, we can haul it.",
      },
      {
        q: "Do you recycle construction materials?",
        a: "Absolutely. We sort and recycle whatever possible - metal, clean wood, concrete, and more. This helps keep costs down and is better for the environment.",
      },
    ],
  },
  {
    title: 'Property Managers',
    icon: Building2,
    color: 'seafoam',
    questions: [
      {
        q: "Do you offer recurring service?",
        a: "Yes! We offer preferred pricing and priority scheduling for property managers with recurring needs. Whether it's monthly cleanouts or on-call service, we've got you covered.",
      },
      {
        q: "Can you work around tenant schedules?",
        a: "Absolutely. We understand the timing constraints of vacation rentals and can work around check-in/check-out times to ensure minimal disruption.",
      },
      {
        q: "Do you provide documentation?",
        a: "Yes. We provide before and after photos for every job, detailed invoices, and donation receipts when items are donated. Perfect for your records and owner reporting.",
      },
      {
        q: "Can you handle donation pickups?",
        a: "Yes! We sort items and donate usable goods on your behalf. You'll receive tax-deductible donation receipts for everything we donate.",
      },
      {
        q: "Do you offer invoicing?",
        a: "Yes, we can invoice for property management companies. Monthly billing is available for clients with recurring service agreements.",
      },
    ],
  },
]

const colorMap = {
  ocean: {
    bg: 'bg-ocean-50',
    border: 'border-ocean-200',
    text: 'text-ocean-600',
    activeBg: 'bg-ocean-100',
  },
  gold: {
    bg: 'bg-gold-50',
    border: 'border-gold-200',
    text: 'text-gold-600',
    activeBg: 'bg-gold-100',
  },
  seafoam: {
    bg: 'bg-seafoam-50',
    border: 'border-seafoam-200',
    text: 'text-seafoam-600',
    activeBg: 'bg-seafoam-100',
  },
}

export function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section className="py-20 bg-sand-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-800"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-600"
          >
            Got questions? We've got answers.
          </motion.p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category) => {
            const Icon = category.icon
            const colors = colorMap[category.color as keyof typeof colorMap]

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl border ${colors.border} overflow-hidden`}
              >
                {/* Category Header */}
                <div className={`${colors.bg} px-6 py-4 flex items-center gap-3`}>
                  <div className={`w-10 h-10 rounded-lg ${colors.activeBg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{category.title}</h3>
                </div>

                {/* Questions */}
                <div className="bg-white divide-y divide-sand-200">
                  {category.questions.map((item, index) => {
                    const key = `${category.title}-${index}`
                    const isOpen = openItems[key]

                    return (
                      <div key={key}>
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-sand-50 transition-colors"
                        >
                          <span className="font-medium text-slate-800 pr-4">{item.q}</span>
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 text-slate-400 shrink-0 transition-transform",
                              isOpen && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4 text-slate-600">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
