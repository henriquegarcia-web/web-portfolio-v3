import styles from './styles.module.scss'

interface ISection {
  children: React.ReactNode
}

export default function Section({ children }: ISection) {
  return <section className={styles.section}>{children}</section>
}
