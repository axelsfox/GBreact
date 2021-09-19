import '../App.css';
import React, {useEffect, useState, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider }  from "@material-ui/core";
import deepPurple  from "@material-ui/core/colors/deepPurple";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Message from './Message';
import ChatList from './ChatList';
import { useParams } from 'react-router';

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

const useStyles = makeStyles({
  chat: {
    width: 500,
    height: 500,
    margin: 30,
    padding: 20,
    textAlign: 'left'
    
  },
  chatItem: {
    borderWidth: 1,
    borderBottom: 'outset'
  },
   
});

function Chat() {
  const { chatId} = useParams();
  const classes = useStyles();
  const inputRef = useRef(null);
  const [messageList, setmessageList] = useState([]);
  const [newChatList, setnewChatList] = useState([
    {
        id: 111,
        name: 'Main Chat'
    },
    {
        id: 121,
        name: 'Friend Chat'
    },
    {
        id: 131,
        name: 'Secret Chat'
  }
]);

  const initialMessages = {
    "chat-1": [
    {text: "111111", autor: 'HUMAN', id: "mess-1"},
    {text: "222222", autor: 'HUMAN', id: "mess-2"}
  ],
  "chat-2": [
    {text: "3333", autor: 'HUMAN', id: "mess-1"},
    {text: "444444", autor: 'HUMAN', id: "mess-2"}
  ],
};

 function newMessage(pm) {
    setmessageList(messageList => [...messageList, {text: pm, autor: 'You'}]);
    inputRef.current.focus();
  }

 function addNewchat (name){
  setnewChatList (newChatList => [...newChatList, {id: newChatList[newChatList.length - 1].id + 10, name: name}])
  
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
   
  useEffect(()=> {
    if (messageList[messageList.length - 1]?.autor === 'You') {
    setTimeout(setmessageList, 1500, (messageList => [...messageList, {text: 'i\'m robot?', autor: 'ME'}]))
    };
    clearTimeout();

  }, [messageList]);

  
  return (
      <div className="App">
  <ThemeProvider theme={theme}>
      <Message 
      onClick = {newMessage}
      input={inputRef}
      />
    <ChatList chats = {newChatList}
      onClick = {addNewchat}/>

      <List className={classes.chat}>
          <ListItem className={classes.chatItem}>
          <ListItemText>#</ListItemText>
          <ListItemText>Message-log</ListItemText>
          <ListItemText>Autor</ListItemText>
      </ListItem>
      
      {messageList.map((message, idx) => 
      <ListItem className={classes.chatItem} key={idx + 1}> 
          <ListItemText>{idx + 1}</ListItemText>
          <ListItemText>{message.text}</ListItemText>
          <ListItemText>{message.autor}</ListItemText>
      </ListItem>)}
      </List> 
     
  </ThemeProvider>
  
      </div>
  
  );
}

export default Chat;
