import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Message from './components/Message';
import reportWebVitals from './reportWebVitals';

const myName = 'Nadezhda';


ReactDOM.render(
  <React.StrictMode>
    <App name={myName} />
     
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//<Message name={myName}/>

reportWebVitals();
