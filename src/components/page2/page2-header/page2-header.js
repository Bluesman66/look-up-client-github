import React from 'react';

import './page2-header.css';
import logo from '../../shared/images/logo.png';

const Page2Header = () => {
    return (
        <div className="page2-header">
            <div className="page2-header__left">
                <img className="page2-header__logo-image" src={logo} alt=""></img>                
            </div>
            <div className="page2-header__right">                
            </div>
        </div>
    );
}

export default Page2Header;