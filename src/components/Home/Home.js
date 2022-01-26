// >>
// Project Name: Jakob Au's Personal Website
// Version 4.0.1
// Create by Jakob Au
// Created on Jan 26, 2022
// Name: Home.js
// Purpose: Landing Page.
// <<
//
// TODO
// - Portfolio items
// - 

// first imports
import React from "react";
import './Styles/Home.css';

// MUI Imports
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

// Component imports
import Footer from './Footer.js';
import Hyperlink from './Hyperlink.js';
import SkillTag from './SkillTag.js';
import PortfolioItem from './PortfolioItem.js';

// Media imports
import mePic from '../../media/me_picture.JPG';
import mePic2 from '../../media/me_picture2.jpg';


// Changable Links
const IkanosMarketingLink = "https://drexel.edu/baiada/companies/current/Ikanos%20Marketing/";
const DrexelUniversityLink = "https://drexel.edu";
const KeikiHeroesLink = "https://www.keikiheroes.org/";
const NalukaiLink = "https://www.nalukai.org/";
const GumDesignLink = "https://www.gumdesign.com/";
const T3allianceLink = "https://www.t3alliance.org/";
const InstagramLink = "https://www.instagram.com/jakob.au/?hl=en";
const LinkedInLink = "http://linkedin.com/in/jakob-au";
const GitHubLink = "http://github.com/jakobau";

// Main exported function
const Home = () => {
  return (
    <Container fixed maxWidth="lg">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      
      {/* picture profile first block */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          bgcolor: 'background.paper',
          overflow: 'hidden',
          borderRadius: '12px',
          fontWeight: 'bold',
        }}
      >
        {/* Intro and short description */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            m: 1,
            minWidth: { xs: '100%', sm: '100%', md: 400, lg: 600, },
            flexWrap: 'wrap',
            order: 2,
          }}
        >
          <Box component="span" sx={{ fontSize: { xs: 40, sm: 50, md: 50, lg: 70,}, mt: {sx:1, md:20} }}>
            Aloha, I'm Jake.
          </Box>
          <Box component="span" sx={{ fontSize: { xs: 30, sm: 40, md: 45, lg: 70,}, mt: 1 }}>
            I'm a web developer.
          </Box>
          <Box component="span" sx={{ color: 'primary.main', fontSize: {xs:20,sm:20,md:22,lg:22}, mt: 5, mr:1, ml:1 }}>
            I have 1+ years of freelance experience at mostly Hawaii nonprofit education organizations including NexTech Hawaii, Keiki Heroes, T3 Alliance, and RYLA.
          </Box>

          {/* skill tags */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: { xs: 'center'},
              flexWrap: 'wrap',
              mt: {sx:1, md:5},
            }}
          >
            <SkillTag title="ReactJS" color="secondary.main" />
            <SkillTag title="VueJS" color="secondary.main" />
            <SkillTag title="Bootstrap" color="primary.main" />
            <SkillTag title="MaterialUI" color="primary.main" />
            <SkillTag title="Wordpress" color="primary.main" />
          </Box>
        </Box>

        {/* profile avatar image */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center'},
            m: 3,
            order: {sx:1,md:2},
          }}
        >
          <Stack direction="row" spacing={2} justifyContent="center" mt={{ xs: 0, sm: 0, md: 10, lg: 10,}} >
            <Avatar alt="Jakob Au" src={mePic2} sx={{ width: { xs: 200, sm: 200, md: 320, lg: 350,}, height: { xs: 200, sm: 200, md: 320, lg: 350,} }}/>
          </Stack>
        </Box>
      </Box>

      {/* first divider */}
      <Divider 
        textAlign="left"
        sx={{
          mt:10,
        }}
      >
        <Chip label="PROJECTS" />
      </Divider>

      {/* portfolio list */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: { xs: 'center'},
          flexWrap: 'wrap',
          mt:5,
        }}
      >
        <PortfolioItem
          title="Keiki Heroes Co-Founder"
          index="1"
          description="An initial website to kickstart the Keiki Heroes campaign in Wordpress."
          media=""
        />
      </Box>


      {/* Footer */}
      <Footer
        title=""
        description=""
      />

    </Container>
  );
}
export default Home;