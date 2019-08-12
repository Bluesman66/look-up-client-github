import React from 'react';
import { NavLink } from 'react-router-dom';

import './landing-header.css';
import logo from '../../shared/images/logo.png';

const LandingHeader = () => {

    return (
        <div className="landing-header">
            <div className="landing-header__left">
                <img className="landing-header__logo-image" src={logo} alt=""></img>
                <div className="landing-header__logo-text">Gravity</div>
            </div>
            <div className="landing-header__right">                
                <NavLink className="landing-header__login landing-header__loging--visibility" to="/login">Log In to Gravity</NavLink>                
                <NavLink className="landing-header__login landing-header__login--visibility" to="/login">Log In</NavLink>
            </div>
        </div>
    );
};

export default LandingHeader;