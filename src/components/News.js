import React, {useEffect} from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Button, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from './store/articles/action';
import { selectArticles, selectArticlesError, selectArticlesLoading } from './store/articles/selectors';

const useStyles = makeStyles({
    root: {
      width: 500,
      height: 'auto',
      textAlign: 'left',
      margin: 30,
      padding: 20,
    },

}
);

function News() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const error = useSelector(selectArticlesError);
    const loading = useSelector(selectArticlesLoading);
    const articles = useSelector(selectArticles)
    

    function reLoad(){
       dispatch(getArticles());
    };

    useEffect(() =>{
        reLoad()
    }, []);


    
 return (
    <Card className={classes.root}>
    <List >
     <ListItem>
           <Typography className={classes.header} color="primary">
           Fresh News
           </Typography>
     </ListItem>
     {error ? 
     (<ListItem>Error: {error}
        <Button variant="contained" type="click" color="secondary" onClick={reLoad}>RELOAD</Button>
    </ListItem>) 
    : (
        articles.map((art) => (
        <ListItem key={art.id}> 
        <ListItemText>{art.title}</ListItemText>
        </ListItem>))
    )
    }
    </List >
    {loading && <CircularProgress />}
    </Card>
 )
}

export default News