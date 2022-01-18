import React from "react";
import './landingPage_components/landingPage.css';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

import mePic from '../icons/me_picture2.jpg';
import Footer from './landingPage_components/Footer.js';


const landingPage = () => {
  return (
    <Container fixed maxWidth="md">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

      <Stack direction="row" spacing={2} justifyContent="center" mt={10}>
        <Avatar alt="Jakob Au" src={mePic} sx={{ width: 200, height: 200 }}/>
      </Stack>

      <Typography variant="h5" mt={6}>
        Hello. Aloha. Welcome.
      </Typography>

      <Typography variant="h5">
        Here is a little more about me.
      </Typography>

      <Typography variant="h5" mt={6}>
        I am currently a <span color="red">student</span> @&nbsp;
        <Tooltip title="drexel.edu/" placement="top" arrow>
          <Link href="https://drexel.edu/"
            underline="hover"
            target="_blank"
            variant="h5">
            <b>DREXEL UNIVERSITY</b>
          </Link> 
        </Tooltip>
        &nbsp;pursuing a Software Engineering BSSE and an Entrepreneur minor. I also am 
        interning as a website and app developer for a Drexel student startup called&nbsp;
        <Tooltip title="drexel.edu/baiada/companies/current/Ikanos Marketing/" placement="bottom" arrow>
          <Link href="https://drexel.edu/baiada/companies/current/Ikanos%20Marketing/"
            underline="hover"
            target="_blank"
            variant="h5">
            <b>IKANOS MARKETING</b>
          </Link>
        </Tooltip>.
      </Typography>

      <Typography variant="h5" mt={6}>
        Previously as a young entrepreneur I helped start&nbsp;
        <Tooltip title="keikiheroes.org/" placement="top" arrow>
          <Link href="https://www.keikiheroes.org/"
            underline="hover"
            target="_blank"
            variant="h5">
            <b>KEIKI HEROES</b>
          </Link>
          </Tooltip>
        , a program empowering Hawaii’s children during the pandemic to stay
        healthy and build resilience beyond it. I built the inital website,
        designed their initial posters, and shared Kai and Hoku to the
        community in Hawai'i. I’ve also been a participant and a group leader for&nbsp;
        <Tooltip title="nalukai.org/" placement="bottom" arrow>
          <Link href="https://www.nalukai.org/"
            underline="hover"
            target="_blank"
            variant="h5">
            <b>NALUKAI ACADEMY</b>
          </Link>
        </Tooltip>
        , a free intensive leadership program for Hawai'i high
        school students focused on technological, cultural & social entrepreneurship.
      </Typography>

      <Typography variant="h5" mt={6}>
        During the pandemic I got to work as a freelance web developer and virtual
        event coordinator. Some notable clients include:&nbsp;
        <Link href="https://www.gumdesign.com/"
          underline="hover"
          target="_blank"
          variant="h5">
          <b>GUM DESIGN</b>
        </Link>
        ,&nbsp;
        <Link href="https://www.t3alliance.org/"
          underline="hover"
          target="_blank"
          variant="h5">
          <b>T3 ALLIANCE</b>
        </Link>
        , Virtual RYLA 2021, Virtual Fish Tank Competition 2021.
      </Typography>

      <Typography variant="h5" mt={6}>
        Moving from Hawaii to Philadelphia is just the first step of my journey,
        and I am always looking for new learning opportunities. I want to explore
        the world and meet amazing people while bringing the ALOHA SPIRIT to whatever
        jouney and challenge that I embark on.
      </Typography>

      <Typography variant="h5" mt={6}>
        Connect with me on&nbsp;
        <Link href="https://www.instagram.com/jakob.au/?hl=en"
          underline="hover"
          target="_blank"
          variant="h5">
          <b>INSTAGRAM</b>
        </Link>
        &nbsp;and&nbsp;
        <Link href="http://linkedin.com/in/jakob-au"
          underline="hover"
          target="_blank"
          variant="h5">
          <b>LINKEDIN</b>
        </Link>
        . Or explore my projects on&nbsp;
        <Link href="http://github.com/jakobau"
          underline="hover"
          target="_blank"
          variant="h5">
          <b>GITHUB</b>
        </Link>
        .
      </Typography>
      
      <Typography variant="h5" mt={6}>
        <b>HOBBIES</b>
      </Typography>

      <Typography variant="h5" mt={2}>
        Basketball, Volleyball, Fishing, Spearfishing, Diving
      </Typography>

      <Typography variant="h5" mt={6}>
        <b>VOLUNTEER PROGRAMS</b>
      </Typography>

      <Typography variant="h5" mt={2}>
        Keiki Heroes, Nextech, Hawaii STEM Community Care
      </Typography>

      <Typography variant="h5" mt={6}>
        <b>CLIENT PROGRAMS</b>
      </Typography>

      <Typography variant="h5" mt={2}>
        T3 Alliance, Nalukai Academy, Philly Hackathons, IEEE workshops
      </Typography>

      <Typography variant="h5" mt={6}>
        <b>TECHNOLOGY</b>
      </Typography>

      <Typography variant="h5" mt={2}>
        Javascript, HTML/CSS, Python
      </Typography>

      <Typography variant="h5" mt={2}>
        React, Vue, Node.js, Wordpress, Bubble.io
      </Typography>

      <Typography variant="h5" mt={2}>
        Notion, Trello, Miro, Discord, Slack
      </Typography>

      <Typography variant="h5" mt={6}>
        <b>MEDIA CONTACT</b>
      </Typography>

      <Typography variant="h5" mt={2} mb={10}>
        jakeau00 [at] gmail |&nbsp;
        <Link href="http://linkedin.com/in/jakob-au"
          underline="hover"
          target="_blank"
          variant="h5">
          <b>JAKE'S LINKEDIN</b>
        </Link>
      </Typography>

      <Footer
        title=""
        description=""
      />

    </Container>
  );
}
export default landingPage;