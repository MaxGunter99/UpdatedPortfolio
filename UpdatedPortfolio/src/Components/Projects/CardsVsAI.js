import React from 'react';

// IMAGES
import CVSAIvideo from '../../Images/CVSAI.mov';
import CardsVsAIScreenshot from '../../Images/CardsVsAIScreenshot.jpg'
import '../../css/CardsVsAI.css'


export default class CardsVsAI extends React.Component {

    toGitHub = () => {

        window.location = 'https://github.com/MaxGunter99/CardsVsAI'

    }

    render() {

        return (

            <div className='CardsVsAIDiv'>

                <h1>Cards VS AI</h1>

                <div className='CardsVsAIContent'>

                    <div className='CardsVsAIVideoContainer'>

                        <video className='CardsVsAIVideo' autoPlay loop muted >
                            <source src={ CVSAIvideo } type='video/mp4' ref="vidRef"/>
                        </video>

                    </div>

                    <div className='Info'>

                        <p class="Card">Enables users to play a traditional card game called Egyptian Rat Screw on a mobile device. User has the ability to play against 1-9 artificial intelligence players and put their card game skills up to the test. The user can swipe up on their deck to add a card to the pile or tap on the deck if they see a slappable combination of cards.</p>

                        <ul>
                            <li>Solo project</li>
                            <li>Built in React Native</li>
                            <li>Algrorithms constructed in JavaScript</li>
                            <li>Runs on Expo</li>
                        </ul>

                        <button className = 'GitHub' onClick = { () => this.toGitHub() }>View on GitHub</button>

                    </div>

                </div>

            </div>

        )

    }

}