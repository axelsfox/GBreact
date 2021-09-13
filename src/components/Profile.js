import '../App.css';
import React from 'react';
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

function Profile (){
    const classes = useStyles(); 
  
    return (
 
<Card className={classes.root}>
  <CardContent>
  <Typography style={{fontSize: '16px', fontWeight: 'bold'}} color="secondary">
  You Profile
  </Typography>
     
    <form >
        <TextField id="outlined-basic" label="Fist Name" />
        <TextField id="outlined-basic" label="Second Name" />
        <TextField id="outlined-basic" label="Age" />
          <Button style={{margin: '20px'}} variant="contained" type="button" color="secondary">
            Save
          </Button>
    </form>
    </CardContent>  
</Card>  
   
  );
}

export default Profile;