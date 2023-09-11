'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
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

  const bodyRef = useRef<any>(null)

  const handleScroll = () => {
    const scrolledToBottom =
      window.scrollY + window.innerHeight >= bodyRef.current.scrollHeight

    setScrollToTopIsEnable(scrolledToBottom)
  }

  const handleScrollToTop = () => {
    scroll.scrollToTop()
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
      handleScrollToTop,
      bodyRef
      // revealsLeftRef,
      // revealsRightRef
    }
  }, [
    activeGroup,
    activeSkill,
    activeGroupItems,
    chartData,
    scrollToTopIsEnable,
    bodyRef
    // revealsLeftRef,
    // revealsRightRef
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
