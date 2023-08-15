'use client'

import React, { useMemo, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { FiInfo } from 'react-icons/fi'
import { RiDeviceLine, RiGithubLine, RiBehanceFill } from 'react-icons/ri'

import { IconButton, Tag } from '@/components'

import useClickOutside from '@/hooks/useClickOutside'

interface IPortfolioSlide {
  project: any
}

function PortfolioSlide({ project }: IPortfolioSlide) {
  const [activeImage, setActiveImage] = useState(project.projectImages[0])
  const [activeInfosModal, setActiveInfosModal] = useState(false)

  const projectDetailsRef = useRef<HTMLDivElement>(null)

  const projectImages = useMemo(() => {
    return project.projectImages
  }, [project])

  const handleChangeImage = (image: any) => {
    setActiveImage(image)
    setActiveInfosModal(false)
  }

  const toogleProjectDetailsModal = () => setActiveInfosModal(!activeInfosModal)
  const closeProjectDetailsModal = () => setActiveInfosModal(false)

  useClickOutside(projectDetailsRef, closeProjectDetailsModal)

  return (
    <div className={styles.slide} ref={projectDetailsRef}>
      <div className={styles.slide__image}>
        <img src={activeImage?.imageUrl} alt="" />

        <div
          className={`${styles.slide__project_title} ${
            activeInfosModal && styles.isActive
          }`}
        >
          {project.projectName}
        </div>

        <div
          className={`${styles.slide__project_details} ${
            activeInfosModal && styles.isActive
          }`}
        >
          <div className={styles.project_details}>
            <div className={styles.project_details__title}>
              {project.projectName}
            </div>
            <div className={styles.project_details__description}>
              {project.projectDescription}
            </div>
          </div>
          <div className={styles.slide__project_details__tech}>
            <p>Stacks do Projeto:</p>
            <span>
              {project.projectStacks.map((stack: any) => (
                <Tag key={stack.stackId} label={stack.stackName} />
              ))}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.slide__settings}>
        <div className={styles.slide__settings__image_preview}>
          {projectImages?.map((project: any, index: number) => {
            const isActive = project.imageId === activeImage?.imageId
            return (
              <div
                className={`${styles.image_preview} ${
                  isActive && styles.isActive
                }`}
                key={index}
                onClick={() => handleChangeImage(project)}
              >
                0{index + 1}
              </div>
            )
          })}
        </div>
        <div className={styles.slide__settings__details}>
          {project.projectWebsite !== '' && (
            <IconButton
              isInactive={project.projectWebsite === ''}
              icon={<RiDeviceLine />}
              url={project.projectWebsite}
            />
          )}
          {project.projectGitHub !== '' && (
            <IconButton
              isInactive={project.projectGitHub === ''}
              icon={<RiGithubLine />}
              url={project.projectGitHub}
            />
          )}
          {project.projectBehance !== '' && (
            <IconButton
              isInactive={project.projectBehance === ''}
              icon={<RiBehanceFill />}
              url={project.projectBehance}
            />
          )}
          <IconButton icon={<FiInfo />} onClick={toogleProjectDetailsModal} />
        </div>
      </div>
    </div>
  )
}

export { PortfolioSlide }
