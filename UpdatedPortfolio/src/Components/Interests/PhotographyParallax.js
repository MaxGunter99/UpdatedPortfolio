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
                                speed={-1}
                                offset={0.03}>

                                <div className='LobsterTopic'>
                                    <h1>Photography</h1>
                                </div>

                            </ParallaxLayer>

                            <div className = 'Illustrations'>

                                <ParallaxLayer
                                    speed={1.3}
                                    className='Illustration2'
                                    style = {{ 'maxHeight': '50vh' , 'maxWidth': '30%' , 'backgroundSize': '80%' }}
                                    offset={.999}>
                                </ParallaxLayer>

                            </div>

                            <ParallaxLayer
                                speed={.3}
                                offset={.999}>

                                <div className='Info'>
                                    <p>I appreciate when people are aware of the beauty around them. Graphic Illustration is also one of my favorite ways to capture reality.</p>
                                    <p>“Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.”</p>
                                    <strong>— Aaron Siskind</strong>
                                </div>

                                <div className='Back'>
                                    <button onClick={() => this.PhotoParallax.scrollTo(0)} >⬆︎</button>
                                </div>

                            </ParallaxLayer>

                            <ParallaxLayer
                                speed={2}
                                offset={0}>

                                <div className='Container one'>
                                    <img src={City1} alt = 'City1' className='Image' />
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
                                speed={1.5}
                                offset={0}>

                                <div className='Container two'>
                                    <img src={City2} alt = 'City2' className='Image' />
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