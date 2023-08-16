import styles from './styles.module.scss'
import { BiSearch } from 'react-icons/bi'

interface ISearchInput {
  placeholder: string
  value: string
  onChange: (e: any) => void
  onClick?: () => void
}

export default function SearchInput({
  placeholder,
  value,
  onChange,
  onClick
}: ISearchInput) {
  return (
    <div className={styles.search_input__container}>
      <div className={styles.search_input__wrapper}>
        <BiSearch />

        <input
          className={styles.search_input}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>

      <button className={styles.search_button} onClick={onClick && onClick}>
        Pesquisar
      </button>
    </div>
  )
}
