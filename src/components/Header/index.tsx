'use client'

import { useState } from 'react'

import styles from './styles.module.scss'
import { FiMenu, FiX } from 'react-icons/fi'

import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'

import { Button, ChangeLanguage, ChangeTheme } from '@/components'

import { menuData } from '@/data/landingData'

interface IHeader {
  blog?: boolean
  contact?: boolean
}

export default function Header({ blog = false, contact = false }: IHeader) {
  if (blog) return <BlogHeader />
  if (contact) return <ContactHeader />

  return <MainHeader />
}

// ===================================================== BLOG HEADER

function MainHeader() {
  const [isMobileNavigationActive, setIsMobileNavigationActive] =
    useState(false)

  const toogleMobileNavigation = () =>
    setIsMobileNavigationActive(!isMobileNavigationActive)

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">
          <b>Henrique Garcia</b>
        </Link>
        <p>Portfólio</p>
      </div>

      <div className={styles.header__menu}>
        <div className={styles.header__menu__mobile__balance} />

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
          <Button label="Contato" path="/contato" />
        </div>

        <div
          className={styles.header__menu__mobile}
          onClick={toogleMobileNavigation}
        >
          {!isMobileNavigationActive ? <FiMenu /> : <FiX />}
        </div>
      </div>

      <nav
        className={`${styles.header__navigation__mobile} ${
          isMobileNavigationActive && styles.isActive
        }`}
      >
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
            onClick={toogleMobileNavigation}
          >
            {menu.menuLabel}
          </ScrollLink>
        ))}
      </nav>
    </header>
  )
}

// ===================================================== BLOG HEADER

function BlogHeader() {
  // const [isMobileNavigationActive, setIsMobileNavigationActive] =
  //   useState(false)

  // const toogleMobileNavigation = () =>
  //   setIsMobileNavigationActive(!isMobileNavigationActive)

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">
          <b>Henrique Garcia</b>
        </Link>
        <p>Blog</p>
      </div>

      <div className={styles.header__menu}>
        <div className={styles.header__menu__mobile__balance} />

        <div className={styles.header__main_menu}>
          <div className={styles.header__main_menu__wrapper}>
            <ChangeTheme />
            <ChangeLanguage />
          </div>
          <Button label="Portfólio" path="/" />
          <Button label="Contato" path="/contato" />
        </div>

        {/* <div
          className={styles.header__menu__mobile}
          onClick={toogleMobileNavigation}
        >
          {!isMobileNavigationActive ? <FiMenu /> : <FiX />}
        </div> */}
      </div>

      {/* <nav
        className={`${styles.header__navigation__mobile} ${
          isMobileNavigationActive && styles.isActive
        }`}
      >
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
    </header>
  )
}

// ===================================================== BLOG HEADER

function ContactHeader() {
  // const [isMobileNavigationActive, setIsMobileNavigationActive] =
  //   useState(false)

  // const toogleMobileNavigation = () =>
  //   setIsMobileNavigationActive(!isMobileNavigationActive)

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">
          <b>Henrique Garcia</b>
        </Link>
        <p>Blog</p>
      </div>

      <div className={styles.header__menu}>
        <div className={styles.header__menu__mobile__balance} />

        <div className={styles.header__main_menu}>
          <div className={styles.header__main_menu__wrapper}>
            <ChangeLanguage />
          </div>
          <Button label="Portfólio" path="/" />
          <Button label="Blog" path="/blog" />
        </div>

        {/* <div
          className={styles.header__menu__mobile}
          onClick={toogleMobileNavigation}
        >
          {!isMobileNavigationActive ? <FiMenu /> : <FiX />}
        </div> */}
      </div>

      {/* <nav
        className={`${styles.header__navigation__mobile} ${
          isMobileNavigationActive && styles.isActive
        }`}
      >
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
    </header>
  )
}
