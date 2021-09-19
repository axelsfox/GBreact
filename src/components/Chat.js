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

  const initialMessages = [
    {id: 1, chatid: 111, text: "первый чат", autor: 'HUMAN'},
    {id: 2, chatid: 121, text: "второй чат", autor: 'HUMAN'},
    {id: 3, chatid: 121, text: "второй чат", autor: 'HUMAN'},
    {id: 4, chatid: 131, text: "и еще один чат", autor: 'HUMAN'},
    {id: 5, chatid: 131, text: "и еще один чат", autor: 'HUMAN'},
    {id: 6, chatid: 131, text: "и еще один чат", autor: 'HUMAN'}
  ];

  const {chatId} = useParams();
  const classes = useStyles();
  const inputRef = useRef(null);
  const [messageList, setmessageList] = useState(initialMessages);
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



 function newMessage(pm) {
    setmessageList(
        messageList => [...messageList, {id: new Date(), chatid: Number(chatId), text: pm, autor: 'You'}]);
        /*console.log(messageList);*/
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
    setTimeout(setmessageList, 1500, (messageList => [...messageList, {id: new Date(), chatid: Number(chatId), text: 'i\'m robot?', autor: 'ME'}]))
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
      
      {messageList.filter(message => message.chatid === Number(chatId))   
      
      .map((filteredMessage, idx) => 
      <ListItem className={classes.chatItem} key={filteredMessage.id}> 
          <ListItemText>{idx+1}</ListItemText>
          <ListItemText>{filteredMessage.text}</ListItemText>
          <ListItemText>{filteredMessage.autor}</ListItemText>
      </ListItem>)}
      </List> 
     
  </ThemeProvider>
  
      </div>
  
  );
}

export default Chat;