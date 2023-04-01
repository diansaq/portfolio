import "./MyContactStyles.css"

import{RiMapPin2Fill} from "react-icons/ri";
import{BiPhone} from "react-icons/bi";
import{MdEmail} from "react-icons/md";
import{BsGithub} from "react-icons/bs";
import{SiLinkedin} from "react-icons/si";


import React from 'react'

const MyContact = () => {
  return (
    <div className="mycontact">
    <div className="mycontactcontainer">
    <div className="left">
    <div className="location">
        <h4><RiMapPin2Fill size={30} style={{color: "white", marginRight: "2rem"}}/>
        Toronto, ON, Canada </h4>
       
        </div>
        <div className="phone">
        <h4><BiPhone size={30} style={{color: "white", marginRight: "2rem"}}/>
        (647) XXX XXXX</h4>

        </div>
        <div className="email">
        <h4><MdEmail size={30} style={{color: "white", marginRight: "2rem"}}/>
        Diansa.Quach@gmail.com</h4>
        </div>
        </div>
        
    
    <div className="right">
 
        <div className="github">
        <h4><BsGithub size={30} style={{color: "white", marginRight: "2rem"}}/>

        <a className="mylinks" href="https://github.com/">github</a></h4>
        </div>


        

        <div className="linkedin">
        <h4><SiLinkedin size={30} style={{color: "white", marginRight: "2rem"}}/>
        <a className="mylinks" href="https://www.linkedin.com/in/diansa-q-a6442b195/">linkedin</a></h4>

        </div>
        </div>

    </div>
    </div>
 
  );
}

export default MyContact