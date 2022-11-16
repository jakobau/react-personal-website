// >>
// Project Name: Jakob Au's Personal Website
// Version 4.0.1
// Create by Jakob Au
// Name: Home.js
// Purpose: Landing Page. Brief introduction, social media links, and showcase
//    my personal and professional projects.
// <<

// REACT Imports
import React from "react";
import { useRef } from "react";
//import ReactGA from 'react-ga';

// MUI Imports
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
//import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
//import { alpha } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

// MUI Icon Imports
//import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
//import InstagramIcon from '@mui/icons-material/Instagram';
//import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import TwitterIcon from '@mui/icons-material/Twitter';
//import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

// Component Imports
import Footer from '../../Components/Footer.jsx';
import NavMenu from '../../Components/Menu.jsx';
import PortfolioItem from './Components/PortfolioItem.jsx';

// Media imports
//import mePic from '../../Media/me_picture.JPG';
import mePic2 from '../../Media/me_picture2.jpg';
import keikiheroes1 from '../../Media/projectPictures/keikiHeroes_pic1.png';
import t3Alliance1 from '../../Media/projectPictures/t3Alliance_pic1.png';
//import personalProjectPic1 from '../../Media/projectPictures/personalProject_pic1.png';
import nextechPic1 from '../../Media/projectPictures/nextech_pic1.png';
import healthTogetherPic1 from '../../Media/projectPictures/healthTogether_pic1.png';
import weggHuntGif1 from '../../Media/projectPictures/weggHunt.gif';
import personalProjectGif1 from '../../Media/projectPictures/personalWebsite_gif1.gif';

// Changable Links
const PersonalProjectLink = "https://www.jakobau.me"
//const IkanosMarketingLink = "https://drexel.edu/baiada/companies/current/Ikanos%20Marketing/";
//const DrexelUniversityLink = "https://drexel.edu";
const KeikiHeroesLink = "https://www.keikiheroes.org/";
//const NalukaiLink = "https://www.nalukai.org/";
//const GumDesignLink = "https://www.gumdesign.com/";
//const T3allianceLink = "https://www.t3alliance.org/";
//const InstagramLink = "https://www.instagram.com/jakob.au/?hl=en";
//const LinkedInLink = "http://linkedin.com/in/jakob-au";
const GitHubLink = "http://github.com/jakobau";

// CURRENTLY DISABLED
// Google Analytics tracking links clicked
function GA_event(name) {
  console.log("clicked" + name);
  /*const sendOutbound = (event) => {
    event.preventDefault();
    ReactGA.event({
      category: 'Links',
      action: name,
      label: name + ' link clicked'
    });
  }*/
}

// Main exported function
export default function Home() {

  const [showProjects, setShowProjects] = React.useState(false);

  const projectsRef = useRef(null);
  const experiencesRef = useRef(null);

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
            ref={projectsRef}
            textAlign="left"
            sx={{
              mt:10,
            }}
          >
            <Chip label="PERSONAL PROJECTS" />
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
            description="An ever changing personal portfolio website to show off my projects and ideas. 
              Learn ReactJS framwork and MaterialUI React UI library."
            media={personalProjectGif1}
            projectRoute="/projects/portfolioWebsite"
            skills={["ReactJS","MaterialUI","Google Analytics"]}
            idea="I started this project to kick start my Front-End and web development experience by 
              learning and exploring with ReactJS while creating a portfolio to share my personal projects.
              I created this project in 2020 and am currently on my 4th version."
            links={[
              {title:"You are on the site!", link:PersonalProjectLink},
              {title:"GitHub Repo", link:GitHubLink},
            ]}
            timeline="2020 - Now"
          />
          <PortfolioItem
            title="Health Together"
            role="Personal Project"
            index="2"
            projectNumber="02"
            description="Currently creating an app that allows users to work together with friends, family, and 
              strangers to complete weekly fitness and health missions. Learn React Native mobile app framework."
            media={healthTogetherPic1}
            projectRoute="/projects/health-together"
            skills={["ReactNative","Figma Designing","Full-Stack Dev"]}
            idea="Work together with friends, family, and strangers to complete weekly fitness and health missions. 
              Chat to figure out who is doing what to reach your goals. Pre-select fitness goals, earn badges, and 
              even contribute to a worldwide goal pool!"
            links={[
              {title:"Showcase Website", link:"/projects/health-together"},
              {title:"GitHub Repo", link:"https://github.com/jakobau/health-together-app"},
            ]}
            timeline="2020 - Now"
          />
          <PortfolioItem
            title="Easter Wegg Hunt"
            role="Personal Project"
            index="3"
            projectNumber="03"
            description="Designed and programmed an easter egg hunt website for my family to hunt virtual easter 
              eggs while social distancing. Learn NodeJS framework and Socket.IO NodeJS communication library."
            media={weggHuntGif1}
            projectRoute="/projects/easter-wegg-hunt"
            skills={["Socket.IO","NodeJS","Bootstrap"]}
            idea="Online easter egg hunt website platform for families and communities that are at home social 
              distancing! Find hidden eggs by solving riddles, puzzles, math problems, matching memes, and even 
              getting up and moving around. There are lots of suprises in store!"
            links={[
              {title:"See Example", link:"/projects/easter-wegg-hunt"},
              {title:"Try it out!", link:"https://easter-wegg-app.herokuapp.com"},
              {title:"GitHub Repo", link:"https://github.com/jakobau/easter-wegg-hunt"},
            ]}
            timeline="Mar - Apr 2020"
          />
        </Box>

        {/* second divider */}
        <Divider 
          ref={experiencesRef}
          textAlign="left"
          sx={{
            mt:10,
          }}
        >
          <Chip label="SOFTWARE PROJECT EXPERIENCES" />
        </Divider>

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
              title="KEIKI HEROES"
              role="Core Team Member at"
              index="4"
              projectNumber="01"
              description="Nonprofit organization started during the pandemic. Part of the original volunteer 
                founders of the project. Built initial website launch, poster design, radio voice, story, and 
                brand. Spokesperson for interviews, in-person events, and other meetings"
              media={keikiheroes1}
              projectRoute="/projects/keiki-heroes"
              skills={["Wordpress","Public-Speaking","Illustrator"]}
              idea="(1) Demonstrated ability to work in a team environment by collaborating with 10+ team members on 
                the initial website & poster designs, among other things. (2) Built initial website launch, poster 
                design, radio voice, story, and brand. (3) Spokesperson for interviews, in-person events, and other 
                meetings."
              links={[
                {title:"My Work", link: "/projects/keiki-heroes"},
                {title:"Keiki Heroes Site", link: KeikiHeroesLink},
                {title:"My KH Profile", link: "https://www.keikiheroes.org/staff-member/jake-au/"},
              ]}
              timeline="Jul 2020 - Jun 2021"
            />
            <PortfolioItem
              title="NEXTECH HAWAII"
              role="Volunteer & Developer at"
              index="5"
              projectNumber="02"
              description="Involved in multiple projects including helping coordination a 3D printing COVID PPE 
                program, setting up & teaching virtual camps, re-designing their website, and participated in 
                weekly committee meetings."
              media={nextechPic1}
              projectRoute="/projects/nextech-hawaii"
              skills={["VueJS","Wordpress","Public-Speaking","Bootstrap"]}
              idea="(1) Developed a VueJS website to automate 3D model print requests for NexTech's host family 
                3D printer program. (2) Re-designing their current Wordpress website as they scale their organization 
                and programs. (3) Demonstrated communication, leadership, and teaching ability by advising the 
                committee during their transition to virtual programs during COVID."
              links={[
                {title:"My Work", link: "/projects/nextech-hawaii"},
                {title:"NexTech Website", link:"https://nextechhawaii.org/"},
                {title:"HI STEM Community Care Website", link:"https://www.histemcare.org/"},
              ]}
              timeline="Jun 2020 - Now"
            />
            <PortfolioItem
              title="T3 ALLIANCE"
              role="Discord Lead and R&D at"
              index="6"
              projectNumber="03"
              description="Developed a custom Discord bot, web dev committee member, spokesperson at various events, 
                and Discord server manager."
              media={t3Alliance1}
              projectRoute="/projects/t3-alliance"
              skills={["Javascript","DiscordJS","Public-Speaking","Wordpress"]}
              idea="(1) Develop and manage T3 Course server's node.js discord bot. (2) Help moderate T3 Course and 
                T3 Alliance servers with over 400+ members. (3) Spokesperson in various webinars and conferences. 
                (4) C3 Member of the organization."
              links={[
                {title:"My Work", link: "/projects/t3-alliance"},
                {title:"T3 Alliance Site", link:"https://t3alliance.org/"},
              ]}
              timeline="Sep 2020 - Aug 2021"
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
      projectsRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);
    
  }

  return (
    <Container fixed maxWidth="lg">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      <NavMenu />
      
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
          <Box component="span" sx={{ fontSize: { xs: 40, sm: 50, md: 50, lg: 70, }, mt: { sx: 1, md: 20 } }}>
            Aloha, I'm Jake.
          </Box>
          <Box component="span" sx={{ fontSize: { xs: 30, sm: 40, md: 45, lg: 70, }, mt: 1 }}>
            I'm a web developer.
          </Box>
          <Box 
            component="span" 
            sx={{ 
            color: 'primary.main', 
            fontSize: { xs: 20, sm: 20, md: 22, lg: 22 }, 
            mt: 3, mr: 1, ml: 1,
          }}>
            <Typography variant="h5">
              I have 1+ years of web development experience. I've had intermediate level practice with ReactJS, VueJS, 
              and Wordpress frameworks.
            </Typography>
            <Typography variant="h5" mt={1}>
              In every project I strive for effective communication, detailed documentation, and completeness. I value 
              empathy, learning, and respect.
            </Typography>
          </Box>
            <Box 
              component="span" 
              sx={{ 
                mt: 3, mr: 1, ml: 1 
              }}
            >
              <Box
                sx={{ 
                  display: 'flex',
                  flexDirection: 'row', 
                  fontSize: { xs: 20, sm: 20, md: 22, lg: 22 }, 
                }}
              >
              <Link onClick={ GA_event("linkedin") } color="inherit" href="http://linkedin.com/in/jakob-au">
                <LinkedInIcon fontSize="large"></LinkedInIcon>
              </Link>
              <Link onClick={ GA_event("github_personal_website") } color="inherit" href="https://github.com/jakobau/react-personal-website">
                <GitHubIcon fontSize="large"></GitHubIcon>
              </Link>
              <Typography variant="h5" mt={0.5} ml={1}>Jakob Au</Typography>
              </Box>
              
              <Typography variant="subtitle1">Contact: jakeau00 [at] gmail</Typography>
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
          <Stack direction="row" spacing={2} justifyContent="center" mt={{ xs: 0, sm: 0, md: 10, lg: 10, }} >
            <Avatar 
              alt="Jakob Au" 
              src={ mePic2 } 
              sx={{ 
                width: { xs: 200, sm: 200, md: 320, lg: 350, }, 
                height: { xs: 200, sm: 200, md: 320, lg: 350, } 
              }}
            />

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
        version="V4.0"
      />
      
    </Container>
  )
}