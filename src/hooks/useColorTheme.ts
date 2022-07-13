import { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { ColorMode } from '../types'


function useColorTheme(initialValue: ColorMode) {
  const [mode, setMode] = useState(initialValue)

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const theme = createTheme({
    palette: {
      mode,
    }
  })

  return { mode, setMode, toggleMode, theme }
}

export default useColorTheme;
