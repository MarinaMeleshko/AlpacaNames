import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AlpacaNamesApp from './components/Common/AlpacaNamesApp'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router>
        <AlpacaNamesApp></AlpacaNamesApp>
    </Router>,
    document.getElementById('root')
);