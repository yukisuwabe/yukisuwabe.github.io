import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import '../../satoshi.css';

export const Nav = styled.nav`
  height: 13vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 0.2rem calc((100vw - 1000px) / 2);
  padding: 0.2rem 5vw;
  z-index: 12;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: grey;
  font-size: 2rem;
  text-decoration: none;
  font-family:'Satoshi-Variable', Consolas, Courier, Tahoma, Geneva, sans-serif;
  letter-spacing: 0.05em;
  &:hover {
    color: black;
    text-decoration: none;
  }
`;

export const NavLink = styled(Link)`
color: grey;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-family: 'Satoshi-Variable', Consolas, Courier, Tahoma, Geneva, sans-serif;
&:hover {
  color: black;
  text-decoration: none;
}
&.inactive {
  color: grey;
}
`;


export const Bars = styled(FaBars)`
  display: none;
  color: grey;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 5vh);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const DropdownBars = styled(FaXmark)`
  color: grey;
  cursor: pointer;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
`;
// export const Bar1 = styled.div`
//   width: 35px;
//   height: 5px;
//   background-color: #333;
//   margin: 6px 0;
//   transition: 0.4s;
//   .change &{
//     transform: translate(0, 11px) rotate(-45deg);
//   }
// `
// export const Bar2 = styled.div`
//   width: 35px;
//   height: 5px;
//   background-color: #333;
//   margin: 6px 0;
//   transition: 0.4s;
//   .change &{
//     opacity: 0;
//   }
// `
// export const Bar3 = styled.div`
// width: 35px;
// height: 5px;
// background-color: #333;
// margin: 6px 0;
// transition: 0.4s;
//  .change &{
//   transform: translate(0, -11px) rotate(45deg);
//  }
// `

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const DropdownMenu = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
  height: 0;
  overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;
background-color: antiquewhite;
z-index: 1;
transition: 0.5s;
`;

export const DropdownLink = styled(Link)`
  text-align: center;
  color: grey;
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const DropdownLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

// export function myFunction(x) {
//   x.classList.toggle("change");
//   console.log("hello");
// }