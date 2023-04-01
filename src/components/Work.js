import "./ProjectcardStyles.css";

import Projectcard from "./Projectcard";
import WorkCardData from "./WorkCardData";

import React from 'react';

const Work = () => {
  return (
    <div className="projectcardcontainer">
        <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {WorkCardData.map((val, ind) =>{
                    return(
                        <Projectcard
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        />
                    );
                })}
            </div>
            </div>
  );
}

export default Work