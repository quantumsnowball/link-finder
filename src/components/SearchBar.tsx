import React from 'react'
import '../styles/SearchBar.css'
import { Entry } from '../types/App'

interface SearchBarProps {
  setKeyword: (regex: string) => void,
  setExclude: (regex: string) => void,
  setHighlight: (regex: string) => void,
  setList: React.Dispatch<React.SetStateAction<Entry[]>>
}

function SearchBar({ setKeyword, setExclude, setHighlight, setList }: SearchBarProps) {
  return (
    <div className="searchbar">
      <input type="text" onChange={e => setKeyword(e.target.value)}></input>
      <input type="text" onChange={e => setExclude(e.target.value)}></input>
      <input type="text" onChange={e => setHighlight(e.target.value)}></input>
      <button onClick={() => setList([])}>Clear</button>
    </div>
  )
}

export default SearchBar
