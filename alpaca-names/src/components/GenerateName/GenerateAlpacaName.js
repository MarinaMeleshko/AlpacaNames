import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

import DisplayName from './DisplayName';
import generateAlpacaName from '../../services/NameGenerationService'

export default function GenerateAlpacaName(props){
    const [alpacaName, setAlpacaName] = useState("");

    const onGenerateAlpacaNameClick = function(){
        generateAlpacaName()
            .then(name => {
                setAlpacaName(name);
                props.updateAlpacaName(name);
            })
    };

    return (
        <div className="AlpacaNames-card">
            <Row className="justify-content-center">
                <DisplayName name={alpacaName}></DisplayName>
            </Row>
            <Row className="justify-content-center">
                <button className="AlpacaNames-button" onClick={onGenerateAlpacaNameClick}>Generate</button>
            </Row>

            {alpacaName !== "" &&
                <Row className="justify-content-center">
                    <Link to="/addphoto" className="AlpacaNames-link">
                        Add photo
                    </Link>
                </Row>
            }
        </div>
    );
}