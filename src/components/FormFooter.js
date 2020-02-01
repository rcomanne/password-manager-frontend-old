import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class FormFooter extends React.Component {
    render() {
        return (
            <Container fluid="md">
                <Row>
                    <Col>
                        <p className="forgot-password text-left">
                            Don't haven an account? <a href="/register">Register</a>
                        </p>
                    </Col>
                    <Col>
                        <p className="forgot-password text-right">
                            Forgot <a href="/login">password?</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default FormFooter;