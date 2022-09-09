import React from 'react';
import '../style.css';
import toastyImg from '../files/Toasty.png'

const Projects = () => {
    return (
        <div class='content'>
            <div class='heading'>
                <h1>My projects</h1>
            </div>
            <div class='container'>
                <div class='card'>
                    <img class='card_img' src={toastyImg} alt='Toasty' />
                    <a href='https://www.canva.com/design/DAFI8Dn1dnU/TeLBkBhqBQarZICRrEzEmg/view?utm_content=DAFI8Dn1dnU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target="_blank" rel="noopener noreferrer">
                        <h2 id="h2_card">Toasty</h2>
                    </a>
                    <p id='p_card'>Android app that allows users to choose 3 ingredients—that they may conveniently have at hand—to base their meal around and then generates links to recipes on the web that incorporate their selections.</p>
                </div>
            </div>
        </div>
    );
};

export default Projects