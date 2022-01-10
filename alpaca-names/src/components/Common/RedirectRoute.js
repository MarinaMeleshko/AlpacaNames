import React from 'react';
import { Route, Redirect } from 'react-router';

export default function RedirectRoute({children, isRedirect, redirectPath, ...rest}){
    return(
        <Route {...rest}
            render={({location}) => 
            isRedirect ? (<Redirect to={{pathname: redirectPath, state: {from: location}}}></Redirect>)
            : (children)}
        >
        </Route>
    );
}