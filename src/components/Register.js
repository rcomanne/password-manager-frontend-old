import React from "react";
import {Button, Form} from "react-bootstrap";
import UserFooter from "./UserFooter";
import Container from "react-bootstrap/Container";
import UserHeader from "./UserHeader";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            mail: '',
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

    async handleSubmit(event) {
        event.preventDefault();
        console.log("submit register form");
        const res = await fetch('http://localhost:8080/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "mail": this.state.mail,
                "username": this.state.username,
                "password": this.state.password
            })
        })
            .catch(console.log);

        console.log(res);

        if (res.ok) {
            // registration succeeded
            window.location.href = "/overview"
        } else {
            // registration fails for whatever reason
            console.log("Retrieved error from (connecting to) server\n", res)
        }
    };

    render() {
        return (
            <Container className="p-3">
                <UserHeader headerMessage={this.props.headerMessage}/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="mail" onChange={this.handleChange}>
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
                <UserFooter/>
            </Container>
        )
    }
}

export default Register;