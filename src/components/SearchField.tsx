import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


interface SearchFieldProps {
  label: string,
  setValue: (regex: string) => void
}

function SearchField({ label, setValue }: SearchFieldProps) {
  return (
    <Box sx={{
      flexGrow: 1,
      padding: '0.7rem 0.3rem',
    }}>
      <TextField
        fullWidth
        id="outlined-search"
        type="search"
        label={label}
        onChange={e => setValue(e.target.value)}
      />
    </Box>
  )
}

export default SearchField
