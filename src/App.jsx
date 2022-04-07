// >>
// Project Name: Jakob Au's Personal Website
// Version 5.0.0
// Create by Jakob Au
// Name: App.js
// Purpose: Main App.js script for routing.
// <<

// REACT imports
import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

// COMPONENT and CSS imports
import './App.css';
import Analytics from './Components/Analytics';
import V2 from './Pages/V2';
import V3 from './Pages/V3';
import V4 from './Pages/V4';
import V5 from './Pages/V5';
import YouTube from './Pages/YouTubeClone';

// google analytics
Analytics();

// Main exported function
export default function App() {
  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" ><V5 /></Route>
          <Route path="/v2" ><V2 /></Route>
          <Route path="/v3" ><V3 /></Route>
          <Route path="/v4" ><V4 /></Route>
          <Route path="/v4" ><V5 /></Route>
          <Route path="/youtube" ><YouTube /></Route>
        </Switch>
      </HashRouter>
    </>
  );
}

