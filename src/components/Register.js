import React from "react";
import {Form, Button, Container} from "react-bootstrap";

import FormFooter from "./FormFooter";


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit() {
        console.log("submit form");
        // TODO: POST the state data
    };

    render() {
        return (
            <Container className="p-3">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="email" onChange={this.handleChange}>
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
                        <Form.Group controlId="username" onChange={this.handleChange}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter username"
                            />
                        </Form.Group>
                        <Form.Group controlId="password" onChange={this.handleChange}>
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

export default Register;