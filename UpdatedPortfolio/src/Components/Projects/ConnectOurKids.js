import React from 'react';

// IMAGES
import Home from '../../Images/connectourkidshome.jpg';
import ConnectOurKidsLogo from '../../Images/connectkids.jpg';
import PeopleSearch from '../../Images/connectkidspeoplesearch.jpg';
import '../../css/ConnectOurKids.css'


export default class ConnectOurKids extends React.Component {

    render() {

        return (

            <div className='ConnectKidsDiv'>

                <img className='ConnectOurKids' src={ConnectOurKidsLogo} alt='ConOurKids' />

                <div className='ConnectOurKidsContent'>

                    <div className='ConnectOurKidsImages'>
                        <img src={Home} className='ConnectOurKidsScreenshot' alt='ConOurKidsScreenshot' />
                        <img src={PeopleSearch} className='ConnectOurKidsScreenshot' alt='ConOurKidsScreenshot' />
                    </div>

                    <div className='ConnectOurKidsInfo'>

                        <p><strong>React Native Application</strong></p>
                        <p class="Card">Empowering child welfare professionals with a tool that easily searches extended family members that may be able to care for the child in place of putting them into the foster care system, connecting to family members immediately.</p>

                    </div>

                </div>

            </div>

        )

    }

}