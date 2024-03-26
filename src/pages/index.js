import React from 'react';
import '../style.css';
import myAvatar from '../files/character.svg';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div className="content" id="home_content">
            <div id="home-container">
                <div id="home-left">

                    <TypeAnimation
                        sequence={['Hello,', 500, 'Hello, I am', 500, 'Hello, I am Yuki Suwabe', 500]}
                        //  Replacing previous Text
                        // style={{ fontSize: '2em' }}
                        wrapper="h1"
                        repeat={Infinity}
                    />
                </div>
                <div id="home-right">
                    <img id="home-img" src={myAvatar} alt="SVG"></img>
                </div>
            </div>
        </div>
    );
};

export default Home;