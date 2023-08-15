'use client'

import styles from './styles.module.scss'
import { LuLanguages } from 'react-icons/lu'

export default function ChangeLanguage() {
  const handleChangeLanguage = () => {}
  return (
    <button
      className={styles.change_language_button}
      onClick={handleChangeLanguage}
    >
      <LuLanguages />
    </button>
  )
}
