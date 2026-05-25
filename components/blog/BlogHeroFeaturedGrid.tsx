import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'

// Reusable blog grid components per blog-hub-architecture skill.
// Page 1 of /blog uses hero + 2 featured + 9 grid layout to weight
// the most recent post for LCP and emphasize editorial choice.
// Subsequent pagination pages use a flat 12-per-page grid.

interface HeroProps {
  post: BlogPost
}

export function BlogHero({ post }: HeroProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block relative rounded-3xl overflow-hidden bg-slate-900 shadow-xl hover:shadow-2xl transition-shadow"
    >
      <div className="relative aspect-[21/9] md:aspect-[3/1]">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold bg-white/15 backdrop-blur-sm text-white rounded-full border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:text-seafoam-300 transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-4 max-w-3xl line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.lastUpdated || post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 text-seafoam-300 font-semibold">
              Read article
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function BlogFeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-ocean-400 via-ocean-500 to-seafoam-500">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs font-medium bg-white/25 backdrop-blur-sm text-white rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.lastUpdated || post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-ocean-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-slate-600 line-clamp-2">{post.excerpt}</p>
        </div>
      </article>
    </Link>
  )
}

export function BlogGridCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5">
        <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-ocean-400 to-seafoam-500">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs font-medium bg-white/25 backdrop-blur-sm text-white rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.lastUpdated || post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-ocean-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
        </div>
      </article>
    </Link>
  )
}

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export function BlogPagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) return null

  const hrefFor = (n: number) => (n === 1 ? '/blog' : `/blog/page/${n}`)

  // Build visible page numbers: always show 1, current-1, current, current+1, last
  const visible = new Set<number>([1, currentPage - 1, currentPage, currentPage + 1, totalPages])
  const pages = Array.from(visible)
    .filter((n) => n >= 1 && n <= totalPages)
    .sort((a, b) => a - b)

  return (
    <nav
      className="mt-16 flex items-center justify-center gap-1.5 flex-wrap"
      aria-label="Blog pagination"
    >
      {currentPage > 1 && (
        <Link
          href={hrefFor(currentPage - 1)}
          className="px-4 py-2 rounded-lg border-2 border-slate-200 hover:border-ocean-300 text-slate-700 hover:text-ocean-700 font-medium transition-colors"
          rel="prev"
        >
          Previous
        </Link>
      )}
      {pages.map((n, i) => {
        const prev = pages[i - 1]
        const showGap = prev !== undefined && n - prev > 1
        return (
          <span key={n} className="flex items-center gap-1.5">
            {showGap && <span className="px-2 text-slate-400">…</span>}
            <Link
              href={hrefFor(n)}
              className={
                n === currentPage
                  ? 'px-4 py-2 rounded-lg bg-ocean-600 text-white font-bold'
                  : 'px-4 py-2 rounded-lg border-2 border-slate-200 hover:border-ocean-300 text-slate-700 hover:text-ocean-700 font-medium transition-colors'
              }
              aria-current={n === currentPage ? 'page' : undefined}
            >
              {n}
            </Link>
          </span>
        )
      })}
      {currentPage < totalPages && (
        <Link
          href={hrefFor(currentPage + 1)}
          className="px-4 py-2 rounded-lg border-2 border-slate-200 hover:border-ocean-300 text-slate-700 hover:text-ocean-700 font-medium transition-colors"
          rel="next"
        >
          Next
        </Link>
      )}
    </nav>
  )
}

// Sort posts by lastUpdated || date, newest first. Shared across
// the blog hub page 1 and the paginated /blog/page/[page] routes
// so all pages see the same ordering.
export function getSortedBlogPosts(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => {
    const da = new Date(a.lastUpdated || a.date).getTime()
    const db = new Date(b.lastUpdated || b.date).getTime()
    return db - da
  })
}

// Pagination math per blog-hub-architecture skill:
// Page 1: 1 hero + 2 featured + 9 grid = 12 posts (positions 0-11)
// Page 2+: 12 posts per page starting at position 12
export const POSTS_PER_PAGE = 12

export function totalBlogPages(postCount: number): number {
  if (postCount <= POSTS_PER_PAGE) return 1
  return Math.ceil((postCount - POSTS_PER_PAGE) / POSTS_PER_PAGE) + 1
}
