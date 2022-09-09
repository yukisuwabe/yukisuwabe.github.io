import React from 'react';
import linkedinLogo from '../files/linkedin.svg';
import emailLogo from '../files/email.svg';
import githubLogo from '../files/github.svg';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div class='foot'>
                <a href='https://www.linkedin.com/in/yuki-suwabe/' ><img id= "linkedin" class='logo' src={linkedinLogo} alt='SVG' /></a>
                <a href="mailto: yuki.suwabe812@gmail.com" ><img id= "email" class='logo' src={emailLogo} alt='SVG ' /></a>
                <a href='https://github.com/yukisuwabe' ><img id= "github" class='logo' src={githubLogo} alt='SVG' /></a>
            </div>
        </>
    );
};

export default Footer;