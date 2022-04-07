// >>
// Project Name: Project Copy [YouTube]
// Version 4.0.1
// Create by Jakob Au
// Name: YouTubeCopy.js
// Purpose: 
// <<

// REACT Imports
import React from "react";
//import { useRef } from "react";
//import ReactGA from 'react-ga';

// MUI Imports
//import Grid from '@mui/material/Grid';
//import Box from '@mui/material/Box';

// COMPONENT and CSS imports
import YouTubeCopyMenu from './Components/YouTubeCopyMenu.jsx';
import YouTubeCopyDrawer from './Components/YouTubeCopyDrawer.jsx';


// Main exported function
export default function YouTubeCopy() {
  return (
    <>
        <YouTubeCopyMenu />
        <YouTubeCopyDrawer />
    </>
  );
}