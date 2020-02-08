import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class UserFooter extends React.Component {
    render() {
        return (
            <Container className="p-3">
                <Row>
                    <Col>
                        <p className="forgot-password text-left">
                            Already have an account? <a href="/login">Login</a>
                        </p>
                    </Col>
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

export default UserFooter;