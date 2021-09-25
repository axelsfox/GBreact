import '../App.css';
import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { showNameAction, changeName } from './store/profile/actions';
import { useSelector, useDispatch } from 'react-redux';
import {selectorProfileName, selectorIsShowName} from './store/profile/selectors'


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
   const name = useSelector(selectorProfileName);
    const iSshowName = useSelector(selectorIsShowName);
    const dispatch = useDispatch()
    const [value, setValue] = useState('');

  const setShowName = () => {
      dispatch(showNameAction)
   };
  const handleChange = useCallback((e) => {
      setValue(e.target.value);
   }, []);

  const setName = useCallback(() => {
    dispatch(changeName(value))
  }, [dispatch, value]);
  
  console.log(selectorProfileName	);   

  
    return (
 
<Card className={classes.root}>
  <CardContent>
  <Typography style={{fontSize: '16px', fontWeight: 'bold'}} color="secondary">
  You Profile
  </Typography>
     
    <form className={classes.form}>
        <TextField id="outlined-basic" label= {name} value={value} onChange={handleChange}/>
        {iSshowName && 
        <TextField id="outlined-basic" label="Second Name" name="checkedH"/>}
        <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" 
        onChange={setShowName}
        />}
        label="Show Second Name?"
      />  
        
        <TextField id="outlined-basic" label="Age" />
          <Button style={{margin: '20px'}} variant="contained" type="button" color="secondary"
          onClick={setName}>
            Save
          </Button>
    </form>
    </CardContent>  
</Card>  
   
  );
}

export default Profile;