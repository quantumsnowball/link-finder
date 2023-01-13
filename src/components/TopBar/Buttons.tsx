import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import ClearIcon from '@mui/icons-material/Clear'
import { useDispatch } from "react-redux"
import { themeActions } from "../../redux/slices/themeSlice"
import { IconButton, useTheme } from '@mui/material'
import { outputActions } from '../../redux/slices/outputSlice'


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

export const ClearButton = () => {
  const dispatch = useDispatch()
  const clearRequests = () => dispatch(outputActions.setRequests([]))
  const clearResponses = () => dispatch(outputActions.setResponses([]))

  return (
    <IconButton
      onClick={() => {
        clearRequests()
        clearResponses()
      }}
    >
      <ClearIcon />
    </IconButton>
  )
}
