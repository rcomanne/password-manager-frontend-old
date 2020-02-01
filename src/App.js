import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Passwords from "./components/passwords";

class App extends Component {

    state = {
        name: 'Ralph',
        items: []
    };

    componentDidMount() {
        fetch('http://localhost:8080/pw/test')
            .then(res => res.json())
            .then((data) => {
                this.setState({ items: data })
            })
            .catch(console.log)
    };

    render() {
        return (
            <Container className="p-3">
                <Jumbotron>
                    <h1 className="header">Welcome to your Vault {this.state.name}</h1>
                </Jumbotron>
                <Passwords passwords={this.state.items}/>
            </Container>
        )
    };
}

export default App;
