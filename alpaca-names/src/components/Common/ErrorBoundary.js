import { process } from 'ipaddr.js';
import React from 'react';

export default class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null, 
            errorInfo: null
        };
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render(){
        if(this.state.error){
            return(
                <div>
                    <h2>Something went wrong. Please try again later.</h2>
                    <details>
                        {this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}