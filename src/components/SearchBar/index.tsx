import SearchField from './SearchField'
import Box from "@mui/material/Box"
import { states } from '../App'
import { useContext } from 'react';


function SearchBar() {
  const {
    keyword: { keyword, setKeyword },
    exclude: { exclude, setExclude },
    highlight: { highlight, setHighlight },
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
        setValue={setKeyword}
      />
      <SearchField
        defaultValue={exclude}
        label="Exclude"
        helper="Remove matching from previous result"
        setValue={setExclude}
      />
      <SearchField
        defaultValue={highlight}
        label="Highlight"
        helper="Highlight matching keywords"
        setValue={setHighlight}
      />
    </Box>
  )
}

export default SearchBar
