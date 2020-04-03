import React, { Component } from 'react';

function Job(props) {
  return (
    <div className="jobs">
      <div className="job-section">
        <h3>{props.co}</h3>
        <div>{props.title}</div>
      </div>
      <div className="job-section">{props.date}</div>
    </div>
  );
}

export default class Experience extends Component {
  render() {
    return (
      <div id="parent">
        <div id="title"><hr/>
          <h2>&#187; Experience</h2>
        </div>
        <Job co="Online Sale Business" title="self-employed" date="Jan 2018 - Present"/>
        <Job co="Ross Stores Inc." title="sales associate" date="May - July 2018"/>
        <Job co="Subaru Telescopes" title="internship" date="Aug 2018"/>
      </div>
    );
  }
}
