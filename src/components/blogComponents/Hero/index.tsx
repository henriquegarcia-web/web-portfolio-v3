'use client'

import styles from './styles.module.scss'
import { useState } from 'react'

import { SearchInput, Tag } from '@/components'

import { tagsFilterData } from '@/data/blogData'

export default function HeroBlog() {
  const [searchValue, setSearchValue] = useState('')

  const handleChangeSearch = (value: string) => setSearchValue(value)

  return (
    <div className={styles.hero_blog}>
      <h2 className={styles.hero_blog__title}>
        <b>DevBlog</b> - Conteúdos, Ideias e Recursos
      </h2>
      <p className={styles.hero_blog__legend}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio,
        laborum sequi enim provident pariatur architecto?
      </p>
      <div className={styles.hero_blog__filters}>
        <div className={styles.hero_blog__text_search}>
          <SearchInput
            placeholder="Pesquisar conteúdo ..."
            value={searchValue}
            onChange={handleChangeSearch}
          />
        </div>
        <span className={styles.hero_blog__filters__label}>
          Ou filtre por tags:
        </span>
        <div className={styles.hero_blog__tags_search}>
          {tagsFilterData.map((tag) => (
            <Tag key={tag.tagId} label={tag.tagLabel} />
          ))}
        </div>
      </div>
    </div>
  )
}
