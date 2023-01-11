import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useDispatch } from "react-redux"
import { themeActions } from "../../redux/slices/themeSlice"
import { IconButton, useTheme } from '@mui/material'


export const ToggleThemeButton = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const toggleMode = () => dispatch(themeActions.toggleMode())
  return (
    <IconButton
      onClick={toggleMode}
    >
      {theme.palette.mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton >

  )
}
