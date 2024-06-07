import React from 'react';

// IMAGES
import CardsVsAIScreenshot from '../../Images/CardsVsAIScreenshot.jpg'
import CardsVsAIGame from '../../Images/CardsVsAIGame.jpg'
import '../../css/ProjectLayoutTemplate.css'


export default class CardsVsComputers extends React.Component {

    toGitHub = () => {

        window.location = 'https://github.com/MaxGunter99/CardsVsAI'

    }

    render() {

        return (

            <div className='MainDiv'>

                <h1 className='Title' >Cards vs Computers</h1>

                <div className='Content'>

                    <div className='Images'>

                        <img src={CardsVsAIGame} loading="lazy" className='Screenshot Mobile one' alt='CardsVsAiScreenshot' />
                        <img src={CardsVsAIScreenshot} loading="lazy" className='Screenshot Mobile' alt='CardsVsAiScreenshot' />

                    </div>

                    <div className='Info'>

                        <strong className = "Duration"><p>March 2020 - April 2020</p></strong>
                        <p class="Card">Enables users to play a traditional card game called Egyptian Rat Screw on a mobile device. User has the ability to play against 1-9 artificial players and put their card game skills up to the test. The user can swipe up on their deck to add a card to the pile or tap on the deck if they see a slappable combination of cards.</p>

                        <ul>
                            <li>Solo project</li>
                            <li>Built in React Native</li>
                            <li>Algorithms constructed in JavaScript</li>
                            <li>Runs on Expo</li>
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