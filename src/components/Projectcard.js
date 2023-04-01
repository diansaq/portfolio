import "./ProjectcardStyles.css";

// import Projectcard from "./Projectcard";
import React from "react";
import { NavLink } from "react-router-dom";


const Projectcard = (props) => {
  return (
    <div className="projectcard"> 
                <img src={props.imgsrc} alt="image" />
                <h2 className="project-title">{props.title}</h2>
                <div className="projectdetails">
                    <p>{props.text}</p>
                    <div className="project-btns">
                        <NavLink to={props.view} className="btn">View</NavLink>
                    </div>
                </div>
        </div>
            
  )
}

export default Projectcard