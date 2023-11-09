import React from 'react';

// IMAGES
import PersonalizeImg from '../../Images/Personalize.jpg';
import '../../css/ProjectLayoutTemplate.css'

export default class Personalize extends React.Component {

    toGitHubFrontEnd = () => {

        window.location = 'https://github.com/MaxGunter99/Personalize-FrontEnd'

    }

    toGitHubBackEnd = () => {

        window.location = 'https://github.com/MaxGunter99/Personalize-FrontEnd'

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
                            <li>Puppeteer web scraper</li>
                            <li>Using the parameters a user sets, an advanced search takes place to scout out jobs a user might want to apply to.</li>
                            <li>If the user wants to apply to a listed job, all of the necessary information is already provided for easy addition to their database.</li>
                        </ul>

                        <div className = "ButtonContainer">

                            <button className = 'GitHub' onClick = { () => this.toGitHubFrontEnd() }>Front-End</button>
                            <button className = 'GitHub' onClick = { () => this.toGitHubBackEnd() }>Back-End</button>

                        </div>

                    </div>

                </div>

            </div>

        )

    }
}