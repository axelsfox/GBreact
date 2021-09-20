import React, {useState} from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

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
      color: 'secondary',
      marginBottom: 10,
    },
    delButton: {
      position: 'absolute',
      width: 50,
      height: 50,
      right: 40,

    },
    contener: {
      position: 'relative'
    }
        
  });


function ChatList(props){
  const classes = useStyles(); 
  const [newname, setnewname] = useState('');
  
  function entNewChat(event){
    setnewname(event.target.value)
  };
  
  function addNewChat (event){
    event.preventDefault();
    props.addChat(newname);
    setnewname('')
};

function deleteChat (event){
  event.preventDefault();
  props.delChat(event.target.value);
   
};

           
      return (
     
    <Card className={classes.root}>
     <List >
      <ListItem>
            <Typography className={classes.header} color="primary">
            Chat Name
            </Typography>
      </ListItem>
        
        {props.chats.map(chat =>  
        <ListItem key={chat.id}> 
            <ListItemText >
              <Link className={classes.textlinks} to={`/chats/${chat.id}`}>{chat.name}</Link>
              <Button onClick={deleteChat} className={classes.delButton} id = {chat.id} variant="contained" type="click" color="secondary">
              Delete
            </Button>
            </ListItemText>
            
      </ListItem>) } 
          
  <ListItem className={classes.contener}>
  <form onSubmit={addNewChat}>
          <TextField className={classes.text} id="outlined-basic" value= {newname} onChange={entNewChat} label="New Chat Name" />
            <Button style={{margin: '20px'}} variant="contained" type="submit" color="secondary">
              Add
            </Button>
      </form>
  </ListItem>
  
  
     </List>    
    
    </Card>  
      
       
      );
    }
    
  export default ChatList;
  
   

 