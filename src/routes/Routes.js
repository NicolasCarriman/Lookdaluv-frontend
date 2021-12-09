import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginScreenWrapper from '../components/login/LoginScreen';
import IndexScreen from '../components/index/IndexScreen';



function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IndexScreen}/>
                <Route exact path="/login/" component={LoginScreenWrapper}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;