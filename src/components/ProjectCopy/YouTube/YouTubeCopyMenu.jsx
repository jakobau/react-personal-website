// >>
// Project Name: Project Copy [YouTube]
// Version 4.0.1
// Create by Jakob Au
// Name: YouTubeCopy.js
// Purpose: 
// <<

// REACT Imports
import * as React from 'react';
import PropTypes from 'prop-types';

// MUI Imports
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// MUI Icon Imports
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Cloud from '@mui/icons-material/Cloud';

// COMPONENT and CSS imports


// ELEVATE APP BAR
// The app bar elevates on scroll to communicate that the user is not at the 
//    top of the page.
// https://mui.com/components/app-bar/
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


// Main exported function
export default function YouTubeCopy(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}

      id={menuId}
      keepMounted

      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: { xs: 'center'},
          flexWrap: 'wrap',
          p:1,
        }}
      >
        <Avatar alt="Jake" src='' />
        <Box p={1}>
          <Typography variant="body1">Jakob Au </Typography>
          <Typography variant="body2" color="blue">Manage your Google Account</Typography>
        </Box>
      </Box>
      <Divider />
      
      <MenuItem onClick={handleMenuClose}><ListItemIcon><Cloud fontSize="small" /></ListItemIcon>Your channel</MenuItem>
      <MenuItem onClick={handleMenuClose}><ListItemIcon><Cloud fontSize="small" /></ListItemIcon>Purchases and memberships</MenuItem>
      <MenuItem onClick={handleMenuClose}><ListItemIcon><Cloud fontSize="small" /></ListItemIcon>YouTube Studio</MenuItem>
      <MenuItem onClick={handleMenuClose}><ListItemIcon><Cloud fontSize="small" /></ListItemIcon>Switch account</MenuItem>
      <MenuItem onClick={handleMenuClose}><ListItemIcon><Cloud fontSize="small" /></ListItemIcon>Sign out</MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}><ListItemIcon><Cloud fontSize="small" /></ListItemIcon>Appearance: Device theme</MenuItem>
      <MenuItem onClick={handleMenuClose}><ListItemIcon><Cloud fontSize="small" /></ListItemIcon>Language: English</MenuItem>
      <MenuItem onClick={handleMenuClose}><ListItemIcon><Cloud fontSize="small" /></ListItemIcon>Location: United States</MenuItem>
      <MenuItem onClick={handleMenuClose}><ListItemIcon><Cloud fontSize="small" /></ListItemIcon>Settings</MenuItem>
      <MenuItem onClick={handleMenuClose}><ListItemIcon><Cloud fontSize="small" /></ListItemIcon>Your data in YouTube</MenuItem>
      <MenuItem onClick={handleMenuClose}><ListItemIcon><Cloud fontSize="small" /></ListItemIcon>Help</MenuItem>
      <MenuItem onClick={handleMenuClose}><ListItemIcon><Cloud fontSize="small" /></ListItemIcon>Send feedback</MenuItem>
      <MenuItem onClick={handleMenuClose}><ListItemIcon><Cloud fontSize="small" /></ListItemIcon>Keyboard shortcuts</MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}><ListItemIcon><Cloud fontSize="small" /></ListItemIcon>Restricted Mode: Off</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, opacity: 0.98}} style={{ zIndex: 10, position:'relative', }}>
    <ElevationScroll {...props}>
      <AppBar position="fixed" color="grey" >
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Project YouShow
          </Typography>

          <Autocomplete
            freeSolo
            options={top100Films}
            sx={{ 
              display: { xs: 'none', sm: 'block' },
              width: { sm: 300, md: 400, lg: 600 }, 
              position: 'absolute', 
              left: '35%',
            }}
            style={{
              justifyContent: 'centered',
            }}
            renderInput={(params) => <TextField {...params} placeholder="Search" />}
          />

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );

}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'Keiki Heroes', year: '2020-2021' },
  { label: 'Nextech Hawaii', year: '2020-2022' },
  { label: 'Nalukai Academy', year: '2017-2021' },
  { label: 'T3 Alliance', year: '2020-2021' },
  { label: 'Health Together App', year: '2021-Present' },
  { label: "Easter Wegg Hunt", year: '2020' },
];