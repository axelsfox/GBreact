import '../App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { showNameAction } from './store/profile/actions';
import { useSelector, useDispatch } from 'react-redux';



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
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  }
});

function Profile (){
    const classes = useStyles(); 
    const iSshowName = useSelector((state) => state.showName);
    const dispatch = useDispatch()
    
    
    const setShowName = () => {
      dispatch(showNameAction)

    };
  

  
    return (
 
<Card className={classes.root}>
  <CardContent>
  <Typography style={{fontSize: '16px', fontWeight: 'bold'}} color="secondary">
  You Profile
  </Typography>
     
    <form className={classes.form}>
        <TextField id="outlined-basic" label= 'Name'/>
        {iSshowName && 
        <TextField id="outlined-basic" label="Second Name" name="checkedH"/>}
        <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" 
        onChange={setShowName}
        />}
        label="Show Second Name?"
      />  
        
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