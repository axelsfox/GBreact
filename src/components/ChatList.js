import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

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
    textlinks: {
      textDecoration:'none',
      color: 'secondary'
    }
        
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
      
      {chats.map(chat =>  
      <ListItem key={chat.id}> 
          <ListItemText ><Link className={classes.textlinks} to={`/chats/${chat.id}`}>{chat.name}</Link></ListItemText>
    </ListItem>) }    
   </List>    
  
  </Card>  
    
     
    );
  }
  
  export default ChatList;

 