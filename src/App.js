import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppNavbar from './components/Navbar';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
    <Router>
        <div>
            <AppNavbar />
            {/* div to account for "Fixed" Navbar not taking space */}
            <div style={{ marginTop: 56 }}>
                <Route exact path="/" component={Home} />
                
            </div>
        </div>
    </Router>
    );
}

export default hot(module)(App);