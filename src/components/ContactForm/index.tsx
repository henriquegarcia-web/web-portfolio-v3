'use client'

import { useState } from 'react'

import styles from './styles.module.scss'
import {
  BiMessageSquareEdit,
  BiCheckCircle,
  BiErrorCircle
} from 'react-icons/bi'

import { PiSpinnerBold } from 'react-icons/pi'

import { TextInput } from '@/components'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'

import { submitContact } from '@/firebase/contact'

const signinSchema = Yup.object().shape({
  contactName: Yup.string().required('O campo nome é obrigatório'),
  contactPhone: Yup.string().required('O campo telefone é obrigatório'),
  contactMessage: Yup.string().required('O campo mensagem é obrigatório')
})

interface IContactForm {
  contactName: string
  contactPhone: string
  contactMessage: string
}

export default function ContactForm() {
  const [contactFormSubmitResponse, setContactFormSubmitResponse] = useState({
    messageType: '',
    messageValue: ''
  })
  const [contactSentIsLoading, setContactSentIsLoading] = useState(false)

  const { handleSubmit, register, formState, reset, control } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(signinSchema)
  })

  const { errors, isSubmitting, isValid } = formState

  const handleSubmitContact = async (data: IContactForm) => {
    if (!isValid) return

    setContactSentIsLoading(true)

    const submitContactResponse = await submitContact({
      contactName: data.contactName,
      contactPhone: data.contactPhone,
      contactMessage: data.contactMessage
    })

    setContactSentIsLoading(false)

    if (submitContactResponse) {
      setContactFormSubmitResponse({
        messageType: 'success',
        messageValue: 'Contato submetido com sucesso!'
      })

      reset()
      return
    }

    setContactFormSubmitResponse({
      messageType: 'error',
      messageValue: 'Falha ao submeter contato. Tente novamente.'
    })
  }

  const submitIsEnable = (!isSubmitting && isValid) || contactSentIsLoading

  return (
    <section className={styles.contact_form}>
      <ToastContainer />

      <div className={styles.contact_form__header}>
        <BiMessageSquareEdit />
        <h3>
          <b>Entre em contato</b> comigo através do formulário abaixo:
        </h3>
      </div>
      <form
        className={styles.contact_form__wrapper}
        onSubmit={handleSubmit(handleSubmitContact)}
      >
        <Controller
          name="contactName"
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <TextInput
              label="Nome *"
              placeholder="Digite seu nome"
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={errors.contactName?.message}
            />
          )}
        />
        <Controller
          name="contactPhone"
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <TextInput
              label="Telefone *"
              placeholder="Digite seu telefone"
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={errors.contactPhone?.message}
            />
          )}
        />
        <Controller
          name="contactMessage"
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <TextInput
              label="Mensagem *"
              placeholder="Digite sua mensagem"
              type="textarea"
              value={field.value}
              onChange={field.onChange}
              error={errors.contactMessage?.message}
            />
          )}
        />
        <div className={styles.contact_form__footer}>
          {contactFormSubmitResponse.messageValue !== '' && (
            <p
              className={
                contactFormSubmitResponse.messageType === 'error'
                  ? styles.error
                  : styles.success
              }
            >
              <span>
                {contactFormSubmitResponse.messageType === 'error' ? (
                  <BiErrorCircle />
                ) : (
                  <BiCheckCircle />
                )}
              </span>
              {contactFormSubmitResponse.messageValue}
            </p>
          )}

          <button
            className={`${styles.contact_form__button} ${
              !submitIsEnable && styles.disabled
            }`}
            type="submit"
            disabled={!submitIsEnable}
          >
            {contactSentIsLoading && (
              <span className={styles.loading}>
                <PiSpinnerBold />
              </span>
            )}
            Enviar
          </button>
        </div>
      </form>
    </section>
  )
}
