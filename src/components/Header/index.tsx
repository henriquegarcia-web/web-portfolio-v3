import styles from './styles.module.scss'

interface IHeader {
  onClick?: () => void
}

export default function Header({ onClick }: IHeader) {
  return <header className={styles.header}>Header</header>
}
