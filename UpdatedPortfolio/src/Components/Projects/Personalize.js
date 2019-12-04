import React from 'react'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

// IMAGES
import PersonalizeImg from '../../Images/personalize.jpeg';

export default class Personalize extends React.Component {

    render() {

        return ( 

            <ParallaxLayer className='PersonalizeParallax' speed={.5} offset={2}>

                <div className='Personalize'>

                    <h1>Personalize</h1>

                    <div>

                        <img src={PersonalizeImg} alt='PersonalizeIMG' className = 'PersonalizeIMG' />

                        <p>Personalize is a side project I've been working on, its purpose is to keep track of jobs you apply to and give back statistics. It can show you information about all the jobs you apply to. It also has an activity graph to show you what days you were most active in your job search</p>

                    </div>

                </div>

            </ParallaxLayer>

        )

    }
}