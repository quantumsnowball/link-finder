export interface Entry {
  title: string,
  url: string,
  method: string
}

export type ColorMode = 'light' | 'dark'

export type AlertType = 'success' | 'error'
export type Alert = 'none' | AlertType

export interface AlertContent {
  title: string,
  message: string
}

export type AlertMaker = (m: AlertContent) => void

export interface States {
  theme: {
    toggleMode: () => void
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
    setKeyword: (regex: string) => void
  },
  exclude: {
    exclude: string,
    setExclude: (regex: string) => void
  },
  highlight: {
    highlight: string,
    setHighlight: (regex: string) => void
  }
}
