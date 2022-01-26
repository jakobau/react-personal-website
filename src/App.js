import React from 'react';
import './App.css';

import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from './components/Home/Home';
import About from './components/Home/About';
import Resume from './components/Resume/resume';
import Portfolio from './components/Home/Portfolio';

ReactGA.initialize('UA-162783096-1'); //init Google Analytics

export default function App() {
  return (
    <Router>
      {/*<nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Website v2</Link>
          </li>
        </ul>
      </nav>/*}

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" ><Home /></Route>
        <Route path="/resume" ><Resume /></Route>
        <Route path="/portfolio" ><Portfolio /></Route>
        <Route path="/about" ><About /></Route>
      </Switch>
    </Router>
  );
}

