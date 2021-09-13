//4. Добавить “массив чатов” - массив объектов с полями name и id (в качестве id можно выбрать любую уникальную строку). 
//Добавить список чатов - он должен отображаться слева от списка сообщений. 
//Используйте List и ListItem из material-ui (список пока не несет никакой функциональности).

import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: 500,
      height: 500,
      textAlign: 'left',
      margin: 30,
      padding: 20,
    },

    header: {
      fontSize: 20,
      fontWeight: 'bold',
    },
        
  });


function ChatList({chats}){

const classes = useStyles(); 
         
    return (
   
  <Card className={classes.root}>
   <List >
    <ListItem>
          <Typography className={classes.header} color="primary">
          Chat Name
          </Typography>
    </ListItem>
      
      {chats.map(n =>  
      <ListItem key={n.id}> 
          <ListItemText>{n.name}</ListItemText>
    </ListItem>) }    
   </List>    
  
  </Card>  
    
     
    );
  }
  
  export default ChatList;

 