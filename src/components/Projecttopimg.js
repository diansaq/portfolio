import "./ProjecttopimgStyles.css";



import React, { Component } from 'react'

class Projecttopimg extends Component {
    render() {
  return (
    <div className="topimg">
        <div className="heading">
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
        </div>
                 
    </div>
    );
}
}

export default Projecttopimg