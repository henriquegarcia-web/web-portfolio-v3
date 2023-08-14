'use client'

import { LandingProvider } from '@/providers/LandingContext'

export function LandingProviders({ children }: { children: React.ReactNode }) {
  return <LandingProvider>{children}</LandingProvider>
}
