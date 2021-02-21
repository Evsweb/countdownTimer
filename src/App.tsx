import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to {count}
        </p>
          <button onClick={() => setCount(count + 1)}>Learn React</button> 
      </header>
    </div>
  );
}

export default App;
