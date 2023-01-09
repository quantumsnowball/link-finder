import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import { useTheme } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'


function ToggleThemeButton() {
  const theme = useTheme()

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 50,
      left: 50
    }}>
      <Fab
        color="primary"
        size="large"
        onClick={() => alert('toggleMode')}
      >
        {theme.palette.mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
      </Fab>
    </Box>
  )
}

export default ToggleThemeButton
