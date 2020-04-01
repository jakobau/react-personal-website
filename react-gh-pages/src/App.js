import React from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './components/section';

function App() {
  return (
    <div className="App" style={{backgroundColor: '#f7e7cd'}}>
      <header className="App-header">
        <p>Jakob Au</p>
        <Section />
        <p>^ top of screen</p>
      </header>
    </div>
  );
}

export default App;
