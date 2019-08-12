import React, { Component } from 'react';

import Page1Header from './page1-header';
import Page1Body from './page1-body';

import './page1.css';

export default class Page1 extends Component {
    
    render() {
        return (
            <div className="page1-app-container">
                <Page1Header />
                <Page1Body />
            </div>
        );
    }
}