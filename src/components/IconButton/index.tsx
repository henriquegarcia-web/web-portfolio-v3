'use client'

import styles from './styles.module.scss'

import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'

interface IIconButton {
  icon: React.ReactNode
  href?: string
  link?: string
  onClick?: () => void
}

export default function IconButton({ icon, link, href, onClick }: IIconButton) {
  if (link)
    return (
      <ScrollLink
        className={styles.icon_button}
        activeClass="active"
        to={link}
        spy={true}
        smooth={true}
      >
        {icon}
      </ScrollLink>
    )

  if (href)
    return (
      <Link href={href} className={styles.icon_button}>
        {icon}
      </Link>
    )

  return (
    <button className={styles.icon_button} onClick={onClick && onClick}>
      {icon}
    </button>
  )
}
