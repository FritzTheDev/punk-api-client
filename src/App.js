import React from 'react';
import { hot } from 'react-hot-loader';
import AppNavbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
    <div>
        <AppNavbar />
    </div>
    );
}

export default hot(module)(App);