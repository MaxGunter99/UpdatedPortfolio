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

            <img src={Resume} className='Res' alt='Res' />

        )
    }
}

export default ResumePage;