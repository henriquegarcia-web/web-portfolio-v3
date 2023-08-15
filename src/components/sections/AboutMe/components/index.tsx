'use client'

import React, { useRef, useState } from 'react'
import styles from './styles.module.scss'
import { FiCopy } from 'react-icons/fi'

import Link from 'next/link'

// ===================================================================

interface IInfosCard {
  photo: string
  name: string
  age: number
  office: string
}

function InfosCard({ photo, name, age, office }: IInfosCard) {
  return (
    <div className={styles.infos_card}>
      <div className={styles.infos_card__image}>
        <img src={photo} alt="Foto de Perfil de Henrique" />
      </div>
      <div className={styles.infos_card__details}>
        <h3>
          {name}, {age} anos
        </h3>
        <p>{office}</p>
      </div>
    </div>
  )
}

// ===================================================================

interface ICredentialsCard {
  label: string
  value: string
}

function CredentialsCard({ label, value }: ICredentialsCard) {
  const targetRef = useRef(null)

  const [copied, setCopied] = useState(false)

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
    } catch (error) {
      console.error('Erro ao copiar para a área de transferência:', error)
    }
  }

  const handleMouseLeave = () => {
    setCopied(false)
  }

  return (
    <div className={styles.credential_card} ref={targetRef}>
      <b>{label}</b>
      <p>{value}</p>
      <span
        className={styles.credential_card__copy}
        onMouseLeave={handleMouseLeave}
        onClick={handleCopyClick}
      >
        <FiCopy className={`${copied && styles.copied}`} />
      </span>
    </div>
  )
}

// ===================================================================

interface ISocialMediaCard {
  icon: React.ReactNode
  label: string
  url: string
}

function SocialMediaCard({ icon, label, url }: ISocialMediaCard) {
  return (
    <Link href={url} target="_blank" className={styles.media_card}>
      <div className={styles.media_card__icon}>{icon}</div>
      <div className={styles.media_card__label}>{label}</div>
    </Link>
  )
}

// ===================================================================

export { InfosCard, CredentialsCard, SocialMediaCard }
