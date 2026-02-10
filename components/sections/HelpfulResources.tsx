import { ExternalLink as ExternalLinkIcon, Info } from 'lucide-react'
import { ExternalLink } from '@/lib/external-links'

interface HelpfulResourcesProps {
  links: ExternalLink[]
  title?: string
  subtitle?: string
  showIcons?: boolean
}

export function HelpfulResources({
  links,
  title = "Helpful Resources",
  subtitle = "Authoritative information from government agencies and local organizations",
  showIcons = true
}: HelpfulResourcesProps) {
  if (!links || links.length === 0) return null

  const getTypeColor = (type: ExternalLink['type']) => {
    switch (type) {
      case 'government':
        return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'environmental':
        return 'bg-green-50 text-green-700 border-green-200'
      case 'local':
        return 'bg-purple-50 text-purple-700 border-purple-200'
      case 'nonprofit':
        return 'bg-rose-50 text-rose-700 border-rose-200'
      case 'educational':
        return 'bg-amber-50 text-amber-700 border-amber-200'
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200'

  const getTypeLabel = (type: ExternalLink['type']) => {
    switch (type) {
      case 'government':
        return 'Government'
      case 'environmental':
        return 'Environmental'
      case 'local':
        return 'Local Resource'
      case 'nonprofit':
        return 'Nonprofit'
      case 'educational':
        return 'Educational'
      default:
        return 'Resource'

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            {showIcons && (
              <div className="inline-flex items-center justify-center w-12 h-12 bg-ocean-100 rounded-full mb-4">
                <Info className="w-6 h-6 text-ocean-600" />
              </div>
            )}
            <h2 className="text-3xl font-bold text-slate-800 mb-3">{title}</h2>
            <p className="text-lg text-slate-600">{subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel={link.rel || 'noopener noreferrer'}
                className="group block bg-sand-50 rounded-xl p-5 border border-sand-200 hover:border-ocean-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold px-2 py-1 rounded border ${getTypeColor(link.type)}`}>
                        {getTypeLabel(link.type)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-800 group-hover:text-ocean-600 transition-colors mb-1 flex items-center gap-2">
                      {link.title}
                      <ExternalLinkIcon className="w-4 h-4 text-slate-400 group-hover:text-ocean-500" />
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> These external resources are provided for informational purposes.
              We are not affiliated with these organizations, but recommend them as helpful sources
              of authoritative information.
            </p>
          </div>
        </div>
      </div>
    </section>
  )

interface ResourcesSidebarProps {
  links: ExternalLink[]
  title?: string
  compact?: boolean

export function ResourcesSidebar({
  links,
  title = "Related Resources",
  compact = true
}: ResourcesSidebarProps) {
  if (!links || links.length === 0) return null

  return (
    <div className="bg-sand-50 rounded-xl p-6 border border-sand-200">
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Info className="w-5 h-5 text-ocean-600" />
        {title}
      </h3>
      <ul className="space-y-3">
        {links.slice(0, compact ? 4 : links.length).map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel={link.rel || 'noopener noreferrer'}
              className="group flex items-start gap-2 text-sm hover:text-ocean-600 transition-colors"
            >
              <ExternalLinkIcon className="w-4 h-4 text-slate-400 group-hover:text-ocean-500 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-slate-800 group-hover:text-ocean-600">
                  {link.title}
                </div>
                {!compact && (
                  <div className="text-slate-600 mt-0.5">
                    {link.description}
                  </div>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
