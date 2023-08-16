'use client'

import { useState } from 'react'

import styles from './styles.module.scss'

import { TextInput } from '@/components'

export default function ContactForm() {
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactMessage, setContactMessage] = useState('')

  const [errorName, setErrorName] = useState('')
  const [errorPhone, setErrorPhone] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChangeName = (value: string) => setContactName(value)
  const handleChangePhone = (value: string) => setContactName(value)
  const handleChangeMessage = (value: string) => setContactName(value)

  return (
    <section className={styles.contact_form}>
      <div className={styles.contact_form__header}>
        <h3>Entre em contato comigo através do formulário abaixo:</h3>
      </div>
      <form className={styles.contact_form__wrapper}>
        <TextInput
          label="Nome *"
          placeholder="Digite seu nome"
          type="text"
          value={contactName}
          onChange={handleChangeName}
          error={errorName}
        />
        <TextInput
          label="Telefone *"
          placeholder="Digite seu telefone"
          type="text"
          value={contactPhone}
          onChange={handleChangePhone}
          error={errorPhone}
        />
        <TextInput
          label="Mensagem *"
          placeholder="Digite sua mensagem"
          type="text"
          value={contactMessage}
          onChange={handleChangeMessage}
          error={errorMessage}
        />
        <button className={styles.contact_form__button}>Enviar</button>
      </form>
    </section>
  )
}
