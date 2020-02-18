import React from 'react';
import logo from './logo.svg';
import './CSS/App.css';
import Map from './Components/Map';
import LoginPage from './Components/LoginPage';
import Routes from './Components/Routes';
import Navigation from './Components/Navigation';

function App() {

  return (
    <div className="App">
      <Navigation/>
      <Routes />
    </div>
  );
 
}

export default App;
