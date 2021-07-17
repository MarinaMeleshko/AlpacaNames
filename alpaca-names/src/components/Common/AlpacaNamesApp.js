import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavigationBar from './NaigationBar';
import GenerateAlpacaName from '../GenerateName/GenerateAlpacaName';

export default function AlpacaNamesApp(props){
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={6}>
                        <GenerateAlpacaName></GenerateAlpacaName>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
