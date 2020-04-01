import React, { Component } from 'react'

function Title(props) {
  return (
    <h1>
      <span id="smaller">$&#10100;</span>
      <a href={props.link}> {props.name} </a>
      <span id="smaller">&#10101;</span>
    </h1>
  );
}

function Date(props) {
  return <span>{props.date}</span>
}

function Short(props) {
  return <h3><em>{props.desc}</em></h3>
}

function Label(props) {
  return <span className="label">{props.label}</span>
}

function Desc(props) {
  return <span className="description">{props.desc}</span>
}

export default class Section extends Component {
  render() {
    return (
      <div id="parent">
        <div id="section">
          <div id="date">
            <Date date="2020" />
          </div>
          <div>
            <Title name="discord-bot" link="#" />
            <Short desc="general discord bot" />
            <div id="labels">
              <Label label="Twitter API" />
              <Label label="Node" />
              <Label label="Express" />
              <Label label="JavaScript" />
              <Label label="HTML/CSS" />
              <Label label="Bootstrap 4" />
            </div>
            <Desc desc="personal project." />
          </div>
        </div>
        <div id="section">
          <div id="date">
            <Date date="2020" />
          </div>
          <div>
            <Title name="Twitterphile" link="#" />
            <Short desc="use of the Twitter API" />
            <div id="labels">
              <Label label="Twitter API" />
              <Label label="Node" />
              <Label label="Express" />
              <Label label="JavaScript" />
              <Label label="HTML/CSS" />
              <Label label="Bootstrap 4" />
            </div>
            <Desc desc="Display most recently used hashtags and words given a twitter username" />
          </div>
        </div>
        <div id="section">
          <div id="date">
            <Date date="2018-2019" />
          </div>
          <div>
            <Title name="Fantazmix" link="#" />
            <Short desc="music generating web app" />
            <div id="labels">
              <Label label="Django" />
              <Label label="Git" />
              <Label label="Python" />
              <Label label="Google Magenta" />
              <Label label="HTML/CSS" />
            </div>
            <Desc desc="personal project." />
          </div>
        </div>
      </div>
    );
  }
}
