import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';
import HomeScreen from '../components/home/HomeScreen'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login/" component={LoginScreen}/>
                <Route exact path="/home/" component={HomeScreen}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;