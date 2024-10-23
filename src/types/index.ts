export interface Section {
  id: string
  name: string
}

export interface BaseSkill {
  name: string
  level: number
}

export interface Experience {
  id: number
  title: string
  company: string
  date: string
  details: string[]
  isFlipped: boolean
}

export interface Publication {
  id: number
  title: string
  journal: string
  date: string
  link: string
  summary: string
  isFlipped: boolean
}

export interface Project {
  id: number
  title: string
  date: string
  type: string
  details: string[]
  isFlipped: boolean
}

export interface Education {
  id: number
  title: string
  company: string
  date: string
  details: string[]
  isFlipped: boolean
}
