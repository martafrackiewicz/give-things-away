import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';

const App = () => {
    return (
        <BrowserRouter basename="/give-things-away">
            <Route exact path='/' component={Home} />
        </BrowserRouter>
    )
}

export default App;