'use client'

import { MainProvider } from '@/providers/MainContext'

export function MainProviders({ children }: { children: React.ReactNode }) {
  return <MainProvider>{children}</MainProvider>
}
