
import React from 'react';
import '../../css/ProjectLayoutTemplate.css'

// IMAGES
import RubiksCubeImg from '../../Images/rubikscube.PNG';

export default class RubiksCube extends React.Component {

    toGitHubFrontEnd = () => {

        window.location = 'https://github.com/MaxGunter99/Personalize-FrontEnd'

    }

    toGitHubBackEnd = () => {

        window.location = 'https://github.com/MaxGunter99/Personalize-FrontEnd'

    }

    render() {

        return (

            <div className='MainDiv'>

                <h1 className='Title' >Digital Rubiks Cube</h1>

                <div className = 'Content'>

                    <div className='Images'>
                        <img src={ RubiksCubeImg } alt='RubiksCubeIMG' className='Screenshot Web' />
                    </div>

                    <div className = 'Info'>

                        <strong className = "Duration"><p>June 2023 - Current</p></strong>
                        <p>Constructing a digital Rubics cube</p>
                            
                        <ul>
                            <li>Constructing a mutable digital rubiks cube in python</li>
                            <li>Developing algorithm to solve cube</li>
                            <li>Writing tests to ensure mutated cube data is valid</li>
                        </ul>

                        <div className = "ButtonContainer">

                            {/* <button className = 'GitHub' onClick = { () => this.toGitHubFrontEnd() }>Front-End</button>
                            <button className = 'GitHub' onClick = { () => this.toGitHubBackEnd() }>Back-End</button> */}

                        </div>

                    </div>

                </div>

            </div>

        )

    }
}