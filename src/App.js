import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import LayoutRoute from './LayoutRoute';
import MainScreen from './screens/MainScreen';
import AboutScreen from './screens/AboutScreen';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={MainScreen} />
                <LayoutRoute path="/about" exact={true} component={AboutScreen} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;