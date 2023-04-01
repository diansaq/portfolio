import "./ContacttopimgStyles.css";

import React, { Component } from 'react'

class Contacttopimg extends Component {
    render() {
  return (

    <div className="contacttopimg">
    <div className="contactheading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
    </div>
             
</div>
  );
    }
}

export default Contacttopimg