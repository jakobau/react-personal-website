// >>
// Project Name: Jakob Au's Personal Website
// Version 4.0.1
// Create by Jakob Au
// Name: Home.js
// Purpose: Landing Page.
// <<
//
// TODO
// - Portfolio items
// - 

// REACT imports
import React from "react";
import { useRef } from "react";
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
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Component imports
import Footer from './Footer.jsx';
import Hyperlink from './Hyperlink.jsx';
import SkillTag from './SkillTag.jsx';
import PortfolioItem from './PortfolioItem.jsx';

// Media imports
import mePic from '../../media/me_picture.JPG';
import mePic2 from '../../media/me_picture2.jpg';
import keikiheroes1 from '../../media/projectPictures/keikiHeroes_pic1.png';
import t3Alliance1 from '../../media/projectPictures/t3Alliance_pic1.png';

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
export default function Home() {

  const [showProjects, setShowProjects] = React.useState(false);
  const projectOpen = () => setShowProjects(true);
  const projectClose = () => setShowProjects(false);

  const fieldRef = useRef(null);

  // on window scroll show projects
  window.addEventListener('scroll', (event) => {
    setShowProjects(true);
  });

  function Projects() {
    if(showProjects) {
      return(
        <div>
          {/* first divider */}
          <Divider 
            ref={fieldRef}
            textAlign="left"
            sx={{
              mt:10,
            }}
          >
            <Chip label="WEB PROJECTS" />
          </Divider>
          <div ></div>

          {/* portfolio list */}
          <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: { xs: 'center'},
            flexWrap: 'wrap',
          }}
        >
          <PortfolioItem
            title="Portfolio Website"
            role="Personal Project"
            index="1"
            projectNumber="01"
            description="An ever changing personal portfolio website to show off my projects and ideas."
            media={keikiheroes1}
            projectRoute="/projects/portfolioWebsite"
            skills={["ReactJS","MaterialUI","Google Analytics"]}
          />

          <PortfolioItem
            title="T3 Alliance"
            role="Discord Lead and R&D at"
            index="2"
            projectNumber="02"
            description="Developed a custom Discord bot, web dev committee member, spokesperson at various events, and Discord server manager."
            media={t3Alliance1}
            projectRoute="/projects/t3alliance"
            skills={["Javascript","DiscordJS","Public-Speaking","Wordpress"]}
          />
          <PortfolioItem
            title="NexTech Hawaii"
            role="Volunteer at"
            index="3"
            projectNumber="03"
            description="Developed a VueJS website to automate 3D model print requests for NexTech's host family 3D printer program."
            media={t3Alliance1}
            projectRoute="/projects/nextech"
            skills={["VueJS","Javascript","Bootstrap"]}
          />
          <PortfolioItem
            title="Easter Wegg Hunt"
            role="Creator of"
            index="4"
            projectNumber="04"
            description="Designed and programmed an easter egg hunt website for my family to hunt virtual easter eggs while social distancing."
            media={t3Alliance1}
            projectRoute="/projects/easter-wegg-hunt"
            skills={["NodeJS","Javascript","SocketIO"]}
          />
          <PortfolioItem
            title="Health Together"
            role="Creator of"
            index="5"
            projectNumber="05"
            description="Currently creating an app that allows users to work together with friends, family, and strangers to complete weekly fitness and health missions."
            media={t3Alliance1}
            projectRoute="/projects/health-together"
            skills={["ReactNative","Javascript","App Development"]}
          />
          
        </Box>
      </div>
      );
    } else {

      return(
        <Link onClick={scrollDown} style={{ color: 'inherit', }} >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ArrowDownwardIcon 
              sx={{
                width: 100,
                height: 'auto',
                alignItems: 'center',
                mt: 2,
              }}
            />
          </Box>
        </Link>
      );
    }
  }

  function scrollDown() {
    console.log("scrolling down");
    setShowProjects(true);

    setTimeout(function() {
      fieldRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);
    
  }

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

      {/* portfolio list */}
      <Projects />

      <Divider variant="middle" sx={{ mt:10,}} />

      {/* Footer */}
      <Footer 
        title=""
        description=""
      />
      
    </Container>
  )
}