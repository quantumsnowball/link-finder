export interface Entry {
  title: string,
  url: string,
  method: string
}

export type ColorMode = 'light' | 'dark'

export type Alert = 'none' | 'success'

export interface AlertMessage {
  title: string,
  message: string
}

export interface States {
  theme: {
    toggleMode: () => void
  },
  alert: {
    alert: Alert,
    alertSuccess: (m: AlertMessage) => void,
    alertMessage: AlertMessage
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
