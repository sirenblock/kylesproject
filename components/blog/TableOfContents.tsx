'use client'

import { useState, useEffect } from 'react'
import { List } from 'lucide-react'

interface TOCItem {
  id: string
  title: string
  level: number
}

export function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -35% 0px' }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden sticky top-20 z-40 mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-2 px-6 py-4 bg-white border-2 border-slate-200 rounded-xl shadow-lg font-semibold text-slate-900 hover:border-ocean-300 transition-colors"
        >
          <span className="flex items-center gap-2">
            <List className="w-5 h-5" />
            Table of Contents
          </span>
          <span className="text-ocean-600">{isOpen ? '−' : '+'}</span>
        </button>
        {isOpen && (
          <div className="mt-2 p-6 bg-white border-2 border-slate-200 rounded-xl shadow-lg">
            <TOCList items={items} activeId={activeId} />
          </div>
        )}
      </div>

      {/* Desktop Sidebar (parent controls sticky positioning) */}
      <div className="hidden lg:block bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-4 pb-4 border-b-2 border-slate-200">
          <List className="w-5 h-5 text-ocean-600" />
          <h3 className="font-bold text-slate-900">Table of Contents</h3>
        </div>
        <TOCList items={items} activeId={activeId} />
      </div>
    </>
  )
}

function TOCList({ items, activeId }: { items: TOCItem[]; activeId: string }) {
  return (
    <nav>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
            <a
              href={`#${item.id}`}
              className={`block py-2 px-3 rounded-lg text-sm transition-all ${
                activeId === item.id
                  ? 'bg-ocean-100 text-ocean-900 font-semibold'
                  : 'text-slate-600 hover:text-ocean-600 hover:bg-slate-50'
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
