// DEP
import React, { lazy } from 'react';
import { Route, NavLink } from 'react-router-dom';
import WOW from 'wowjs';

// IMAGES
import LinkedIn from './Images/LinkedIn.png';
import Email from './Images/email.png';
import GitHub from './Images/github.png';

// CSS
import "./css/App.css";
import './css/Header.css';
import './css/Footer.css'

// COMPONENTS
import MainPage from './Components/Home';
import ResumePage from './Components/Resume';
import Interests from './Components/Interests/Interests';

// const MainPage = lazy(() => import('./Components/Home'));
// const ResumePage = lazy(() => import('./Components/Resume'));
// const Interests = lazy(() => import('./Components/Interests/Interests'));

export default class App extends React.Component {

  constructor(props) {
    super(props);

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

    window.addEventListener('load', (event) => {

      event.preventDefault()
      setTimeout(() => this.setState({ loading: false }), 3000);

    });

    return (

        <div className='MenuContainer'>

          <div className='HomeTitle'>
            <h1 className="Name" >Michael Gunter</h1>

            <div className="Title">
              
              <NavLink exact to='/'>Skills</NavLink>
              <NavLink exact to='/Resume'>Resume</NavLink>
              <NavLink exact to='/AboutMe'>About Me</NavLink>
              <p className={`${this.state.title}`} onClick={toggleDropdown}>Contact Me</p>

            </div>

          </div>


          {this.state.dropdown !== false ?

            <div className={`Dropdown ${this.state.dropdown}`}>

              <img src={GitHub} alt='CImage' className={set} data-wow-duration="1s" onClick={toGitHub} />
              <img src={LinkedIn} alt='CImage' className={set} data-wow-duration="1s" onClick={toLinkedIn} />
              <img src={Email} alt='CImage' className={set} data-wow-duration="1s" onClick={toEmail} />

            </div>

          : null}


          <Route exact path='/' component={MainPage} />
          <Route exact path='/Resume' component={ResumePage} />
          <Route exact path='/AboutMe' component={Interests} />

        </div>

    );

  }

}

