import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      <Link color="inherit" href="http://linkedin.com/in/jakob-au"><LinkedInIcon></LinkedInIcon></Link>
      <Link color="inherit" href="https://www.facebook.com/jakob.au.71"><FacebookIcon></FacebookIcon></Link>
      <Link color="inherit" href="https://www.instagram.com/jakob.au/?hl=en"><InstagramIcon></InstagramIcon></Link>
      <Link color="inherit" href="https://www.jakobau.me"><LanguageIcon></LanguageIcon></Link>
      <Link color="inherit" href="https://github.com/jakobau/react-personal-website"><GitHubIcon></GitHubIcon></Link>
      <br></br>
      {'Copyright '} &copy;&nbsp;
      {new Date().getFullYear()}&nbsp;
      <Link color="inherit" href="www.jakobau.me">
        Jakob Au
      </Link>
      {'. All Rights Reserved'}
      <br></br>
      Built by Jakob Au, Hosted by&nbsp;
      <Link href="https://github.com/jakobau/react-personal-website" color="inherit">GitHub Pages</Link>
    </Typography>

  );
}

function Footer(props) {
  const { description, title } = props;

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