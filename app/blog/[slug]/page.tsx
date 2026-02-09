import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPost, getAllBlogSlugs } from '@/lib/blog'
import { Calendar, Clock, ArrowLeft, Phone, User } from 'lucide-react'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'
import { ArticleSchema, FAQSchema, BreadcrumbSchema, HowToSchema } from '@/components/seo/StructuredData'
import { PersonSchema } from '@/components/seo/PersonSchema'
import { marked } from 'marked'
import { LinksSection } from '@/components/seo/LinksSection'
import { getCanonicalUrl, getContextualLinks, getExternalLinks } from '@/lib/seo'

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
    alternates: {
      canonical: getCanonicalUrl(`/blog/${slug}`),
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug)
    .filter(p => p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 2)

  const internalLinks = getContextualLinks('blog', `/blog/${slug}`)
  const externalLinks = getExternalLinks(5)

  return (
    <main className="min-h-screen bg-white">
      {/* Relester Method: Person schema for E-E-A-T */}
      <PersonSchema />

      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        author={post.author}
        publishDate={post.date}
        image={post.image}
        url={`/blog/${slug}`}
      />
      {post.faqs && post.faqs.length > 0 && (
        <FAQSchema questions={post.faqs} />
      )}
      {post.howTo && (
        <HowToSchema
          name={post.howTo.name}
          description={post.howTo.description}
          totalTime={post.howTo.totalTime}
          steps={post.howTo.steps}
          url={`/blog/${slug}`}
        />
      )}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${slug}` }
        ]}
      />

      {/* Header */}
      <header className="bg-gradient-to-br from-slate-50 to-white border-b-2 border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4 mb-8 text-sm">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-medium text-slate-600 hover:text-ocean-600 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
            <span className="text-slate-400">•</span>
            <Link href="/service-areas" className="text-ocean-600 hover:underline font-medium">
              Service Areas
            </Link>
            <span className="text-slate-400">•</span>
            <Link href="/services" className="text-ocean-600 hover:underline font-medium">
              All Services
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-bold bg-ocean-100 text-ocean-700 rounded-full border border-ocean-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 mb-6">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-ocean-600" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-ocean-600" />
              {post.readTime}
            </span>
            <span className="text-slate-500">•</span>
            <span className="flex items-center gap-2 font-medium">
              <User className="w-4 h-4 text-ocean-600" />
              By {post.author}
            </span>
          </div>

          <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-ocean-500 pl-6 italic">
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 p-6 bg-gradient-to-r from-ocean-50 to-seafoam-50 rounded-xl border-l-4 border-ocean-500">
          <p className="text-slate-700 leading-relaxed">
            This guide covers essential information for residents and property owners throughout <Link href="/service-areas/santa-rosa-beach" className="text-ocean-600 hover:underline font-medium">Santa Rosa Beach</Link>, <Link href="/service-areas/watercolor" className="text-ocean-600 hover:underline font-medium">WaterColor</Link>, <Link href="/service-areas/seaside" className="text-ocean-600 hover:underline font-medium">Seaside</Link>, and all 30A communities. For specific service needs, visit our <Link href="/services" className="text-ocean-600 hover:underline font-medium">services page</Link> or learn more about our commitment to <a href="https://www.epa.gov/recycle" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">environmentally responsible disposal</a> and supporting local charities like <a href="https://www.habitat.org/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Habitat for Humanity</a> and <a href="https://www.goodwill.org/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Goodwill</a>.
          </p>
        </div>
        <div
          className="prose prose-lg prose-slate max-w-none
            prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-8
            prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b-2 prose-h2:border-slate-200 prose-h2:pb-4
            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-slate-800
            prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-slate-700
            prose-p:text-lg prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-ocean-600 prose-a:font-medium prose-a:no-underline hover:prose-a:text-ocean-700 hover:prose-a:underline
            prose-strong:text-slate-900 prose-strong:font-bold
            prose-ul:my-6 prose-ul:space-y-3 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:space-y-3 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-lg prose-li:text-slate-700 prose-li:leading-relaxed
            prose-li:marker:text-ocean-600
            prose-blockquote:border-l-4 prose-blockquote:border-ocean-500 prose-blockquote:bg-slate-50 prose-blockquote:pl-6 prose-blockquote:pr-6 prose-blockquote:py-4 prose-blockquote:italic prose-blockquote:text-slate-700 prose-blockquote:my-8
            prose-code:text-ocean-600 prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
            prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:my-8
            prose-img:rounded-xl prose-img:shadow-xl prose-img:my-10 prose-img:border prose-img:border-slate-200
            prose-hr:border-slate-300 prose-hr:my-12
            prose-table:border-collapse prose-table:w-full prose-table:my-10 prose-table:shadow-lg prose-table:rounded-xl prose-table:overflow-hidden
            prose-thead:bg-slate-900
            prose-th:border prose-th:border-slate-700 prose-th:bg-slate-900 prose-th:text-white prose-th:p-4 prose-th:text-left prose-th:font-bold prose-th:text-base
            prose-td:border prose-td:border-slate-200 prose-td:bg-white prose-td:p-4 prose-td:text-slate-700
            prose-tr:even:bg-slate-50"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />


        {/* FAQ Section */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-20 pt-16 border-t-2 border-slate-200">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-lg text-slate-600 mb-8">
              Have more questions? Check our <Link href="/faq" className="text-ocean-600 hover:underline font-medium">full FAQ page</Link> or <Link href="/contact" className="text-ocean-600 hover:underline font-medium">contact us</Link> for personalized assistance with your <Link href="/services" className="text-ocean-600 hover:underline font-medium">junk removal needs</Link>.
            </p>
            <div className="space-y-6">
              {post.faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-8 border-2 border-slate-200 hover:border-ocean-300 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ocean-100 text-ocean-600 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="flex-1">{faq.question}</span>
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed ml-11">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <LinksSection
          internalLinks={internalLinks}
          externalLinks={externalLinks}
          title="Related Articles & Resources"
        />
      </article>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-800 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Junk Removal on 30A?
          </h2>
          <p className="text-2xl text-ocean-100 mb-4 leading-relaxed">
            Get a free quote today. Same-day service available throughout <a href="https://www.visitsouthwalton.com/" target="_blank" rel="nofollow external noopener noreferrer" className="text-gold-300 hover:underline">South Walton</a>.
          </p>
          <p className="text-lg text-ocean-200 mb-10">
            We serve all 30A communities from <Link href="/service-areas/rosemary-beach" className="text-gold-300 hover:underline font-medium">Rosemary Beach</Link> to <Link href="/service-areas/grayton-beach" className="text-gold-300 hover:underline font-medium">Grayton Beach</Link>, offering <Link href="/services/furniture-removal" className="text-gold-300 hover:underline font-medium">furniture removal</Link>, <Link href="/services/appliance-removal" className="text-gold-300 hover:underline font-medium">appliance hauling</Link>, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center px-10 py-5 bg-gold-500 text-slate-900 rounded-xl font-bold hover:bg-gold-400 transition-all shadow-2xl hover:shadow-gold-500/50 hover:scale-105"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-ocean-600 transition-all shadow-xl"
            >
              <Phone className="w-5 h-5" />
              {FORMATTED_PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gradient-to-br from-slate-50 to-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Continue Reading</h2>
            <p className="text-center text-slate-600 mb-12">
              Explore more helpful tips about <Link href="/services/construction-debris-removal" className="text-ocean-600 hover:underline font-medium">construction cleanup</Link>, <Link href="/services/estate-cleanouts" className="text-ocean-600 hover:underline font-medium">estate services</Link>, and maintaining properties across <a href="https://www.visitflorida.com/places-to-go/northwest/30a/" target="_blank" rel="nofollow external noopener noreferrer" className="text-seafoam-600 hover:underline">Florida's beautiful 30A corridor</a>.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map(relatedPost => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-ocean-400 hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {relatedPost.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-bold bg-ocean-100 text-ocean-700 rounded-full border border-ocean-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-ocean-600 transition-colors leading-tight">
                    {relatedPost.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-ocean-600 group-hover:text-ocean-700">Read more →</span>
                    <span className="text-sm text-slate-500">{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

// Configure marked for better rendering
marked.setOptions({
  breaks: true,
  gfm: true,
})

function formatContent(content: string): string {
  // Remove the first H1 from content since we display title in header
  let cleanContent = content.replace(/^#\s+.+$/m, '').trim()

  // Use marked to parse markdown to HTML
  return marked.parse(cleanContent) as string
}
