// DEP.
import React, { Component } from 'react'

// CSS
import '../css/App.css'
import '../css/Resume.css'
// import WOW from 'wowjs';

// IMAGES
// import LinkedIn from '../Images/LinkedIn.png';
// import Email from '../Images/email.png';
// import GitHub from '../Images/github.png';
import LambdaStamp from '../Images/LambdaStamp.png'

export default class Footer extends Component {

    state = {

        active: false

    }

    toGitHub = () => {

        window.location.href = 'https://github.com/MaxGunter99'
  
    };
  
    toLinkedIn = () => {
  
        window.location.href = 'https://www.linkedin.com/in/michael-gunter-5383a0181/'
  
    };
  
    toEmail = () => {
  
        window.location.href = "mailto:Michael.Alex.Gunter@gmail.com";
  
    };

    render() {

        return (

            <footer>
                    
                <div>
                    <h2><strong>Michael Gunter</strong></h2>
                    <p><strong>Full-Stack Web Developer</strong></p>
                    <p>Bloom Institute of Technology (Lambda)</p>
                    {/* <p>Austin, TX</p> */}
                </div>

                <div>
                    <img src={LambdaStamp} alt='LambdaStamp' className = 'LambdaStamp' />
                </div>

                <div className = "Connect">
                    <p className = 'Link' onClick={ () => this.toGitHub() }>GitHub</p>
                    <p className = 'Link' onClick={ () => this.toLinkedIn() }>LinkedIn</p>
                    <p className = 'Link' onClick={ () => this.toEmail() }>Email</p>
                </div>

            </footer>

        )
    }
}