import { Link } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { KEYWORD_PRESETS } from '../../constants'
import { useRegex } from '../../hooks/generic/useRegex'


interface SearchFieldProps {
  label: string,
  value: string,
  setValue: (s: string) => void
}

function SearchField({ label, value, setValue }: SearchFieldProps) {
  const { isValidRegex, setValidRegex } = useRegex(setValue)

  return (
    <Box sx={{
      flexGrow: 1,
      px: 0, py: 1
    }}>
      <TextField
        fullWidth
        type="search"
        margin="normal"
        label={label}
        error={!isValidRegex}
        onChange={e => setValidRegex(e.target.value)}
        defaultValue={value}
        sx={{ m: 0 }}
      />
      <Box
        sx={{
          display: 'flex',
          mt: 1
        }}
      >
        {KEYWORD_PRESETS.map(kw =>
          <Link
            component="button"
            onClick={() => alert('inject some text to textfield')}
            sx={{ mr: 1 }}
          >
            {kw}
          </Link>
        )}
      </Box>
    </Box>
  )
}

export default SearchField
