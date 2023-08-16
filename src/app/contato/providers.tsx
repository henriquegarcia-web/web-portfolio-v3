'use client'

import { ContactProvider } from '@/providers/ContactContext'

export function ContactProviders({ children }: { children: React.ReactNode }) {
  return <ContactProvider>{children}</ContactProvider>
}
