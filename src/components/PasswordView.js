import React from "react";
import Button from "react-bootstrap/Button";

class PasswordView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            domain: props.domain,
            password: props.password,
        }
    }

    render() {
        return (
            <tbody>
            <tr className="password-view">
                <td key={this.state.domain}>{this.state.domain}</td>
                <td key={this.state.name}>{this.state.name}</td>
                <td key={this.state.password}><input type="password" value={this.state.password} readOnly={true}/></td>
                <td>
                    <Button
                        onClick={() => {
                            decrypt(this.state.name);
                            this.setState({password: 'decrypted'})
                        }}>Decrypt
                    </Button>
                </td>
            </tr>
            </tbody>
        )
    }
}

function decrypt(name) {
    fetch("http://localhost:8080/pw/" + name)
        .then(res => res.json())
        .then((data) => {
            this.setState({items: data})
        })
        .catch(console.log)

}

export default PasswordView;