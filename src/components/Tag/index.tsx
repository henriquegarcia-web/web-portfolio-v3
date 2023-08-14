import styles from './styles.module.scss'

interface ITag {
  label: string
  onClick?: () => void
}

export default function Tag({ label, onClick }: ITag) {
  return (
    <span className={styles.tag} onClick={onClick && onClick}>
      {label}
    </span>
  )
}
