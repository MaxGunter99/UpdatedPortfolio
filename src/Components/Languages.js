import React from 'react';

// CSS
import '../css/Languages.css';

// LANGUAGE IMAGES
import Javascript from '../Images/js.png';
import ReactImg from '../Images/react.jpg';
import NodeImg from '../Images/nodejs.jpg'
import Python from '../Images/python.jpg';
import Redux from '../Images/redux.jpg';
import html from '../Images/HTML.svg';
import Django from '../Images/djangologo.png';
import Jest from '../Images/jest.png';
import REST from '../Images/restAPI.png';
import Express from '../Images/expresslogo.png';
import Puppeteer from '../Images/puppeteer.png';
import Golang from '../Images/Golang.png';
import GoogleCloud from '../Images/GoogleCloud.png';
import BigQuery from '../Images/BigQuery.png';
import DataStudio from '../Images/DataStudio.png';
import SQL from '../Images/SQL.png';
import AskingQuestions from '../Images/AskingQuestions.png';
import ProblemSolving from '../Images/ProblemSolving.png';
import Collaboration from '../Images/Collaboration.png';
import Notion from '../Images/Notion.png';
import BulletJournaling from '../Images/BulletJournaling.png';
import VisualizingProcesses from '../Images/VisualizingProcesses.png';

export default class Languages extends React.Component {

    render() {

        return (
            <div className='SkillsContainer'>

                <h1 className='Skills'>Skills</h1>

                <div className='Languages'>

                    {/* TECHNICAL SKILLS */}
                    
                    <div className='Container'>

                        <div className="TopicsContainer">
                            <h2 className='Topics'>Technical Skills</h2>
                        </div>


                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Python } alt='LanguageImage' />
                            <p className='LanguageText'>Python3</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ GoogleCloud } alt='LanguageImage' />
                            <p className='LanguageText'>Google Cloud</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ DataStudio } alt='LanguageImage' />
                            <p className='LanguageText'>Data Studio</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Javascript } alt='LanguageImage' />
                            <p className='LanguageText'>Javascript</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ SQL } alt='LanguageImage' />
                            <p className='LanguageText'>SQL</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ BigQuery } alt='LanguageImage' />
                            <p className='LanguageText'>BigQuery</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Golang } alt='LanguageImage' />
                            <p className='LanguageText'>Golang</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ html } alt='LanguageImage' />
                            <p className='LanguageText'>HTML5</p>

                        </div>

                    </div>

                    {/* FRAMEWORKS & LIBRARIES */}

                    <div className='Container'>

                        <div className="TopicsContainer">
                            <h2 className='Topics'>Frameworks & Libraries</h2>
                        </div>

                        <div className='LanguageContainer'>
                            <img className='LanguageImage' src={ Django } alt='LanguageImage' />
                            <p className='LanguageText'>Django</p>
                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ REST } alt='LanguageImage' />
                            <p className='LanguageText'>REST</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ NodeImg } alt='LanguageImage' />
                            <p className='LanguageText'>Node</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Express } alt='LanguageImage' />
                            <p className='LanguageText'>Express</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Jest } alt='LanguageImage' />
                            <p className='LanguageText'>Jest</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Puppeteer } alt='LanguageImage' />
                            <p className='LanguageText'>Puppeteer</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ ReactImg } alt='LanguageImage' />
                            <p className='LanguageText'>React</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ ReactImg } alt='LanguageImage' />
                            <p className='LanguageText'>React Native</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Redux } alt='LanguageImage' />
                            <p className='LanguageText'>Redux</p>

                        </div>

                    </div>

                    {/* SOFT SKILLS */}

                    <div className='Container'>

                        <div className="TopicsContainer">
                            <h2 className='Topics'>Soft Skills</h2>
                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ AskingQuestions } alt='LanguageImage' />
                            <p className='LanguageText'>Asking Question</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Collaboration } alt='LanguageImage' />
                            <p className='LanguageText'>Collaboration</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ ProblemSolving } alt='LanguageImage' />
                            <p className='LanguageText'>Problem Solving</p>

                        </div>

                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ Notion } alt='LanguageImage' />
                            <p className='LanguageText'>Notion</p>

                        </div>
                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ BulletJournaling } alt='LanguageImage' />
                            <p className='LanguageText'>Bullet Journaling</p>

                        </div>
                        <div className='LanguageContainer'>

                            <img className='LanguageImage' src={ VisualizingProcesses } alt='LanguageImage' />
                            <p className='LanguageText'>Visualizing Processes</p>

                        </div>

                    </div>

                </div>

            </div>

        )
    }
}