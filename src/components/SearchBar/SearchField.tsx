import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


interface SearchFieldProps {
  label: string,
  helper: string,
  setValue: (regex: string) => void
}

function SearchField({ label, helper, setValue }: SearchFieldProps) {
  return (
    <Box sx={{
      flexGrow: 1,
      padding: '0rem 0.5rem'
    }}>
      <TextField
        fullWidth
        type="search"
        margin="normal"
        label={label}
        helperText={helper}
        onChange={e => setValue(e.target.value)}
      />
    </Box>
  )
}

export default SearchField
