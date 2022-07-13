import SearchField from './SearchField'
import Box from "@mui/material/Box"
import { states } from '../App'
import { useContext } from 'react';


function SearchBar() {
  const {
    keyword: { setKeyword },
    exclude: { setExclude },
    highlight: { setHighlight },
  } = useContext(states)

  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}>
      <SearchField label="Filter" helper="Show all matching url" setValue={setKeyword} />
      <SearchField label="Exclude" helper="Remove matching from previous result" setValue={setExclude} />
      <SearchField label="Highlight" helper="Highlight matching keywords" setValue={setHighlight} />
    </Box>
  )
}

export default SearchBar
