import React from 'react';
import { Nav, NavLogo, NavLink, Bars, NavMenu } from "./NavbarElements"
import '../../style.css';
import Resume from '../../files/Resume.pdf';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    Yuki Suwabe
                </NavLogo>
                <Bars />

                <NavMenu>
                    <NavLink to="/" activeStyle={{ color: 'black'}} >
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle={{ color: 'black'}} >
                        About
                    </NavLink>
                    <NavLink to="/projects" activeStyle={{ color: 'black'}} >
                        Projects
                    </NavLink>
                    <a id="NavBar" href={Resume} target="_blank" rel="noopener noreferrer" >
                        Resume
                    </a>
                </NavMenu>
            </Nav>
        </>
    );
};
export default NavBar;
