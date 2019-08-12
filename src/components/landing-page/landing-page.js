import React, { Component } from 'react';

import LandingHeader from './landing-header';
import LandingBody from './landing-body';

import './landing-page.css';

export default class LandingPage extends Component {
    
    render() {
        return (
            <div className="app-container">
                <LandingHeader />
                <LandingBody />
            </div>
        );
    }
}