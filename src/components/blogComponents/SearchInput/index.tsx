import styles from './styles.module.scss'
import { BiSearch } from 'react-icons/bi'

interface ISearchInput {
  placeholder: string
  value: string
  onChange: (e: any) => void
}

export default function SearchInput({
  placeholder,
  value,
  onChange
}: ISearchInput) {
  return (
    <div className={styles.search_input__container}>
      <BiSearch />

      <input
        className={styles.search_input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
