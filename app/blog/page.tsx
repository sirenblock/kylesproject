import { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog'
import { blogCategories } from '@/lib/blog-categories'
import { ArrowRight, BookOpen, Folder } from 'lucide-react'
import { LinksSection } from '@/components/seo/LinksSection'
import { BlogHubSchema } from '@/components/seo/PagedSchemas'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'
import {
  BlogHero,
  BlogFeaturedCard,
  BlogGridCard,
  BlogPagination,
  getSortedBlogPosts,
  totalBlogPages,
} from '@/components/blog/BlogHeroFeaturedGrid'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Expert tips, guides, and insights about junk removal, property management, and keeping your 30A Florida property clean and clutter-free.',
  keywords: ['junk removal blog', '30A tips', 'property management guides', 'Florida junk removal'],
  openGraph: {
    title: 'Blog | 30A Junk Removal',
    description: 'Expert tips and guides for junk removal in 30A Florida',
    type: 'website',
  },
  alternates: {
    canonical: getCanonicalUrl('/blog'),
  },
}

export default function BlogPage() {
  const internalLinks = getContextualLinks('core', '/blog')
  const externalLinks = getExternalLinks(5)

  // Sort and slice for page 1: hero(0) + featured(1,2) + grid(3-11)
  const sortedPosts = getSortedBlogPosts(blogPosts)
  const heroPost = sortedPosts[0]
  const featuredPosts = sortedPosts.slice(1, 3)
  const gridPosts = sortedPosts.slice(3, 12)
  const totalPages = totalBlogPages(sortedPosts.length)

  return (
    <main className="min-h-screen">
      <BlogHubSchema
        postCount={blogPosts.length}
        posts={sortedPosts.map((p) => ({
          slug: p.slug,
          title: p.title,
          date: p.date,
          image: p.image,
        }))}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative -mt-24 pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-seafoam-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ocean-400/20 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/10">
            <BookOpen className="w-4 h-4" />
            {blogPosts.length} Tips &amp; Guides
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            30A Junk Removal{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-seafoam-300 to-ocean-300">
              Blog
            </span>
          </h1>
          <p className="text-xl text-ocean-100 max-w-2xl mx-auto">
            Expert tips, guides, and insights to help you keep your 30A property clean and clutter-free.
          </p>
        </div>
      </section>

      {/* Featured Hero Post -- LCP image with priority */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {heroPost && <BlogHero post={heroPost} />}
        </div>
      </section>

      {/* Featured cards (2-up) */}
      {featuredPosts.length > 0 && (
        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <BlogFeaturedCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category navigation */}
      <section className="py-10 bg-sand-50 border-y border-sand-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">Browse by Category</h2>
            <p className="text-slate-600 text-sm">
              {blogPosts.length} guides across {blogCategories.length} topics
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {blogCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="group block bg-white hover:bg-ocean-50 border border-sand-200 hover:border-ocean-300 rounded-xl p-4 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-ocean-100 text-ocean-600 flex items-center justify-center group-hover:bg-ocean-600 group-hover:text-white transition-colors">
                    <Folder className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-slate-900 group-hover:text-ocean-700 leading-tight">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-600">
                      {cat.postSlugs.length}
                      {cat.postSlugs.length === 1 ? ' guide' : ' guides'}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Grid (9 posts on page 1) */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">More Recent Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map((post) => (
              <BlogGridCard key={post.slug} post={post} />
            ))}
          </div>
          <BlogPagination currentPage={1} totalPages={totalPages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ocean-600 to-ocean-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Clear the Clutter?
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            Get an instant quote for your junk removal needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ocean-600 rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-sand-50 transition-all"
          >
            Get Your Instant Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <LinksSection
        internalLinks={internalLinks}
        externalLinks={externalLinks}
        title="Related Resources"
      />
    </main>
  )
}
