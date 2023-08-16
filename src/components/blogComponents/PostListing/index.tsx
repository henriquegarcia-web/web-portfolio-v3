import styles from './styles.module.scss'

import { PostCard } from '@/components'

import { contentsData } from '@/data/blogData'

export default function PostListing() {
  return (
    <div className={styles.post_listing}>
      <div className={styles.post_listing__wrapper}>
        {contentsData.map((content) => (
          <PostCard
            key={content.contentId}
            postTitle={content.contentTitle}
            postDate={content.contentPublicationDate}
            postPath={content.contentId}
          />
        ))}
      </div>
    </div>
  )
}
