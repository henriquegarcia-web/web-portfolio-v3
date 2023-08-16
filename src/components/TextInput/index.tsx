'use client'

import { useState } from 'react'

import styles from './styles.module.scss'
import { FiEye, FiEyeOff } from 'react-icons/fi'

interface ITextInput {
  disabled?: boolean
  type: string
  label: string
  placeholder: string
  error?: string
  value: string
  onChange: (e: any) => void
}

export default function TextInput({
  disabled,
  type,
  label,
  placeholder,
  error,
  value,
  onChange
}: ITextInput) {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => setShowPassword(!showPassword)

  if (type === 'textarea')
    return (
      <div className={styles.text_input__container}>
        <span className={styles.text_input__label}>{label}</span>
        <textarea
          className={styles.text_input}
          placeholder={placeholder}
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />
        <span className={styles.text_input__error}>{error}</span>
      </div>
    )

  if (type === 'password')
    return (
      <div className={styles.text_input__container}>
        <span className={styles.text_input__label}>{label}</span>
        <input
          className={styles.text_input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />
        <span className={styles.text_input__error}>{error}</span>

        <div
          className={styles.text_input__password}
          onClick={handleTogglePassword}
        >
          {showPassword ? <FiEye /> : <FiEyeOff />}
        </div>
      </div>
    )

  return (
    <div className={styles.text_input__container}>
      <span className={styles.text_input__label}>{label}</span>
      <input
        className={styles.text_input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
      <span className={styles.text_input__error}>{error}</span>
    </div>
  )
}
