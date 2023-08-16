'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

// ===================================================================

import { ContactContextData } from '@/@types/Providers'

export const ContactContext = createContext<ContactContextData>(
  {} as ContactContextData
)

const ContactProvider = ({ children }: { children: React.ReactNode }) => {
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactMessage, setContactMessage] = useState('')

  const [errorName, setErrorName] = useState('')
  const [errorPhone, setErrorPhone] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // =================================================================

  const handleChangeName = (value: string) => {
    setContactName(value)
    setErrorName('')
  }

  const handleChangePhone = (value: string) => {
    setContactPhone(value)
    setErrorPhone('')
  }

  const handleChangeMessage = (value: string) => {
    setContactMessage(value)
    setErrorMessage('')
  }

  const handleSubmitForm = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      if (contactName === '') {
        setErrorName('O nome não pode ser em branco')
        return
      }

      if (contactPhone === '') {
        setErrorPhone('O telefone não pode ser em branco')
        return
      }

      // FUNÇÃO DE ENVIO DE MENSAGENS
    },
    [contactName, contactPhone]
  )

  useEffect(() => {
    console.log(errorName)
  }, [errorName])

  const submitIsEnable =
    errorName === '' &&
    errorPhone === '' &&
    errorMessage === '' &&
    contactName !== '' &&
    contactPhone !== '' &&
    contactMessage !== ''

  // =================================================================

  const ContactContextValues = useMemo(() => {
    return {
      contactName,
      contactPhone,
      contactMessage,
      errorName,
      errorPhone,
      errorMessage,
      handleChangeName,
      handleChangePhone,
      handleChangeMessage,
      handleSubmitForm,
      submitIsEnable
    }
  }, [
    contactMessage,
    contactName,
    contactPhone,
    errorMessage,
    errorName,
    errorPhone,
    handleSubmitForm,
    submitIsEnable
  ])

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
