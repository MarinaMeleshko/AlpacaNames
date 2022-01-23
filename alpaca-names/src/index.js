import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AlpacaNamesApp from './components/Common/AlpacaNamesApp'
import ErrorBoundary from './components/Common/ErrorBoundary';
import LocalizationProvider from './Localization/LocalizationProvider';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router>
        <ErrorBoundary>
            <Suspense fallback={<h1>Loading...</h1>}>
                <LocalizationProvider>
                    <AlpacaNamesApp alpacaName={""}></AlpacaNamesApp>
                </LocalizationProvider>
            </Suspense>
        </ErrorBoundary>
    </Router>,
    document.getElementById('root')
);