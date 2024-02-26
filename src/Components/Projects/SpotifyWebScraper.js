
import React from 'react';
import '../../css/ProjectLayoutTemplate.css'

// IMAGES
// import SpotifyScraperIMG from '../../Images/SpotifyScraper.PNG';

export default class SpotifyWebScraper extends React.Component {

    toGitHubFrontEnd = () => {

        window.location = 'https://github.com/MaxGunter99/Personalize-FrontEnd'

    }

    toGitHubBackEnd = () => {

        window.location = 'https://github.com/MaxGunter99/Personalize-FrontEnd'

    }

    render() {

        return (

            <div className='MainDiv'>

                <h1 className='Title' >Spotify Web Scraper</h1>

                <div className = 'Content'>

                    {/* <div className='Images'>
                        <img src={ SpotifyScraperIMG } alt='RubiksCubeIMG' className='Screenshot Web' />
                    </div> */}

                    <div className = 'Info'>

                        <strong className = "Duration"><p>April 2021 - October 2023</p></strong>
                        <p>Continuously enhancing and experimenting with web scraping</p>
                            
                        <ul>
                            <li>Generates playlists for a collection of artists</li>
                            <li>Appends the top 5 songs from any artist into a specified playlist</li>
                            <li>Experimented extracting string values from images using an optical character recognition python library</li>
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