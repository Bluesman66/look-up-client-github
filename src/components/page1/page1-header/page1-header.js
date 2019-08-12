import React from 'react';

import './page1-header.css';
import logo from '../../shared/images/logo.png';

const Page1Header = () => {
    return (
        <div className="page1-header">
            <div className="page1-header__left">
                <img className="page1-header__logo-image" src={logo} alt="" />
            </div>
        </div>
    );
}

export default Page1Header;