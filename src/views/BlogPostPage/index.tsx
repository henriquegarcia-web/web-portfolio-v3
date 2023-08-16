'use client'

import styles from './styles.module.scss'

import { useParams } from 'next/navigation'

import { Header } from '@/components'

export default function BlogPostPage() {
  const { id } = useParams()

  console.log(id)
  return (
    <div className={styles.blog_post_page}>
      <Header blog />

      <div className={styles.blog_post_page__wrapper}></div>

      <div className={styles.blog__background}>
        <img src="/images/background_01.png" alt="" />
      </div>
    </div>
  )
}
