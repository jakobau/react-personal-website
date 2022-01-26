import React from "react";
import './Styles/Home.css';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

import mePic from '../../media/me_picture2.jpg';
import mePic2 from '../../media/me_picture3.jpg';
import Footer from './Footer.js';
import Hyperlink from './Hyperlink.js';

//Changable Links
const IkanosMarketingLink = "https://drexel.edu/baiada/companies/current/Ikanos%20Marketing/";
const DrexelUniversityLink = "https://drexel.edu";
const KeikiHeroesLink = "https://www.keikiheroes.org/";
const NalukaiLink = "https://www.nalukai.org/";
const GumDesignLink = "https://www.gumdesign.com/";
const T3allianceLink = "https://www.t3alliance.org/";
const InstagramLink = "https://www.instagram.com/jakob.au/?hl=en";
const LinkedInLink = "http://linkedin.com/in/jakob-au";
const GitHubLink = "http://github.com/jakobau";

function About() {

  return (
    <Container fixed maxWidth="md">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

      <Stack direction="row" spacing={2} justifyContent="center" mt={10}>
        <Avatar alt="Jakob Au" src={mePic2} sx={{ width: 200, height: 200 }}/>
      </Stack>

      <Typography variant="h5" mt={6}>
        Hello. Aloha. Welcome.<br></br>
        Here is a little more about me.
      </Typography>

      <Typography variant="h5" mt={6}>
        I am currently a student @&nbsp;
        <Hyperlink href={DrexelUniversityLink} title="drexel.edu/" text="DREXEL UNIVERSITY" />
        &nbsp;pursuing a Software Engineering BSSE and an Entrepreneur minor. I also am 
        interning as a website and app developer for a Drexel student startup called&nbsp;
        <Hyperlink href={IkanosMarketingLink} title="drexel.edu/IkanosMarketing" text="IKANOS MARKETING" />.
      </Typography>

      <Typography variant="h5" mt={6}>
        Previously as a young entrepreneur I helped start&nbsp;
        <Hyperlink href={KeikiHeroesLink} title="keikiheroes.org" text="KEIKI HEROES" />
        , a program empowering Hawaii’s children during the pandemic to stay
        healthy and build resilience beyond it. I built the inital website,
        designed their initial posters, and shared Kai and Hoku to the
        community in Hawai'i. I’ve also been a participant and a group leader for&nbsp;
        <Hyperlink href={NalukaiLink} title="nalukai.org" text="NALUKAI ACADEMY" />
        , a free intensive leadership program for Hawai'i high school students focused 
        on technological, cultural & social entrepreneurship.
      </Typography>

      <Typography variant="h5" mt={6}>
        During the pandemic I got to work as a freelance web developer and virtual
        event coordinator. Some notable clients include:&nbsp;
        <Hyperlink href={GumDesignLink} title="gumdesign.com" text="GUM DESIGN" />
        ,&nbsp;<Hyperlink href={T3allianceLink} title="t3alliance.org" text="T3 ALLIANCE" />
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
        <Hyperlink href={InstagramLink} title="IG@jakob.au" text="INSTAGRAM" />
        &nbsp;and&nbsp;
        <Hyperlink href={LinkedInLink} title="/in/jakob-au" text="LINKEDIN" />
        . Or explore my projects on&nbsp;
        <Hyperlink href={GitHubLink} title="github.com/jakobau" text="GITHUB" />.
      </Typography>
      
      <Typography variant="h5" mt={6}>
        <b>HOBBIES</b>
        <Typography variant="h5" mt={2}>
          Basketball, Volleyball, Fishing, Spearfishing, Diving
        </Typography>
      </Typography>

      <Typography variant="h5" mt={6}>
        <b>VOLUNTEER PROGRAMS</b>
        <Typography variant="h5" mt={2}>
          Keiki Heroes, Nextech, Hawaii STEM Community Care
        </Typography>
      </Typography>

      <Typography variant="h5" mt={6}>
        <b>CLIENT PROGRAMS</b>
        <Typography variant="h5" mt={2}>
          T3 Alliance, Nalukai Academy, Philly Hackathons, IEEE workshops
        </Typography>
      </Typography>

      <Typography variant="h5" mt={6}>
        <b>TECHNOLOGY</b>
        <Typography variant="h5" mt={2}>
          Javascript, HTML/CSS, Python
        </Typography>

        <Typography variant="h5" mt={2}>
          React, Vue, Node.js, Wordpress, Bubble.io
        </Typography>

        <Typography variant="h5" mt={2}>
          Notion, Trello, Miro, Discord, Slack
        </Typography>
      </Typography>

      <Typography variant="h5" mt={6}>
        <b>MEDIA CONTACT</b>
        <Typography variant="h5" mt={2} mb={10}>
          jakeau00 [at] gmail |&nbsp;
          <Hyperlink href={LinkedInLink} title="/in/jakob-au" text="JAKE'S LINKEDIN" />
        </Typography>
      </Typography>

      <Footer
        title=""
        description=""
      />

    </Container>
  );
}

export default About;