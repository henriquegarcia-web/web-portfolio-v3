'use client'

import styles from './styles.module.scss'

import { Button, ChangeLanguage } from '@/components'
import { Link } from 'react-scroll'

import { menuData } from '@/data/landingData'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <b>Henrique Garcia</b>
        <p>Portfólio</p>
      </div>
      <div className={styles.header__menu}>
        <nav className={styles.header__navigation}>
          {menuData.map((menu) => (
            <Link
              key={menu.menuId}
              className={styles.header__navigation__link}
              activeStyle={{ borderBottom: '2px solid rgba(59, 173, 227, 1)' }}
              to={menu.menuTo}
              spy={true}
              smooth={true}
            >
              {menu.menuLabel}
            </Link>
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
