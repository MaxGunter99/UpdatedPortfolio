// DEP
import React from 'react';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';

// CSS
import "./css/App.css";
import './css/Header.css';
import './css/Footer.css'

// COMPONENTS
import MainPage from './Components/Home';
import ResumePage from './Components/Resume';
import Footer from './Components/Footer';
import PageNotFound from './Components/PageNotFound'

export default class App extends React.Component {

  render() {
    return (

      <div className='MenuContainer'>

        <div className='HomeTitle'>

          <h1 className="Name" >M.G.</h1>

          <div className="NavButtons">

            <NavLink exact to='/'>Projects</NavLink>
            <NavLink exact to='/Resume'>Resume</NavLink>

          </div>

        </div>

        <Switch>

          <Route exact path='/' component={MainPage} />
          <Route exact path='/Resume' component={ResumePage} />
          <Route path='/404' component={PageNotFound} />
          <Redirect from='*' to='/404' />
        </Switch>


        <Footer/>

      </div>

    );

  }

}

