import React, { useEffect, useState } from 'react';
import { Nav, NavLogo, NavLink, Bars, NavMenu, NavBtnLink, NavBtn, DropdownLink, DropdownMenu, DropdownLinks, DropdownBars } from "./NavbarElements"
import '../../style.css';
import Resume from '../../files/Resume.pdf';

const NavBar = () => {
    // let myFunction = () => this.classList.toggle("change");
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        console.log(showDropdown);
        setShowDropdown(!showDropdown);
        console.log(showDropdown);
    };
    const handleLinkClick = () => {
        setShowDropdown(false);
        console.log(showDropdown);
        document.getElementById("drop").style.height = "0";
    };
    // const change = () => {
    //     if (showDropdown) {
    //         document.getElementById("drop").style.height = "100%";
    //     } else {
    //         document.getElementById("drop").style.height = "0";
    //     }
    // }
    useEffect(() => {
        if (showDropdown) {
            document.getElementById("drop").style.height = "100%";
        } else {
            document.getElementById("drop").style.height = "0";
        }
    }, [showDropdown])
    // const [width, setWidth] = React.useState(window.innerWidth);
    // const breakpoint = 768;
    // React.useEffect(() => {
    //     const handleResizeWindow = () => setWidth(window.innerWidth);
    //     // subscribe to window resize event "onComponentDidMount"
    //     window.addEventListener("resize", handleResizeWindow);
    //     return () => {
    //         // unsubscribe "onComponentDestroy"
    //         window.removeEventListener("resize", handleResizeWindow);
    //     };
    // }, []);
    // if ((width < breakpoint && showDropdown) || (width >= breakpoint && showDropdown)) {
    //     return (
    //     );
    // }
    return (
        <>
            <Nav>
                <NavLogo exact to="/">
                    Yuki Suwabe
                </NavLogo>
                <Bars onClick={toggleDropdown} />

                <NavMenu>
                    <NavLink exact to="/" activeStyle={{ color: 'black' }} >
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle={{ color: 'black' }} >
                        About
                    </NavLink>
                    <NavLink to="/projects" activeStyle={{ color: 'black' }} >
                        Projects
                    </NavLink>
                    <a id="NavBar" href={Resume} target="_blank" rel="noopener noreferrer" >
                        Resume
                    </a>
                </NavMenu>
                <DropdownMenu id="drop">
                    <DropdownBars onClick={handleLinkClick} />
                    <DropdownLinks>
                        <DropdownLink onClick={handleLinkClick} to="/">Home</DropdownLink>
                        <DropdownLink onClick={handleLinkClick} to="/about">About</DropdownLink>
                        <DropdownLink onClick={handleLinkClick} to="/projects">Projects</DropdownLink>
                        <a href={Resume} target="_blank" rel="noopener noreferrer"
                            style={{
                                maxWidth: 'fit-content',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                padding: '0.5rem 1rem'
                            }}
                        >
                            Resume
                        </a>
                    </DropdownLinks>
                </DropdownMenu>
            </Nav >
        </>
    );
};
export default NavBar;
