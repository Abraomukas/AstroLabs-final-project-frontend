import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainScreen from './screens/MainScreen';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={MainScreen} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;