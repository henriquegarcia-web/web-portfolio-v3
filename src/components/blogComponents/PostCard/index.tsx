import styles from './styles.module.scss'

interface IPostCard {
  postTitle: string
  postDate: string
  postPath: string
}

export default function PostCard({ postTitle, postDate, postPath }: IPostCard) {
  return <div className={styles.post_card}>Desenvolvedor Front-End</div>
}
