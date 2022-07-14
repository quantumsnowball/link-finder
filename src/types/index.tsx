export interface Entry {
  title: string,
  url: string,
  method: string
}

export interface States {
  theme: {
    toggleMode: () => void
  },
  alert: {
    alert: Alert,
    alertSuccess: (message: string) => void,
    alertMessage: string
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

export type ColorMode = 'light' | 'dark'

export type Alert = 'none' | 'success'
