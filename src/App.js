import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppNavbar from './components/Navbar/Navbar';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
    <Router>
        <div>
            <AppNavbar />
                <Route exact path="/" component={Home} />
        </div>
    </Router>
    );
}

export default hot(module)(App);