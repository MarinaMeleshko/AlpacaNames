import React from 'react';
import DisplayName from './DisplayName';

class GenerateAlpacaName extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            alpacaName: ""
        };
        
        this.generateAlpacaName = this.generateAlpacaName.bind(this);
    }

    generateAlpacaName(){
        //todo: retrieve name from service
        var name = "New name";

        this.setState(state => ({alpacaName: name}));
    }

    render(){
        return (
            <div>
                <DisplayName name={this.state.alpacaName}></DisplayName>
                <button onClick={this.generateAlpacaName}>Generate</button>
            </div>
        )
    }
}

export default GenerateAlpacaName;