import React from 'react';

// CSS
import '../css/Languages.css';

// LANGUAGE IMAGES
import Javascript from '../Images/js.png';
import ReactImg from '../Images/react.jpg';
import NodeImg from '../Images/nodejs.jpg'
import Python from '../Images/python.jpg';
import Redux from '../Images/redux.jpg';
import html from '../Images/HTML.svg';
import Django from '../Images/djangologo.png';
import Jest from '../Images/jest.png';
import REST from '../Images/restAPI.png';
import Express from '../Images/expresslogo.png';
import Puppeteer from '../Images/puppeteer.png';
import Twilio from '../Images/twilio.png';

export default class Languages extends React.Component {

    render() {

        return (
            <div className='SkillsContainer'>

                <h1 className='Skills'>Skills</h1>

                <div className='Languages'>

                    {/* FRONT END */}
                    
                    <div className='Container'>

                        <h2 className='Topics'>Front-End</h2>

                        <div className='LanguageContainer'>
                            <img className='LanguageImage' src={ html } alt='LanguageImage' />
                            <p className='LanguageText'>HTML5</p>
                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Javascript } alt='LanguageImage' />
                            <p className='LanguageText'>Javascript</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ ReactImg } alt='LanguageImage' />
                            <p className='LanguageText'>React</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ ReactImg } alt='LanguageImage' />
                            <p className='LanguageText'>React Native</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Redux } alt='LanguageImage' />
                            <p className='LanguageText'>Redux</p>

                        </div>

                    </div>

                    {/* BACK END */}

                    <div className='Container'>

                        <h2 className='Topics'>Back-End</h2>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ NodeImg } alt='LanguageImage' />
                            <p className='LanguageText'>Node</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Express } alt='LanguageImage' />
                            <p className='LanguageText'>Express</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Jest } alt='LanguageImage' />
                            <p className='LanguageText'>Jest</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ REST } alt='LanguageImage' />
                            <p className='LanguageText'>REST APIs</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Puppeteer } alt='LanguageImage' />
                            <p className='LanguageText'>Puppeteer</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Twilio } alt='LanguageImage' />
                            <p className='LanguageText'>Twilio</p>

                        </div>

                    </div>

                    {/* COMPUTER SCIENCE */}

                    <div className='Container'>

                        <h2 className='Topics'>CS</h2>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Python } alt='LanguageImage' />
                            <p className='LanguageText'>Python3</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Django } alt='LanguageImage' />
                            <p className='LanguageText'>Django</p>

                        </div>

                    </div>

                </div>

            </div>

        )
    }
}