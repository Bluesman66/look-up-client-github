import React, { Component } from 'react';

import Page2Header from './page2-header';
import Page2Body from './page2-body';

import './page2.css';

export default class Page2 extends Component {
    
    render() {
        return (
            <div className="page2-app-container">
                <Page2Header />
                <Page2Body />
            </div>
        );
    }
}