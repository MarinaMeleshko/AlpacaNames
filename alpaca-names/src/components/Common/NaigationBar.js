import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import LocalizationContext from '../../Localization/LocalizationContext';

export default function NavigationBar(props){
    const { t } = useContext(LocalizationContext);

    return (
        <Container fluid className="AlpacaNames-nav-bar">
            <Row className="AlpacaNames-nav-bar-content">
                <div className="nav-bar-item">
                    <Link to="/">
                        <img alt={t('home')} src="/img/llama.svg"></img>
                    </Link>
                </div>
                <div className="nav-bar-item">
                    <Link to="/photos">
                        <img alt={t('photos')} src="/img/camera.svg"/>
                    </Link>
                </div>
            </Row>
        </Container>
    )
}