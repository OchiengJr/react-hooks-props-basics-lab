import React from "react";
import PropTypes from "prop-types";
import Links from "./Links";

function About({ bio }) {
  if (!bio) {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>Looks like the bio is missing</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links />
      </div>
    );
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}

About.propTypes = {
  bio: PropTypes.string.isRequired,
};

export default About;
