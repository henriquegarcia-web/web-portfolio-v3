import styles from './styles.module.scss'

import { IconButton } from '@/components'

import { socialMediasData } from '@/data/landingData'

export default function ThanksSection() {
  return (
    <div className={styles.thanks_section}>
      <div className={styles.thanks_section__container}>
        <h3 className={styles.thanks_section__header}>
          <b>Obrigado</b> pela visita
        </h3>
        <p className={styles.thanks_section__legend}>
          Siga-me nas minhas redes sociais:
        </p>
        <div className={styles.thanks_section__medias}>
          {socialMediasData.map((socialMedia) => (
            <IconButton
              key={socialMedia.mediaId}
              icon={socialMedia.mediaIcon}
              url={socialMedia.mediaLink}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
