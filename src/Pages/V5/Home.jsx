// >>
// Project Name: Jakob Au's Personal Website
// Version 5.0.1
// Create by Jakob Au
// Name: Home.js
// Purpose: Landing Page. Brief introduction, social media links, and showcase
//    my personal and professional projects.
// <<

// REACT Imports
import React from "react";
import { useState, useEffect } from "react";
//import ReactGA from 'react-ga';
import './Styles/home.css';
import { useSpring, animated, useTransition } from 'react-spring'
import styled from "styled-components";

// MUI Imports
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//import Link from '@mui/material/Link';
//import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
//import Chip from '@mui/material/Chip';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// MUI Icon Imports
//import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
//import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
//import InstagramIcon from '@mui/icons-material/Instagram';
//import FacebookIcon from '@mui/icons-material/Facebook';
//import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import TwitterIcon from '@mui/icons-material/Twitter';
//import LanguageIcon from '@mui/icons-material/Language';
//import GitHubIcon from '@mui/icons-material/GitHub';

// Component Imports
import NavMenu from '../../Components/Menu.jsx';
import CustomCard from './Components/CustomCard.jsx';
import Footer from '../../Components/Footer.jsx';
import ProjectList from './Components/ProjectList.jsx';
import GalleryPics from './Components/GalleryPics.jsx';
import CustomTimeline from './Components/CustomTimeline.jsx';
import CardStack from './Components/CardStack.tsx';

// Media imports
//import mePic1 from '../../Media/me_picture.JPG';
//import mePic2 from '../../Media/me_picture2.jpg';
import mePic3 from '../../Media/me_picture3.jpg';
//import keikiheroes1 from '../../Media/projectPictures/keikiHeroes_pic1.png';
//import t3Alliance1 from '../../Media/projectPictures/t3Alliance_pic1.png';
//import personalProjectPic1 from '../../Media/projectPictures/personalProject_pic1.png';
//import nextechPic1 from '../../Media/projectPictures/nextech_pic1.png';
//import healthTogetherPic1 from '../../Media/projectPictures/healthTogether_pic1.png';
//import weggHuntGif1 from '../../Media/projectPictures/weggHunt.gif';
//import personalProjectGif1 from '../../Media/projectPictures/personalWebsite_gif1.gif';

// Changable Links
import config from "../../Config/config.json";
import theme from "../../Config/ColorTheme.jsx";
import { symbolName } from "typescript";

const colorTheme = createTheme(theme);

// Animated Card on:hover
const Icons = styled.div`
  background: primary.main;
  transition: all 0.25s ease-out;
  &:hover {
    transform: perspective(500px) rotateX(15deg) rotateY(20deg) rotateZ(-15deg);
    filter: drop-shadow(0 1px 5px grey);
  }
  &:nth-of-type(even):hover {
    transform: perspective(500px) rotateX(15deg) rotateY(-20deg) rotateZ(15deg);
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;

function AnimatedHand(){
  const [flip, setFlip] = useState(false)
  const {props} = useSpring({
    to: { props:0 },
    from: { props:1 },
    reset: true,
    reverse: flip,
    delay: 200,
  })

  return <animated.h1 
    style={{transform: props
      .interpolate({
        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
        output: [180, 220, 180, 220, 180, 220, 180, 200]
      })
      .interpolate(props => `translate3d(${props}px, 0px, 0px)`)}}
    sx={{ 
      position:'relative', 
      fontSize: { xs: 35, sm: 35, md: 50, lg: 50, } 
    }}>👋🏼</animated.h1>
}

// Main exported function
export default function Home() {

  // https://stackoverflow.com/questions/61398942/react-spring-transition-achieve-a-progressive-delay-in-the-entry-of-each-elemen
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // https://react-spring.io/hooks/use-spring#usespring
  // Animated Custom Cards useSpring
  const [styles1, api1] = useSpring(() => ({
    from: { transform: 'perspective(500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
    config: { duration: 400, },
  }))
  const [styles2, api2] = useSpring(() => ({
    from: { transform: 'perspective(500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
    config: { duration: 400, },
  }))
  const [styles3, api3] = useSpring(() => ({
    from: { transform: 'perspective(500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
    config: { duration: 400, },
  }))

  // Project List CallBack
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const changeProject = (i) => { setSelectedProjectIndex(i) }

  useEffect(() => {

    // Trailed animated cards
    async function startAnimations() {
      await sleep(7000)
      await api1.start({
        to: async (next, cancel) => {
          await next({ transform: 'perspective(500px) rotateX(5deg) rotateY(10deg) rotateZ(-5deg)' })
          await next({ transform: 'perspective(500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' })
          await sleep(7000);
        },
        loop: {reverse: true },
      })
      await sleep(200)
      await api2.start({
        to: async (next, cancel) => {
          await next({ transform: 'perspective(500px) rotateX(5deg) rotateY(10deg) rotateZ(-5deg)' })
          await next({ transform: 'perspective(500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' })
          await sleep(7000);
        },
        loop: {reverse: true },
      })
      await sleep(200)
      await api3.start({
        to: async (next, cancel) => {
          await next({ transform: 'perspective(500px) rotateX(5deg) rotateY(10deg) rotateZ(-5deg)' })
          await next({ transform: 'perspective(500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' })
          await sleep(7000);
        },
        loop: {reverse: true },
      })
    }
    startAnimations()
    
  })

  return (
    <>
    <Container fixed maxWidth="lg">
      <ThemeProvider theme={colorTheme}>
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
            ml:{ xs:0, sm:0, md:'48px', lg:'32px' },
          }}
        >
          {/* Intro and short description */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minWidth: { xs: '100%', sm: '100%', md: 400, lg: 600, },
              flexWrap: 'wrap',
              order: 2,
            }}
          >
            <Box component="span" sx={{ mt: { xs: 1, md: 10 }, textAlign: {xs:"center", sm:"center", md:"left", lg:"left" } }}>
              <Typography variant="body1" color="primary.dark" sx={{ fontSize: { xs: 35, sm: 35, md: 50, lg: 50, }, }}>
              {/*<AnimatedHand />*/} 👋🏼 Aloha! I'm Jake.
              </Typography>
            </Box>
            <Box 
              component="span" 
              sx={{ 
              color: 'primary.main', 
              mt: 1,
              mr: { xs: 3, sm: 3, md: 0, lg: 0, },
              ml: { xs: 3, sm: 3, md: 0, lg: 0, },
            }}>
              <Typography variant="body2" sx= {{ textAlign: {xs:"center", sm:"center", md:"left", lg:"left" }, fontSize: { xs: 16, sm: 16, md: 21, lg: 21 }, }}>
                🌺 I'm from the Big Island of Hawaii, 📚 studying Software Engineering at Arizona State University, and 💻 a Freelance Web Developer & Virtual Event Host.
              </Typography>
              <Typography variant="body2" sx={{ textAlign: {xs:"center", sm:"center", md:"left", lg:"left" }, fontSize: { xs: 16, sm: 16, md: 21, lg: 21 }, mt: { xs:2, sm:2, md:3, lg:3 }}}>
                Welcome to my website! Keep scrolling to learn more about me. 👇🏽
              </Typography>
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
            <Stack direction="row" spacing={2} justifyContent="center" mt={{ xs: 0, sm: 0, md: 10, lg: 10, }}>
              <Avatar 
                alt="Jakob Au" 
                src={ mePic3 } 
                sx={{ 
                  width: { xs: 200, sm: 200, md: 250, lg: 300, }, 
                  height: { xs: 200, sm: 200, md: 250, lg: 300, },
                  boxShadow: 11,
                }}
              />
            </Stack>
          </Box>
        </Box>

        <Divider variant="middle" sx={{ mt:5 }} />

        {/* Latest Projects */}

        <ProjectList project={{selectedProjectIndex}} />
        <Typography variant="body2" sx={{ textAlign:'center' }}>
          Show more
        </Typography>

        <Divider variant="middle" sx={{ mt:5 }} />

        {/* About Me */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          xIndex: 1,
        }}>
          <Box sx={{width:{xs:'90%', sm:'90%', md:400,lg:500}, mb:{xs:4,sm:4}, mt:{xs:5,sm:5,md:10,lg:10} }}>
            <Typography variant="body2" sx={{ textAlign: {xs:"center", sm:"center", md:"left", lg:"left" }, fontSize: { xs: 16, sm: 16, md: 21, lg: 21 }, mt:2, ml: { xs:0, sm:0, md:2, lg:2 }}}>
              About Me
            </Typography>

            <Typography variant="body2" sx= {{ fontSize: { xs: 16, sm: 16, md: 16, lg: 16 }, mt:2, ml: { xs:0, sm:0, md:2, lg:2 }}}>
              I grew up playing sports throughout High School and still continue to play 🏀 basketball and 🏐 beach volleyball. I 
              enjoy running, working out, board games, movies, and personal projects.
            </Typography>

            <Typography variant="body2" sx= {{ fontSize: { xs: 16, sm: 16, md: 16, lg: 16 }, mt:2, ml: { xs:0, sm:0, md:2, lg:2 }}}>
              In 2020 I helped start 👪 KEIKI HEROES, a program empowering Hawaii's children during the pandemic to stay healthy and 
              build resilience beyond it. I built the inital website, designed their initial posters, and shared Kai and Hoku to 
              the community in Hawai'i. Around that time I've also participanted and lead as a group leader at 🚀 NALUKAI ACADEMY, a 
              free intensive leadership camp for Hawai'i high school students focused on technological, cultural & social 
              entrepreneurship. I will continue to stay connected to home even though I live thousands of miles away.
            </Typography>

            <Typography variant="body2" sx= {{ fontSize: { xs: 16, sm: 16, md: 16, lg: 16 }, mt:2, ml: { xs:0, sm:0, md:2, lg:2 }}}>
              I love my family and have created fun ways to stay connected to them. Health Together and Easter Wegg Hunt are my family's 
              favorite projects. I am currently working on Health Together.
            </Typography>
          </Box>
          
          {/*
          <GalleryPics srcs={[Card1,Card2,Card3]} titles={['mepic1', 'mepic2', 'mepic3']}/>
          <Box sx={{ width:100, }}></Box>
          <CardStack />
          */}
          
        </Box>

        <Divider variant="middle" sx={{ mt:5 }} />
        
        {/* Life Timeline */}
        <Typography variant="body2" sx={{ textAlign: {xs:"center", sm:"center", md:"left", lg:"left" }, fontSize: { xs: 16, sm: 16, md: 21, lg: 21 }, mt:5, ml: { xs:0, sm:0, md:5, lg:5 }}}>
          Life Timeline
        </Typography>
        <CustomTimeline />
          
        <Divider variant="middle" sx={{ mt:5 }} />

         {/* Action Cards CURRENTLY DISABLED*/}
         <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            pt:5,
            pb:5,
          }}
        >
          <animated.div style={styles1}><Icons><CustomCard 
            title="Web Developer"
            description="I build full-stack web apps in React and React Native. In 2020 I interned at Gum Design for 6 
            months and completed multiple personal projects."
            linkTitle="Portfolio"
            link=""
          /></Icons></animated.div>
          <animated.div style={styles2}><Icons><CustomCard 
            title="Entrepreneur"
            description="Helper of Keiki Heroes, involved with Nalukai Academy, and member of two student start-ups 
            (Ikanos Freelancing and AeroPest LLC)."
            linkTitle="LinkedIn"
            link=""
          /></Icons></animated.div>
          <animated.div style={styles3}><Icons><CustomCard 
            title="Virtual Event Tech Coordinator"
            description="Hire me as a technical virtual events coordinator - planning, organizing, and hosting virtual events."
            linkTitle="Contact"
            link=""
          /></Icons></animated.div>
        </Box>
        {/**/}

        {/* Footer */}
        <Footer 
          title=""
          description=""
          version="V5.0"
        />
      </ThemeProvider>
    </Container>
  </>
  )
}