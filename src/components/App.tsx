import { useEffect, useCallback } from 'react'
import requestLogger from '../utils/webRequest'
import { createTheme, ThemeProvider } from '@mui/material'
import Container from '@mui/material/Container'
import SearchBar from './SearchBar'
import MainArea from './MainArea'
import { Request } from '../types'
import { Provider, useSelector } from 'react-redux'
import { persistor, RootState, store } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import themeConfigs from '../styles/theme'
import { useDispatch } from 'react-redux'
import { outputActions } from '../redux/slices/outputSlice'



function App() {
  const dispatch = useDispatch()
  const pushRequest = (r: Request) => dispatch(outputActions.pushRequest(r))

  useEffect(requestLogger(pushRequest), [pushRequest])

  return (
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
