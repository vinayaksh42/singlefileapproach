import React from 'react';
import './App.css';
import { Eos10kFilled } from 'singlefileapproach'
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Eos10kFilled rotate={70} color="red"/>
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
