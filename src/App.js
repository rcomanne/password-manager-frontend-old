import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "react-bootstrap/Container";
import Login from "./components/Login";
import {Route, Switch} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import Passwords from "./components/Passwords";
import Register from "./components/Register";
import Home from "./components/Home";
import {getBearer, getRefresh} from "./redux/selectors";
import {connect} from "react-redux";

class App extends Component {
    constructor(props) {
        super(props);
        console.log("Props: ", props);
        this.state = {
            bearer: props.bearerToken,
            refresh: props.refreshToken
        };

        this.isLoggedIn = this.isLoggedIn.bind(this);
    }

    isLoggedIn() {
        // const token = getBearer(store);
        // console.log(token);
        // return token != null && token !== "";
        return false;
    }

    render() {
        let login_overview, register_add;
        if (this.isLoggedIn()) {
            login_overview = <NavLink href="/overview">Overview</NavLink>;
            register_add = <NavLink href="/add">Add password</NavLink>;
        } else {
            login_overview = <NavLink href="/login">Login</NavLink>;
            register_add = <NavLink href="/register">Register</NavLink>;
        }

        console.log("rendering App page with state: ", this.state);

        return (
            <Container className="p-3">
                <h1>Your JWT is: {this.state.jwt}</h1>
                    <Navbar variant="light" expand="md" sticky="top">
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            {login_overview}
                        </NavItem>
                        <NavItem>
                            {register_add}
                        </NavItem>
                    </Navbar>

                    <Switch>
                        <Route exact path="/">
                            <Home headerMessage='Welcome to your Vault.'/>
                        </Route>
                        <Route path="/overview">
                            <Passwords headerMessage='View all your Passwords in the Vault.'/>
                        </Route>
                        <Route path="/add">
                            <Passwords headerMessage='Add your Password(s) to the Vault.'/>
                        </Route>
                        <Route path="/login">
                            <Login
                                // setJwtToken={this.setJwtToken}
                                headerMessage='Please log in to your Vault.'/>
                        </Route>
                        <Route path="/register">
                            <Register
                                // setJwtToken={this.setJwtToken}
                                headerMessage='Register to get your own Vault.'/>
                        </Route>
                    </Switch>
            </Container>
        )
    };
}

const mapStateToProps = state => {
    const bearerToken = getBearer(state);
    const refreshToken = getRefresh(state);
    return { bearerToken, refreshToken };
};

export default connect(mapStateToProps)(App)
// export default App;
