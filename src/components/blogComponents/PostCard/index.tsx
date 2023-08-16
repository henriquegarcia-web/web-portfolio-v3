import Link from 'next/link'
import styles from './styles.module.scss'

import { ITag } from '@/@types/Base'

interface IPostCard {
  postTitle: string
  postLegend: string
  postAuthor: string
  postDate: string
  postTags: ITag[]
  postPath: string
}

export default function PostCard({
  postTitle,
  postLegend,
  postAuthor,
  postDate,
  postTags,
  postPath
}: IPostCard) {
  return (
    <Link href={`/blog/${postPath}`} className={styles.post_card}>
      <div className={styles.post_card__content}>
        <p className={styles.post_card__title}>{postTitle}</p>
        <div className={styles.post_card__legend}>{postLegend}</div>
        <p className={styles.post_card__details}>
          {postAuthor}, <b>{postDate}</b>
        </p>
      </div>
      <div className={styles.post_card__tags}>
        {postTags.map((tag) => (
          <PostCardTag key={tag.tagId} label={tag.tagLabel} />
        ))}
      </div>
    </Link>
  )
}

interface IPostCardTag {
  label: string
  onClick?: () => void
}

function PostCardTag({ label, onClick }: IPostCardTag) {
  return (
    <span className={styles.post_card__tag} onClick={onClick && onClick}>
      {label}
    </span>
  )
}
