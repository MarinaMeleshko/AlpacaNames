import React from 'react';
import { Route, Redirect } from 'react-router';

function RedirectRoute({children, redirectCondition, redirectPath, ...rest}){
    return(
        <Route {...rest}
            render={({location}) => 
            redirectCondition ? (<Redirect to={{pathname: redirectPath, state: {from: location}}}></Redirect>)
            : (children)}
        >
        </Route>
    );
}

export default RedirectRoute;