// DEP
import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import WOW from 'wowjs';

// COMPONENTS
import MainPage from './Components/Home';
import ResumePage from './Components/Resume';
import Interests from './Components/Interests/Interests';
import Footer from './Components/Footer';

// IMAGES
import LinkedIn from './Images/LinkedIn.png';
import Email from './Images/email.png';
import GitHub from './Images/github.png';

// CSS
import "./css/App.css";
import './css/Header.css';

export default class App extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {

      dropdown: 'NotActive',
      title: 'Hide',
      loading: true

    };
  };

  componentDidMount() {

    new WOW.WOW().init();

  }

  render() {

    const toggleDropdown = () => {

      if (this.state.dropdown === 'NotActive') {

        this.setState({ dropdown: 'Active', title: 'Hide' })

      } else {

        this.setState({ dropdown: 'NotActive', title: 'Show' })

      }

    };

    let set;

    if (this.state.dropdown === 'Active') {

      set = "wow zoomIn"

    } else if (this.state.dropdown === 'NotActive') {

      set = 'wow zoomOut'

    };

    const toGitHub = () => {

      window.location.href = 'https://github.com/MaxGunter99'

    };

    const toLinkedIn = () => {

      window.location.href = 'https://www.linkedin.com/in/michael-gunter-5383a0181/'

    };

    const toEmail = () => {

      window.location.href = "mailto:Michael.Alex.Gunter@gmail.com";

    };

    window.addEventListener( 'load', ( event ) => {

      event.preventDefault()
      setTimeout(() => this.setState({ loading: false }), 3000);

    });

    return (

      <div className='MenuContainer'>

        <div className='HomeTitle'>
          <h1 className="Name" >Michael Gunter</h1>
          <div className="Title">

            <NavLink exact to='/'>Skills</NavLink>
            <NavLink exact to='/Interests'>Interests</NavLink>
            <NavLink exact to='/Resume'>Resume</NavLink>
            <p className={`${this.state.title}`} onClick={toggleDropdown}>Contact Me</p>

          </div>
        </div>

        {this.state.dropdown !== false ?

          <div className={`Dropdown ${this.state.dropdown}`}>

            <img src={GitHub} alt='CImage' className={set} data-wow-duration="1s" onClick={toGitHub} />
            <img src={LinkedIn} alt='CImage' className={set} data-wow-duration="1s" onClick={toLinkedIn} />
            <img src={Email} alt='CImage' className={set} data-wow-duration="1s" onClick={toEmail} />

          </div> : null

        }

        <Route exact path='/' render={() => (<MainPage />)} />
        <Route exact path='/Resume' render={() => (<ResumePage />)} />
        <Route exact path='/Interests' render={() => (<Interests />)} />

      </div>
    );

  }

}

