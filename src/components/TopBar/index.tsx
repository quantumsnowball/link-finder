import {
  AppBar,
  Toolbar,
  Box,
} from "@mui/material"
import SearchBar from "../SearchBar"
import { ClearButton, ToggleThemeButton } from "./Buttons"


const Left = () => {
  return (
    <Box sx={{ display: "flex", flex: 1, justifyContent: 'flex-start' }}>
      <ToggleThemeButton />
    </Box>
  )
}

const Middle = () =>
  <Box sx={{ display: 'flex', flex: 10, justifyContent: 'center' }}>
    <SearchBar />
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
