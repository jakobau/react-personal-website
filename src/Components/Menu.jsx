// >>
// Project Name: Jakob Au's Personal Website
// Version 4.0.1
// Create by Jakob Au
// 
// Name: Menu.jsx
// Purpose: Menu component
// Using: https://mui.com/components/app-bar/
// <<

// REACT imports
import * as React from 'react';
import './Style/menuStyle.css'

// MUI Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// Media imports
import logo from '../Media/logo.png';

export default function Menu() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <img id="logo" src={logo} height='70px' width='auto' overflow='hidden' alt='jake logo'></img>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
}