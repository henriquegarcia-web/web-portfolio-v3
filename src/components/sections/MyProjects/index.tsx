'use client'

import styles from './styles.module.scss'

import {
  BsHandIndexThumb,
  BsArrowLeftShort,
  BsArrowRightShort
} from 'react-icons/bs'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination } from 'swiper/modules'

import { PortfolioSlide } from './components'

import { projectsData } from '@/data/landingData'

export default function MyProjectsSection() {
  return (
    <div className={styles.myprojects_section}>
      <div className={styles.myprojects_section__container}>
        <h2 className="section_header">Portfólio</h2>
        <div className={styles.myprojects_section__wrapper}>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.projectId}>
                <PortfolioSlide project={project} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.myprojects_alert}>
            <BsArrowLeftShort />
            <BsHandIndexThumb />
            <BsArrowRightShort />
          </div>
        </div>
      </div>
    </div>
  )
}
