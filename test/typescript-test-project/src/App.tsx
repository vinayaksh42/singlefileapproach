import React from 'react';
import './App.css';
import { Eos10kFilled } from 'singlefileapproach'
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Eos10kFilled height="100" width="100" color="red" rotate="90"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;