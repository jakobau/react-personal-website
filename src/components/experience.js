import React, { Component } from 'react';

// Job section blueprint
function Job(props) {
  return (
    <div className="jobs">
      <div className="job-section">

        {props.link ? <a href={ props.link }><h3>{ props.co } <i className="fas fa-external-link-alt ja-icon"></i>
        </h3></a> : null}

        {!props.link ? <h3>{ props.co }</h3> : null}

        <div>{ props.title }</div>

      </div>

      <div className="job-section-date">{ props.date }</div>

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

        <Job co="Hawaii STEM Community Care" 
          title="Volunteer" 
          date="June 2020 - Present"
          link="https://www.histemcare.org/"/>

        <Job co="T3 Alliance" 
          title="Freelancer - Discord Lead and R&D" 
          date="April 2020 - Present"
          link="https://t3alliance.org/"/>

        <Job co="T3 Alliance" 
          title="Freelancer - Discord Lead and R&D" 
          date="April 2020 - Present"
          link="https://t3alliance.org/"/>

        <Job co="Online eBay Business" 
          title="Self-Employed" 
          date="Jan 2018 - Present"/>
        
        <div className="job-more">
          <Job co="Gum Design LLC" 
            title="Internship - Web Developer" 
            date="April 2020 - Sept 2020"
            link="https://www.gumdesign.com/"/>
          
          <Job co="Ross Stores Inc." 
            title="Sales Associate" 
            date="May - July 2018"/>

          <Job co="Subaru Telescopes" 
            title="Internship - Web and Database Development" 
            date="Aug 2018 - Sept 2018"/>
        </div>

        {/*<div className="job-more-button" id="job-button">
          <p>additional experiences</p> 
          <i className="fas fa-arrow-down"></i>
        </div>*/}

      </div>
    );
  }
}
