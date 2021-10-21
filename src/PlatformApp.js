import React from 'react';
import {Provider} from 'react-redux';
import Routes from './routes/Routes';
import {store} from './store/store';

export const PlatformApp = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}