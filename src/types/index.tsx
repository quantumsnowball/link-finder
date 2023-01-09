import { PROGRAMS } from '../constants'


export interface Entry {
  title: string,
  url: string,
  method: string
}

export type ColorMode = 'light' | 'dark'
export type Program = typeof PROGRAMS[number]
export type AlertType = 'success' | 'error'
export type Alert = 'none' | AlertType

export interface AlertContent {
  title: string,
  message: string
}

export type AlertMaker = (m: AlertContent) => void

export interface States {
  program: {
    program: Program,
    setProgram: (s: Program) => void,
    isValidProgram: (name: any) => name is Program,
    allPrograms: Program[]
  },
  alert: {
    alert: Alert,
    alertSuccess: AlertMaker,
    alertError: AlertMaker,
    alertContent: AlertContent
  },
  entries: {
    entries: Entry[],
    setEntries: React.Dispatch<React.SetStateAction<Entry[]>>,
    pushEntry: (element: Entry) => void
  },
  keyword: {
    keyword: string,
    isValidKeyword: boolean,
    setKeyword: (regex: string) => void
  },
  exclude: {
    exclude: string,
    isValidExclude: boolean,
    setExclude: (regex: string) => void
  },
  highlight: {
    highlight: string,
    isValidHighlight: boolean,
    setHighlight: (regex: string) => void
  }
}
