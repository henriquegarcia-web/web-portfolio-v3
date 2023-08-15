'use client'

import styles from './styles.module.scss'

import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'

interface IIconButton {
  isActive?: boolean
  isInactive?: boolean
  icon: React.ReactNode
  url?: string
  link?: string
  onClick?: () => void
}

export default function IconButton({
  isActive,
  isInactive,
  icon,
  link,
  url,
  onClick
}: IIconButton) {
  if (link)
    return (
      <ScrollLink
        className={`
          ${styles.icon_button} 
          ${isActive && styles.isActive} 
          ${isInactive && styles.isInactive}
        `}
        activeClass="active"
        to={link}
        spy={true}
        smooth={true}
      >
        {icon}
      </ScrollLink>
    )

  if (url)
    return (
      <Link
        href={url}
        target="_blank"
        className={`
          ${styles.icon_button} 
          ${isActive && styles.isActive} 
          ${isInactive && styles.isInactive}
        `}
      >
        {icon}
      </Link>
    )

  return (
    <button
      className={`
        ${styles.icon_button} 
        ${isActive && styles.isActive} 
        ${isInactive && styles.isInactive}
      `}
      onClick={onClick && onClick}
    >
      {icon}
    </button>
  )
}
