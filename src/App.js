import React from 'react';
import './App.css';
import Section from './components/section';
import Profile from './components/profile';
import Skills from './components/skills';
import Experience from './components/experience';
import Footer from './components/footer';

function App() {
  return (
    <div className="App" style={{backgroundColor: '#f7e7cd'}}>
      <span id="top"></span>
      <header className="App-header">
        <Profile />
        <Section />
        <Skills />
        <Experience />
      </header>
      <Footer />
    </div>
  );
}

export default App;
