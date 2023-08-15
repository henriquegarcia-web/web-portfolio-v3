import styles from './styles.module.scss'

interface ITag {
  isActive?: boolean
  label: string
  onClick?: () => void
}

export default function Tag({ isActive, label, onClick }: ITag) {
  return (
    <span
      className={`${styles.tag} ${isActive && styles.isActive}`}
      onClick={onClick && onClick}
    >
      {label}
    </span>
  )
}
