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
  return <p>Sept 2018 - Sept 2019</p>
}

function Desc(props) {
  return <h3><em>{props.desc}</em></h3>
}

function Label(props) {
  return <span className="label">{props.label}</span>
}

export default class Section extends Component {
  render() {
    return (
      <div id="parent">
        <div id="section">
          <Title name="Twitterphile" link="#" />
          <Desc desc="use of the Twitter API" />
          <div id="labels">
            <Label label="Twitter API" />
            <Label label="Node" />
            <Label label="Express" />
            <Label label="JavaScript" />
            <Label label="HTML/CSS" />
            <Label label="Bootstrap 4" />
          </div>
        </div>
        <div id="section">
          <Title name="Fantazmix" link="#" />
          <Desc desc="music generating web app" />
          <div id="labels">
            <Label label="Django" />
            <Label label="Git" />
            <Label label="Python" />
            <Label label="Google Magenta" />
            <Label label="HTML/CSS" />
          </div>
        </div>
        <div id="section">
          <Title name="discord-bot" link="#" />
          <Desc desc="general discord bot" />
          <div id="labels">
            <Label label="Twitter API" />
            <Label label="Node" />
            <Label label="Express" />
            <Label label="JavaScript" />
            <Label label="HTML/CSS" />
            <Label label="Bootstrap 4" />
          </div>
        </div>
      </div>
    );
  }
}
