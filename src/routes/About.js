import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Abouttopimg from '../components/Abouttopimg';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';


const About = () => {
  return (
    <div> 
        <Abouttopimg heading="About" text="I am a honest and friendly professional"/> 
        <AboutContent/>


    </div>

  //   <div> 
  //     <div className='aboutpg'>
  //     <h1>about me</h1>
  //     </div>
  //     <div className='aboutpg2'>
  //     <h1>about me</h1>
  //     </div>


    
   
  //  <h2></h2>
  //  <br/>
  //  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur commodo neque, vel imperdiet est maximus ac. Sed fermentum accumsan nisi, ut fringilla dui tempus at. Aenean ut vulputate tellus, ut convallis erat. Aenean quis ex posuere velit suscipit aliquet. Donec consequat pellentesque ante, nec molestie leo</p>
   
 
  )
}

export default About