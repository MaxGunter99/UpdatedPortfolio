
// DEP.
import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import WOW from 'wowjs';

// AVATAR IMAGE
import Avatar from '../Images/avatar.jpg';

// LANGUAGE IMAGES
import Javascript from '../Images/js.png';
import ReactImg from '../Images/react.jpg';
import NodeImg from '../Images/nodejs.jpg'
import Python from '../Images/python.jpg';
import Redux from '../Images/redux.jpg';
import html from '../Images/HTML.svg';
import Django from '../Images/djangologo.png';
import Jest from '../Images/jest.png'

// PROJECT IMAGES
import Home from '../Images/connectourkidshome.jpg';
import ConnectOurKidsLogo from '../Images/connectkids.jpg';
import PeopleSearch from '../Images/connectkidspeoplesearch.jpg';
import Personalize from '../Images/personalize.jpeg';

// CSS IMPORTS
import "../css/App.css";
import '../css/ContactMe.css';
import '../css/Bio.css';
import '../css/Languages.css';
import '../css/Parallax.css';
import '../css/ParallaxImages.css';
import '../css/ConnectOurKids.css';
import '../css/Personalize.css';
import '../css/Resume.css';

export default class MainPage extends React.Component {

    componentDidMount() {

        new WOW.WOW().init();

    };

    render() {

        return (

            <div class="Header">

                <Parallax className='HomeParallax' ref={ref => (this.parallax = ref)} pages={3.1}>

                    {/* BIO */}
                    <ParallaxLayer speed={1} offset={.04} style={{ width: '100%', margin: '0 auto', height: '800px' }}>

                        <div className='Bio'>

                            <img src={Avatar} className='AvatarImg' alt='AvatarImg' />
                            <div className='AvatarBackground' />

                        </div>

                    </ParallaxLayer>

                    <ParallaxLayer speed={1.3} offset={.45} style={{ width: '100%', margin: '0 auto', height: '800px' }}>

                        <div className='BioContent'>I am a software engineer at Lambda School, an online training academy focused on Web Development. My career goal is to participate with a team that focuses on intricate problem solving in order to help a wide variety of people. My main focus is front end, because one of my strengths is creating efficient ways to improve user interface.</div>

                    </ParallaxLayer>

                    {/* LANGUAGES */}
                    <ParallaxLayer speed={.5} offset={.7} style={{ width: '100%', margin: '0 auto' }}>

                        <div className='CoolPicture' />

                    </ParallaxLayer>

                    <ParallaxLayer speed={.8} offset={.999} style={{ width: '100%', margin: '0 auto' }}>

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

                    </ParallaxLayer>

                    {/* CONNECT OUR KIDS */}
                    <ParallaxLayer className='ConnectKidsParallax' speed={.5} offset={1.25}>

                        <div className='ConnectKidsDiv'>

                            <img className='ConnectOurKids' src={ConnectOurKidsLogo} alt='ConOurKids' />

                            <div className = 'ConnectOurKidsContent'>

                                <div className = 'ConnectOurKidsImages'>
                                    <img src={Home} className='ConnectOurKidsScreenshot' alt='ConOurKidsScreenshot' />
                                    <img src={PeopleSearch} className='ConnectOurKidsScreenshot' alt='ConOurKidsScreenshot' />
                                </div>

                                <div className = 'ConnectOurKidsInfo'>

                                    <p><strong>React Native Application</strong></p>
                                    <p class="Card">Empowering child welfare professionals with a tool that easily searches extended family members that may be able to care for the child in place of putting them into the foster care system, connecting to family members immediately.</p>

                                </div>

                            </div>

                        </div>

                    </ParallaxLayer>

                    {/* PERSONALIZE */}
                    <ParallaxLayer className='PersonalizeParallax' speed={.5} offset={2}>

                        <div className='Personalize'>

                            <h1>Personalize</h1>

                            <div>

                                <img src={Personalize} alt='PersonalizeIMG' className = 'PersonalizeIMG' />
                                <p>Personalize is a side project I've been woring on for a little bit, its purpose is to keep track of jobs you apply to and give you statistics back. It can tell you how many jobs you have applied to within the past day / month / year. It has an activity graph so you can see what days you were most active. I will eventually implement text message reminders for meet up groups and interviews</p>

                            </div>

                        </div>

                    </ParallaxLayer>

                    {/* MOUNTAIN IMAGE */}
                    <ParallaxLayer className='BottomImage' speed={-.01} offset={1.8} style={{ width: '100%', margin: '0 auto' }} />
                    <ParallaxLayer className='Cloud' speed={.2} offset={1.9} style={{ width: '100%', margin: '0 auto' }} />

                </Parallax>

            </div>
        );
    }
}