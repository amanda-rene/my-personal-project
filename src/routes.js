import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth';
import Logout from './Components/Logout'
import About from './Components/About'
import Post from './Components/Post'
import { Home } from '@material-ui/icons';

export default (
    <Switch>
        <Route exact path="/login" component={Auth}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/about' component={About}/>
        <Route path='/add/post' component={Post}/>
        <Route path='/home' component={Home}/>
    </Switch>
)