'use client'

import styles from './styles.module.scss'

import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'

interface IButton {
  icon?: React.ReactNode
  label: string
  url?: string
  link?: string
  onClick?: () => void
}

export default function Button({ icon, label, link, url, onClick }: IButton) {
  if (link)
    return (
      <ScrollLink
        className={styles.button}
        activeClass="active"
        to={link}
        spy={true}
        smooth={true}
      >
        {icon}
        {label}
      </ScrollLink>
    )

  if (url)
    return (
      <Link href={url} target="_blank" className={styles.button}>
        {icon}
        {label}
      </Link>
    )

  return (
    <button className={styles.button} onClick={onClick && onClick}>
      {icon}
      {label}
    </button>
  )
}
