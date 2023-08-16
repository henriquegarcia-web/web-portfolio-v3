import styles from './styles.module.scss'
import { BsArrowLeftCircleFill } from 'react-icons/bs'

import Link from 'next/link'

import { Tag } from '@/components'

import { ITag } from '@/@types/Base'

interface IPostHeader {
  postTitle: string
  postLegend: string
  postAuthor: string
  postDate: string
  postTags: ITag[]
}

export default function PostHeader({
  postTitle,
  postLegend,
  postAuthor,
  postDate,
  postTags
}: IPostHeader) {
  return (
    <div className={styles.post_header}>
      <Link href="/blog" className={styles.post_header__return}>
        <BsArrowLeftCircleFill /> Voltar
      </Link>

      <div className={styles.post_header__wrapper}>
        <div className={styles.post_header__content}>
          <p className={styles.post_header__title}>{postTitle}</p>
          <div className={styles.post_header__legend}>{postLegend}</div>
          <p className={styles.post_header__details}>
            {postAuthor}, <b>{postDate}</b>
          </p>
        </div>
        <div className={styles.post_header__tags}>
          {postTags.map((tag) => (
            <Tag key={tag.tagId} label={tag.tagLabel} />
          ))}
        </div>
      </div>
    </div>
  )
}
