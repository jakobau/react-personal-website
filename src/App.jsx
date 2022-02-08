// >>
// Project Name: Jakob Au's Personal Website
// Version 4.0.1
// Create by Jakob Au
// Name: App.js
// Purpose: Main App.js script mainly for routing.
// <<

// REACT imports
import React from 'react';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// COMPONENT and CSS imports
import './App.css';
import Home from './components/Home/Home';
import About from './components/Home/About';
import Resume from './components/Resume/resume';
import Portfolio from './components/Home/Portfolio';
import KeikiHeroes from './components/Home/Projects/KeikiHeroes';

// init Google Analytics
ReactGA.initialize('UA-162783096-1'); 

// Main exported function
export default function App() {
  useEffect(() => { //onload pageview count
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" ><Home /></Route>
        <Route path="/resume" ><Resume /></Route>
        <Route path="/portfolio" ><Portfolio /></Route>
        <Route path="/about" ><About /></Route>
        <Route path="/projects/keikiheroes" ><KeikiHeroes /></Route>
      </Switch>
    </Router>
  );
}

