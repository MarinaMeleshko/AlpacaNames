import React, {useState} from 'react';
import { Route, Switch } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RedirectRoute from './RedirectRoute';

import NavigationBar from './NaigationBar';
import GenerateAlpacaName from '../GenerateName/GenerateAlpacaName';
import AddAlpacaPhoto from '../AddPhoto/AddAlpacaPhoto';
import Footer from './Footer';

export default function AlpacaNamesApp(props){
    const [alpacaName, setAlpacaName] = useState(props.alpacaName);

    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className="AlpacaNames-main-container">
                <Row className="justify-content-center content">
                    <Col xs={11} md={6}>
                        <Switch>
                            <Route path="/photos">
                                <h2>Photos</h2>
                            </Route>
                            <RedirectRoute path="/addphoto" isRedirect={alpacaName === ""} redirectPath={"/"}>
                                <AddAlpacaPhoto alpacaName={alpacaName}></AddAlpacaPhoto>
                            </RedirectRoute>
                            <Route path="/">
                                <GenerateAlpacaName updateAlpacaName={setAlpacaName}></GenerateAlpacaName>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
                <Footer className="footer"></Footer>
            </Container>
        </div>
    );
}
