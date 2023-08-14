'use client'

import React, { createContext, useContext, useMemo, useState } from 'react'

// ===================================================================

import { CollectionContextData } from '@/@types/Providers'

export const CollectionContext = createContext<CollectionContextData>(
  {} as CollectionContextData
)

const CollectionProvider = ({ children }: { children: React.ReactNode }) => {
  // =================================================================

  const [userId, setUserId] = useState<string | null>(null)

  const CollectionContextValues = useMemo(() => {
    return {
      userId
    }
  }, [userId])

  return (
    <CollectionContext.Provider value={CollectionContextValues}>
      {children}
    </CollectionContext.Provider>
  )
}

function useCollection(): CollectionContextData {
  const context = useContext(CollectionContext)

  if (!context)
    throw new Error('useCollection must be used within a UserProvider')

  return context
}

export { CollectionProvider, useCollection }
