'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { animateScroll as scroll } from 'react-scroll'

import { skillsData } from '@/data/landingData'

// ===================================================================

import { LandingContextData } from '@/@types/Providers'

export const LandingContext = createContext<LandingContextData>(
  {} as LandingContextData
)

const LandingProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeGroup, setActiveGroup] = useState(skillsData[0])
  const [activeSkill, setActiveSkill] = useState(
    skillsData[0].skillGroupItems[0]
  )

  const [scrollToTopIsEnable, setScrollToTopIsEnable] = useState(false)

  // ===================================================================

  const handleActiveSkillGroup = (skillGroupItems: any) => {
    setActiveGroup(skillGroupItems)
  }

  const activeGroupItems = useMemo(() => {
    return activeGroup.skillGroupItems
  }, [activeGroup])

  const chartData = useMemo(() => {
    const labels = activeGroupItems.map((data) => data.skillName)
    const data = activeGroupItems.map((data) => data.skillLevel)

    return {
      labels: labels,
      datasets: [
        {
          label: '# of Votes',
          data: data,
          backgroundColor: 'rgba(0, 235, 235, 0.2)',
          borderColor: '#00ebeb',
          borderWidth: 1
        }
      ]
    }
  }, [activeGroupItems])

  useEffect(() => {
    setActiveSkill(activeGroup?.skillGroupItems[0])
  }, [activeGroup])

  // ===================================================================

  const handleScroll = () => {
    const scrolledToBottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    setScrollToTopIsEnable(scrolledToBottom)
  }

  useEffect(() => {
    function reveal() {
      const revealsLeft = document.querySelectorAll('.revealLeft')
      const revealsRight = document.querySelectorAll('.revealRight')

      for (let i = 0; i < revealsLeft.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealsLeft[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          revealsLeft[i].classList.add('active')
        } else {
          revealsLeft[i].classList.remove('active')
        }
      }

      for (let i = 0; i < revealsRight.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealsRight[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          revealsRight[i].classList.add('active')
        } else {
          revealsRight[i].classList.remove('active')
        }
      }

      handleScroll()
    }

    window.addEventListener('scroll', reveal)

    return () => {
      window.removeEventListener('scroll', reveal)
    }
  }, [])

  const handleScrollToTop = () => {
    scroll.scrollToTop()
  }

  useEffect(() => {
    console.log(scrollToTopIsEnable)
  }, [scrollToTopIsEnable])

  // =================================================================

  const LandingContextValues = useMemo(() => {
    return {
      activeGroup,
      activeSkill,
      setActiveSkill,
      activeGroupItems,
      handleActiveSkillGroup,
      chartData,
      scrollToTopIsEnable,
      handleScrollToTop
    }
  }, [
    activeGroup,
    activeSkill,
    activeGroupItems,
    chartData,
    scrollToTopIsEnable
  ])

  return (
    <LandingContext.Provider value={LandingContextValues}>
      {children}
    </LandingContext.Provider>
  )
}

function useLanding(): LandingContextData {
  const context = useContext(LandingContext)

  if (!context) throw new Error('useLanding must be used within a UserProvider')

  return context
}

export { LandingProvider, useLanding }
