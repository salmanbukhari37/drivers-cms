import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Main from '@modules/main/Main';
import Login from '@modules/login/Login';
import Customer from './customer/containers/Customer';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import './App.scss';
import Schedule from 'schedule/containers/Schedule';

const App = () => {
    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/login">
                    <Login />
                </PublicRoute>
                <PrivateRoute path="/schedule">
                    <Schedule />
                </PrivateRoute>
                <PrivateRoute path="/customer">
                    <Customer />
                </PrivateRoute>
                <PrivateRoute path="/">
                    <Main />
                </PrivateRoute>
            </Switch>
        </Router>
    );
};

export default App;
