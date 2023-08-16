import styles from './styles.module.scss'

import { Header, HeroBlog, PostListing } from '@/components'

export default function BlogPage() {
  return (
    <div className={styles.blog_page}>
      <Header blog />

      <div className={styles.blog_page__wrapper}>
        <HeroBlog />
        <PostListing />
      </div>

      <div className={styles.blog__background}>
        <img src="/images/background_01.png" alt="" />
      </div>
    </div>
  )
}
