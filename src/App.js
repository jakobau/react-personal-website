import React from 'react';
import './App.css';

import ReactGA from 'react-ga';
import { useEffect } from 'react';

import Section from './components/section';
import Profile from './components/profile';
import Skills from './components/skills';
import Experience from './components/experience';
import Footer from './components/footer';
import Name from './components/name';
import Scroll from './components/scroll';

import Background from './icons/me_picture.JPG';
import resumePDF from './icons/software_engineer_resume.pdf';

ReactGA.initialize('UA-162783096-1'); //init Google Analytics

function App() {
  useEffect(() => { //onload pageview count
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <div className="App" style={{backgroundImage: `url(${Background})`}}>
      <div className="flex-container">
        <Name />
        <Scroll />
      </div>
    </div>
  );
}



export default App;
