import React from 'react'
import styles from './styles.module.scss'

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
  return (
    <div className={styles.credential_card}>
      <b>{label}</b>
      <p>{value}</p>
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
    <Link href={url} className={styles.media_card}>
      <div className={styles.media_card__icon}>{icon}</div>
      <div className={styles.media_card__label}>{label}</div>
    </Link>
  )
}

// ===================================================================

export { InfosCard, CredentialsCard, SocialMediaCard }
