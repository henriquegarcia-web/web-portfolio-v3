import styles from './styles.module.scss'

import { ContactForm } from '@/components'

export default function BlogPage() {
  return (
    <div className={styles.blog_page__wrapper}>
      <ContactForm />
    </div>
  )
}
