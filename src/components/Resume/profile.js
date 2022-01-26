import React, { Component } from 'react';

//get icons
import githubIcon from '../../media/github_icon.svg';
import linkedlnIcon from '../../media/linkedln_icon.png';
import mePic from '../../media/me_picture.JPG';
import emailIcon from '../../media/email_icon.png';

//Just name
function Name() {
  return <h2>Jakob Au</h2>;
}

//all social links
function SocialLinks(props) {
  return (
    <h5>
      <a href="https://www.github.com/jakobau" rel="noopener noreferrer">
        <img id="profile-icon" src={githubIcon} alt=""/>Github</a>
      <a href="https://www.linkedin.com/in/jakob-au" rel="noopener noreferrer">
        <img id="profile-icon-linkedin" src={linkedlnIcon} alt=""/>LinkedIn</a>
      <a href="mailto:jda92@drexel.edu" rel="noopener noreferrer">
        <img id="profile-icon-linkedin" src={emailIcon} alt=""/>Email Me</a>
    </h5>
  );
}

//short description
function Short(props) {
  return <div className="padding-top" id="profile-description">Software Engineering Student at Drexel University</div>;
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
          <img id="profile-pic" src={mePic} alt=""/>
        </div>
      </div>
    );
  }
}
