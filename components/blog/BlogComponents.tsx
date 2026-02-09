'use client'

import { ReactNode } from 'react'

export function Section({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      {children}
    </section>
  )
}

export function Heading2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="text-3xl font-bold text-slate-900 mb-6 mt-16 pb-4 border-b-2 border-slate-200 scroll-mt-24">
      {children}
    </h2>
  )
}

export function Heading3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3 id={id} className="text-2xl font-bold text-slate-800 mb-4 mt-12 scroll-mt-24">
      {children}
    </h3>
  )
}

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="text-[21px] text-slate-700 leading-[1.8] mb-6">
      {children}
    </p>
  )
}

export function CalloutBox({
  type = 'info',
  title,
  children
}: {
  type?: 'info' | 'tip' | 'example' | 'warning' | 'success'
  title: string
  children: ReactNode
}) {
  const styles = {
    info: {
      bg: 'from-blue-50 to-cyan-50',
      border: 'border-blue-500',
      icon: '💡',
      titleColor: 'text-blue-900'
    },
    tip: {
      bg: 'from-purple-50 to-pink-50',
      border: 'border-purple-500',
      icon: '⚡',
      titleColor: 'text-purple-900'
    },
    example: {
      bg: 'from-seafoam-50 to-green-50',
      border: 'border-seafoam-600',
      icon: '✨',
      titleColor: 'text-seafoam-900'
    },
    warning: {
      bg: 'from-amber-50 to-orange-50',
      border: 'border-amber-500',
      icon: '⚠️',
      titleColor: 'text-amber-900'
    },
    success: {
      bg: 'from-green-50 to-emerald-50',
      border: 'border-green-500',
      icon: '✅',
      titleColor: 'text-green-900'
    }
  }

  const style = styles[type]

  return (
    <div className={`my-8 p-6 bg-gradient-to-br ${style.bg} border-l-4 ${style.border} rounded-r-xl shadow-md`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{style.icon}</span>
        <h4 className={`text-lg font-bold ${style.titleColor}`}>{title}</h4>
      </div>
      <div className="text-slate-700 space-y-3">
        {children}
      </div>
    </div>
  )
}

export function StatsBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-10 p-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border-l-8 border-amber-500 rounded-r-2xl shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">📊</span>
        <h4 className="text-2xl font-bold text-amber-900">{title}</h4>
      </div>
      <div className="text-lg text-slate-700 space-y-4">
        {children}
      </div>
    </div>
  )
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-12 pl-6 pr-6 py-6 border-l-4 border-slate-900 italic text-2xl font-medium text-slate-900 leading-relaxed bg-slate-50 rounded-r-xl">
      {children}
    </blockquote>
  )
}

export function BulletList({ items }: { items: (string | ReactNode)[] }) {
  return (
    <ul className="my-6 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-[21px] text-slate-700 leading-relaxed">
          <span className="text-ocean-500 mt-1.5 flex-shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function NumberedList({ items }: { items: (string | ReactNode)[] }) {
  return (
    <ol className="my-6 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-[21px] text-slate-700 leading-relaxed">
          <span className="text-ocean-600 font-bold mt-0.5 flex-shrink-0">{index + 1}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  )
}

export function ImagePlaceholder({
  description,
  emoji
}: {
  description: string
  emoji: string
}) {
  return (
    <figure className="my-12">
      <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-xl border-2 border-slate-300">
        <div className="text-center p-8">
          <div className="text-8xl mb-4">{emoji}</div>
          <figcaption className="text-slate-600 font-medium text-lg">
            {description}
          </figcaption>
        </div>
      </div>
    </figure>
  )
}

export function PricingTable({
  headers,
  rows
}: {
  headers: string[]
  rows: string[][]
}) {
  return (
    <div className="my-12 overflow-x-auto rounded-2xl shadow-xl border-2 border-slate-200">
      <table className="min-w-full">
        <thead className="bg-slate-900 text-white">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-4 text-left font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-200">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-slate-50 transition-colors">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4 text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function KeyTakeaway({ children }: { children: ReactNode }) {
  return (
    <div className="my-10 p-8 bg-gradient-to-br from-ocean-500 to-ocean-700 rounded-2xl shadow-2xl">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">🎯</span>
        <h4 className="text-2xl font-bold text-white">Key Takeaway</h4>
      </div>
      <div className="text-xl text-ocean-50 leading-relaxed">
        {children}
      </div>
    </div>
  )
}

export function ProcessSteps({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <div className="my-10 space-y-6">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-ocean-500 to-seafoam-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            {index + 1}
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
            <p className="text-lg text-slate-700 leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
