import { useState, useEffect } from 'react';
import useArray from '../hooks/useArray';
import useRegex from '../hooks/useRegex';
import '../styles/App.css';
import SearchBar from './SearchBar';
import Link from './Link';
import { Entry } from '../types/App'

function App() {
  const {
    value: entries,
    setValue: setEntries,
    push: pushEntry
  } = useArray<Entry>(process.env.NODE_ENV === 'production' ?
    [] as Entry[] :
    Array.from(Array(50).keys()).map(_ =>
      ({ title: 'Title', url: Math.random().toString(36).repeat(20) })))
  const [filtered, setFiltered] = useState(entries);
  const [keyword, setKeyword] = useRegex('');
  const [highlight, setHighlight] = useRegex('');

  // register web request listenering on first mount
  useEffect(() => {
    chrome.webRequest && chrome.webRequest.onBeforeRequest.addListener(
      (details: chrome.webRequest.WebRequestBodyDetails) => {
        const id = details.tabId
        // query opened tab, then find title by id
        chrome.tabs.query({}, (tabs) => {
          const found = tabs.find(tab => tab.id === id)
          const title = found && found.title ? found.title : 'n.a.'
          pushEntry({
            title: title,
            url: details.url
          })

        })
      }, { urls: ['<all_urls>'] }
    )
  }, [pushEntry])
  // update filtered entries copy upon newly captured requests
  useEffect(() => { setFiltered(entries) }, [entries])

  return (
    <div className="app">
      <SearchBar setKeyword={setKeyword} setHighlight={setHighlight} setList={setEntries} />
      <div className="main">
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
