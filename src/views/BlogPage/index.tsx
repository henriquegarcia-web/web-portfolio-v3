'use client'

import { useState } from 'react'

import styles from './styles.module.scss'
import { FiEye } from 'react-icons/fi'

import { Button, HeroBlog, PostListing } from '@/components'

export default function BlogPage() {
  const [blogAlertIsActive, setBlogAlertIsActive] = useState(true)

  const desactiveBlogAlert = () => setBlogAlertIsActive(false)

  return (
    <div className={styles.blog_page__wrapper}>
      <HeroBlog />
      <PostListing />

      <div
        className={`${styles.blog_page__alert} ${
          !blogAlertIsActive && styles.inactive
        }`}
      >
        <h4>Este blog ainda está em desenvolvimento</h4>
        <p>Clique no botão abaixo para ver uma prévia</p>
        <Button
          label="Ver prévia"
          icon={<FiEye />}
          onClick={desactiveBlogAlert}
        />
      </div>
    </div>
  )
}
