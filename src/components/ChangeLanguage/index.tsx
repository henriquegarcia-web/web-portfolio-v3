'use client'

import styles from './styles.module.scss'
import { LuLanguages } from 'react-icons/lu'

export default function ChangeLanguage() {
  const handleChangeLanguage = () => {}
  return (
    <div className={styles.change_language_container}>
      <button
        className={styles.change_language_button}
        onClick={handleChangeLanguage}
      >
        <LuLanguages />
      </button>

      <span className={styles.change_language_tooltip}>Indisponível</span>
    </div>
  )
}
