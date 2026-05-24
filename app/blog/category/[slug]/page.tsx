import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowRight, BookOpen, ChevronLeft } from 'lucide-react'
import {
  getBlogCategory,
  getAllCategorySlugs,
  getPostsForCategory,
} from '@/lib/blog-categories'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import { CollectionPageSchema } from '@/components/seo/PagedSchemas'
import { LinksSection } from '@/components/seo/LinksSection'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = getBlogCategory(slug)
  if (!category) return { title: 'Category Not Found' }

  return {
    title: `${category.name} | 30A Junk Removal Blog`,
    description: category.metaDescription,
    alternates: {
      canonical: getCanonicalUrl(`/blog/category/${slug}`),
    },
    openGraph: {
      title: `${category.name} | 30A Junk Removal Blog`,
      description: category.metaDescription,
      type: 'website',
      url: `/blog/category/${slug}`,
    },
  }
}

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params
  const category = getBlogCategory(slug)
  if (!category) notFound()

  const posts = getPostsForCategory(slug)
  const internalLinks = getContextualLinks('core', '/blog')
  const externalLinks = getExternalLinks(5)

  return (
    <main className="min-h-screen">
      <CollectionPageSchema
        name={`${category.name} | 30A Junk Removal Blog`}
        description={category.description}
        url={`/blog/category/${slug}`}
        numberOfItems={posts.length}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: category.name, url: `/blog/category/${slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative -mt-24 pt-32 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-seafoam-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-ocean-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-ocean-200 hover:text-white text-sm font-medium mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to all guides
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/10">
              <BookOpen className="w-4 h-4" />
              {posts.length} {posts.length === 1 ? 'Guide' : 'Guides'}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {category.name}
            </h1>
            <p className="text-xl text-ocean-100 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 md:py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-ocean-400 to-seafoam-500">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-ocean-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.lastUpdated || post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ocean-600">
                    Read guide
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LinksSection
        internalLinks={internalLinks}
        externalLinks={externalLinks}
        title="More From 30A Junk Removal"
      />
    </main>
  )
}
