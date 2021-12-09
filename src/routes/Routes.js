import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginScreenWrapper from '../components/login/LoginScreen';
import HomeScreen from '../components/home/HomeScreen';
import IndexScreen from '../components/index/IndexScreen';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IndexScreen}/>
                <Route exact path="/login/" component={LoginScreenWrapper}/>
                <Route exact path="/home/" component={HomeScreen}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;