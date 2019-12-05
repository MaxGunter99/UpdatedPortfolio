// DEP.
import React, { Component } from 'react'

// IMAGES
import Resume from '../Images/resume.jpeg'

// CSS
import '../css/App.css'
import '../css/Resume.css'

class ResumePage extends Component {

    render() {

        return (

            <div className='Resume'>

                <img src={Resume} width="850" height="1100" className='Res' alt='Res' />

            </div>

        )
    }
}

export default ResumePage;