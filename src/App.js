import React, {useState} from 'react';
import './App.css';
import Message from './components/Message';


function App(props) {
  const [MessageList, setMessageList] = useState([]);

  function NewMessage() {
    setMessageList(MessageList => [...MessageList, {text: "p", autor: 'You'}])
    
  }

  return (
       <div className="App">
      <Message name= {props.name}
      onClick = {NewMessage}/>
      <div className="Message-box">
      {MessageList.map((message, idx) => <div key={idx + 1}>{idx + 1} {message.text} {message.autor}</div>)}
      </div>
 </div>
  
  );
}

export default App;
