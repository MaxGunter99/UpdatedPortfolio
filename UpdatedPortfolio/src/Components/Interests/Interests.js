import React from 'react';

// COMPONENTS
import { Parallax } from 'react-spring/renderprops-addons';
import MusicParallax from './MusicParallax';
import PhotographyParallax from './PhotographyParallax';
import SciFiParallax from './SciFiParallax';
import WOW from 'wowjs';

// CSS
import '../../css/Interests/Interests.css'
import Footer from '../Footer';

export default class Interests extends React.Component {

    state = {

        active: ''

    }

    componentDidMount() {

        new WOW.WOW().init();

    };

    setActive = category => {
        if ( category === 'Music') {

            this.Parallax.scrollTo(1.2)
            // this.setState({ active: 'Music' })

        } else if ( category === 'Photography' ) {

            this.Parallax.scrollTo(0)
            // this.setState({ active: 'Photography' })

        } else if ( category === 'SciFi' ) {

            this.Parallax.scrollTo( 2.4 )
            // this.setState({ active: 'SciFi' })

        }
    }

    render() {

        return (

            <>

                <div className = 'Body' style = {{ marginBottom: '-80px' }}>

                    <div className = 'Selection'>

                        <h4 onClick={() => this.setActive( 'Photography' )} className = { this.state.active === 'Photography' ? 'Active' : null }>Photography</h4>
                        <h4 onClick={() => this.setActive( 'Music' )} className = { this.state.active === 'Music' ? 'Active' : null }>Music</h4>
                        <h4 onClick={() => this.setActive( 'SciFi' )} className = { this.state.active === 'SciFi' ? 'Active' : null }>Sci-Fi</h4>

                    </div>

                    <Parallax 
                        className = 'Parallax'
                        ref={ ref => ( this.Parallax = ref ) } 
                        pages={3.4}
                        horizontal = {true}
                        style = {{ 'height': '70vh' , 'width': '100%' }}>

                        <div className = 'InterestsParallax'>

                            <div className='Interest'>

                                <PhotographyParallax/>
                                <MusicParallax/>
                                <SciFiParallax/>

                            </div>

                        </div>

                    </Parallax>

                </div>

                <Footer/>

            </>

        )
    }

}