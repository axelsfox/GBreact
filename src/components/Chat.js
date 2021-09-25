import '../App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider }  from "@material-ui/core";
import deepPurple  from "@material-ui/core/colors/deepPurple";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Message from './Message';
import ChatList from './ChatList';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from "./store/messages/actions";
import { addChat, deleteChat } from './store/chats/actions';
import {selectorProfileName} from './store/profile/selectors';
import {selectorChatsList} from './store/chats/selectors';
import {selectorVisibleMessages} from './store/messages/selectors';



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
  const classes = useStyles();
  const {chatId} = useParams();
  const dispatch = useDispatch();
  const autor = useSelector(selectorProfileName);
  const chatsList = useSelector(selectorChatsList);
  const visibleMessages = useSelector(selectorVisibleMessages);


  function addNewChat (name) {
  dispatch(addChat(name));
 };

function delChat (id) {
  dispatch(deleteChat(id));
 };
function newMessage(text) {
    dispatch(addMessage(chatId, text, autor))
  }

  
  return (
      <div className="App">
  <ThemeProvider theme={theme}>
      <Message 
      onClickMes = {newMessage}
      />
    <ChatList chats = {chatsList}
              addChat = {addNewChat}
              delChat = {delChat} />

      <List className={classes.chat}>
          <ListItem className={classes.chatItem}>
          <ListItemText>#</ListItemText>
          <ListItemText>Message-log</ListItemText>
          <ListItemText>Autor</ListItemText>
      </ListItem>
      
      {(visibleMessages[chatId] || []).map((message, idx) => 
      <ListItem className={classes.chatItem} key={message.id}> 
          <ListItemText>{idx+1}</ListItemText>
          <ListItemText>{message.text}</ListItemText>
          <ListItemText>{message.autor}</ListItemText>
      </ListItem>)}
      </List> 
     
  </ThemeProvider>
  
      </div>
  
  );
}

export default Chat;