import React from 'react';

// Images
import Music from '../../Images/Music.jpg';
import Music1 from '../../Images/Music1.jpg';
import Music2 from '../../Images/Music2.jpeg';
import Music3 from '../../Images/Music3.jpg'

// COMPONENTS
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

// CSS
import '../../css/Interests/Interests.css';
import '../../css/Interests/Music.css';

export default class MusicParallax extends React.Component {

    render() {
        return (

            <ParallaxLayer
                offset={1.2}>

                <div>

                    <Parallax
                        className='MusicParallax'
                        ref={ref => (this.MusicParallax = ref)}
                        pages={1.5}
                        style={{ 'height': '70vh', 'width': '100%' }}>

                        <div className='Pictures'>

                            <ParallaxLayer
                                speed = {0}
                                className='Music'
                                offset={0.3}>

                                <img src={Music} alt='Music' className='MusicImage' />

                            </ParallaxLayer>

                            <ParallaxLayer
                                speed={-1}
                                offset={0.03}>

                                <div className='LobsterTopic'>
                                    <h1>Music</h1>
                                </div>

                            </ParallaxLayer>

                            <ParallaxLayer
                                speed={.3}
                                className='MusicInfo'
                                offset={0.999}>

                                <div>
                                    <p>Music has always been one of my favorite ways to get inspired. In my spare time you can find me listening to all types of music and going to concerts. I occasionally make music using GarageBand and a PO 20 Arcade synthesizer. I really enjoy listening to indie electronic and 1920's jazz.</p>
                                </div>

                                <button onClick={() => this.MusicParallax.scrollTo(0)}>⬆︎</button>

                            </ParallaxLayer>

                            <ParallaxLayer
                                speed={1}
                                offset={0}>

                                <div className='Container one'>
                                    <img src={Music2} alt = 'Music2' className='MusicParallaxImage' />
                                </div>

                            </ParallaxLayer>

                            <ParallaxLayer
                                speed={2}
                                offset={0}>

                                <div className='Container three'>
                                    <img src={Music3} alt = 'Music3' className='MusicParallaxImage' />
                                </div>

                            </ParallaxLayer>

                            <ParallaxLayer
                                speed={1.5}
                                offset={0}>

                                <div className='Container two'>
                                    <img src={Music1} alt = 'Music1' className='MusicParallaxImage' />
                                </div>

                            </ParallaxLayer>

                            <ParallaxLayer
                                speed={1}
                                offset={0.03}>

                                <div className='Topic'>
                                    <h1>Music</h1>
                                    <button onClick={() => this.MusicParallax.scrollTo(1.5)}>⬇︎</button>
                                </div>

                            </ParallaxLayer>

                        </div>

                    </Parallax>

                </div>

            </ParallaxLayer>


        )
    }

}