import styles from './styles.module.scss'

interface IThanksSection {
  onClick?: () => void
}

export default function ThanksSection({ onClick }: IThanksSection) {
  return <div className={styles.thanks_section}>ThanksSection</div>
}
