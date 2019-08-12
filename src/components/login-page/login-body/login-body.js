import React from 'react';

import '../../shared/shared.css';
import './login-body.css';

const LoginBody = () => {
    return (
        <div className="login-body">
            <div className="login-body__form">
                <div className="login-body__content">
                    <div className="login-body__title">Account login</div>
                    <div className="login-body__input-group">
                        <div className="login-body__label">Username</div>
                        <input className="login-body__input" placeholder="eg.Sara24"></input>                        
                        <div className="login-body__label login-body__label--padding-top">Password</div>
                        <input className="login-body__input" type="password" placeholder="*********"></input>
                    </div>
                    {/* eslint-disable-next-line */}
                    <a className="nice-button nice-button--sign-in" href="#">Sign in</a>
                    <div className="login-body__social-networks">
                        <div className="login-body__sn-title">Or login with</div>
                        <div className="login-body__sn-buttons">
                            {/* eslint-disable-next-line */}
                            <a className="nice-button nice-button--facebook" href="#">f</a>
                            {/* eslint-disable-next-line */}
                            <a className="nice-button nice-button--google" href="#">G</a>
                        </div>
                        {/* eslint-disable-next-line */}
                        <a className="login-body__forgot-password" href="#">Forgot your password</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginBody;