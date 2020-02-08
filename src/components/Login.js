import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UserFooter from "./UserFooter";
import Container from "react-bootstrap/Container";
import UserHeader from "./UserHeader";
import Alert from "react-bootstrap/Alert";
import {setBearer} from "../redux/actions";
import {connect} from "react-redux";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            password: '',
            alerts: []
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

        console.log("submit login form");
        const response = await fetch('http://localhost:8080/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "mail": this.state.mail,
                "password": this.state.password
            })
        })
            .catch(console.log);

        console.log(response);

        if (response.ok) {
            // login succeeded
            const json = await response.json();
            console.log(json);

            const token = json.jwtToken;

            if (token) {
                // token is present, set in App and return to Overview
                // this.props.setJwtToken(token);
                this.props.setBearer(token)
            } else {
                // token is NOT present, stay on page and show message
                this.setState({ alerts: <Alert key="loginAlert" variant="danger">No token received!</Alert> })
            }
        } else {
            // login failed
            this.setState({ alerts: <Alert key="loginAlert" variant="danger">Login Failed!</Alert> })
        }


    };

    render() {
        return (
            <Container className="p-3">
                <UserHeader headerMessage={this.props.headerMessage}/>
                {this.state.alerts}
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

export default connect(
    null,
    { setBearer }
)(Login);
