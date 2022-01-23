import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

import DisplayName from './DisplayName';
import generateAlpacaName from '../../services/NameGenerationService'
import LocalizationContext from '../../Localization/LocalizationContext';

export default function GenerateAlpacaName(props){
    const [alpacaName, setAlpacaName] = useState("");
    const { t } = useContext(LocalizationContext);

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
                <button className="AlpacaNames-button" onClick={onGenerateAlpacaNameClick}>{t('generate')}</button>
            </Row>

            {alpacaName !== "" &&
                <Row className="justify-content-center">
                    <Link to="/addphoto" className="AlpacaNames-link">
                        {t('addPhoto')}
                    </Link>
                </Row>
            }
        </div>
    );
}