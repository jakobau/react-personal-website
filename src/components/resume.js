import React from 'react';

//components
import Section from './resume_components/section';
import Profile from './resume_components/profile';
import Skills from './resume_components/skills';
import Experience from './resume_components/experience';
import Footer from './resume_components/footer';

//images
import resumePDF from '.././icons/software_engineer_resume.pdf';

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