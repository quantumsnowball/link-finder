import SearchField from './SearchField'
import Box from "@mui/material/Box"
import { states } from '../App'
import { useContext } from 'react'


function SearchBar() {
  const {
    keyword: { keyword, isValidKeyword, setKeyword },
    exclude: { exclude, isValidExclude, setExclude },
    highlight: { highlight, isValidHighlight, setHighlight },
  } = useContext(states)

  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}>
      <SearchField
        defaultValue={keyword}
        label="Filter"
        helper="Show all matching url"
        errorHelper="Invalid keyword regex expression."
        isValidValue={isValidKeyword}
        setValue={setKeyword}
      />
      <SearchField
        defaultValue={exclude}
        label="Exclude"
        helper="Remove matching from previous result"
        errorHelper="Invalid exclude regex expression."
        isValidValue={isValidExclude}
        setValue={setExclude}
      />
      <SearchField
        defaultValue={highlight}
        label="Highlight"
        helper="Highlight matching keywords"
        errorHelper="Invalid highlight regex expression."
        isValidValue={isValidHighlight}
        setValue={setHighlight}
      />
    </Box>
  )
}

export default SearchBar
