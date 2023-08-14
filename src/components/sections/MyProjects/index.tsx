import styles from './styles.module.scss'

interface IMyProjectsSection {
  onClick?: () => void
}

export default function MyProjectsSection({ onClick }: IMyProjectsSection) {
  return <div className={styles.myprojects_section}>MyProjectsSection</div>
}
