import { useEffect, createContext } from 'react';
import useArray from '../hooks/useArray';
import useRegex from '../hooks/useRegex';
import useColorTheme from '../hooks/useColorTheme';
import { ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container'
import SearchBar from './SearchBar';
import MainArea from './MainArea';
import { States, Entry } from '../types'


export const states = createContext<States>({} as States)

function App() {
  const { toggleMode, theme } = useColorTheme('dark')
  const {
    value: entries,
    setValue: setEntries,
    push: pushEntry
  } = useArray<Entry>(process.env.NODE_ENV === 'production' ?
    [] as Entry[] :
    Array.from(Array(50).keys()).map(_ =>
      ({ title: 'Title', url: Math.random().toString(36).repeat(20), method: 'GET' })))
  const [keyword, setKeyword] = useRegex('');
  const [exclude, setExclude] = useRegex('');
  const [highlight, setHighlight] = useRegex('');

  // register web request listenering on first mount
  useEffect(() => {
    chrome.webRequest && chrome.webRequest.onBeforeRequest.addListener(
      // for every request being sent, use details to do as follows:
      details => {
        // query all opened tab, then find title by id
        chrome.tabs.query({}, tabs => {
          const found = tabs.find(tab => tab.id === details.tabId)
          const title = found && found.title ? found.title : 'n.a.'
          pushEntry({ title: title, url: details.url, method: details.method })
        })
      },
      // apply to all url being sent
      { urls: ['<all_urls>'] }
    )
  }, [pushEntry])

  return (
    <states.Provider value={{
      theme: { toggleMode },
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
          <MainArea />
        </Container>
      </ThemeProvider>
    </states.Provider >
  );
}

export default App;
