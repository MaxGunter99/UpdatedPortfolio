// DEP
import React from 'react';
import { Route, NavLink } from 'react-router-dom';

// CSS
import "./css/App.css";
import './css/Header.css';
import './css/Footer.css'

// COMPONENTS
import MainPage from './Components/Home';
import ResumePage from './Components/Resume';
import Footer from './Components/Footer';

export default class App extends React.Component {

  render() {
    return (

      <div className='MenuContainer'>

        <div className='HomeTitle'>
          <h1 className="Name" >Michael Gunter</h1>

          <div className="Title">

            <NavLink exact to='/'>Skills</NavLink>
            <NavLink exact to='/Resume'>Resume</NavLink>

          </div>

        </div>

        <Route exact path='/' component={MainPage} />
        <Route exact path='/Resume' component={ResumePage} />

        <Footer />

      </div>

    );

  }

}

