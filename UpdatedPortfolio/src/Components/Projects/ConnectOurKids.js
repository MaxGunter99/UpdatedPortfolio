import React from 'react';

// IMAGES
import Home from '../../Images/connectourkidshome.jpg';
import ConnectOurKidsLogo from '../../Images/connectkids.jpg';
import PeopleSearch from '../../Images/connectkidspeoplesearch.jpg';
import '../../css/ConnectOurKids.css'


export default class ConnectOurKids extends React.Component {

    toGitHub = () => {

        window.location = 'https://github.com/labs13-connect-kids/mobile'

    }

    render() {

        return (

            <div className='ConnectKidsDiv'>

                <div className = "ImgContainer">
                    <img className='ConnectOurKids' src={ConnectOurKidsLogo} alt='ConOurKids' />
                </div>

                <div className='ConnectOurKidsContent'>

                    <div className='ConnectOurKidsImages'>
                        <img src={Home} className='ConnectOurKidsScreenshot' alt='ConOurKidsScreenshot' />
                        <img src={PeopleSearch} className='ConnectOurKidsScreenshot' alt='ConOurKidsScreenshot' />
                    </div>

                    <div className='ConnectOurKidsInfo'>

                        <p class="Card">Empowering child welfare professionals with a tool that easily searches extended family members that may be able to care for the child in place of putting them into the foster care system, connecting to family members immediately.</p>

                        <ul>
                            <li>Built in React Native</li>
                            <li>4 week project</li>
                            <li>5 developers on our team</li>
                            <li>Participated in daily standups</li>
                            <li>Stayed in contact with stakeholder</li>
                        </ul>

                        <button className = 'GitHub' onClick = { () => this.toGitHub() }>View on GitHub</button>

                    </div>

                </div>

            </div>

        )

    }

}