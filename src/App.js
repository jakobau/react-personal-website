import React from 'react';
import './App.css';

import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import LandingPage from './components/landingPage';
import Resume from './components/resume';

ReactGA.initialize('UA-162783096-1'); //init Google Analytics

/*function App() {
  useEffect(() => { //onload pageview count
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/" ><landingPage /></Route>
        <Route path="/resume" ><resume /></Route>
      </Switch>
    </Router>
  );
}*/

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
        <Route exact path="/" ><LandingPage /></Route>
        <Route path="/resume" ><Resume /></Route>
      </Switch>
    </Router>
  );
}

