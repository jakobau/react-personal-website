import React from 'react';
import './App.css';
import Section from './components/section';
import Profile from './components/profile';

function App() {
  return (
    <div className="App" style={{backgroundColor: '#f7e7cd'}}>
      <span id="top"></span>
      <header className="App-header">
        <Profile />
        <Section />
        <a className="top-of-page" href="#top">^ top of screen</a>
      </header>
    </div>
  );
}

export default App;
