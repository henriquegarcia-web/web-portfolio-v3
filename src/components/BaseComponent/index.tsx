import styles from './styles.module.scss'

interface IBaseComponent {
  onClick?: () => void
}

export default function BaseComponent({ onClick }: IBaseComponent) {
  return <span className={styles.base_component} onClick={onClick}></span>
}
