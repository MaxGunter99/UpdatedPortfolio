import React from 'react';

// IMAGES
import PersonalizeImg from '../../Images/personalize.jpeg';
import '../../css/Personalize.css'

export default class Personalize extends React.Component {

    toGitHub = () => {

        window.location = 'https://github.com/MaxGunter99/Personalize'

    }

    render() {

        return (

            <div className='Personalize'>

                <h1>Personalize</h1>

                <div>

                    <img src={PersonalizeImg} alt='PersonalizeIMG' className='PersonalizeIMG' />

                    <p>Job tracking application that motivates users to continue applying through statistical information and tips.</p>
                    <ul>
                        <li>Keeps track of all the jobs a user applies to.</li>
                        <li>Visual activity graph based on how many jobs the a user applies to per week.</li>
                        <li>Node backend used to store all the users data.</li>
                    </ul>

                    <button className = 'GitHub' onClick = { () => this.toGitHub() }>View on GitHub</button>

                </div>

            </div>

        )

    }
}