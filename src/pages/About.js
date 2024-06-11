import React, { Component } from 'react';
import "./About.css"
import pfp from "../assets/pfp.png"

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="split left">
        <div className="centered">
        <img
          className="profile_image"
          src = {pfp}
          alt="Profile Pic"
        ></img>
        </div>
        </div>
              <div className="split right">
              <div className="centered">
              <div className="name_title">Giovanni De La Luz</div>
              <div className="brief_description">
                <p> Computer Science @ Cal Poly SLO '26</p>
                <p> IBM Accelerate '24', USC Researcher, Color Stack Tech Officer </p>
                <p> "Today is a good day, if you make it one." - gio at 2am </p>
              </div>
              </div>
              </div>
              </div>
      </div>
    )
  }
}