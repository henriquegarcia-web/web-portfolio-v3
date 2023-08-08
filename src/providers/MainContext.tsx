'use client'

import React, { createContext, useContext, useMemo, useState } from 'react'

// ===================================================================

import { MainContextData } from '@/@types/Providers'

export const MainContext = createContext<MainContextData>({} as MainContextData)

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  // =================================================================

  const [userId, setUserId] = useState<string | null>(null)

  const MainContextValues = useMemo(() => {
    return {
      userId
    }
  }, [userId])

  return (
    <MainContext.Provider value={MainContextValues}>
      {children}
    </MainContext.Provider>
  )
}

function useMain(): MainContextData {
  const context = useContext(MainContext)

  if (!context) throw new Error('useMain must be used within a UserProvider')

  return context
}

export { MainProvider, useMain }
