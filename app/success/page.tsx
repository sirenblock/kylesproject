'use client'

import { useEffect } from 'react'
import { redirect } from 'next/navigation'

// /success is an alias to /thank-you so we keep one canonical post-
// conversion URL for analytics consistency. Server-side redirect on
// client mount.
export default function SuccessPage() {
  useEffect(() => {
    redirect('/thank-you')
  }, [])
  return null
}
