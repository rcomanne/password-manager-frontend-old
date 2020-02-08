import React from 'react';
import ReactDOM from 'react-dom';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    rootElement
);
