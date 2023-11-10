// DEP.
import React, { Component, Suspense } from 'react'

// CSS
import '../css/Resume.css'
import WOW from 'wowjs';

// IMAGES
// import Resume from '../Images/resume.jpeg'
import Resume from '../Images/Resume - 2.7.jpg'
// import Resume from '../Images/Resume - 2.6.jpg'

class ResumePage extends Component {

    componentDidMount() {

        new WOW.WOW().init();

    };

    render() {
        return (

            <Suspense fallback={<div>Loading...</div>}>
                <div className="wow fadeIn" data-wow-duration=".3s">
                    <img src={Resume} className='Res' alt='Res' />

                </div>
            </Suspense>

        )
    }
}

export default ResumePage;