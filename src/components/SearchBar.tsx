import '../styles/SearchBar.css'

//@ts-ignore
function SearchBar({ list }) {
  return (
    <div className="searchbar">
      <header>Search</header>
      <input type="text"></input>
      <button onClick={() => list.setValue([])}>Clear</button>
    </div>
  )
}

export default SearchBar
