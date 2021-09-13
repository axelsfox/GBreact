import './App.css';
import React from 'react';
import { createTheme, ThemeProvider }  from "@material-ui/core";
import deepPurple  from "@material-ui/core/colors/deepPurple";
import { Routes } from './components/Routes';

//тема с цветами
const theme = createTheme({
  palette:{
    primary: {
      main: deepPurple[300],
    },
    secondary: {
      main: deepPurple[800]
    },
   },
});


function App() {
  
  return (
      <div className="App">
  <ThemeProvider theme={theme}>
      <Routes />
     
  </ThemeProvider>
  
      </div>
  
  );
}

export default App;
