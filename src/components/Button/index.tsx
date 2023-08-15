'use client'

import styles from './styles.module.scss'

import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'

interface IButton {
  colorized?: boolean
  icon?: React.ReactNode
  label: string
  path?: string
  url?: string
  link?: string
  onClick?: () => void
}

export default function Button({
  colorized = false,
  icon,
  label,
  path,
  link,
  url,
  onClick
}: IButton) {
  if (link)
    return (
      <ScrollLink
        className={`${colorized ? styles.buttonColorized : styles.button}`}
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
      <Link
        className={`${colorized ? styles.buttonColorized : styles.button}`}
        href={url}
        target="_blank"
      >
        {icon}
        {label}
      </Link>
    )

  return (
    <button
      className={`${colorized ? styles.buttonColorized : styles.button}`}
      onClick={onClick && onClick}
    >
      {icon}
      {label}
    </button>
  )
}
