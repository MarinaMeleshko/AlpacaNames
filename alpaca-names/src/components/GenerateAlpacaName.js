import React from 'react';
import DisplayName from './DisplayName';
import generateAlpacaName from '../services/NameGenerationService'

class GenerateAlpacaName extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            alpacaName: ""
        };
        
        this.generateAlpacaName = this.generateAlpacaName.bind(this);
    }

    generateAlpacaName(){
        generateAlpacaName()
            .then(name => {
                this.setState(() => ({alpacaName: name}));
            });
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