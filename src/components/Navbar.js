import "./NavbarStyles.css";

import React, { useState } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import{FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" :
    "header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "navbarmenu active" :
    "navbarmenu"}>
            <li>
                <Link activeClass="active" smooth spy to="Home">home</Link>
            </li>
            <li>
                <Link activeClass="active" smooth spy to="About">about</Link>
            </li>
            <li>
                <Link activeClass="active" smooth spy to="Contact">contact</Link>
            </li>
            <li>
                <Link activeClass="active" smooth spy to="Project">projects</Link>
            </li>
        </ul>
        <div className="hamburgermenu" onClick=
        {handleClick}>
            {click ? (
            <FaTimes size={20} style={{ color: "#fffff" }} /> 
            ) : (
            <FaBars size={20} style={{ color: "#fffff" }} /> 
            ) }
            
            
        </div>


    </div>
  )
}

export default Navbar