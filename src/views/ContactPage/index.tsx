import styles from './styles.module.scss'

import { ContactForm } from '@/components'

export default function ContactPage() {
  return (
    <div className={styles.contact_page__wrapper}>
      <ContactForm />
    </div>
  )
}
