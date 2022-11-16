import React from 'react';

//components
import Section from './Components/section';
import Profile from './Components/profile';
import Skills from './Components/skills';
import Experience from './Components/experience';
import Footer from '../../Components/Footer.jsx';

//images
import resumePDF from '../../Media/software_engineer_resume.pdf';

const Resume = () => {
  return (
    <div className="App" style={{ backgroundColor: '#f7e7cd' }}>
      <span id="top"></span>
      <header className="App-header">
        <Profile />
        <Section />
        <Skills />
        <Experience />
        <a href={ resumePDF } target="_blank" rel="noopener noreferrer">Resume</a>
      </header>
      <Footer
        title=""
        description=""
        version="V2.0"
      />
    </div>
  );
}

export default Resume;