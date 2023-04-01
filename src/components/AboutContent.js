import "./About.css"
import React from 'react'

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import React1 from "../assets/reactimg1.jpg";
import React2 from "../assets/reactimg2.jpg";

import{BsFiletypeCss, BsFiletypeHtml} from "react-icons/bs";
import{GrReactjs} from "react-icons/gr";
import{IoLogoJavascript} from "react-icons/io";




const AboutContent = () => {
  return <div className="about">
    <div className="left">
        <h1>About Me</h1>
        <p>Web and Mobile Developer Student with a results-driven, proactive and dedicated passion for joining the programming industry</p>
 
<div>
    <Link activeClass="active" smooth spy to="Contact"><button className="aboutbtn">Contact</button></Link>
    <button className="aboutbtn"><a className="text-white" href="https://docs.google.com/document/d/1wXfvgxjpiStyvcFyhm2KKjfc5cs1JgQnWz1VisiM_bU/edit?usp=sharing">My Resume</a></button>
    </div>
    </div>

    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={React1} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={React2} className="img" alt="true"/>
            </div>
        </div>
    </div>
    <div className="left">
  <h1>SKILLS</h1>
  <p><GrReactjs size={40} style={{ color: "#black"}}/>
  <br>
  </br>React</p>

  
  <p><IoLogoJavascript size={40} style={{ color: "#black"}}/>
  <br>
  </br>JavaScript</p>

  <p><BsFiletypeCss size={40} style={{ color: "#black"}}/>
  <br>
  </br>CSS</p>

  <p><BsFiletypeHtml size={40} style={{ color: "#black"}}/>
  <br>
  </br>HTML</p>


</div>
  </div>
  
};

export default AboutContent