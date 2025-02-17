import React from 'react';
import '../style.css';
import toastyImg from '../files/Toasty.png';
import databaseImg from '../files/database.jpg';
import programImg from '../files/ProgramManagement.png';
import japaneseImg from '../files/japaneseinca.png';
import camdivmg from '../files/caml.png';
import aiImg from '../files/ai.png';

const Projects = () => {
    let projects = [
        {
            name: "CS Course Assistant Chatbot",
            img: aiImg,
            link: 'https://github.com/yukisuwabe/cs-course-assistant',
            description: <>LLM-powered chatbot leveraging a fine-tuned Llama model and a HuggingFace embeddings model to assist Cornell University Computer Science students in optimizing their course selection process. The chatbot analyzes factors such as course descriptions and degree requirements, delivering highly personalized and context-aware recommendations. </>
        },
        {
            name: "Camls Game",
            img: camdivmg,
            link: 'https://github.com/rpignatiello/Camls-Game',
            description: <>A terminal-based idle farming game inspired by the < a href='https://kittensgame.com/web/#' target='_blank' rel='noopener noreferrer' > Kittens Game</a >. Made with OCaml language utilzing libraries such as curses and Yojson.</>
        },
        {
            name: "Japanese American Incarceration in Children's Books",
            img: japaneseImg,
            link: 'https://japaneseincarcerationinchildrens.vercel.app',
            description: <>A multi-page React website discussing the importance of having history, specifically Japanese American Incarceration in Children and YA books. Utilizes simple animation and tabs within pages.</>
        },
        {
            name: "Toasty",
            img: toastyImg,
            link: 'https://www.canva.com/design/DAFI8Dn1dnU/TeLBkBhqBQarZICRrEzEmg/view?utm_content=DAFI8Dn1dnU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
            description: <>Android app that allows users to choose 3 ingredients—that they may conveniently have at hand—to base their meal around and then generates links to recipes on the web that incorporate their selections.</>
        },
        {
            name: "Fashion Forecast",
            img: databaseImg,
            link: 'https://github.com/yukisuwabe/fashionforecast',
            description: <>By inputting the clothes you have in your closet, this iOS app is able to automatically generate an outfit for the day based on the weather of the day. NOTE: This repository only has the backend component.</>
        },
        {
            name: "Program Management",
            img: programImg,
            link: 'https://github.com/yukisuwabe/ClubTeamCourse',
            description: <>Web App that organizes the clubs, courses, and the teams offered at Bronx High School of Science in one website to allow students to plan their school life in one place.</>
        }
    ];

    return (
        <div class='content'>
            <div class='heading'>
                <h1>My projects</h1>
            </div>
            <div class='container'>
                {projects.map(function (value, index, array) {
                    return (
                        <div class='card' key={index}>
                            <img class='card_img' src={value.img} alt={value.name} />
                            <a href={value.link} target='_blank' rel='noopener noreferrer'>
                                <h2 id='h2_card'>{value.name}</h2>
                            </a>
                            <p id='p_card'>{value.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Projects