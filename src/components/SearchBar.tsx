import '../styles/SearchBar.css'

interface SearchBarProps {
  setKeyword: any,
  setHighlight: any,
  setList: any
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
