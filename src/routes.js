import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth';
import Logout from './Components/Logout'
import About from './Components/About'

export default (
    <Switch>
        <Route exact path="/login" component={Auth}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/about' component={About}/>
    </Switch>
)