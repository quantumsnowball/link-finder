import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ClearIcon from '@mui/icons-material/Clear';
import { sharedProps } from '../App'
import { useContext } from 'react';


function ClearButton() {
  const {
    entries: { setEntries }
  } = useContext(sharedProps)

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 50,
      right: 50
    }}>
      <Fab
        color="secondary"
        size="large"
        onClick={() => setEntries([])}
      >
        <ClearIcon />
      </Fab>
    </Box>
  )
}

export default ClearButton
