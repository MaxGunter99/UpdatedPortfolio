import React from 'react';

// IMAGES
// import PersonalizeImg from '../../Images/Personalize.jpg';
// import PersonalizeImg from '../../Images/Personalize2.png';
import PersonalizeImg from '../../Images/Personalize3.PNG';
import '../../css/ProjectLayoutTemplate.css'

export default class Personalize extends React.Component {

    toGitHub = () => {
        window.location = 'https://github.com/MaxGunter99/Personalize'
    }

    render() {

        return (

            <div className='MainDiv'>

                <h1 className='Title' >Personalize</h1>

                <div className = 'Content'>

                    <div className='Images'>
                        <img src={ PersonalizeImg } alt='PersonalizeIMG' className='Screenshot Web' />
                    </div>

                    <div className = 'Info'>

                        <strong className = "Duration"><p>January 2020 - June 2020</p></strong>
                        <p>Job tracking application that motivates users to continue applying through statistical information and tips.</p>
                            
                        <ul>
                            <li>Keeps track of all the jobs a user applies to</li>
                            <li>Visual activity graph based on how many jobs the user applies to per week</li>
                            <li>Node backend used to store all the users data</li>
                            <li>Implemented a custom search web scraper for job recommendations from users' favorite job boards.</li>
                            <li>If the user wants to apply to a listed job, all of the necessary information is already provided for easy addition to their database.</li>
                            <li>Created a visual activity graph based on how many jobs the user applies.</li>
                        </ul>

                        <div className = "ButtonContainer">

                            <button className = 'GitHub' onClick = { () => this.toGitHub() }>GitHub</button>

                        </div>

                    </div>

                </div>

            </div>

        )

    }
}