import React from 'react';
import '../style.css';
import profilePic from '../files/IMG_8240.jpg'

const About = () => {
    return (
        <div class='content'>
            <div class='heading'>
                <h1>About me</h1>
            </div>
            <div class='row'>
                <div class="column">
                    <img class='profile' src={profilePic} alt='profile' />
                    <h2>Yuki Suwabe</h2>
                    <p>Cornell University, Class of 2025</p>
                    <p>Birthday: August 12, 2003</p>
                    <p>Birthplace: Tokyo, Japan</p>
                </div>
                <div class="column" id='rightStuff'>
                    <p id='aboutMeP'>Hi! My name is Yuki Suwabe and I am currently a sophomore in Cornell Unviersity, majoring in Computer Science at the College of Engineering. I am also an incoming TIP intern at Capital One for Summer 2024! I am interested in Software Engineering, mainly the backend side, but still learning a lot in general!
                        On campus I am the Executive Co-Director for the BigRed//Hacks organization where we organize the longest student-run hackathon on campus.</p>
                    <p id='aboutMeP'>I was born in Japan and raised in New York City. I became interested in Computer Science when I participated in a Girls Who Code program at Columbia University in middle school. Since then, I've worked on multiple projects as well as participated in Software Design programs over the summer.</p>
                    <p id='aboutMeP'>I love to watch ballet, play video games, and watch Japanese TV shows during my free time!</p>
                    <p id='aboutMeP'>Please feel free to contact me!</p>
                </div>
            </div>
        </div>
    );
};

export default About;