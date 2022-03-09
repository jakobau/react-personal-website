// >>
// Project Name: Jakob Au's Personal Website
// Version 4.0.1
// Create by Jakob Au
// Name: App.js
// Purpose: Main App.js script mainly for routing.
// <<

// REACT imports
import React from 'react';
//import ReactGA from 'react-ga';
//import { useEffect } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

// COMPONENT and CSS imports
import './App.css';
import Home from './components/Home/Home';
import About from './components/Home/About';
import Resume from './components/Resume/resume';
import Portfolio from './components/Home/Portfolio';
import KeikiHeroes from './components/Home/Projects/KeikiHeroes';
import Analytics from './components/Analytics';
import CopyProject from './components/ProjectCopy/YouTube'

// CURRENTLY DISABLED
// init Google Analytics
//ReactGA.initialize('UA-162783096-1'); 

// new analytic way
Analytics();

// Main exported function
export default function App() {
  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" ><Home /></Route>
          <Route path="/resume" ><Resume /></Route>
          <Route path="/portfolio" ><Portfolio /></Route>
          <Route path="/about" ><About /></Route>
          <Route exact path="/projects" ><CopyProject /></Route>
          <Route path="/projects/keikiheroes" ><KeikiHeroes /></Route>
          <Route path="/projects/youtube" ><CopyProject /></Route>
        </Switch>
      </HashRouter>
    </>
  );
}

