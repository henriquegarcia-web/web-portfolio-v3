import styles from './styles.module.scss'

import { Button, IconButton } from '@/components'

import { socialMediasData } from '@/data/landingData'

export default function HeroSection() {
  return (
    <div className={styles.hero_section}>
      <div className={styles.hero_section__wrapper}>
        <div className={styles.hero_section__header}>
          Desenvolvedor Front-End
        </div>
        <div className={styles.hero_section__legend}>
          <p>
            Desde 2018 <b>codificando soluções</b> como{' '}
            <b>programador front-end</b>
          </p>
          <p>
            Esta daqui é uma <b>outra legenda</b> como pode se ver
          </p>
        </div>
        <div className={styles.hero_section__navigation}>
          <Button label="+ Sobre mim" link="aboutme_section" />
          {socialMediasData.map((socialMedia) => (
            <IconButton
              key={socialMedia.mediaId}
              icon={socialMedia.mediaIcon}
              href={socialMedia.mediaLink}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
