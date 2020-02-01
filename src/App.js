import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class App extends Component {

    render() {
        return (
            <Container className="p-3">
                <Jumbotron>
                    <h1 className="header text-center">Welcome to your Password Manager</h1>
                </Jumbotron>
                <Row>
                    <Col>
                        <p className="text-center">Already have an account?</p>
                    </Col>
                    <Col>
                        <p className="text-center">Don't have an account yet?</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button href="/login" variant="primary" type="button" className="btn-block">
                            Login
                        </Button>
                    </Col>
                    <Col>
                        <Button href="/register" variant="primary" type="button" className="btn-block">
                            Register
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    };
}

export default App;
