import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import { useTheme } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useDispatch } from 'react-redux'
import { themeActions } from '../../redux/slices/themeSlice'


function ToggleThemeButton() {
  const dispatch = useDispatch()
  const theme = useTheme()
  const toggleMode = () => dispatch(themeActions.toggleMode())

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 50,
      left: 50
    }}>
      <Fab
        color="primary"
        size="large"
        onClick={toggleMode}
      >
        {theme.palette.mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
      </Fab>
    </Box>
  )
}

export default ToggleThemeButton
