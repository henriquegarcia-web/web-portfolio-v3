import styles from './styles.module.scss'

import {
  Header,
  Section,
  HeroSection,
  AboutMeSection,
  MySkillsSection,
  MyProjectsSection,
  ThanksSection
} from '@/components'

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
        <Section sectionName="myskills_section">
          <MySkillsSection />
        </Section>
        <Section sectionName="portfolio_section">
          <MyProjectsSection />
        </Section>
        <Section sectionName="thanks_section">
          <ThanksSection />
        </Section>
      </div>
    </div>
  )
}
