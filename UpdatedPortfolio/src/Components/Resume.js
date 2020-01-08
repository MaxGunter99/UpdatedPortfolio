// DEP.
import React, { Component } from 'react'

// IMAGES
import Resume from '../Images/resume.jpeg'

// CSS
import '../css/App.css'
import '../css/Resume.css'
import WOW from 'wowjs';
import Footer from './Footer';

class ResumePage extends Component {

    componentDidMount() {

        new WOW.WOW().init();

    };

    render() {

        return (

            <>

                <div className = "wow fadeIn" data-wow-duration=".3s">

                    <img src={Resume} className='Res' alt='Res' />

                </div>

                <Footer/>
            </>

        )
    }
}

export default ResumePage;