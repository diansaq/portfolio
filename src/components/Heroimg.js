import "./HeroimgStyles.css";

import React from 'react';
import IntroImg from "../assets/ProfileImage.png";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import{BsAlignCenter, BsFillPersonLinesFill, BsStack} from "react-icons/bs";
import{RiMailSendLine} from "react-icons/ri";


/*import{HiSquare3Stack3D} from "react-icons/hi"; */

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src=
            {IntroImg} alt="IntroImg" />

        </div>
        <div className="content">
            <p>hello, I'm a computer programming student</p>
            <h1>Diansa Quach</h1>
            <div>
            
                <Link activeClass="active" smooth spy to="About" className="btn btn-light"><BsFillPersonLinesFill size={40} style={{ color: "#black"}}/></Link>
                <Link activeClass="active" smooth spy to="Contact" className="btn btn-light"><RiMailSendLine size={40} style={{ color: "#black" }}/></Link>
                <Link activeClass="active" smooth spy to="Project" className="btn btn-light"><BsStack size={40} style={{ color: "#black" }}/></Link>
                

          
            </div>
        </div>
    </div>
  )
}

export default Heroimg