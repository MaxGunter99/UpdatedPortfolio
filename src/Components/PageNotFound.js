
import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../css/PageNotFound.css';

import PageNotFoundIMG from '../Images/404-error.png'

export default class PageNotFound extends React.Component {

    render() {

        return (

            <div className="PageNotFound">
                <img className='PageNotFoundImage' src={ PageNotFoundIMG } alt='PageNotFoundImage' />
                <p>Sorry, but this page could not be found.</p>
                <Link to="/">Go Home</Link>
            </div>

        )
    }
}