import '../App.css';
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    width: 500,
    textAlign: 'left',
    margin: 30,
    padding: 20,
  },
  text: {
    fontSize: 12,
    textAlign: 'center'
  }
  
});

function MyMessage(props){
  const classes = useStyles(); 
  const [textform, settextform] = useState('');


 function entNewMessage(event){
    settextform(event.target.value)
  };
  
  function handleClick (event){
    event.preventDefault();
    props.onClickMes(textform);
  }
    
  return (
 
<Card className={classes.root}>
  <CardContent>
  <Typography style={{fontSize: '16px', fontWeight: 'bold'}} color="secondary">
  New message here
  </Typography>
     
    <form onSubmit={handleClick}>
        <TextField inputRef = {props.input} className={classes.text} value={textform} onChange={entNewMessage}
                  id="outlined-basic" label="Enter U Message" />
          <Button style={{margin: '20px'}} variant="contained" type="submit" color="secondary">
            Send Message
          </Button>
    </form>
    </CardContent>  
</Card>  
  
   
  );
}

export default MyMessage;