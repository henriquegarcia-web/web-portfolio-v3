'use client'

import { CollectionProvider } from '@/providers/CollectionContext'

export function CollectionProviders({
  children
}: {
  children: React.ReactNode
}) {
  return <CollectionProvider>{children}</CollectionProvider>
}
