import '../styles/App.css';

function App() {
  return (
    <div className="app">
      <div className="table">
        <table>
          <thead>
            <tr><th>URL</th></tr>
          </thead>
          <tbody>
            {[...Array(50)].map((x, i) => <tr><td>link{i}: http://www.google.com/as;spqiweofjfasdf/pqoijf;aslkdjfapsdiofjpqweiofjas/dqpwieofjasdlfjpqwi/somelink.m3u8</td></tr>)}
          </tbody>
        </table>
      </div>
    </div >
  );
}

export default App;
