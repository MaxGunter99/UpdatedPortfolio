
// DEP.
import React, { Suspense } from 'react';
import WOW from 'wowjs';

// IMAGES
// import Avatar from '../Images/avatar1.jpg';
// import Avatar from '../Images/avatar10.PNG';
// import Avatar from '../Images/avatar3.jpg';
import Avatar from '../Images/avatar4.jpeg';

// CSS IMPORTS
import "../css/App.css";
import '../css/Bio.css';

// LANGUAGES
// const Languages = React.lazy(() => import('./Languages_v1'));
const Languages = React.lazy(() => import('./Languages'));

// PROJECTS
const Personalize = React.lazy(() => import('./Projects/Personalize'));
const ConnectOurKids = React.lazy(() => import('./Projects/ConnectOurKids'));
const CardsVsAI = React.lazy(() => import('./Projects/CardsVsAI'));
const RubiksCube = React.lazy(() => import('./Projects/RubiksCube'));
const SpotifyWebScraper = React.lazy(() => import('./Projects/SpotifyWebScraper'));

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
                        <div className='BioContent'>Software Engineer educated by hands-on experience through Bloom Institute of Technology's Full-Stack Web Development track. Dedicated to ongoing professional development, strong collaborator, open-minded, motivated, and eager to learn and adapt.</div>

                    </div>

                    {/* LANGUAGES */}
                    <Suspense fallback={ null }>
                        <Languages/>
                    </Suspense>

                    <div className='AllProjectsContainer'>

                        <h1 className='Projects'>Recent works</h1>

                        <Suspense fallback={<div>Loading...</div>}>
                            <RubiksCube/>
                            <SpotifyWebScraper/>
                            <Personalize />
                            {/* <CardsVsAI/> */}
                            <ConnectOurKids />
                        </Suspense>

                    </div>

                </div>

            </div>
        );
    }
}