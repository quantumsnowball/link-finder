import SearchField from './SearchField'
import Box from "@mui/material/Box"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { sharedProps } from '../App'
import { useContext } from 'react';


const theme = createTheme({
  palette: {
    mode: "dark"
  }
});

function SearchBar() {
  const {
    keyword: { setKeyword },
    exclude: { setExclude },
    highlight: { setHighlight },
  } = useContext(sharedProps)

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default SearchBar
