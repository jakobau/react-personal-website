// >>
// Project Name: Project Copy [YouTube]
// Version 4.0.1
// Create by Jakob Au
// Name: YouTubeCopy.js
// Purpose: 
// <<

// REACT Imports
import React from "react";

// MUI Imports
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
//import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import ListSubheader from '@mui/material/ListSubheader';
import Link from '@mui/material/Link';

// MUI Icon Imports
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// Component Imports
import YouTubeCopyBody from './YouTubeCopyBody.jsx';

// Changable Variables
const drawerWidth = 240;

// Main exported function
function YouTubeCopyDrawer() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          height:'90%',
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop: "64px",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <Divider />

        <List>
          {['Back to Home', 'GitHub Repo', 'Shorts', 'Subscriptions'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {['Library', 'History', 'Your videos', 'Watch later', 'Liked videos'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Playlists" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Playlist 1" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Playlist 2" />
              </ListItemButton>
            </List>
          </Collapse>

        </List>

        <Divider />

        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              SUBSCRIPTIONS
            </ListSubheader>
          }
        >
          {['Willjum', 'Tesla', 'etone', 'Coma','Sinks','VICE','aloneintokyo'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}

          <ListItemButton onClick={handleClick2}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Show 3 more" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
            
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="YouTuber 1" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="YouTuber 2" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="YouTuber 3" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        <Divider />

        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              MORE FROM YOUTUBE
            </ListSubheader>
          }
        >
          {['YouTube Premium', 'Movies & Shows', 'Gaming', 'Live','Fashion & Beauty','Learning','Sports'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {['Settings', 'Report history', 'Help', 'Send feedback'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Divider />

        <List sx={{mb:10, }}>
          <ListItem>
            <ListItemText
              primary=""
              secondary={
                <>
                  <Typography variant="body2" color="text.primary" >
                    Design and features inspired by YouTube.
                  </Typography>
                  <Typography variant="body2" color="text.primary" sx={{ mb:2, }}>
                    Built with ReactJS, MaterialUI, and Persistence.
                  </Typography>

                  <Typography variant="body2" color="text.primary" >
                    LinkedIn
                  </Typography>
                  <Typography variant="body2" color="text.primary" >
                    Instagram
                  </Typography>
                  <Typography variant="body2" color="text.primary" sx={{ mb:2, }} >
                    Personal Website
                  </Typography>
                  © 2022 Built by <Link href="www.jakobau.me" underline="hover" target="_blank">Jakob Au</Link>
                </>
              }
            />
          </ListItem>

        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 0 }}
      >
        <YouTubeCopyBody />
      </Box>
    </Box>
  );
}

export default YouTubeCopyDrawer;