import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/lib/blog'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { LinksSection } from '@/components/seo/LinksSection'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog | 30A Junk Removal Tips & Guides',
  description: 'Expert tips, guides, and insights about junk removal, property management, and keeping your 30A Florida property clean and clutter-free.',
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

function BlogGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group"
        >
          <article className="relative h-full bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Featured Image */}
            <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-ocean-400 via-ocean-500 to-seafoam-500">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-ocean-600 transition-colors line-clamp-2">
                {post.title}
              </h2>

              <p className="text-slate-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center text-ocean-600 font-semibold group-hover:text-ocean-700">
                Read More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}

export default function BlogPage() {
  const internalLinks = getContextualLinks('core', '/blog')
  const externalLinks = getExternalLinks(5)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative -mt-24 pt-32 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-seafoam-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ocean-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/10">
            <BookOpen className="w-4 h-4" />
            Tips & Guides
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

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sand-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogGrid />
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
            href="/#quote"
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
