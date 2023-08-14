import styles from './styles.module.scss'

import { Header, Section, HeroSection, AboutMeSection } from '@/components'

export default function LandingPage() {
  return (
    <div className={styles.landing_page}>
      <Header />
      <div className={styles.landing_page__wrapper}>
        <Section sectionName="home">
          <HeroSection />
        </Section>
        <Section sectionName="aboutme_section">
          <AboutMeSection />
        </Section>
      </div>
    </div>
  )
}
