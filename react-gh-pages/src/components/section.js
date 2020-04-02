import React, { Component } from 'react';

function Title(props) {
  return (
    <h2>
      <span className="projectLink"><a href={props.link} target="_blank"  rel="noopener noreferrer"> {props.name} </a></span>
    </h2>
  );
}

function Date(props) {
  return <span>{props.date}</span>;
}

function Short(props) {
  return <h4><em>{props.desc}</em></h4>;
}

function Label(props) {
  return <span className="label">{props.label}</span>;
}

function Desc(props) {
  return <span className="description">{props.desc}</span>;
}

function Demo(props) {
  return (
    <div className="projectLink padding-top">
      <a href={props.link}>Demo</a>
    </div>
  );
}

export default class Section extends Component {
  render() {
    return (
      <div id="parent">
        <div id="title"><hr/>
          <h2>&#187;Projects</h2>
        </div>
        <div id="section">
          <div id="date">
            <Date date="2020" />
          </div>
          <div>
            <Title name="react-personal-website" link="https://github.com/jakobau/react-personal-website" />
            <Short desc="my website resume" />
            <div id="labels">
              <Label label="React" />
              <Label label="Node.js" />
              <Label label="JavaScript" />
              <Label label="JSX" />
              <Label label="CSS" />
              <Label label="Github Pages" />
            </div>
            <Desc desc="I wanted to learn React.js so created a website of my resume." />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2020" />
          </div>
          <div>
            <Title name="discord-bot" link="https://github.com/jakobau/discordbot" />
            <Short desc="general discord bot" />
            <div id="labels">
              <Label label="Discord.js" />
              <Label label="JavaScript" />
              <Label label="Node.js" />
            </div>
            <Desc desc="Play music, manage roles, and announcements." />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2020" />
          </div>
          <div>
            <Title name="Twitterphile" link="https://github.com/MattD0312/twitter-profile-summarizer" />
            <Short desc="use of the Twitter API on a web app" />
            <div id="labels">
              <Label label="Node.js" />
              <Label label="Express" />
              <Label label="JavaScript" />
              <Label label="CSS" />
              <Label label="Bootstrap" />
              <Label label="Heroku" />
              <Label label="Twitter API" />
            </div>
            <Desc desc="Our DragonHacks 2020 project. Displays most recently used hashtags and words of a twitter username." />
            <Demo link="https://twitterphile.herokuapp.com/" />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2020" />
          </div>
          <div>
            <Title name="IMDrexel" link="https://github.com/jakobau/IMDrexel" />
            <Short desc="redesign of IMLeagues" />
            <div id="labels">
              <Label label="Node.js" />
              <Label label="Express" />
              <Label label="Bootstrap" />
              <Label label="CSS" />
              <Label label="JavaScript" />
              <Label label="Amazon RDS" />
            </div>
            <Desc desc="Website for CS375 Final Project." />
            <Demo link="https://jakobau.github.io/public/IMDrexel/dashboard.html" />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2019" />
          </div>
          <div>
            <Title name="Fantazmix" link="https://github.com/jakobau/fantasmix" />
            <Short desc="music generating web app" />
            <div id="labels">
              <Label label="Django" />
              <Label label="Python" />
              <Label label="CSS" />
              <Label label="Google Magenta" />
            </div>
            <Desc desc="Website that uses artificial intelligence to generate music." />
          </div>
        </div>
      </div>
    );
  }
}
