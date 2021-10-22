import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginScreenWrapper from '../components/login/LoginScreen';
import HomeScreen from '../components/home/HomeScreen'
import ButtonScreen from '../components/button/ButtonScreen'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login/" component={LoginScreenWrapper}/>
                <Route exact path="/home/" component={HomeScreen}/>
                <Route exact path="/button/" component={ButtonScreen}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;