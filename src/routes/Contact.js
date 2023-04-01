import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Contacttopimg from '../components/Contacttopimg';
import Footer from '../components/Footer';
import MyContact from '../components/MyContact';
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Contacttopimg heading="Contact" text="Let's Connect"/> 
      <MyContact/>
        <Form/>
         
    </div>
  )
}

export default Contact