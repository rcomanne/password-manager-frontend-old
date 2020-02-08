import React from 'react';
import ReactDOM from 'react-dom';
// Importing the Bootstrap CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Router>
        <App/>
    </Router>
    , document.getElementById('root')
);
