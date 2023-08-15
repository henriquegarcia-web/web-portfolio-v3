'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

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

  // =================================================================

  const LandingContextValues = useMemo(() => {
    return {
      activeGroup,
      activeSkill,
      setActiveSkill,
      activeGroupItems,
      handleActiveSkillGroup,
      chartData
    }
  }, [activeGroup, activeSkill, activeGroupItems, chartData])

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
