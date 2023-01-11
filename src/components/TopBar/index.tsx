import {
  AppBar,
  Toolbar,
  Box,
  Typography,
} from "@mui/material"
import { ClearButton, ToggleThemeButton } from "./Buttons"


const Left = () => {
  return (
    <Box sx={{ display: "flex", flex: 1, justifyContent: 'flex-start' }}>
      <ToggleThemeButton />
    </Box>
  )
}

const Middle = () =>
  <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
    <Typography variant='h6'> Link-Finder </Typography>
  </Box>

const Right = () =>
  <Box sx={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
    <ClearButton />
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
