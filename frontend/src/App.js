import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Components/Map';
import LoginPage from './Components/LoginPage';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LoginPage/>
        <Map/>
      </header>
    </div>
  );
 
}

export default App;
