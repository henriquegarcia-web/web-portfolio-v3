import styles from './styles.module.scss'

interface IMySkillsSection {
  onClick?: () => void
}

export default function MySkillsSection({ onClick }: IMySkillsSection) {
  return <div className={styles.myskills_section}>MySkillsSection</div>
}
