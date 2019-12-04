import React from 'react';

// COMPONENTS
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

// IMAGES

// CSS
import '../../css/Interests/Interests.css'
import '../../css/SciFi.css';

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

                        <ParallaxLayer
                            speed={.5}
                            offset={.999}>

                            <div className='Info'>
                                <p>SCi-Fi bla bla bla.</p>
                            </div>

                            <div className='Back'>
                                <button onClick={() => this.SciFiParallax.scrollTo(0)} >⬆︎</button>
                            </div>

                        </ParallaxLayer>

                        <ParallaxLayer
                            speed={1.5}
                            className='GarageDoor'
                            style={{ 'width': '100%' }}
                            offset={0}>

                        </ParallaxLayer>

                        <ParallaxLayer
                            speed={1}
                            offset={0.03}>

                            <div className='Topic'>
                                <h1>Science Fiction</h1>
                                <button onClick={() => this.SciFiParallax.scrollTo(1.5)}>⬇︎</button>
                            </div>

                        </ParallaxLayer>



                    </Parallax>

                </div>

            </ParallaxLayer>


        )
    }

}