import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Entry } from '../types/App'


interface ClearButtonProps {
  label: string,
  setValue: React.Dispatch<React.SetStateAction<Entry[]>>
}

function ClearButton({ label, setValue }: ClearButtonProps) {
  return (
    <Box sx={{
      padding: '0 1rem'
    }}>
      <Button
        fullWidth
        variant="contained"
        color="error"
        size="large"
        onClick={() => setValue([])}>
        {label}
      </Button>
    </Box>
  )
}

export default ClearButton
