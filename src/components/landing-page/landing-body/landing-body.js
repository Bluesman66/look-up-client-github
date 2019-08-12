import React, { Component } from 'react';

import './landing-body.css';

import phone_hand from './images/phone-hand.png';
import phone_content from './images/phone-content.png';
import s_154 from './images/s-154.png';
import s_157 from './images/s-157.png';
import s_10 from './images/s-10.png';
import s_79 from '../../shared/images/s-79.png';
import line from '../../shared/images/line.png';
import vector from './images/vector.png';

export default class LandingBody extends Component {

    componentDidMount = () => {
        const bodyNotify = document.getElementById('notify');
        const bodySigning = document.getElementById('landing-body-signing');
        const notifyMe = document.getElementById('notify-me');
        if (notifyMe) {
            notifyMe.addEventListener('click', (event) => {
                if (bodyNotify) {
                    bodyNotify.classList.toggle('notify--hide');
                }
                if (bodySigning) {
                    bodySigning.classList.toggle('landing-body__signing--hide');
                }
            })
        }
    };

    render() {
        return (
            <div className="landing-body">
                <div className="landing-body__left">
                    <div className="landing-body__phone">
                        <img className="landing-body__phone-hand" src={phone_hand} alt="" />
                        <img className="landing-body__phone-content" src={phone_content} alt="" />
                    </div>
                </div>
                <div className="landing-body__right">
                    <div className="landing-body__bottom-container">
                        <div className="landing-body__title">Use astrology to find your perfect match!</div>
                        <div className="notify" id="notify">
                            <div className="notify__desc">
                                Sign up for a VIP pass and we’ll notify you when you can access the full site for free. Including your personal astrology report
                            </div>
                            <div className="notify__input">
                                <input className="notify__input-control" placeholder=" Your email"></input>
                                {/* eslint-disable-next-line */}
                                <a className="notify__input-button" id="notify-me">Notify Me</a>
                            </div>
                            <div className="notify__message">We promise not to spam you</div>
                        </div>
                        <div className="landing-body__signing landing-body__signing--hide" id="landing-body-signing">
                            <img className="landing-body__signing-icon" src={vector} alt="" />
                            <div className="landing-body__signing-message">
                                <div className="landing-body__signing-title">Thanks for Signing Up!</div>
                                <div className="landing-body__signing-text"> A  message has been sent to your inbox and a free VIP pass is on your way.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing-body__flying-bar landing-body__shapes--visibility">
                    <div className="landing-body__flying-bar-right">
                        <img className="landing-s-10" src={s_10} alt="" />
                        <img className="landing-s-79" src={s_79} alt="" />
                        <img className="landing-line" src={line} alt="" />
                    </div>
                </div>
                <div className="landing-body__footer landing-body__shapes--visibility">
                    <div className="landing-body__footer-left">
                        <img className="landing-s-154" src={s_154} alt="" />
                        <img className="landing-s-157" src={s_157} alt="" />
                    </div>
                </div>                
            </div>
        );
    };
};