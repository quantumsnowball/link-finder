import {
  AppBar,
  IconButton,
  Toolbar,
  Box
} from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'


const Left = () =>
  <Box sx={{ display: "flex", flex: 1, justifyContent: 'flex-start' }}>
    <IconButton >
      <DarkModeIcon />
    </IconButton >
  </Box>

const Middle = () =>
  <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
    Some title text
  </Box>

const Right = () =>
  <Box sx={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
    <IconButton >
      <ClearIcon />
    </IconButton>
  </Box>

const TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <Left />
        <Middle />
        <Right />
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
