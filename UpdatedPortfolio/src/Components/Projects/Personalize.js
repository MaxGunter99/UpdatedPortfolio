import React from 'react';

// IMAGES
import PersonalizeImg from '../../Images/Personalize.jpg';
import '../../css/Personalize.css'

export default class Personalize extends React.Component {

    toGitHubFrontEnd = () => {

        window.location = 'https://github.com/MaxGunter99/Personalize-FrontEnd'

    }

    toGitHubBackEnd = () => {

        window.location = 'https://github.com/MaxGunter99/Personalize-FrontEnd'

    }

    render() {

        return (

            <div className='Personalize'>

                <h1>Personalize</h1>

                <div className = 'PersonalizeContent'>

                    <img src={ PersonalizeImg } alt='PersonalizeIMG' className='PersonalizeIMG' />

                    <div className = 'Info'>

                        <div>

                            <p>Job tracking application that motivates users to continue applying through statistical information and tips.</p>
                            
                            <ul>
                                <li>Keeps track of all the jobs a user applies to.</li>
                                <li>Implemented a web scraper to gather the best recommendations for the user to apply to from their favorite job boards. If the user wants to apply to a listed job, all of the necessary information is already provided for easy addition to their database.</li>
                                <li>Visual activity graph based on how many jobs the user applies to per week.</li>
                                <li>Node backend used to store all the users data.</li>
                            </ul>
                        </div>


                        <div className = 'gitHubSection'>
                            <button className = 'GitHub' onClick = { () => this.toGitHubFrontEnd() }>View Front-End on GitHub</button>
                            <button className = 'GitHub' onClick = { () => this.toGitHubBackEnd() }>View Back-End on GitHub</button>
                        </div>

                    </div>

                </div>

            </div>

        )

    }
}