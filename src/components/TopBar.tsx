import {
  AppBar,
  Button,
  IconButton,
  Toolbar
} from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear'


const TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          onClick={() => alert('Clear Button')}
        >
          <ClearIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
