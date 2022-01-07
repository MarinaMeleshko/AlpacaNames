import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

import DisplayName from './DisplayName';
import generateAlpacaName from '../../services/NameGenerationService'

class GenerateAlpacaName extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            alpacaName: "",
            updateAlpacaName: props.updateAlpacaName
        };
        
        this.generateAlpacaName = this.generateAlpacaName.bind(this);
    }

    generateAlpacaName(){
        generateAlpacaName()
            .then(name => {
                this.setState(() => ({alpacaName: name}));
                this.state.updateAlpacaName(name);
            });
    }

    render(){
        return (
            <>
            <div className="AlpacaNames-card">
                <Row className="justify-content-center">
                    <DisplayName name={this.state.alpacaName}></DisplayName>
                </Row>
                <Row className="justify-content-center">
                    <button className="AlpacaNames-button" onClick={this.generateAlpacaName}>Generate</button>
                </Row>

                {this.state.alpacaName !== "" &&
                    <Row className="justify-content-center">
                        <Link to="/addphoto" className="AlpacaNames-link">
                            Add photo
                        </Link>
                    </Row>
                }
            </div>
            </>
        )
    }
}

export default GenerateAlpacaName;