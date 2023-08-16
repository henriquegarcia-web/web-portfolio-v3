import '@/styles/globals.scss'
import styles from '@/styles/blog.module.scss'

import { Header } from '@/components'

import { BlogProviders } from './providers'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Henrique Garcia | Blog',
  description: 'Generated by create next app'
}

export default function BlogLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <BlogProviders>
          <div className={styles.blog_page}>
            <Header blog />

            {children}

            <div className={styles.blog__background}>
              <img src="/images/background_01.png" alt="" />
            </div>
          </div>
        </BlogProviders>
      </body>
    </html>
  )
}
