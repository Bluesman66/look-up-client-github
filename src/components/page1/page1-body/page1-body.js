import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../shared/shared.css';
import './page1-body.css';

import s_79 from '../../shared/images/s-79.png';
import line from '../../shared/images/line.png';
import s_7 from '../../shared/images/s-7.png';
import photo_left from './images/photo-left.png';
import photo_right from './images/photo-right.png';
import match from './images/match.svg';
import rectangle_left from './images/rectangle-left.png';
import rectangle_right from './images/rectangle-right.png';

const Page1Body = () => {
    return (
        <div className="page1-body">
            <div className="page1-body-container">
                <div className="page1-body__shape-container">
                    <img className="page1-s-79" src={s_79} alt="" />
                    <img className="page1-line" src={line} alt="" />
                </div>

                <div className="page1-body__text-container">
                    <div className="page1-body__text">Gravity</div>
                    <img className="page1-body__s-7" src={s_7} alt="" />
                </div>

                <div className="page1-body__matcher">
                    <img className="page1-body__img-left" src={photo_left} alt="" />
                    <img className="indicator__match" src={match} alt="" />
                    <img className="page1-body__img-right" src={photo_right} alt="" />
                </div>

                <div className="page1-body__rectangle-left-container page1-body__rectangle-left-container--hide" >
                    <img className="page1-body__rectangle-left" src={rectangle_left} alt="" />
                    <div className="page1-body__rectangle-left-value">75%</div>
                    <div className="page1-body__rectangle-left-match">match</div>
                </div>

                <div className="page1-body__title"><NavLink className="page1-body__look-up" to="/">Look-Up</NavLink> your astrological compatibility</div>
                <div className="page1-body__small-title">Get Instant Compatibility Ratings with others.</div>

                <div className="page1-body__rectangle-right-container page1-body__rectangle-right-container--hide">
                    <img className="page1-body__rectangle-right" src={rectangle_right} alt="" />
                    <div className="page1-body__rectangle-right-value">38%</div>
                    <div className="page1-body__rectangle-right-match">match</div>
                </div>
            </div>            
        </div>
    )
}

export default Page1Body;