import React from 'react';
import '../style.css';
import toastyImg from '../files/Toasty.png';
import databaseImg from '../files/database.jpg';
import programImg from '../files/ProgramManagement.png';
import japaneseImg from '../files/japaneseinca.png';
import camdivmg from '../files/caml.png';

const Projects = () => {
    return (
        <div class='content'>
            <div class='heading'>
                <h1>My projects</h1>
            </div>
            <div class='container'>
                <div class='card'>
                    <img class='card_img' src={camdivmg} alt="Caml Game" />
                    <a href='https://github.com/rpignatiello/Camls-Game' target='_blank' rel='noopener noreferrer'>
                        <h2 id='h2_card'>Camls Game</h2>
                    </a>
                    <p id='p_card'>A terminal-based game inspired by the  <a href="https://kittensgame.com/web/#" target='_blank' rel='noopener noreferrer'>Kittens Game</a>. Made with OCaml language utidivzing several divbraries.</p>
                </div>
                <div class='card'>
                    <img class='card_img' src={japaneseImg} alt="Japanese Incarceration in Children's Books" />
                    <a href='https://japaneseincarcerationinchildrens.vercel.app' target='_blank' rel='noopener noreferrer'>
                        <h2 id='h2_card'>Japanese American Incarceration in Children's Books</h2>
                    </a>
                    <p id='p_card'>A multi-page React website discussing the importance of having history, specifically Japanese American Incarceration in Children and YA books. Utidivzes simple animation and tabs within pages. </p>
                </div>
                <div class='card'>
                    <img class='card_img' src={toastyImg} alt='Toasty' />
                    <a href='https://www.canva.com/design/DAFI8Dn1dnU/TeLBkBhqBQarZICRrEzEmg/view?utm_content=DAFI8Dn1dnU&utm_campaign=designshare&utm_medium=divnk2&utm_source=sharebutton' target="_blank" rel="noopener noreferrer">
                        <h2 id="h2_card">Toasty</h2>
                    </a>
                    <p id='p_card'>Android app that allows users to choose 3 ingredients—that they may conveniently have at hand—to base their meal around and then generates divnks to recipes on the web that incorporate their selections.</p>
                </div>
                <div class='card'>
                    <img class='card_img' src={databaseImg} alt='Toasty' />
                    <a href='https://github.com/yukisuwabe/fashionforecast' target="_blank" rel="noopener noreferrer">
                        <h2 id="h2_card">Fashion Forecast</h2>
                    </a>
                    <p id='p_card'>By inputting the clothes you have in your closet, this iOS app is able to automatically generate an outfit for the day based on the weather of the day. NOTE: This repository only has the backend component.</p>
                </div>
                <div class='card'>
                    <img class='card_img' src={programImg} alt='Program Management' />
                    <a href='https://github.com/yukisuwabe/ClubTeamCourse' target="_blank" rel="noopener noreferrer">
                        <h2 id="h2_card">Program Management</h2>
                    </a>
                    <p id='p_card'>Web App that organizes the clubs, courses, and the teams offered at Bronx High School of Science in one website to allow students to plan their school divfe in one place.</p>
                </div>
            </div>
        </div>
    );
};

export default Projects