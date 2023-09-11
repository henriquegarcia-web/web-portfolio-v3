'use client'

import styles from './styles.module.scss'

import { Tag } from '@/components'
import { StackVisualizer } from './components'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

import { useLanding } from '@/providers/LandingContext'

import { skillsData } from '@/data/landingData'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  maintainAspectRatio: false,

  scales: {
    r: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        beginAtZero: true,
        display: false
      },
      angleLines: {
        display: true,
        color: '#90B7DA',
        borderDash: [11, 10],
        borderDashOffset: 5,
        lineWidth: 1
      },
      angle: 115,
      suggestedMin: 0,
      suggestedMax: 100,
      pointLabels: {
        font: {
          family: 'Open Sans, sans-serif',
          size: 11,
          weight: '300'
        },
        color: '#90B7DA'
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}

export const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }
  ]
}

export default function MySkillsSection() {
  const {
    activeGroup,
    activeSkill,
    setActiveSkill,
    activeGroupItems,
    handleActiveSkillGroup,
    chartData
  } = useLanding()

  return (
    <div className={styles.myskills_section}>
      <div
        className={`section_container ${styles.myskills_section__container}`}
      >
        <div className={styles.myskills_section__left_side}>
          <div className={styles.myskills_section__skills}>
            <h2 className="section_header">Árvore de Habilidades</h2>
            <div className={styles.skills__wrapper}>
              <Radar data={chartData} options={options} />
            </div>
          </div>
        </div>
        <div className={styles.myskills_section__right_side}>
          <div className={styles.myskills_section__stacks}>
            <h2 className="section_header">Minhas Stacks</h2>
            <div className={styles.stacks__wrapper}>
              <nav className={styles.stacks__navigation}>
                {skillsData.map((skillGroup) => {
                  const isActive =
                    activeGroup.skillGroupId === skillGroup.skillGroupId
                  return (
                    <button
                      key={skillGroup.skillGroupId}
                      onClick={() => handleActiveSkillGroup(skillGroup)}
                      className={`${styles.stacks__navigation__button} ${
                        isActive && styles.isActive
                      }`}
                    >
                      {skillGroup.skillGroupName}
                    </button>
                  )
                })}
              </nav>
              <StackVisualizer
                techIcon={<img src={activeSkill?.skillIcon} alt="" />}
                techLabel={activeSkill?.skillName}
                techValue={activeSkill?.skillLevel}
              />
              <div className={styles.stacks__list}>
                <p className={styles.stacks__list__header}>
                  Lista de Tecnologias em: <b>{activeGroup.skillGroupName}</b>
                </p>
                <div className={styles.stacks__list__wrapper}>
                  {activeGroupItems?.map((skill: any) => {
                    const isActive = activeSkill.skillId === skill.skillId
                    return (
                      <Tag
                        key={skill.skillId}
                        isActive={isActive}
                        label={skill.skillName}
                        onClick={() => setActiveSkill(skill)}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`revealRight active ${styles.myskills_section__effect}`}>
        <img src="/images/effects/backdrop_02.png" alt="" />
      </div>
    </div>
  )
}
