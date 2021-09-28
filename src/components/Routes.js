import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import HomePage from "./Homepage";
import Chat from './Chat'
import NotFound from "./NotFound";
import Profile from "./Profile"

export const Routes = () => {
      
    return (
        <BrowserRouter>
    <Card style={{height: 300, fontWeight: 'bold'}}>  
    <List>
        <ListItem>
           <Link style={{textDecoration: 'none'}} to="/">HOME</Link>
        </ListItem>
        
        <ListItem>
           <Link style={{textDecoration: 'none'}} to="/profile">PROFILE</Link>
        </ListItem>

         <ListItem>
           <Link style={{textDecoration: 'none'}} to="/chats">CHATS</Link>
        </ListItem>
    </List>
     
     </Card>  

        <Switch>
           <Route path="/" exact>
               <HomePage />
            </Route> 
            <Route path="/chats/:chatId?">
               <Chat />
            </Route> 
            <Route path="/profile">
               <Profile />
            </Route> 
            <Route >
               <NotFound/>
            </Route> 
        </Switch>
        </BrowserRouter>
    )

}