import '../App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//Добавить домашнюю страницу по адресу “/” со списком ссылок на страницу чатов и страницу профиля.
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

function NoChats (){
    const classes = useStyles(); 
  
    return (
 
<Card className={classes.root}>
  <CardContent>
  <Typography style={{fontSize: '16px', fontWeight: 'bold'}} color="secondary">
  There is no such chat like that you searching 
  Please, Select a chat
  </Typography>
</CardContent>  
</Card>  
   
  );
}

export default NoChats;