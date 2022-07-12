import { useEffect } from 'react';
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
      ({ title: 'Title', url: Math.random().toString(36).repeat(20), method: 'GET' })))
  const [keyword, setKeyword] = useRegex('');
  const [exclude, setExclude] = useRegex('');
  const [highlight, setHighlight] = useRegex('');

  // register web request listenering on first mount
  useEffect(() => {
    chrome.webRequest && chrome.webRequest.onBeforeRequest.addListener(
      // for every request being sent, use details to do as follows:
      details => {
        // query all opened tab, then find title by id
        chrome.tabs.query({}, tabs => {
          const found = tabs.find(tab => tab.id === details.tabId)
          const title = found && found.title ? found.title : 'n.a.'
          pushEntry({ title: title, url: details.url, method: details.method })
        })
      },
      // apply to all url being sent
      { urls: ['<all_urls>'] }
    )
  }, [pushEntry])

  return (
    <div className="app">
      <SearchBar setKeyword={setKeyword} setExclude={setExclude} setHighlight={setHighlight} setList={setEntries} />
      <div className="main">
        {entries
          .filter((entry: Entry) => entry.url.match(keyword))
          .filter((entry: Entry) => exclude !== '' ? !entry.url.match(exclude) : true)
          .reverse()
          .map((entry: Entry, i: number) =>
            <Link key={i} keyword={keyword} exclude={exclude} highlight={highlight} title={entry.title} url={entry.url} method={entry.method} />)}
      </div>
    </div >
  );
}

export default App;
