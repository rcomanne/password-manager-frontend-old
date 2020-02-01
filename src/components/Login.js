import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormFooter from "./FormFooter";
import Container from "react-bootstrap/Container";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <Container className="p-3">
                <Form>
                    <Form.Group controlId="formLoginEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter email"
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formLoginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn-block">
                        Submit
                    </Button>
                </Form>
                <FormFooter/>
            </Container>
        )
    }
}

export default Login;