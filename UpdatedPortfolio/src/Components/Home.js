
// DEP.
import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
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

                <Parallax className='HomeParallax' ref={ref => (this.parallax = ref)} pages={3}>

                    {/* BIO */}
                    <ParallaxLayer speed={1} offset={.04} style={{ width: '100%', margin: '0 auto', height: '800px' }}>

                        <div className='Bio'>

                            <img src={Avatar} className='AvatarImg' alt='AvatarImg' />
                            <div className='AvatarBackground' />

                        </div>

                    </ParallaxLayer>

                    <ParallaxLayer speed={1.3} offset={.5} style={{ width: '100%', margin: '0 auto', height: '800px' }}>

                        <div className='BioContent'>I am a software engineer at Lambda School, an online training academy focused on Web Development. My career goal is to participate with a team that focuses on intricate problem solving in order to help a wide variety of people. My main focus is front end, because one of my strengths is creating efficient ways to improve user interface.</div>

                    </ParallaxLayer>

                    {/* LANGUAGES */}
                    <ParallaxLayer className='CoolPictureContainer' speed={1} offset={.8} style={{ 
                        width: '100%', margin: '0 auto' }}>

                        <div className='CoolPicture' />

                    </ParallaxLayer>

                    <ParallaxLayer speed={1.2} offset={.999} className = 'SkillsContainer' style={{ width: '100%', margin: '0 auto' }}>

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

                    <ConnectOurKids/>

                    <Personalize/>

                    {/* MOUNTAIN IMAGE */}
                    <ParallaxLayer className='BottomImage' speed={-.01} offset={1.6} style={{ width: '100%', margin: '0 auto' }} />
                    <ParallaxLayer className='Cloud' speed={.2} offset={1.6} style={{ width: '100%', margin: '0 auto' }} />

                </Parallax>

            </div>
        );
    }
}