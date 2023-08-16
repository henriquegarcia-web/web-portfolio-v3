'use client'

import React, { createContext, useContext, useMemo, useState } from 'react'

// ===================================================================

import { ContactContextData } from '@/@types/Providers'

export const ContactContext = createContext<ContactContextData>(
  {} as ContactContextData
)

const ContactProvider = ({ children }: { children: React.ReactNode }) => {
  // =================================================================

  const [userId, setUserId] = useState<string | null>(null)

  const ContactContextValues = useMemo(() => {
    return {
      userId
    }
  }, [userId])

  return (
    <ContactContext.Provider value={ContactContextValues}>
      {children}
    </ContactContext.Provider>
  )
}

function useContact(): ContactContextData {
  const context = useContext(ContactContext)

  if (!context) throw new Error('useContact must be used within a UserProvider')

  return context
}

export { ContactProvider, useContact }
