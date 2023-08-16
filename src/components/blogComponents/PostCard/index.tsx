import Link from 'next/link'
import styles from './styles.module.scss'

interface IPostCard {
  postTitle: string
  postDate: string
  postPath: string
}

export default function PostCard({ postTitle, postDate, postPath }: IPostCard) {
  return (
    <Link href={`/blog/${postPath}`} className={styles.post_card}>
      <p className={styles.post_card__title}>{postTitle}</p>
      <p className={styles.post_card__date}>{postDate}</p>
    </Link>
  )
}
