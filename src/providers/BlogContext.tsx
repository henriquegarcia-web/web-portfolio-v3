'use client'

import React, { createContext, useContext, useMemo, useState } from 'react'

// ===================================================================

import { BlogContextData } from '@/@types/Providers'

export const BlogContext = createContext<BlogContextData>({} as BlogContextData)

const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  // =================================================================

  const [userId, setUserId] = useState<string | null>(null)

  const BlogContextValues = useMemo(() => {
    return {
      userId
    }
  }, [userId])

  return (
    <BlogContext.Provider value={BlogContextValues}>
      {children}
    </BlogContext.Provider>
  )
}

function useBlog(): BlogContextData {
  const context = useContext(BlogContext)

  if (!context) throw new Error('useBlog must be used within a UserProvider')

  return context
}

export { BlogProvider, useBlog }
