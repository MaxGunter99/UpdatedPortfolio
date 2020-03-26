
// DEP.
import React from 'react';
import WOW from 'wowjs';

// AVATAR IMAGE
import Avatar from '../Images/avatar2.jpg';

// LANGUAGE IMAGES
import Javascript from '../Images/js.png';
import ReactImg from '../Images/react.jpg';
import NodeImg from '../Images/nodejs.jpg'
import Python from '../Images/python.jpg';
import Redux from '../Images/redux.jpg';
import html from '../Images/HTML.svg';
import Django from '../Images/djangologo.png';
import Jest from '../Images/jest.png'

// PROJECTS
import Personalize from './Projects/Personalize';
import ConnectOurKids from './Projects/ConnectOurKids';

// CSS IMPORTS
import "../css/App.css";
import '../css/ContactMe.css';
import '../css/Bio.css';
import '../css/Languages.css';
import '../css/Parallax.css';
import '../css/ConnectOurKids.css';
import '../css/Personalize.css';
import '../css/Resume.css';
import '../css/Footer.css'

export default class MainPage extends React.Component {

    componentDidMount() {

        new WOW.WOW().init();

    };

    render() {

        return (

            <div class="Header" className="wow fadeIn" data-wow-duration=".3s">

                <div>

                    {/* BIO */}
                    <div>

                        <div className='Bio'>

                            <img src={Avatar} className='AvatarImg' alt='AvatarImg' />
                            <div className='AvatarBackground' />

                        </div>

                    </div>

                    <div>

                        <div className='BioContent'>I am a software engineer at Lambda School, an online training academy focused on Web Development. My career goal is to participate with a team that focuses on intricate problem solving in order to help a wide variety of people. My main focus is front end, because one of my strengths is creating efficient ways to improve user interface.</div>

                    </div>

                    {/* LANGUAGES */}

                    <div className='SkillsContainer'>

                        <h1 className='Skills'>Skills</h1>

                        <div className='Languages'>

                            {/* FRONT END */}
                            <div className='Container'>

                                <h2 className='Topics'>Front-End</h2>

                                <div className='LanguageContainer'>

                                    <img className='LanguageImage' src={html} alt='LanguageImage' />
                                    <p className='LanguageText'>HTML5</p>

                                </div>

                                <div className='LanguageContainer'>

                                    <img className='LanguageImage' src={Javascript} alt='LanguageImage' />
                                    <p className='LanguageText'>Javascript</p>

                                </div>

                                <div className='LanguageContainer'>

                                    <img className='LanguageImage' src={ReactImg} alt='LanguageImage' />
                                    <p className='LanguageText'>React</p>

                                </div>

                                <div className='LanguageContainer'>

                                    <img className='LanguageImage' src={ReactImg} alt='LanguageImage' />
                                    <p className='LanguageText'>React Native</p>

                                </div>

                                <div className='LanguageContainer'>

                                    <img className='LanguageImage' src={Redux} alt='LanguageImage' />
                                    <p className='LanguageText'>Redux</p>

                                </div>

                            </div>

                            {/* BACK END */}
                            <div className='Container'>

                                <h2 className='Topics'>Back-End</h2>

                                <div className='LanguageContainer'>

                                    <img className='LanguageImage' src={NodeImg} alt='LanguageImage' />
                                    <p className='LanguageText'>Node</p>

                                </div>

                                <div className='LanguageContainer'>

                                    <p className='LanguageText'>Express</p>

                                </div>

                                <div className='LanguageContainer'>

                                    <img className='LanguageImage' src={Jest} alt='LanguageImage' />
                                    <p className='LanguageText'>Jest</p>

                                </div>

                                <div className='LanguageContainer'>

                                    <p className='LanguageText'>REST APIs</p>

                                </div>

                            </div>

                            {/* COMPUTER SCIENCE */}
                            <div className='Container'>

                                <h2 className='Topics'>CS</h2>

                                <div className='LanguageContainer'>

                                    <img className='LanguageImage' src={Python} alt='LanguageImage' />
                                    <p className='LanguageText'>Python3</p>

                                </div>

                                <div className='LanguageContainer'>

                                    <img className='LanguageImage' src={Django} alt='LanguageImage' />
                                    <p className='LanguageText'>Django</p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='BottomSection'>
                        <ConnectOurKids />
                        <Personalize />
                    </div>

                </div>

            </div>
        );
    }
}