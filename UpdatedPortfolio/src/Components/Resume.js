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

                <img src={Resume} stye = {{ width: '100%' , height: '70vh' }} className='Res' alt='Res' />

            </div>

        )
    }
}

export default ResumePage;