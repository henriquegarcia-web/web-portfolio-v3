import styles from './styles.module.scss'

import { HeroBlog, PostListing } from '@/components'

export default function BlogPage() {
  return (
    <div className={styles.blog_page__wrapper}>
      <HeroBlog />
      <PostListing />
    </div>
  )
}
