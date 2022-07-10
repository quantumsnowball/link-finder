import { useEffect } from 'react';
import useArray from '../hooks/useArray';
import '../styles/App.css';

function App() {
  //@ts-ignore
  const list = useArray([])

  useEffect(() => {
    //@ts-ignore
    chrome.webRequest && chrome.webRequest.onBeforeRequest.addListener(details => {
      console.log(`${details.method} ${details.url}`)
      list.push(`${details.method} ${details.url}`)
    },
      { urls: ['<all_urls>'] }
    )
  }, [])

  return (
    <div className="app">
      <div className="table">
        <table>
          <thead>
            <tr><th>URL</th></tr>
          </thead>
          <tbody>
            {list.value.map(
              (url: string, i: number) =>
                <tr key={i}><td>{i}: {url}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div >
  );
}

export default App;
