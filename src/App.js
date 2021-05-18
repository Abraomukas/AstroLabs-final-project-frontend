import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainScreen from './screens/MainScreen';
import AboutScreen from './screens/AboutScreen';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={MainScreen} />
                <Route path="/about" exact={true} component={AboutScreen} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;