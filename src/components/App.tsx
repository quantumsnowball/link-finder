import { useEffect } from 'react';
import useArray from '../hooks/useArray';
import '../styles/App.css';

function App() {
  //@ts-ignore
  const list = useArray([])

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
      <div className="table">
        {list.value.reverse().map(
          (url: string, i: number) =>
            <code key={i}>{url}</code>)}
      </div>
    </div >
  );
}

export default App;
