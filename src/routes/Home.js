import React from 'react'
import Navbar from '../components/Navbar';
import Heroimg from '../components/Heroimg';
import Footer from '../components/Footer';


import About from '../routes/About';
import Contact from '../routes/Contact';
import Project from '../routes/Project';


import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <Heroimg/>

    </div>
  )
}

export default Home