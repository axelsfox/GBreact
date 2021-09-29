import '../App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

function NotFound (){
    const classes = useStyles(); 
  
    return (
 
<Card className={classes.root}>
  <CardContent>
  <Typography style={{fontSize: '16px', fontWeight: 'italic'}} color="secondary">
  There is no such page like that you searching
  </Typography>
</CardContent>  
</Card>  
   
  );
}

export default NotFound;