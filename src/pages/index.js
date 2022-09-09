import React from 'react';
import '../style.css'
import myAvatar from '../files/character.svg'

const Home = () => {
    return (
        <div class="content" >
            <div id="home-container">
                <div id="home-left">

                    <h1>Hello, I am Yuki Suwabe!</h1>

                </div>
                <div id="home-right">
                    <img id= "home-img" src= {myAvatar} alt="SVG"></img>
                </div>
            </div>
        </div>
    );
};

export default Home;