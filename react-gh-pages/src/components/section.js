import React, { Component } from 'react'

function Title(props) {
  return <h1>$&#10100;{props.name}&#10101;</h1>;
}

export default class Section extends React.Component {
  render() {
    return (
      <div id="section">
        <Title name="Twitterphile" />
        <Title name="Fantazmix" />
        <Title name="discord-bot" />
      </div>
    );
  }
}
