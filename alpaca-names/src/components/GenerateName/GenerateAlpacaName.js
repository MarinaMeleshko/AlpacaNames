import React from 'react';
import Row from 'react-bootstrap/Row';

import DisplayName from './DisplayName';
import generateAlpacaName from '../../services/NameGenerationService'

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
            <div class="AlpacaNames-card">
                <Row className="justify-content-center">
                    <DisplayName name={this.state.alpacaName}></DisplayName>
                </Row>
                <Row className="justify-content-center">
                    <button className="AlpacaNames-button" onClick={this.generateAlpacaName}>Generate</button>
                </Row>
                <Row className="justify-content-center">
                    <a href="#" className="AlpacaNames-link">Add photo</a>
                </Row>
            </div>
        )
    }
}

export default GenerateAlpacaName;