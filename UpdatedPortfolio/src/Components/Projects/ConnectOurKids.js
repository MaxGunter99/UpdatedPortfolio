import React from 'react';

// IMAGES
import Home from '../../Images/connectourkidshome.jpg';
import ConnectOurKidsLogo from '../../Images/connectkids.jpg';
import PeopleSearch from '../../Images/connectkidspeoplesearch.jpg';
import '../../css/ProjectLayoutTemplate.css'


export default class ConnectOurKids extends React.Component {

    toGitHub = () => {

        window.location = 'https://github.com/labs13-connect-kids/mobile'

    }

    toAppStore = () => {
        window.location = 'https://apps.apple.com/us/app/connect-our-kids/id1471038972?mt=8'
    }

    toGooglePlay = () => {
        window.location = 'https://play.google.com/store/apps/details?id=com.connectOurKids'
    }

    render() {

        return (

            <div className='MainDiv'>

                <img className='Title' src={ConnectOurKidsLogo} alt='ConOurKids' />

                <div className='Content'>

                    <div className='Images'>
                        <img src={Home} className='Screenshot Mobile' alt='ConOurKidsScreenshot' />
                        <img src={PeopleSearch} className='Screenshot Mobile one' alt='ConOurKidsScreenshot' />
                    </div>

                    <div className='Info'>

                        <strong className = "Duration"><p>June 2019 - July 2019</p></strong>
                        <p className="Card">Empowering child welfare professionals with a tool that easily searches extended family members that may be able to care for the child in place of putting them into the foster care system, connecting to family members immediately.</p>

                        <ul>
                            <li>Built in React Native</li>
                            <li>4 week project</li>
                            <li>5 developers on our team</li>
                            <li>Participated in daily standups</li>
                            <li>Stayed in contact with stakeholder</li>
                            <li>Tested with Expo and TestFlight</li>
                            <li>Deployed to the App Store and Google Play</li>
                        </ul>

                        <div className = "ButtonContainer">

                            <button className = 'GitHub' onClick = { () => this.toGitHub() }>GitHub</button>
                            <button className = 'GitHub' onClick = { () => this.toAppStore() }>App Store</button>
                            <button className = 'GitHub' onClick = { () => this.toGooglePlay() }>Google Play</button>
                        </div>

                    </div>

                </div>

            </div>

        )

    }

}