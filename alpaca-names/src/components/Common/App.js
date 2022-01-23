import React, {Suspense} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AlpacaNamesApp from "./AlpacaNamesApp";
import ErrorBoundary from "./ErrorBoundary";
import LocalizationProvider from '../../Localization/LocalizationProvider';

export default function App(props){
    return (
        <Router>
            <ErrorBoundary>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <LocalizationProvider>
                        <AlpacaNamesApp alpacaName={""}></AlpacaNamesApp>
                    </LocalizationProvider>
                </Suspense>
            </ErrorBoundary>
        </Router>
    );
}