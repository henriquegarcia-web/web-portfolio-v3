'use client'

import styles from './styles.module.scss'
import { BsArrowUpCircle } from 'react-icons/bs'

import { useLanding } from '@/providers/LandingContext'

export default function ScrollToTop() {
  const { scrollToTopIsEnable, handleScrollToTop } = useLanding()

  return (
    <span
      className={`${styles.scroll_to_top} ${
        scrollToTopIsEnable && styles.isVisible
      }`}
      onClick={handleScrollToTop}
    >
      <BsArrowUpCircle />
      <p>Voltar ao topo</p>
    </span>
  )
}
