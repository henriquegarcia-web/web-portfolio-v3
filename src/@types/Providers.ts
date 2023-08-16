export interface LandingContextData {
  activeGroup: any
  activeSkill: any
  setActiveSkill: any
  activeGroupItems: any
  handleActiveSkillGroup: any
  chartData: any
  scrollToTopIsEnable: any
  handleScrollToTop: any
}

export interface BlogContextData {
  userId: string | null
}

export interface ContactContextData {
  contactName: string
  contactPhone: string
  contactMessage: string
  errorName: string
  errorPhone: string
  errorMessage: string
  handleChangeName: (value: string) => void
  handleChangePhone: (value: string) => void
  handleChangeMessage: (value: string) => void
  handleSubmitForm: (e: React.MouseEvent<HTMLButtonElement>) => void
  submitIsEnable: boolean
}
