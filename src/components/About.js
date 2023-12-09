import React from "react";
import Links from "./Links";
import user from "../data/user";

function About(props) {
  
  const { bio } = props;

  if (!bio) {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>looks like the bio is missing</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links />
      </div>
    );
  } else {
    
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links />
      </div>
    );
  }
}

export default About;

