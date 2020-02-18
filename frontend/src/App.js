import React from 'react';
import logo from './logo.svg';
import './CSS/App.css';
import Map from './Components/Map';
import LoginPage from './Components/LoginPage';
import Routes from './Components/Routes';
import Navigation from './Components/Navigation';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#254E58'
    },
    secondary: {
      main: '#88BDBC',
    },
    contrastThreshold: 3,
  }
})

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navigation />
        <Routes />
      </ThemeProvider>
    </div>
  );

}

export default App;
