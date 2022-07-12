import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
//@ts-ignore
import ClearIcon from '@mui/icons-material/Clear';
import { Entry } from '../types/App'


interface ClearButtonProps {
  setValue: React.Dispatch<React.SetStateAction<Entry[]>>
}

function ClearButton({ setValue }: ClearButtonProps) {
  return (
    <Box sx={{
      position: 'fixed',
      bottom: 50,
      right: 50
    }}>
      <Fab
        color="secondary"
        size="large"
        onClick={() => setValue([])}
      >
        <ClearIcon />
      </Fab>
    </Box>
  )
}

export default ClearButton
