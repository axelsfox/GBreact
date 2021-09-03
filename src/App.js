import React, {useEffect, useState} from 'react';
import './App.css';
import Message from './components/Message';


function App(props) {
  const [MessageList, setMessageList] = useState([]);

  function NewMessage(pm) {
    setMessageList(MessageList => [...MessageList, {text: pm, autor: 'You'}])
    
  }

  useEffect(()=> {
    if (MessageList[MessageList.length - 1]?.autor === 'You') {
     setTimeout(setMessageList, 1500, (MessageList => [...MessageList, {text: 'i\'robot?', autor: 'ME'}]))
    };
  }, [MessageList]);


  return (
      <div className="App">
      <Message name= {props.name}
      onClick = {NewMessage}/>
      <div>
        <div className="Message-chat"><div className="Message-number">#</div><div className="Message-body">Message-log</div><div className="Message-autor">Autor</div></div>
        {MessageList.map((message, idx) => <div className="Message-chat" key={idx + 1}> <div className="Message-number">{idx + 1}</div> <div className="Message-body"> {message.text} </div> <div className="Message-autor"> {message.autor} </div> </div>)}
      </div>
 </div>
  
  );
}

export default App;
