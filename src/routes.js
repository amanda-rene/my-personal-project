import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth';

export default (
    <Switch>
        <Route exact path="/login" component={Auth}/>
        {/* <Route path='/logout' component={Auth}/> */}
    </Switch>
)