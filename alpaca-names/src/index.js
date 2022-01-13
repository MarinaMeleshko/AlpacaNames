import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AlpacaNamesApp from './components/Common/AlpacaNamesApp'
import ErrorBoundary from './components/Common/ErrorBoundary';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router>
        <ErrorBoundary>
            <AlpacaNamesApp alpacaName={""}></AlpacaNamesApp>
        </ErrorBoundary>
    </Router>,
    document.getElementById('root')
);