// >>
// Project Name: Project Copy [YouTube]
// Version 4.0.1
// Create by Jakob Au
// Name: YouTubeCopy.js
// Purpose: 
// <<

// REACT Imports
import * as React from 'react';

// MUI Imports
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// COMPONENT and CSS imports
import ActionCard from './ActionCard.jsx';
import keikiheroes1 from '../../../media/projectPictures/keikiHeroes_pic1.png';
import t3Alliance1 from '../../../media/projectPictures/t3Alliance_pic1.png';
import personalProjectPic1 from '../../../media/projectPictures/personalProject_pic1.png';
import nextechPic1 from '../../../media/projectPictures/nextech_pic1.png';
import healthTogetherPic1 from '../../../media/projectPictures/healthTogether_pic1.png';
import weggHuntGif1 from '../../../media/projectPictures/weggHunt.gif';
import personalProjectGif1 from '../../../media/projectPictures/personalWebsite_gif1.gif';
import youShowPic1 from '../../../media/Projects/ProjectCopy/youShowPic1.png';
import ikanosPic1 from '../../../media/Projects/ProjectCopy/ikanosPic1.png';
import aeropestPic1 from '../../../media/Projects/ProjectCopy/aeropestPic1.png';

// Changable Links
const PersonalProjectLink = "https://www.jakobau.me"
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
function YouTubeCopyBody() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <>
      <AppBar position='relative' color='grey' elevation={0}>
        <Toolbar>
          <Stack 
            direction="row" 
            spacing={1} 
            pt={2} 
            pb={2} 
            mt={16.2} 
            position="fixed" 
            style={{ 
              zIndex: 5,
              background: 'white',
              borderTop: '1px solid grey',
              borderBottom: '1px solid grey',
              opacity:0.98,
            }}
          >
            <Chip label="All" variant="filled" onClick={handleClick} />
            <Chip label="ReactJS" variant="outlined" onClick={handleClick} />
            <Chip label="React Native" variant="outlined" onClick={handleClick} />
            <Chip label="Python" variant="outlined" onClick={handleClick} />
            <Chip label="VueJS" variant="outlined" onClick={handleClick} />
            <Chip label="Firebase" variant="outlined" onClick={handleClick} />
            <Chip label="AWS" variant="outlined" onClick={handleClick} />
            <Chip label="Google Analytics" variant="outlined" onClick={handleClick} />
            <Chip label="Wordpress" variant="outlined" onClick={handleClick} />
            <Chip label="DiscordJS" variant="outlined" onClick={handleClick} />
            <Chip label="Virtual Events" variant="outlined" onClick={handleClick} />
            <Chip label="MaterialUI" variant="outlined" onClick={handleClick} />
            <Chip label="Bootstrap" variant="outlined" onClick={handleClick} />
            <Chip label="TypeScript" variant="outlined" onClick={handleClick} />
            <Chip label="Redux" variant="outlined" onClick={handleClick} />
            <Chip label="HTML/CSS" variant="outlined" onClick={handleClick} />
            <Chip label="Recently updated" variant="outlined" onClick={handleClick} />
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth='xl' style={{ zIndex: 1 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:12}} >
          <Grid item xs={2.8}>
            <ActionCard 
              media={keikiheroes1}
              title='CoFounder of Keiki Heroes Program'
              channelName="Keiki Heroes"
              views="4.2M"
              dateUploaded="2 months"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={t3Alliance1}
              title='Discord Manager, R&D, Event Planner, Zoom Host @ T3 Alliance'
              channelName="T3 Alliance"
              views="112K"
              dateUploaded="3 months"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={nextechPic1}
              title='Nextech STEM Virtual Teacher, Event Planner, Developer'
              channelName="NexTech Hawaii"
              views="4.4K"
              dateUploaded="15 hours"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={healthTogetherPic1}
              title='Creator of Health Together App'
              channelName="Personal Project"
              views="1.7M"
              dateUploaded="1 year"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={personalProjectGif1}
              title='Creator of Personal ReactJS Website'
              channelName="Personal Project"
              views="29M"
              dateUploaded="3 months"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={youShowPic1}
              title='Creator of Project YouShow - Cloning Youtube'
              channelName="Personal Project"
              views="13M"
              dateUploaded="1 year"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={ikanosPic1}
              title='CTO @ Ikanos Freelancing'
              channelName="Student Startup"
              views="2.1M"
              dateUploaded="6 months"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={aeropestPic1}
              title='Lead Researcher and Developer @ Ikanos Freelancing'
              channelName="Student Startup"
              views="2.1M"
              dateUploaded="6 months"
            />
          </Grid>
        </Grid>

        <Divider 
          sx={{ bgcolor:'black' }}
          style={{
            border: "none",
            height: 4,
            margin: 0,
            opacity:0.15,
          }}
        />

        <Typography variant="h6" pt={4} pb={4} pl={1} sx={{}}>
          Recent Updates
        </Typography>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} pb={2}>
          <Grid item xs={2.8}>
            <ActionCard 
              media={youShowPic1}
              title='Fighters That Showed Incredible SELF-CONTROL'
              channelName="ONE Championship"
              views="4.2M"
              dateUploaded="2 months"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={youShowPic1}
              title='WE TRIED RAIDING WITH IT'
              channelName="Shacy"
              views="112K"
              dateUploaded="3 months"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={youShowPic1}
              title='Impractical Jokers 2022 FUNNIEST MOMENTS # 64'
              channelName="Chat 207"
              views="4.4K"
              dateUploaded="15 hours"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={youShowPic1}
              title='My Fake Picasso Went to Auction at $1.4 Million'
              channelName="VICE"
              views="1.7M"
              dateUploaded="1 year"
            />
          </Grid>
        </Grid>

        <Divider 
          sx={{ bgcolor:'black' }}
          style={{
            border: "none",
            height: 4,
            margin: 0,
            opacity:0.15,
          }}
        />

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} pt={5}>
          <Grid item xs={2.8}>
            <ActionCard 
              media={youShowPic1}
              title='Wardruna - Kvitravn (White Raven) - Official music video'
              channelName="wardruna"
              views="13M"
              dateUploaded="1 year"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={youShowPic1}
              title='Nick Diaz Being Nick Diaz'
              channelName="UFC - Ultimate Fighting Championship"
              views="2.1M"
              dateUploaded="6 months"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={youShowPic1}
              title='Most Useless Megaprojects in the World'
              channelName="Top Luxury"
              views="29M"
              dateUploaded="3 months"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={youShowPic1}
              title='Wardruna - Kvitravn (White Raven) - Official music video'
              channelName="wardruna"
              views="13M"
              dateUploaded="1 year"
            />
          </Grid>
        </Grid>

      </Container>
    </>
  );
}

//YouTubeCopyBody.propTypes = {

//};

export default YouTubeCopyBody;