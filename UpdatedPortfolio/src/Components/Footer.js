// DEP.
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

// CSS
import '../css/App.css'
import '../css/Resume.css'
import WOW from 'wowjs';

// IMAGES
import LinkedIn from '../Images/LinkedIn.png';
import Email from '../Images/email.png';
import GitHub from '../Images/github.png';

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

    componentDidMount() {

        new WOW.WOW().init();

    };

    render() {

        return (

            <footer>

                <div className='Pages'>

                    {/* <h1>M.G.</h1> */}
                    <h3 className = 'FooterTopic'>Pages</h3>

                    {window.location.href.split('/')[3] === '' ?

                        <div>
                            <NavLink className = 'ALink' exact to='/' style = {{
                                textDecoration: 'none',
                                backgroundColor: 'black',
                                color: 'white'
                            }}>Skills</NavLink>
                            <NavLink className = 'ALink' exact to='/AboutMe'>Interests</NavLink>
                            <NavLink className = 'ALink' exact to='/Resume'>Resume</NavLink>
                            {/* <p>Contact Me</p> */}
                        </div>

                    : window.location.href.split('/')[3] === 'AboutMe' ?

                        <div>
                            <NavLink className = 'ALink' exact to='/'>Skills</NavLink>
                            <NavLink className = 'ALink' exact to='/AboutMe' style = {{
                                textDecoration: 'none',
                                backgroundColor: 'black',
                                color: 'white'
                            }}>Interests</NavLink>
                            <NavLink className = 'ALink' exact to='/Resume'>Resume</NavLink>
                            {/* <p>Contact Me</p> */}
                        </div>

                    : window.location.href.split('/')[3] === 'Resume' ?

                        <div>
                            <NavLink className = 'ALink' exact to='/'>Skills</NavLink>
                            <NavLink className = 'ALink' exact to='/AboutMe'>About Me</NavLink>
                            <NavLink className = 'ALink' exact to='/Resume' style = {{
                                textDecoration: 'none',
                                backgroundColor: 'black',
                                color: 'white'
                            }}>Resume</NavLink>
                            {/* <p>Contact Me</p> */}
                        </div>

                    : null }
            
                </div>

                <div className = 'CMFooter'>

                    <h3 className = 'FooterTopic'>Contact</h3>

                    <div className = 'FooterImages'>

                        <img src={GitHub} alt='CImage' data-wow-duration="1s" onClick={ () => this.toGitHub() } />
                        <img src={LinkedIn} alt='CImage' data-wow-duration="1s" onClick={ () => this.toLinkedIn() } />
                        <img src={Email} alt='CImage' data-wow-duration="1s" onClick={ () => this.toEmail() } />

                    </div>
                </div>

            </footer>

        )
    }
}