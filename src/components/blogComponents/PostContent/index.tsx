'use client'

import styles from './styles.module.scss'

import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

// import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

interface IPostContent {
  postContent: string
}

export default function PostContent({ postContent }: IPostContent) {
  const modules = {
    toolbar: false
  }

  return (
    <div className={styles.post_content}>
      <ReactQuill
        className={styles.post_content__quill}
        value={postContent}
        readOnly={true}
        modules={modules}
      />
    </div>
  )
}
