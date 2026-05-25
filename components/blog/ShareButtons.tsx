'use client'

import { useState } from 'react'
import { Facebook, Linkedin, Mail, Link2, Check } from 'lucide-react'

// Per seo-blog-post-anatomy skill step 9: share buttons after the
// end-of-article CTA give readers a low-commitment engagement option
// before they leave. Facebook + LinkedIn + Email + Copy Link covers
// 95%+ of share intent.

interface Props {
  url: string
  title: string
}

export function ShareButtons({ url, title }: Props) {
  const [copied, setCopied] = useState(false)

  const fullUrl = url.startsWith('http')
    ? url
    : `https://www.30ajunkremoval.com${url}`
  const encodedUrl = encodeURIComponent(fullUrl)
  const encodedTitle = encodeURIComponent(title)

  const links = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedTitle}%0A%0A${encodedUrl}`,
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable -- silently no-op
    }
  }

  return (
    <div className="my-10 flex flex-wrap items-center gap-3 not-prose">
      <span className="text-sm font-semibold text-slate-700">Share this guide:</span>
      <a
        href={links.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        data-cta="share-facebook"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 transition-colors"
      >
        <Facebook className="w-4 h-4" />
      </a>
      <a
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        data-cta="share-linkedin"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-sky-100 text-slate-700 hover:text-sky-700 transition-colors"
      >
        <Linkedin className="w-4 h-4" />
      </a>
      <a
        href={links.email}
        aria-label="Share via Email"
        data-cta="share-email"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-700 transition-colors"
      >
        <Mail className="w-4 h-4" />
      </a>
      <button
        onClick={handleCopy}
        aria-label={copied ? 'Link copied' : 'Copy link'}
        data-cta="share-copy"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-700 transition-colors text-sm font-medium"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied
          </>
        ) : (
          <>
            <Link2 className="w-4 h-4" />
            Copy link
          </>
        )}
      </button>
    </div>
  )
}
