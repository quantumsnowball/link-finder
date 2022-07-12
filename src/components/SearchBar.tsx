import React from 'react'
import '../styles/SearchBar.css'
import { Entry } from '../types/App'
import SearchField from './SearchField'
import ClearButton from './ClearButton'
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
      <div className="searchbar">
        <SearchField label="Filter" setValue={setKeyword} />
        <SearchField label="Exclude" setValue={setExclude} />
        <SearchField label="Highlight" setValue={setHighlight} />
        <ClearButton label="Clear" setValue={setList} />
      </div>
    </ThemeProvider>
  )
}

export default SearchBar
