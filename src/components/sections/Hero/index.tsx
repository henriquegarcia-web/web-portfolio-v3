import styles from './styles.module.scss'

interface IHeroSection {
  onClick?: () => void
}

export default function HeroSection({ onClick }: IHeroSection) {
  return <div className={styles.hero_section}>HeroSection</div>
}
