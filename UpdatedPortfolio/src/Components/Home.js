
// DEP.
import React, { Suspense } from 'react';
import WOW from 'wowjs';

// IMAGES
// import Avatar from '../Images/avatar1.jpg';
import Avatar from '../Images/avatar10.PNG';

// CSS IMPORTS
import "../css/App.css";
import '../css/ContactMe.css';
import '../css/Bio.css';
import '../css/Languages.css';
import '../css/Resume.css';
import '../css/Footer.css';

// LANGUAGE IMAGES
import Javascript from '../Images/js.png';
import ReactImg from '../Images/react.jpg';
import NodeImg from '../Images/nodejs.jpg'
import Python from '../Images/python.jpg';
import Redux from '../Images/redux.jpg';
import html from '../Images/HTML.svg';
import Django from '../Images/djangologo.png';
import Jest from '../Images/jest.png';

// PROJECTS
const Personalize = React.lazy(() => import('./Projects/Personalize'));
const ConnectOurKids = React.lazy(() => import('./Projects/ConnectOurKids'));
const CardsVsAI = React.lazy(() => import('./Projects/CardsVsAI'));

export default class MainPage extends React.Component {

    componentDidMount() {

        new WOW.WOW().init();

    };

    render() {

        return (

            <div class="Header" className="wow fadeIn" data-wow-duration=".3s">

                <div className = 'Home'>

                    {/* BIO */}

                    <div className = 'BioContainer'>
                        <Suspense fallback={ null }>
                            <div className = "AvatarContainer">
                                <div>
                                    <h1 className = 'FirstName'>Michael</h1>
                                    <h1 className = "LastName">Gunter</h1>
                                </div>
                                <img src={Avatar} className='AvatarImg' alt='AvatarImg' />
                            </div>
                        </Suspense>
                        <div className='BioContent'>Software Engineer educated by hands-on experience through Lambda School's Full-Stack Web Development track. Strong collaborator, open-minded, motivated, and a fast learner. When grasping a new concept I can hit the ground running with it. Values the intricacy included in the stages of planning and developing projects from the Back-End to the Front-End. Works well in cross-functional teams to achieve the project or task at hand.</div>

                    </div>

                    {/* LANGUAGES */}
                    <div className='SkillsContainer'>

                        <h1 className='Skills'>Skills</h1>

                        <Suspense fallback={ null }>

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
                        </Suspense>

                    </div>

                    <div className='BottomSection'>

                        <h1 className='Projects'>Recent works</h1>

                        <Suspense fallback={<div>Loading...</div>}>
                            <ConnectOurKids />
                        </Suspense>

                        <Suspense fallback={<div>Loading...</div>}>
                            <Personalize />
                        </Suspense>

                        <Suspense fallback={<div>Loading...</div>}>
                            <CardsVsAI/>
                        </Suspense>

                    </div>

                </div>

            </div>
        );
    }
}