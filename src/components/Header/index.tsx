'use client'

import styles from './styles.module.scss'

import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'

import { Button, ChangeLanguage } from '@/components'

import { menuData } from '@/data/landingData'

interface IHeader {
  blog?: boolean
}

export default function Header({ blog = false }: IHeader) {
  if (blog) return <BlogHeader />

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">
          <b>Henrique Garcia</b>
        </Link>
        <p>Portfólio</p>
      </div>
      <div className={styles.header__menu}>
        <nav className={styles.header__navigation}>
          {menuData.map((menu) => (
            <ScrollLink
              key={menu.menuId}
              className={styles.header__navigation__link}
              activeStyle={{
                color: 'white',
                borderBottom: '2px solid rgba(59, 173, 227, 1)',
                backgroundColor: '#2e313877'
              }}
              to={menu.menuTo}
              spy={true}
              smooth={true}
            >
              {menu.menuLabel}
            </ScrollLink>
          ))}
        </nav>
        <div className={styles.header__main_menu}>
          <ChangeLanguage />
          <Button label="Blog" path="/blog" />
        </div>
      </div>
    </header>
  )
}

// ===================================================== BLOG HEADER

function BlogHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">
          <b>Henrique Garcia</b>
        </Link>
        <p>Blog</p>
      </div>
      <div className={styles.header__menu}>
        {/* <nav className={styles.header__navigation}>
          {menuData.map((menu) => (
            <ScrollLink
              key={menu.menuId}
              className={styles.header__navigation__link}
              activeStyle={{
                color: 'white',
                borderBottom: '2px solid rgba(59, 173, 227, 1)',
                backgroundColor: '#2e313877'
              }}
              to={menu.menuTo}
              spy={true}
              smooth={true}
            >
              {menu.menuLabel}
            </ScrollLink>
          ))}
        </nav> */}
        <div className={styles.header__main_menu}>
          <ChangeLanguage />
          {/* Change Theme */}
          <Button label="Portfólio" path="/" />
        </div>
      </div>
    </header>
  )
}
