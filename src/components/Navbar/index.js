import React from 'react';
import { Nav, NavLogo, NavLink, Bars, NavMenu } from "./NavbarElements"

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
                </NavMenu>
            </Nav>
        </>
    );
};
export default NavBar;
