import React from 'react'
import '../styles/SearchBar.css'
import { Entry } from '../types/App'

interface SearchBarProps {
  setKeyword: (regex: string) => void,
  setHighlight: (regex: string) => void,
  setList: React.Dispatch<React.SetStateAction<Entry[]>>
}

function SearchBar({ setKeyword, setHighlight, setList }: SearchBarProps) {
  return (
    <div className="searchbar">
      <header>Filter</header>
      <input type="text" onChange={e => setKeyword(e.target.value)}></input>
      <header>Highlight</header>
      <input type="text" onChange={e => setHighlight(e.target.value)}></input>
      <button onClick={() => setList([])}>Clear</button>
    </div>
  )
}

export default SearchBar
