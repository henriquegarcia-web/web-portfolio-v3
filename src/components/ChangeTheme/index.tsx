'use client'

import { useState } from 'react'

import styles from './styles.module.scss'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function ChangeTheme() {
  const [theme, setTheme] = useState('dark')

  const handleChangeTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return (
    <button className={styles.change_theme_button} onClick={handleChangeTheme}>
      {theme === 'dark' ? <FiMoon /> : <FiSun />}
    </button>
  )
}
