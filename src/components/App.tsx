import { useState, useEffect } from 'react';
import useArray from '../hooks/useArray';
import useRegex from '../hooks/useRegex';
import '../styles/App.css';
import SearchBar from './SearchBar';
import Link from './Link';

function App() {
  //@ts-ignore
  // const list = useArray([])
  //@ts-ignore
  const list = useArray([...Array(50).keys()].map(_ => Math.random().toString(36).repeat(20)))
  const [filtered, setFiltered] = useState(list.value)
  const [keyword, setKeyword] = useRegex()
  const [highlight, setHighlight] = useRegex()

  useEffect(() => {
    //@ts-ignore
    chrome.webRequest && chrome.webRequest.onBeforeRequest.addListener(details => {
      list.push(`${details.url}`)
    },
      { urls: ['<all_urls>'] }
    )
  }, [])

  useEffect(() => { setFiltered(list.value) }, [list.value])

  return (
    <div className="app">
      <SearchBar setKeyword={setKeyword} setHighlight={setHighlight} setList={list.setValue} />
      <div className="table">
        {filtered
          .filter(str => str.match(keyword))
          .reverse()
          .map((url: string, i: number) =>
            <Link key={i} keyword={keyword} highlight={highlight} url={url} />)}
      </div>
    </div >
  );
}

export default App;
