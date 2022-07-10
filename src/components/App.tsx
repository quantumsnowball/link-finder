import { useEffect } from 'react';
import useArray from '../hooks/useArray';
import '../styles/App.css';

function App() {
  //@ts-ignore
  const list = useArray(['test', 'test2'])

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
                <tr key={i}><td>link{i}: {url}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div >
  );
}

export default App;
