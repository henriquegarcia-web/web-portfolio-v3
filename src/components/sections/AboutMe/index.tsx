import styles from './styles.module.scss'

interface IAboutMeSection {
  onClick?: () => void
}

export default function AboutMeSection({ onClick }: IAboutMeSection) {
  return <div className={styles.aboutme_section}>AboutMeSection</div>
}
