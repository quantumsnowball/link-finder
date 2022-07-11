import { useEffect } from 'react';
import useArray from '../hooks/useArray';
import '../styles/App.css';
import SearchBar from './SearchBar';

function App() {
  //@ts-ignore
  const list = useArray([])
  //@ts-ignore
  // const list = useArray([...Array(50).keys()].map(_ => Math.random().toString(36).repeat(20)))

  useEffect(() => {
    //@ts-ignore
    chrome.webRequest && chrome.webRequest.onBeforeRequest.addListener(details => {
      list.push(`${details.url}`)
    },
      { urls: ['<all_urls>'] }
    )
  }, [])

  return (
    <div className="app">
      <SearchBar />
      <div className="table">
        {list.value.reverse().map(
          (url: string, i: number) =>
            <p key={i}>{url}</p>)}
      </div>
    </div >
  );
}

export default App;
