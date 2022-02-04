import React from 'react';

//components
import Section from './section';
import Profile from './profile';
import Skills from './skills';
import Experience from './experience';
import Footer from './footer';

//images
import resumePDF from '../../media/software_engineer_resume.pdf';

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
      <Footer />
    </div>
  );
}

export default Resume;