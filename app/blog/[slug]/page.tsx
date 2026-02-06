import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPost, getAllBlogSlugs } from '@/lib/blog'
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Phone, MessageCircle } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found | 30A Junk Removal',
    }
  }

  return {
    title: `${post.title} | 30A Junk Removal Blog`,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Find related posts
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug)
    .filter(p => p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 2)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-seafoam-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ocean-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-ocean-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-ocean-100">
            <span className="flex items-center gap-2">
              <User className="w-5 h-5" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-800 prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-p:text-slate-600 prose-strong:text-slate-800 prose-a:text-ocean-600 hover:prose-a:text-ocean-700 prose-ul:text-slate-600 prose-ol:text-slate-600 prose-table:text-sm prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-td:border-t">
              <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* CTA Card */}
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-ocean-50 to-seafoam-50 rounded-2xl p-6 border border-ocean-100">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">
                    Need Junk Removal?
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Get an instant quote for your 30A property.
                  </p>
                  <div className="space-y-3">
                    <Link
                      href="/#quote"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
                    >
                      Get Instant Quote
                    </Link>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-ocean-500 text-ocean-600 rounded-xl font-semibold hover:bg-ocean-50 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {FORMATTED_PHONE}
                    </a>
                    <a
                      href={`sms:${PHONE_NUMBER}`}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-seafoam-500 text-seafoam-600 rounded-xl font-semibold hover:bg-seafoam-50 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Text for Quote
                    </a>
                  </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map(relatedPost => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="block p-4 bg-white rounded-xl border border-sand-200 hover:border-ocean-300 hover:shadow-md transition-all"
                        >
                          <h4 className="font-semibold text-slate-800 mb-1 line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-slate-500">
                            {relatedPost.readTime}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-ocean-600 to-ocean-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            Get a free, no-obligation quote for your junk removal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ocean-600 rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-sand-50 transition-all"
            >
              Get Your Instant Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call {FORMATTED_PHONE}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function formatContent(content: string): string {
  // Convert markdown-like content to HTML
  let html = content
    // Headers
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Lists
    .replace(/^\- (.*$)/gm, '<li>$1</li>')
    // Wrap consecutive li elements in ul
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    // Tables (simple conversion)
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim())
      if (cells.some(c => c.includes('---'))) return ''
      const isHeader = match.includes('Volume') || match.includes('Project') || match.includes('Scenario')
      const tag = isHeader ? 'th' : 'td'
      return `<tr>${cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('')}</tr>`
    })
    // Wrap table rows
    .replace(/(<tr>.*<\/tr>\n?)+/g, '<table class="w-full border-collapse border border-sand-200 my-6"><tbody>$&</tbody></table>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    // Clean up
    .replace(/<p><h/g, '<h')
    .replace(/<\/h([1-3])><\/p>/g, '</h$1>')
    .replace(/<p><ul>/g, '<ul>')
    .replace(/<\/ul><\/p>/g, '</ul>')
    .replace(/<p><table/g, '<table')
    .replace(/<\/table><\/p>/g, '</table>')

  return `<p>${html}</p>`
}
