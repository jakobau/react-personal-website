// >>
// Project Name: Jakob Au's Personal Website
// Version 4.0.1
// Create by Jakob Au
// 
// Name: Footer.jsx
// Purpose: Footer component
// <<

// REACT imports
import * as React from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';

// MUI Imports
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// MUI Icon Imports
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

// Google Analytics tracking links clicked
function GA_event(name) {
  const sendOutbound = (event) => {
    event.preventDefault();
    ReactGA.event({
      category: 'Links',
      action: name,
      label: name + ' link clicked'
    });
  }
}

function Footer(props) {
  const { description, title } = props;

  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        <Link onClick={GA_event("linkedin")} color="inherit" href="http://linkedin.com/in/jakob-au"><LinkedInIcon></LinkedInIcon></Link>
        <Link onClick={GA_event("facebook")} color="inherit" href="https://www.facebook.com/jakob.au.71"><FacebookIcon></FacebookIcon></Link>
        <Link onClick={GA_event("instagram")} color="inherit" href="https://www.instagram.com/jakob.au/?hl=en"><InstagramIcon></InstagramIcon></Link>
        <Link color="inherit" href="https://www.jakobau.me"><LanguageIcon></LanguageIcon></Link>
        <Link onClick={GA_event("github_personal_website")} color="inherit" href="https://github.com/jakobau/react-personal-website"><GitHubIcon></GitHubIcon></Link>
        <br></br>
        {'Copyright '} &copy;&nbsp;
        {new Date().getFullYear()}&nbsp;
        <Link color="inherit" href="www.jakobau.me">
          Jakob Au
        </Link>
        {'. All Rights Reserved'}
        <br></br>
        Built by Jakob Au, Hosted by&nbsp;
        <Link onClick={GA_event("github_personal_website")} href="https://github.com/jakobau/react-personal-website" color="inherit">GitHub Pages</Link>
      </Typography>

    );
  }

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, mt:10 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p">
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;