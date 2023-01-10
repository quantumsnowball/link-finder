import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useRegex } from '../../hooks/generic/useRegex'


interface SearchFieldProps {
  defaultValue: string,
  label: string,
  helper: string,
  errorHelper: string,
  setValue: (s: string) => void
}

function SearchField({ defaultValue, label, helper, errorHelper, setValue }: SearchFieldProps) {
  const { isValidRegex, setValidRegex } = useRegex(setValue)

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
        helperText={isValidRegex ? helper : errorHelper}
        error={!isValidRegex}
        onChange={e => setValidRegex(e.target.value)}
        defaultValue={defaultValue}
      />
    </Box>
  )
}

export default SearchField
