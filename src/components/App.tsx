import { useEffect, createContext, useCallback } from 'react'
import useArray from '../hooks/generic/useArray'
import useSelect from '../hooks/useSelect'
import useSearchField from '../hooks/useSearchField'
import useAlert from '../hooks/useAlert'
import { initialEntries } from '../utils/data'
import requestLogger from '../utils/webRequest'
import { createTheme, ThemeProvider } from '@mui/material'
import Container from '@mui/material/Container'
import SearchBar from './SearchBar'
import ActionBar from './ActionBar'
import MainArea from './MainArea'
import { States, Entry, Program } from '../types'
import { PROGRAMS } from '../constants'
import { Provider, useSelector } from 'react-redux'
import { persistor, RootState, store } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import themeConfigs from '../styles/theme'



export const states = createContext<States>({} as States)

function App() {
  const {
    value: program,
    setValue: setProgram,
    isValid: isValidProgram,
    VALUES: allPrograms
  } = useSelect<Program>('program', [...PROGRAMS], 'youtube-dl')
  const { alert, alertSuccess, alertError, alertContent } = useAlert('none')
  const {
    value: entries,
    setValue: setEntries,
    push: pushEntry
  } = useArray<Entry>(initialEntries)
  const [keyword, isValidKeyword, setKeyword] = useSearchField('keyword', '')
  const [exclude, isValidExclude, setExclude] = useSearchField('exclude', '')
  const [highlight, isValidHighlight, setHighlight] = useSearchField('highlight', '')

  useEffect(requestLogger(pushEntry), [pushEntry])

  return (
    <states.Provider value={{
      program: { program, setProgram, isValidProgram, allPrograms },
      alert: { alert, alertSuccess, alertError, alertContent },
      entries: { entries, setEntries, pushEntry },
      keyword: { keyword, isValidKeyword, setKeyword },
      exclude: { exclude, isValidExclude, setExclude },
      highlight: { highlight, isValidHighlight, setHighlight }
    }}>
      <Container
        maxWidth={false}
        disableGutters={true}
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch",
          // backgroundColor: "#282c34",
          color: 'text.primary',
          backgroundColor: 'background.default',
          height: "100vh"
        }}
      >
        <SearchBar />
        <ActionBar />
        <MainArea />
      </Container>
    </states.Provider >
  )
}

const ThemeWrapper = () => {
  const mode = useSelector((s: RootState) => s.theme.mode)
  const theme = useCallback(() => createTheme(themeConfigs(mode)), [mode])

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

const ReduxWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeWrapper />
      </PersistGate>
    </Provider>
  )
}

export default ReduxWrapper
