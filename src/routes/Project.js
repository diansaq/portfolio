import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Heroimg from '../components/Heroimg';

import Footer from '../components/Footer';
import Work from "../components/Work"

import Projecttopimg from '../components/Projecttopimg';
import Projectcard from '../components/Projectcard';
/* import projectimg from "../assets/projectimg.jpg"; */


const Project = () => {
  return (
    <div> 
        <Projecttopimg heading="Projects" text="Check Out Some of My Work"/> 
        <Work/>
        {/* <Projectcard/> */}



    </div>
  )
}

export default Project