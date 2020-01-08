import React from 'react';

// COMPONENTS
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

// IMAGES
// import SciFi1 from '../../Images/SciFi1.jpg'
import SciFi2 from '../../Images/SciFi2.jpeg'
import SciFi3 from '../../Images/SciFi3.png'
import SciFi4 from '../../Images/SciFi4.jpg';

// CSS
import '../../css/Interests/Interests.css'
import '../../css/Interests/SciFi.css';

export default class SciFiParallax extends React.Component {

    render() {
        return (

            <ParallaxLayer
                offset={2.4}>

                <div>

                    <Parallax
                        className='SciFiParallax'
                        ref={ref => (this.SciFiParallax = ref)}
                        pages={1.5}
                        style={{ 'height': '70vh', 'width': '100%' }}>

                        <div className='Pictures'>

                            <ParallaxLayer
                                speed={1}
                                className='SciFiInfo'
                                offset={.999}>
                                    <div className = 'ImageContainer'>
                                        <img src={SciFi3} alt='SciFi1' className = 'One' />
                                        <img src={SciFi2} alt='SciFi1' className = 'Two' />
                                    </div>
                                    <div className = 'Information'>
                                        <p>I've always been fascinated by the endless creativity in science fiction. Within concepts of what we think the future will look like, space travel, and the end of the world, creators can go in so many directions with these concepts and it will never fail to amuse me.</p>
                                        <p>Some of my favorite Sci-Fi books and movies:</p>
                                        <ul>
                                            <li>Starman Jones</li>
                                            <li>Upgrade</li>
                                            <li>Star Wars</li>
                                            <li>Chappie</li>
                                            <li>Guardians of the Galaxy</li>
                                            <li>Tron</li>
                                            <li>Fallout 4</li>
                                        </ul>
                                        <button onClick={() => this.SciFiParallax.scrollTo(0)}>⬆︎</button>
                                    </div>

                            </ParallaxLayer>

                            <ParallaxLayer
                                speed={-1}
                                offset={0.03}
                                factor = {.3}>

                                <div className='LobsterTopic'>
                                    <h1>Sci-Fi</h1>
                                </div>

                            </ParallaxLayer>

                            <ParallaxLayer
                                speed={1.6}
                                offset={0}
                                className='BaseLayer'>
                                <img src={SciFi4} alt='SciFi1' />

                            </ParallaxLayer>

                            <ParallaxLayer
                                speed={ 2 }
                                offset={0}
                                className='Clouds'>
                                    <div className = 'Cloud'></div>
                            </ParallaxLayer>

                            <ParallaxLayer
                                speed={0}
                                offset={0.065}>

                                <div className='Topic'>
                                    <h1>Science Fiction</h1>
                                    <button onClick={() => this.SciFiParallax.scrollTo(1.5)}>⬇︎</button>
                                </div>

                            </ParallaxLayer>


                        </div>

                    </Parallax>

                </div>

            </ParallaxLayer>


        )
    }

}