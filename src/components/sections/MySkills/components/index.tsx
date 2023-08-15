import React from 'react'
import styles from './styles.module.scss'

interface IStackVisualizer {
  techIcon: React.ReactNode
  techLabel: string
  techValue: number
}

function StackVisualizer({ techIcon, techLabel, techValue }: IStackVisualizer) {
  const barWidth = `${techValue}%`

  return (
    <div className={styles.stack_visualizer}>
      <div className={styles.stack_visualizer__icon}>{techIcon}</div>
      <div className={styles.stack_visualizer__details}>
        <div className={styles.stack_visualizer__tech_label}>{techLabel}</div>
        <div className={styles.stack_visualizer__tech_experience}>
          <div
            className={styles.tech_experience__bar}
            style={{ width: barWidth }}
          />
        </div>
      </div>
    </div>
  )
}

export { StackVisualizer }
