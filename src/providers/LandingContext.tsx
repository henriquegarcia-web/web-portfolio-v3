'use client'

import React, { createContext, useContext, useMemo, useState } from 'react'

// ===================================================================

import { LandingContextData } from '@/@types/Providers'

export const LandingContext = createContext<LandingContextData>(
  {} as LandingContextData
)

const LandingProvider = ({ children }: { children: React.ReactNode }) => {
  // =================================================================

  const [userId, setUserId] = useState<string | null>(null)

  const LandingContextValues = useMemo(() => {
    return {
      userId
    }
  }, [userId])

  return (
    <LandingContext.Provider value={LandingContextValues}>
      {children}
    </LandingContext.Provider>
  )
}

function useLanding(): LandingContextData {
  const context = useContext(LandingContext)

  if (!context) throw new Error('useLanding must be used within a UserProvider')

  return context
}

export { LandingProvider, useLanding }
