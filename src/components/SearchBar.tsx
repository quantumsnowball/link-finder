import '../styles/SearchBar.css'

//@ts-ignore
function SearchBar({ setKeyword, setHighlight, setList }) {
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
