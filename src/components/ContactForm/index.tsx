'use client'

import styles from './styles.module.scss'
import { BiMessageSquareEdit } from 'react-icons/bi'

import { TextInput } from '@/components'

import { useContact } from '@/providers/ContactContext'

export default function ContactForm() {
  const {
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
  } = useContact()

  return (
    <section className={styles.contact_form}>
      <div className={styles.contact_form__header}>
        <BiMessageSquareEdit />
        <h3>
          <b>Entre em contato</b> comigo através do formulário abaixo:
        </h3>
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
          type="textarea"
          value={contactMessage}
          onChange={handleChangeMessage}
          error={errorMessage}
        />
        <button
          className={`${styles.contact_form__button} ${
            !submitIsEnable && styles.disabled
          }`}
          onClick={handleSubmitForm}
          disabled={!submitIsEnable}
        >
          Enviar
        </button>
      </form>
    </section>
  )
}
