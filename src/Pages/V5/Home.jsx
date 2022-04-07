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
//import { useRef } from "react";
//import ReactGA from 'react-ga';
import './Styles/home.css';

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
import CustomCard from '../../Components/CustomCard.jsx';
import Footer from '../../Components/Footer.jsx';
import ProjectList from '../../Components/ProjectList.jsx';

// Media imports
//import mePic from '../../Media/me_picture.JPG';
import mePic2 from '../../Media/me_picture3.jpg';
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

const colorTheme = createTheme(theme);

// Main exported function
export default function Home() {
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
              👋🏼 Aloha! I'm Jake.
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
                I'm from the 🌺 Big Island of Hawaii, a 📚 Software Engineering Student at Drexel University, and a part-time 💻 Freelance Web Developer & Virtual Event Host.
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
                src={ mePic2 } 
                sx={{ 
                  width: { xs: 200, sm: 200, md: 250, lg: 300, }, 
                  height: { xs: 200, sm: 200, md: 250, lg: 300, },
                  boxShadow: 11,
                }}
              />
            </Stack>
          </Box>
        </Box>

        {/*<Divider variant="middle" sx={{ mt:5 }} />*/}

        {/* Action Cards*/}
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
          <CustomCard 
            title="Web Developer"
            description="I build full-stack web apps in React and React Native. In 2020 I interned at Gum Design for 6 
            months and completed multiple personal projects."
            linkTitle="Portfolio"
            link=""
          />
          <CustomCard 
            title="Entrepreneur"
            description="Helper of Keiki Heroes, involved with Nalukai Academy, and member of two student start-ups 
            (Ikanos Freelancing and AeroPest LLC)."
            linkTitle="LinkedIn"
            link=""
          />
          <CustomCard 
            title="Virtual Event Tech Coordinator"
            description="Hire me as a technical virtual events coordinator - planning, organizing, and hosting virtual events."
            linkTitle="Contact"
            link=""
          />
        </Box>

        <Divider variant="middle" sx={{ mt:5 }} />

        {/* Latest Projects */}
        <Typography variant="body2" sx={{ textAlign: {xs:"center", sm:"center", md:"left", lg:"left" }, fontSize: { xs: 16, sm: 16, md: 21, lg: 21 }, mt:5, ml: { xs:0, sm:0, md:5, lg:5 }}}>
          Latest Projects
        </Typography>
        <ProjectList />
        <Typography variant="body2" sx={{ textAlign:'center' }}>
          Show more
        </Typography>

        <Divider variant="middle" sx={{ mt:5 }} />

        {/* About Me */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: { xs: 'center'},
          m: 3,
        }}>
          <Box sx={{width:'50%'}}>
            <Typography variant="body2" sx={{ textAlign: {xs:"center", sm:"center", md:"left", lg:"left" }, fontSize: { xs: 16, sm: 16, md: 21, lg: 21 }, mt:2, ml: { xs:0, sm:0, md:2, lg:2 }}}>
              About Me
            </Typography>

            <Typography variant="body2" sx= {{ fontSize: { xs: 16, sm: 16, md: 16, lg: 16 }, mt:2, ml: { xs:0, sm:0, md:2, lg:2 }}}>
              I am currently a student @ [DREXEL UNIVERSITY](https://drexel.edu/) pursuing a Software Engineering BSSE 
              and an Entrepreneur minor. I'm CTO at Ikanos Marketing and Lead Researcher at AeroPest LLC, both student 
              start-ups incubating at Drexel University. I also do web design and event hosting freelance work on the side.
            </Typography>

            <Typography variant="body2" sx= {{ fontSize: { xs: 16, sm: 16, md: 16, lg: 16 }, mt:2, ml: { xs:0, sm:0, md:2, lg:2 }}}>
              In 2020 I helped start [KEIKI HEROES](https://www.keikiheroes.org/), a program empowering Hawaii's children 
              during the pandemic to stay healthy and build resilience beyond it. I built the inital website, designed their 
              initial posters, and shared Kai and Hoku to the community in Hawai'i. Around that time I've also participanted 
              and lead as a group leader at [NALUKAI ACADEMY](https://www.nalukai.org/), a free intensive leadership camp for 
              Hawai'i high school students focused on technological, cultural & social entrepreneurship. I continue to stay 
              connected to my origin even though I am thousands of miles away.
            </Typography>
          </Box>
          <Box sx={{width:'50%', height:'auto', textAlign:'center', border:1}}>
            test
          </Box>
        </Box>

        <Divider variant="middle" sx={{ mt:15 }} />

        {/* Footer */}
        <Footer 
          title=""
          description=""
          version={config.currentVersion}
        />
      </ThemeProvider>
    </Container>
  </>
  )
}