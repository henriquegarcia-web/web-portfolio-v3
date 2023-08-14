'use client'

import styles from './styles.module.scss'

import { Element } from 'react-scroll'

interface ISection {
  sectionName: string
  children: React.ReactNode
}

export default function Section({ sectionName, children }: ISection) {
  return (
    <Element name={sectionName} className={styles.section}>
      {children}
    </Element>
  )
}
