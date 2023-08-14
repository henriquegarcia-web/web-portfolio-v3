import '@/styles/globals.scss'

import { CollectionProviders } from './providers'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Henrique Garcia | Coleções',
  description: 'Generated by create next app'
}

export default function CollectionLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <CollectionProviders>{children}</CollectionProviders>
      </body>
    </html>
  )
}