import React from 'react';
import ReactDOM from 'react-dom';

// import {Route} from "react-router";

import App from './App';

// Importing the Bootstrap CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import Register from "./components/Register";
import Passwords from "./components/Passwords";
import {BrowserRouter, Route} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/overview" component={Passwords}/>
        <Route exact path="/" component={App}/>
    </BrowserRouter>,
    document.getElementById('root'));