import React from "react";
import Table from "react-bootstrap/Table";
import PasswordView from "./PasswordView";
import Container from "react-bootstrap/Container";

class Passwords extends React.Component {
    state = {
        name: 'Ralph',
        passwords: []
    };

    componentDidMount() {
        fetch('http://localhost:8080/pw/test')
            .then(res => res.json())
            .then((data) => {
                this.setState({passwords: data})
            })
            .catch(console.log)
    };

    render() {
        return (
            <Container className="p-3">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Domain</th>
                        <th>Username/Email</th>
                        <th>Password</th>
                        <th>Decrypt</th>
                    </tr>
                    </thead>
                    {this.state.passwords.map((password) => (
                        renderPasswordView(password.domain, password.name, password.password)
                    ))}
                </Table>
            </Container>
        )
    }
}

function renderPasswordView(domain, username, password) {
    return <PasswordView domain={domain} username={username} password={password}/>;
}

export default Passwords;