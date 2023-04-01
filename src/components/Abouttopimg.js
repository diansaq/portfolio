import "./AbouttopimgStyles.css";



import React, { Component } from 'react'

class Abouttopimg extends Component {
    render() {
  return (
    <div className="abouttopimg">
        <div className="aboutheading">
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
        </div>
                 
    </div>
    );
}
}


export default Abouttopimg




