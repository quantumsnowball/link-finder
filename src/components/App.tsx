import { useState, useEffect } from 'react';
import useArray from '../hooks/useArray';
import useRegex from '../hooks/useRegex';
import '../styles/App.css';
import SearchBar from './SearchBar';
import Link from './Link';
import { Entry } from '../types/App'

function App() {
  const list = useArray<Entry>(
    process.env.NODE_ENV === 'production' ? [] as Entry[] :
      Array.from(Array(50).keys()).map(_ =>
        ({ title: 'Title', url: Math.random().toString(36).repeat(20) })))
  const [filtered, setFiltered] = useState(list.value);
  const [keyword, setKeyword] = useRegex('');
  const [highlight, setHighlight] = useRegex('');

  useEffect(() => {
    chrome.webRequest && chrome.webRequest.onBeforeRequest.addListener(details => {
      // console.log(details)
      list.push({
        title: 'TODO', // tabs.find(tab => tab.id === details.tabId).title,
        url: details.url
      })
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
          .filter((entry: Entry) => entry.url.match(keyword))
          .reverse()
          .map((entry: Entry, i: number) =>
            <Link key={i} keyword={keyword} highlight={highlight} title={entry.title} url={entry.url} />)}
      </div>
    </div >
  );
}

export default App;
