'use client'

import { useState, useEffect, useMemo } from 'react'
import { List, ChevronRight } from 'lucide-react'

interface TOCItem {
  id: string
  title: string
  level: number
}

interface TOCGroup {
  heading: TOCItem
  children: TOCItem[]
}

function groupHeadings(items: TOCItem[]): TOCGroup[] {
  const groups: TOCGroup[] = []
  let current: TOCGroup | null = null

  for (const item of items) {
    if (item.level === 2) {
      current = { heading: item, children: [] }
      groups.push(current)
    } else if (item.level === 3 && current) {
      current.children.push(item)
    } else {
      // H3 with no parent H2 — treat as standalone
      groups.push({ heading: item, children: [] })
    }
  }
  return groups
}

export function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())

  const groups = useMemo(() => groupHeadings(items), [items])

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

  // Auto-expand the group whose heading or child is active
  useEffect(() => {
    for (const group of groups) {
      const isGroupActive =
        group.heading.id === activeId ||
        group.children.some((c) => c.id === activeId)
      if (isGroupActive && !expandedIds.has(group.heading.id)) {
        setExpandedIds((prev) => new Set([...prev, group.heading.id]))
      }
    }
  }, [activeId, groups, expandedIds])

  const toggleGroup = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

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
          <div className="mt-2 p-6 bg-white border-2 border-slate-200 rounded-xl shadow-lg max-h-[60vh] overflow-y-auto">
            <TOCGroupList
              groups={groups}
              activeId={activeId}
              expandedIds={expandedIds}
              onToggle={toggleGroup}
            />
          </div>
        )}
      </div>

      {/* Desktop Sidebar (parent controls sticky positioning) */}
      <div className="hidden lg:block bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-4 pb-4 border-b-2 border-slate-200">
          <List className="w-5 h-5 text-ocean-600" />
          <h3 className="font-bold text-slate-900">In This Article</h3>
        </div>
        <div className="max-h-[50vh] overflow-y-auto">
          <TOCGroupList
            groups={groups}
            activeId={activeId}
            expandedIds={expandedIds}
            onToggle={toggleGroup}
          />
        </div>
      </div>
    </>
  )
}

function TOCGroupList({
  groups,
  activeId,
  expandedIds,
  onToggle,
}: {
  groups: TOCGroup[]
  activeId: string
  expandedIds: Set<string>
  onToggle: (id: string) => void
}) {
  return (
    <nav>
      <ul className="space-y-1">
        {groups.map((group) => {
          const hasChildren = group.children.length > 0
          const isExpanded = expandedIds.has(group.heading.id)
          const isActive = group.heading.id === activeId
          const hasActiveChild = group.children.some((c) => c.id === activeId)

          return (
            <li key={group.heading.id}>
              <div className="flex items-center">
                {hasChildren && (
                  <button
                    onClick={() => onToggle(group.heading.id)}
                    className="p-1 mr-1 rounded hover:bg-slate-100 transition-colors shrink-0"
                    aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
                  >
                    <ChevronRight
                      className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                        isExpanded ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                )}
                <a
                  href={`#${group.heading.id}`}
                  className={`block py-1.5 px-2 rounded-lg text-sm transition-all flex-1 ${
                    !hasChildren ? 'ml-6' : ''
                  } ${
                    isActive || hasActiveChild
                      ? 'bg-ocean-100 text-ocean-900 font-semibold'
                      : 'text-slate-600 hover:text-ocean-600 hover:bg-slate-50'
                  }`}
                >
                  {group.heading.title}
                </a>
              </div>

              {/* Collapsible children */}
              {hasChildren && isExpanded && (
                <ul className="ml-6 mt-1 space-y-0.5 border-l-2 border-slate-200 pl-2">
                  {group.children.map((child) => (
                    <li key={child.id}>
                      <a
                        href={`#${child.id}`}
                        className={`block py-1 px-2 rounded text-xs transition-all ${
                          child.id === activeId
                            ? 'bg-ocean-50 text-ocean-800 font-semibold'
                            : 'text-slate-500 hover:text-ocean-600 hover:bg-slate-50'
                        }`}
                      >
                        {child.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
