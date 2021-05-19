import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import LayoutRoute from './LayoutRoute';
import MainScreen from './screens/MainScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import HumansRegistrationScreen from './screens/HumansRegistrationScreen'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={MainScreen} />
                <LayoutRoute path="/about" exact={true} component={AboutScreen} />
                <LayoutRoute path="/contact" exact={true} component={ContactScreen} />
                <LayoutRoute path="/register-human" exact={true} component={HumansRegistrationScreen} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;