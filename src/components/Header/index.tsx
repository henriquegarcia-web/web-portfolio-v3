'use client'

import styles from './styles.module.scss'

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
              activeStyle={{ borderBottom: '2px solid #00ebeb' }}
              to={menu.menuTo}
              spy={true}
              smooth={true}
            >
              {menu.menuLabel}
            </Link>
          ))}
        </nav>
        <div className={styles.header__main_menu}>
          <button className={styles.header__main_menu__button}>Blog</button>
          {/* Change Language Input */}
        </div>
      </div>
    </header>
  )
}
