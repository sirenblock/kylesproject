import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, BookOpen } from 'lucide-react'
import { blogPosts } from '@/lib/blog'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import { getCanonicalUrl } from '@/lib/seo'
import {
  BlogGridCard,
  BlogPagination,
  getSortedBlogPosts,
  totalBlogPages,
  POSTS_PER_PAGE,
} from '@/components/blog/BlogHeroFeaturedGrid'

// Pagination math per blog-hub-architecture skill (secret-sauce 4):
// Page 1: 1 hero + 2 featured + 9 grid = 12 posts (positions 0-11)
// Page 2+: 12 posts each starting at position 12
// startIndex = 12 + (pageNum - 2) * POSTS_PER_PAGE = 12 * (pageNum - 1)
// totalPages = Math.ceil((postCount - 12) / 12) + 1
//
// Self-referencing canonical per secret-sauce skill: each pagination
// page canonicalizes to itself (not /blog) so Google indexes the
// content as unique.

interface Props {
  params: Promise<{ page: string }>
}

export async function generateStaticParams() {
  const sorted = getSortedBlogPosts(blogPosts)
  const total = totalBlogPages(sorted.length)
  // Pages 2 through total (page 1 is /blog)
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({
    page: String(i + 2),
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params
  const pageNum = parseInt(page, 10)
  const sorted = getSortedBlogPosts(blogPosts)
  const totalPages = totalBlogPages(sorted.length)

  if (isNaN(pageNum) || pageNum < 2 || pageNum > totalPages) {
    return { title: 'Not Found' }
  }

  return {
    title: `Blog — Page ${pageNum}`,
    description: `Junk removal guides and tips — page ${pageNum} of ${totalPages}. ${sorted.length} total articles for 30A and PCB property owners.`,
    alternates: {
      // Self-referencing canonical per secret-sauce pattern #5
      canonical: getCanonicalUrl(`/blog/page/${pageNum}`),
    },
    // Per Google guidance: pagination pages stay indexable; we use
    // self-canonical + rel=prev/next links in the pagination component.
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function BlogPaginationPage({ params }: Props) {
  const { page } = await params
  const pageNum = parseInt(page, 10)

  // Reject page 1 (canonical at /blog) and invalid numbers
  if (isNaN(pageNum) || pageNum < 2) {
    notFound()
  }

  const sorted = getSortedBlogPosts(blogPosts)
  const totalPages = totalBlogPages(sorted.length)

  if (pageNum > totalPages) {
    notFound()
  }

  // Page 2 starts at index 12; each subsequent page is +12
  const startIndex = POSTS_PER_PAGE * (pageNum - 1)
  const pagePosts = sorted.slice(startIndex, startIndex + POSTS_PER_PAGE)

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: `Page ${pageNum}`, url: `/blog/page/${pageNum}` },
        ]}
      />

      {/* Hero */}
      <section className="relative -mt-24 pt-32 pb-12 md:pt-36 md:pb-16 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-seafoam-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ocean-400/20 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-ocean-200 mb-3">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Page {pageNum}</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/10">
            <BookOpen className="w-4 h-4" />
            Page {pageNum} of {totalPages}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Blog — Page {pageNum}
          </h1>
          <p className="text-lg text-ocean-100 max-w-2xl mx-auto">
            More junk removal guides for 30A and PCB property owners.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pagePosts.map((post) => (
              <BlogGridCard key={post.slug} post={post} />
            ))}
          </div>
          <BlogPagination currentPage={pageNum} totalPages={totalPages} />
        </div>
      </section>

      {/* CTA */}
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
    </main>
  )
}
