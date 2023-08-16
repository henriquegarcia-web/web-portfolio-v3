'use client'

import styles from './styles.module.scss'

import { useParams } from 'next/navigation'

import { contentsData } from '@/data/blogData'
import { PostContent, PostHeader } from '@/components'

export default function BlogPostPage() {
  const { id } = useParams()

  const blogPost = contentsData[0]

  // console.log(id)
  return (
    <div className={styles.blog_post_page__wrapper}>
      <PostHeader
        postTitle={blogPost.contentTitle}
        postLegend={blogPost.contentLegend}
        postAuthor={blogPost.contentAuthor}
        postDate={blogPost.contentPublicationDate}
        postTags={blogPost.contentTags}
      />
      <PostContent postContent={blogPost.contentRichText} />
    </div>
  )
}
