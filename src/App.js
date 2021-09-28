import './App.css';
import React from 'react';
import { createTheme, ThemeProvider }  from "@material-ui/core";
import deepPurple  from "@material-ui/core/colors/deepPurple";
import { Routes } from './components/Routes';
import { Provider } from "react-redux";
import { store, persister } from './components/store';
import { PersistGate } from 'redux-persist/integration/react';

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
      <Provider store = { store }>
      <PersistGate persistor={persister}>
      <ThemeProvider theme = { theme }>
      <div className="App">
      <Routes />
      </div>
      </ThemeProvider>
     </PersistGate>
      </Provider>
  );
}

export default App;
