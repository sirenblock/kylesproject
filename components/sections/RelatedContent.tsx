import Link from 'next/link'
import { ArrowRight, MapPin, FileText, Wrench } from 'lucide-react'
import { getServiceDetail } from '@/lib/services'
import { getLocation } from '@/lib/locations'
import { getBlogPost } from '@/lib/blog'

interface RelatedServicesProps {
  serviceSlugs: string[]
  title?: string
  subtitle?: string

export function RelatedServices({ serviceSlugs, title = "Related Services", subtitle }: RelatedServicesProps) {
  const services = serviceSlugs.map(slug => getServiceDetail(slug)).filter(Boolean)

  if (services.length === 0) return null

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">{title}</h2>
      {subtitle && <p className="text-slate-600 mb-6">{subtitle}</p>}
      <div className="space-y-3">
        {services.map((service) => {
          if (!service) return null
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="block bg-white rounded-lg p-4 border border-sand-200 hover:border-ocean-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-ocean-500" />
                  <div>
                    <span className="font-semibold text-slate-800 group-hover:text-ocean-600 transition-colors">
                      {service.shortTitle}
                    </span>
                    <p className="text-sm text-slate-600 mt-0.5 line-clamp-1">{service.description}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-ocean-500 shrink-0" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )

interface RelatedLocationsProps {
  locationSlugs: string[]
  title?: string
  subtitle?: string
  serviceSlug?: string

export function RelatedLocations({ locationSlugs, title = "Nearby Communities", subtitle, serviceSlug }: RelatedLocationsProps) {
  const locations = locationSlugs.map(slug => getLocation(slug)).filter(Boolean)

  if (locations.length === 0) return null

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">{title}</h2>
      {subtitle && <p className="text-slate-600 mb-6">{subtitle}</p>}
      <div className="space-y-3">
        {locations.map((location) => {
          if (!location) return null
          const href = serviceSlug
            ? `/service-areas/${location.slug}/${serviceSlug}`
            : `/service-areas/${location.slug}`

          return (
            <Link
              key={location.slug}
              href={href}
              className="block bg-white rounded-lg p-4 border border-sand-200 hover:border-ocean-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-ocean-500" />
                  <div>
                    <span className="font-semibold text-slate-800 group-hover:text-ocean-600 transition-colors">
                      {location.name}
                    </span>
                    <p className="text-sm text-slate-600 mt-0.5 line-clamp-1">{location.description}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-ocean-500 shrink-0" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )

interface RelatedBlogPostsProps {
  postSlugs: string[]
  title?: string
  subtitle?: string

export function RelatedBlogPosts({ postSlugs, title = "Related Articles", subtitle }: RelatedBlogPostsProps) {
  const posts = postSlugs.map(slug => getBlogPost(slug)).filter(Boolean)

  if (posts.length === 0) return null

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">{title}</h2>
      {subtitle && <p className="text-slate-600 mb-6">{subtitle}</p>}
      <div className="space-y-3">
        {posts.map((post) => {
          if (!post) return null
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-lg p-4 border border-sand-200 hover:border-ocean-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-ocean-500" />
                  <div>
                    <span className="font-semibold text-slate-800 group-hover:text-ocean-600 transition-colors line-clamp-1">
                      {post.title}
                    </span>
                    <p className="text-sm text-slate-600 mt-0.5 line-clamp-1">{post.excerpt}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-ocean-500 shrink-0" />
              </div>
            </Link>
          )
        })}
      </div>
      {posts.length > 0 && (
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-700 mt-4"
        >
          View all articles
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  )

interface RelatedContentGridProps {
  services?: string[]
  locations?: string[]
  blogPosts?: string[]
  locationContext?: { name: string; slug: string }
  serviceSlug?: string

export function RelatedContentGrid({
  services = [],
  locations = [],
  blogPosts = [],
  locationContext,
  serviceSlug
}: RelatedContentGridProps) {
  const hasContent = services.length > 0 || locations.length > 0 || blogPosts.length > 0

  if (!hasContent) return null

  return (
    <section className="py-16 bg-sand-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Explore More
          </h2>
          <p className="text-lg text-slate-600">
            Additional services and information that may interest you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.length > 0 && (
            <RelatedServices
              serviceSlugs={services}
              title="Related Services"
              subtitle={locationContext ? `More services in ${locationContext.name}` : undefined}
            />
          )}

          {locations.length > 0 && (
            <RelatedLocations
              locationSlugs={locations}
              title="Nearby Areas"
              subtitle="We also serve these communities"
              serviceSlug={serviceSlug}
            />
          )}

          {blogPosts.length > 0 && (
            <RelatedBlogPosts
              postSlugs={blogPosts}
              title="Helpful Resources"
              subtitle="Learn more about junk removal"
            />
          )}
        </div>
      </div>
    </section>
  )
