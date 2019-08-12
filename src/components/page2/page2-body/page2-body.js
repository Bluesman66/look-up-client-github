import React from 'react';

import '../../shared/shared.css';
import './page2-body.css';

import s_79 from '../../shared/images/s-79.png';
import line from '../../shared/images/line.png';
import s_7 from '../../shared/images/s-7.png';
import girls from './images/girls.png';
import ice_cream from './images/ice-cream.png';
import lovers from './images/lovers.png';
import black_white from './images/black-white.png';
import bengal from './images/bengal.png';
import screen_shot_1 from './images/screen-shot-1.png';
import screen_shot_2 from './images/screen-shot-2.png';
import screen_shot_3 from './images/screen-shot-3.png';
import screen_shot_4 from './images/screen-shot-4.png';

const Page2Body = () => {
    return (
        <div className="page2-body">
            <div className="page2-body-container">
                <div className="page2-body__image-container-1">
                    <div className="page2-body__s-7-container">
                        <img className="page2-body__s-7" src={s_7} alt="" />
                    </div>
                    <div className="page2-body__shape-container">
                        <img className="page2-s-79" src={s_79} alt="" />
                        <img className="page2-line" src={line} alt="" />
                    </div>
                </div>

                <div className="page2-body__image-container-2">
                    <div className="page2-body__girls-container">
                        <img className="page2-body__girls" src={girls} alt="" />
                    </div>
                    <div className="page2-body__ice-cream-container">
                        <img className="page2-body__ice-cream" src={ice_cream} alt="" />
                    </div>
                    <div className="page2-body__lovers-container">
                        <img className="page2-body__lovers" src={lovers} alt="" />
                    </div>
                </div>

                <div className="page2-body__title">Read in depth astrology reports</div>
                <div className="page2-body__small-title">Get Instant Compatibility Ratings with others.</div>

                <div className="page2-body__image-container-3">
                    <div className="page2-body__black-white-container">
                        <img className="page2-body__black-white" src={black_white} alt="" />
                    </div>
                    <div className="page2-body__image-container-4 page2-body__image-container-4--hide">
                        <img className="page2-body__screen-shot-1" src={screen_shot_1} alt="" />
                        <img className="page2-body__screen-shot-2" src={screen_shot_2} alt="" />
                        <img className="page2-body__screen-shot-3" src={screen_shot_3} alt="" />
                        <img className="page2-body__screen-shot-4" src={screen_shot_4} alt="" />
                    </div>
                    <div className="page2-body__bengal-container">
                        <img className="page2-body__bengal" src={bengal} alt="" />
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Page2Body;