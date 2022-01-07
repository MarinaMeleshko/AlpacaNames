import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function NavigationBar(props){
    return (
        <Container fluid className="AlpacaNames-nav-bar">
            <Row className="AlpacaNames-nav-bar-content">
                <div className="nav-bar-item">
                    <Link to="/">
                        <img alt="Home" src="/img/llama.svg"></img>
                    </Link>
                </div>
                <div className="nav-bar-item">
                    <Link to="/photos">
                        <img alt="Photos" src="/img/camera.svg"/>
                    </Link>
                </div>
            </Row>
        </Container>
    )
}