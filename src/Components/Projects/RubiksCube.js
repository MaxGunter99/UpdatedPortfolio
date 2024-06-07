
import React from 'react';
import '../../css/ProjectLayoutTemplate.css'

// IMAGES
// import RubiksCubeImg from '../../Images/rubikscube.PNG';
import RubiksCubeImg from '../../Images/rubikscube1.PNG';

export default class RubiksCube extends React.Component {

    toGitHub = () => {

        window.location = 'https://github.com/MaxGunter99/digital_rubiks_cube'

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

                        <strong className = "Duration"><p>January 2024 - May 2024</p></strong>
                        <p>Constructed a digital Rubics cube</p>
                            
                        <ul>
                            <li>Constructed a mutable digital rubiks cube in python</li>
                            <li>Developed an algorithm to solve cube</li>
                            <li>Can randomly shuffle cube 100 times and solve it within 0.3 seconds</li>
                            <li>Test driven development to ensure mutated cube data is valid</li>
                        </ul>

                        <p className="codeExampleTitle"> <strong>Example Usage:</strong></p>
                        <div className="codeExample">
                            <pre className="codeExampleContent">
                                <code>
                                    cube_client = RubiksCube()<br/>
                                    cube_client.shuffle_cube( 100 )<br/>
                                    steps_to_solve = cube_client.solve_cube()
                                </code>
                            </pre>
                        </div>

                        <div className = "ButtonContainer">

                            <button className = 'GitHub' onClick = { () => this.toGitHub() }>GitHub</button>

                        </div>

                    </div>

                </div>

            </div>

        )

    }
}