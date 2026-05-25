import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Success - 30A Junk Removal',
  description: 'Your message was received successfully.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function SuccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
