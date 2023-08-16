'use client'

import { BlogProvider } from '@/providers/BlogContext'

export function BlogProviders({ children }: { children: React.ReactNode }) {
  return <BlogProvider>{children}</BlogProvider>
}
