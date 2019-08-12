import React from 'react';
import { NavLink } from 'react-router-dom';

import './login-header.css';
import logo from '../../shared/images/logo.png';

const LoginHeader = () => {
    return (
        <div className="login-header">
            <div className="login-header__left">
                <img className="login-header__logo-image" src={logo} alt=""></img>
                <div className="login-header__logo-text">Gravity</div>
            </div>
            <div className="login-header__right">                
                <NavLink className="login-header__home" to="/"></NavLink>
            </div>
        </div>
    );
}

export default LoginHeader;