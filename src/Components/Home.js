
// DEP.
import React, { Suspense } from 'react';
import WOW from 'wowjs';

// IMAGES
// import Avatar from '../Images/avatar1.jpg';
import Avatar from '../Images/avatar10.PNG';

// CSS IMPORTS
import "../css/App.css";
import '../css/Bio.css';

// LANGUAGES
const Languages = React.lazy(() => import('./Languages'));

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
                    <Suspense fallback={ null }>
                        <Languages/>
                    </Suspense>

                    <div className='AllProjectsContainer'>

                        <h1 className='Projects'>Recent works</h1>

                        <Suspense fallback={<div>Loading...</div>}>
                            <Personalize />
                            <CardsVsAI/>
                            <ConnectOurKids />
                        </Suspense>

                    </div>

                </div>

            </div>
        );
    }
}