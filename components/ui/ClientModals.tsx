'use client'

import dynamic from 'next/dynamic'

const ExitIntentModal = dynamic(
  () => import('@/components/ui/ExitIntentModal').then(mod => ({ default: mod.ExitIntentModal })),
  { ssr: false }
)

export function ClientModals() {
  return <ExitIntentModal />
}
