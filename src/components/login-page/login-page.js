import React, { Component } from 'react';

import LoginHeader from './login-header';
import LoginBody from './login-body';

import './login-page.css';

export default class LoginPage extends Component {

    render() {
        return (
            <div className="login-app-container">
                <LoginHeader />
                <LoginBody />
            </div>
        );
    }
}