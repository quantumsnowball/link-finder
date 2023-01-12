import { Link } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'
import { KEYWORD_PRESETS } from '../../constants'
import { useRegex } from '../../hooks/generic/useRegex'


interface SearchFieldProps {
  label: string,
  value: string,
  setValue: (s: string) => void
}

function SearchField({ label, value, setValue }: SearchFieldProps) {
  const [display, setDisplay] = useState(value)
  const { isValidRegex, setValidRegex } = useRegex(setValue)

  const appendKeyword = (kw: string) => {
    if (value.length === 0)
      setDisplay(kw)
    else
      setDisplay(value + '|' + kw)
    console.log({ kw })
  }

  // test display value for valid regex on changes, 
  // only set redux states if it is valid
  // will keep the invalid regex in text field for editing
  // error red box means redux states is not set and filter is not updated
  useEffect(() => { setValidRegex(display) }, [display])

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
        onChange={e => setDisplay(e.target.value)}
        value={display}
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
            onClick={() => appendKeyword(kw)}
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
