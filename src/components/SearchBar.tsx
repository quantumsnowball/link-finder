import React from 'react'
import { Entry } from '../types/App'
import SearchField from './SearchField'
import Box from "@mui/material/Box"
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    mode: "dark"
  }
});


interface SearchBarProps {
  setKeyword: (regex: string) => void,
  setExclude: (regex: string) => void,
  setHighlight: (regex: string) => void,
  setList: React.Dispatch<React.SetStateAction<Entry[]>>
}

function SearchBar({ setKeyword, setExclude, setHighlight, setList }: SearchBarProps) {
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
