import styles from './styles.module.scss'

import { Tag } from '@/components'

import { aboutMeData, socialMediasData } from '@/data/landingData'
import { CredentialsCard, InfosCard, SocialMediaCard } from './components'

export default function AboutMeSection() {
  const {
    aboutMeResume,
    aboutMeHobbies,
    aboutMePhoto,
    aboutMeName,
    aboutMeOffice,
    aboutMeAge,
    aboutMeEmail,
    aboutMePhone,
    aboutMeLocation
  } = aboutMeData

  return (
    <div className={styles.aboutme_section}>
      <div className={`section_container ${styles.aboutme_section__container}`}>
        <div className={styles.aboutme_section__left_side}>
          <div className={styles.aboutme_section__resume}>
            <h2 className="section_header">Resumo</h2>
            {aboutMeResume}
          </div>
          <div className={styles.aboutme_section__hobbies}>
            <h2 className="section_header">Hobbies & Interesses</h2>
            <div className={styles.hobbies__wrapper}>
              {aboutMeHobbies.map((tag) => (
                <Tag key={tag.hobbieId} label={tag.hobbieName} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.aboutme_section__right_side}>
          <div className={styles.aboutme_section__infos}>
            <h2 className="section_header">Informações de Contato</h2>
            <div className={styles.infos__wrapper}>
              <InfosCard
                photo={aboutMePhoto}
                name={aboutMeName}
                age={aboutMeAge}
                office={aboutMeOffice}
              />
              <div className={styles.infos__credentials}>
                <CredentialsCard label="E-mail" value={aboutMeEmail} />
                <CredentialsCard label="Telefone" value={aboutMePhone} />
                <CredentialsCard label="Localização" value={aboutMeLocation} />
              </div>
              <div className={styles.infos__social_medias}>
                {socialMediasData.map((media) => (
                  <SocialMediaCard
                    key={media.mediaId}
                    icon={media.mediaIcon}
                    label={media.mediaName}
                    url={media.mediaLink}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
