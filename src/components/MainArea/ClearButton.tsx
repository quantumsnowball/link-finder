import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import ClearIcon from '@mui/icons-material/Clear'
import { useDispatch } from 'react-redux'
import { outputActions } from '../../redux/slices/outputSlice'


function ClearButton() {
  const dispatch = useDispatch()
  const clearRequests = () => dispatch(outputActions.setRequests([]))

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 50,
      right: 50
    }}>
      <Fab
        color="secondary"
        size="large"
        onClick={clearRequests}
      >
        <ClearIcon />
      </Fab>
    </Box>
  )
}

export default ClearButton
