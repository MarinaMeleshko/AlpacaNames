import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavigationBar from './NaigationBar';
import GenerateAlpacaName from '../GenerateName/GenerateAlpacaName';
import Footer from './Footer';
import { Route, Switch } from 'react-router';

export default function AlpacaNamesApp(props){
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className="AlpacaNames-main-container">
                <Row className="justify-content-center">
                    <Col xs={11} md={6}>
                        <Switch>
                            <Route path="/photos">
                                <h2>Photos</h2>
                            </Route>
                            <Route path="/">
                                <GenerateAlpacaName></GenerateAlpacaName>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
}
