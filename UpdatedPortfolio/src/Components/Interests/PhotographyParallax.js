import React from 'react';

// COMPONENTS
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

// IMAGES
import City1 from '../../Images/City1.jpg';
import City2 from '../../Images/City2.jpg';
import City3 from '../../Images/City3.jpg';

// CSS
import '../../css/Interests/Interests.css'
import '../../css/Interests/Photography.css';

export default class PhotographyParallax extends React.Component {

    render() {
        return (

            <ParallaxLayer
                offset={0}>

                <div>

                    <Parallax
                        className='PhotographyParallax'
                        ref={ref => (this.PhotoParallax = ref)}
                        pages={1.5}
                        // speed={.1}
                        style={{ 'height': '70vh', 'width': '100%' }}>

                        <div className='Pictures'>

                            <ParallaxLayer
                                speed={.5}
                                offset={.999}>

                                <div className='Info'>
                                    <p>Photography is one of my favorite ways to feel free. I love taking pictures of the city.</p>
                                </div>

                                <div className='Back'>
                                    <button onClick={() => this.PhotoParallax.scrollTo(0)} >⬆︎</button>
                                </div>

                            </ParallaxLayer>

                            <ParallaxLayer
                                speed={1}
                                offset={0}>

                                <div className='Container one'>
                                    <img src={City1} alt = 'City1' className='Image' />
                                </div>

                            </ParallaxLayer>

                            <ParallaxLayer
                                speed={1.5}
                                offset={0}>

                                <div className='Container two'>
                                    <img src={City2} alt = 'City2' className='Image' />
                                </div>

                            </ParallaxLayer>

                            <ParallaxLayer
                                speed={2}
                                offset={0}>

                                <div className='Container three'>
                                    <img src={City3} alt = 'City3' className='Image' />
                                </div>

                            </ParallaxLayer>

                            <ParallaxLayer
                                speed={1}
                                offset={0.03}>

                                <div className='Topic'>
                                    <h1>Photography</h1>
                                    <button onClick={() => this.PhotoParallax.scrollTo(1.5)}>⬇︎</button>
                                </div>

                            </ParallaxLayer>

                        </div>

                    </Parallax>

                </div>

            </ParallaxLayer>


        )
    }

}