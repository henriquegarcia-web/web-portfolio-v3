'use client'

import styles from './styles.module.scss'

import { Element } from 'react-scroll'

interface ISection {
  sectionName: string
  fullEver?: boolean
  children: React.ReactNode
}

export default function Section({
  sectionName,
  fullEver = false,
  children
}: ISection) {
  return (
    <Element
      name={sectionName}
      className={`${styles.section} ${fullEver && styles.fullEver}`}
    >
      {children}
    </Element>
  )
}
