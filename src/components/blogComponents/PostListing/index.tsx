import styles from './styles.module.scss'
import { FiPackage, FiSearch } from 'react-icons/fi'

import { PostCard } from '@/components'

import { contentsData } from '@/data/blogData'

export default function PostListing() {
  const filter = ''
  // const filter = 'React'

  return (
    <div className={styles.post_listing}>
      <div className={styles.post_listing__header}>
        {filter !== '' ? (
          <>
            <FiSearch /> Conteúdos relacionados com <b>{filter}</b>
          </>
        ) : (
          <>
            <FiPackage /> Mostrando todos os conteúdos
          </>
        )}
      </div>
      <div className={styles.post_listing__wrapper}>
        {contentsData.map((content) => (
          <PostCard
            key={content.contentId}
            postTitle={content.contentTitle}
            postLegend={content.contentLegend}
            postAuthor={content.contentAuthor}
            postDate={content.contentPublicationDate}
            postTags={content.contentTags}
            postPath={content.contentId}
          />
        ))}
      </div>
    </div>
  )
}
