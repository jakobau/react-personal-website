import React from 'react';
import './App.css';

import ReactGA from 'react-ga';
import { useEffect } from 'react';

import Section from './components/section';
import Profile from './components/profile';
import Skills from './components/skills';
import Experience from './components/experience';
import Footer from './components/footer';

import resumePDF from './icons/resumes/V1.1_resume.pdf';

ReactGA.initialize('UA-162783096-1'); //init Google Analytics

function App() {
  useEffect(() => { //onload pageview count
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <div className="App" style={{ backgroundColor: '#f7e7cd' }}>
      <span id="top"></span>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      <header className="App-header">
        <Profile />
        <a href={ resumePDF } target="_blank" rel="noopener noreferrer">See My Resume</a>
        <Experience />
        <Section />
        <Skills />
        
      </header>
      <Footer />
    </div>
  );
}



export default App;
