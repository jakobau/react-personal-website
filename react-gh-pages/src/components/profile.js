import React, { Component } from 'react';
import profilePic from '../profile.png';

function Name() {
  return <h2>Jakob Au</h2>;
}

function SocialLinks(props) {
  return <h5><a href="https://www.github.com/jakobau" target="_blank">Github</a> | <a target="_blank" href="https://www.linkedin.com/in/jakob-au">Linkedin</a></h5>;
}

function Short(props) {
  return <span>Student @ Drexel University</span>;
}

export default class Profile extends Component {
  render() {
    return (
      <div id="parent" className="profile">
        <div id="profile-name">
          <Name />
          <SocialLinks />
          <Short />
        </div>
        <div className="frame">
          <img id="profile-pic" src={profilePic}></img>
        </div>
      </div>
    );
  }
}
