import { useState, useMemo as useCallback } from 'react';
import { createTheme } from '@mui/material/styles';
import { ColorMode } from '../types'
import themeConfigs from '../styles/theme'


function useColorTheme(initialValue: ColorMode) {
  const [mode, setMode] = useState(initialValue)

  const toggleMode = () =>
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light')

  const theme = useCallback(() => createTheme(themeConfigs(mode)), [mode])

  return { mode, setMode, toggleMode, theme }
}

export default useColorTheme;
