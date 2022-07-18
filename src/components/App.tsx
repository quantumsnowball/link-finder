import { useEffect, createContext } from 'react';
import useArray from '../hooks/generic/useArray';
import useSelect from '../hooks/useSelect'
import useSearchField from '../hooks/useSearchField';
import useColorTheme from '../hooks/useColorTheme';
import useAlert from '../hooks/useAlert';
import { initialEntries } from '../utils/data'
import requestLogger from '../utils/webRequest'
import { ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container'
import SearchBar from './SearchBar';
import ActionBar from './ActionBar';
import MainArea from './MainArea';
import { States, Entry, Program } from '../types'
import { PROGRAMS } from '../constants'


export const states = createContext<States>({} as States)

function App() {
  const { toggleMode, theme } = useColorTheme('dark')
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
  const [keyword, setKeyword] = useSearchField('keyword', '');
  const [exclude, setExclude] = useSearchField('exclude', '');
  const [highlight, setHighlight] = useSearchField('highlight', '');

  useEffect(requestLogger(pushEntry), [pushEntry])

  return (
    <states.Provider value={{
      theme: { toggleMode },
      program: { program, setProgram, isValidProgram, allPrograms },
      alert: { alert, alertSuccess, alertError, alertContent },
      entries: { entries, setEntries, pushEntry },
      keyword: { keyword, setKeyword },
      exclude: { exclude, setExclude },
      highlight: { highlight, setHighlight }
    }}>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </states.Provider >
  );
}

export default App;
