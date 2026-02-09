import Link from 'next/link'
import { ExternalLink as ExternalLinkIcon } from 'lucide-react'
import { InternalLink, ExternalLink } from '@/lib/seo'

interface LinksSectionProps {
  internalLinks: InternalLink[]
  externalLinks: ExternalLink[]
  title?: string
  className?: string
}

export function LinksSection({
  internalLinks,
  externalLinks,
  title = "Related Resources",
  className = ""
}: LinksSectionProps) {
  return (
    <section className={`py-16 bg-sand-50 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            {title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Internal Links */}
            <div className="bg-white rounded-xl p-6 border border-sand-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-ocean-600">✓</span>
                Our Services & Areas
              </h3>
              <ul className="space-y-2">
                {internalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      title={link.title || link.text}
                      className="text-ocean-600 hover:text-ocean-700 hover:underline transition-colors text-sm capitalize"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* External Links */}
            <div className="bg-white rounded-xl p-6 border border-sand-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <ExternalLinkIcon className="w-5 h-5 text-seafoam-600" />
                Helpful Resources
              </h3>
              <ul className="space-y-2">
                {externalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel={link.rel || "nofollow external noopener noreferrer"}
                      className="text-seafoam-600 hover:text-seafoam-700 hover:underline transition-colors text-sm inline-flex items-center gap-1"
                    >
                      {link.text}
                      <ExternalLinkIcon className="w-3 h-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
