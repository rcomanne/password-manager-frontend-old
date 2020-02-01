import React from "react";
import Table from "react-bootstrap/Table";
import PasswordView from "./PasswordView";

const Passwords = ({ passwords }) => {
    function renderPasswordView(domain, username, password) {
        return <PasswordView domain={domain} username={username} password={password}/>;
    }

    return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Domain</th>
                    <th>Username/Email</th>
                    <th>Password</th>
                    <th>Decrypt</th>
                </tr>
                </thead>
                {passwords.map((password) => (
                    renderPasswordView(password.domain, password.name, password.password)
                ))}
            </Table>
    )
};

export default Passwords;