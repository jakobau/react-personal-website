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
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// COMPONENT and CSS imports
import ActionCard from './ActionCard.jsx';
import video1 from '../../../media/Projects/ProjectCopy/video1.png';
import video2 from '../../../media/Projects/ProjectCopy/video2.png';
import video3 from '../../../media/Projects/ProjectCopy/video3.png';
import video4 from '../../../media/Projects/ProjectCopy/video4.png';
import video5 from '../../../media/Projects/ProjectCopy/video5.png';
import video6 from '../../../media/Projects/ProjectCopy/video6.png';
import video7 from '../../../media/Projects/ProjectCopy/video7.png';

// Main exported function
function YouTubeCopyBody() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <>
      
        <AppBar position='relative' color='secondary'>
          <Toolbar style={{ zIndex: 1 }}>
            <Stack 
              direction="row" 
              spacing={1} 
              pt={4} 
              pb={2} 
              mt={15} 
              position="fixed" 
              style={{ 
                zIndex: 1,
              }} 
              style={{ 
                background: 'white',
                borderBottom: '1px solid grey',
                opacity:0.95,
              }}
            >
              <Chip label="All" onClick={handleClick} />
              <Chip label="Martial arts" variant="outlined" onClick={handleClick} />
              <Chip label="PVP" variant="outlined" onClick={handleClick} />
              <Chip label="Impractical Jokers" variant="outlined" onClick={handleClick} />
              <Chip label="Comedies" variant="outlined" onClick={handleClick} />
              <Chip label="PUBG" variant="outlined" onClick={handleClick} />
              <Chip label="Building" variant="outlined" onClick={handleClick} />
              <Chip label="Comedy" variant="outlined" onClick={handleClick} />
              <Chip label="Humans" variant="outlined" onClick={handleClick} />
              <Chip label="Art" variant="outlined" onClick={handleClick} />
              <Chip label="Computer programming" variant="outlined" onClick={handleClick} />
              <Chip label="League of Legends" variant="outlined" onClick={handleClick} />
              <Chip label="Indie games" variant="outlined" onClick={handleClick} />
              <Chip label="Security hackers" variant="outlined" onClick={handleClick} />
              <Chip label="Conversation" variant="outlined" onClick={handleClick} />
              <Chip label="Music" variant="outlined" onClick={handleClick} />
              <Chip label="Recently uploaded" variant="outlined" onClick={handleClick} />
            </Stack>
          </Toolbar>
        </AppBar>

      <Container maxWidth='xl'>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:12}} style={{zIndex: 3}}>
          <Grid item xs={2.8}>
            <ActionCard 
              media={video1}
              title='Fighters That Showed Incredible SELF-CONTROL'
              channelName="ONE Championship"
              views="4.2M"
              dateUploaded="2 months"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={video2}
              title='WE TRIED RAIDING WITH IT'
              channelName="Shacy"
              views="112K"
              dateUploaded="3 months"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={video3}
              title='Impractical Jokers 2022 FUNNIEST MOMENTS # 64'
              channelName="Chat 207"
              views="4.4K"
              dateUploaded="15 hours"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={video4}
              title='My Fake Picasso Went to Auction at $1.4 Million'
              channelName="VICE"
              views="1.7M"
              dateUploaded="1 year"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={video5}
              title='Most Useless Megaprojects in the World'
              channelName="Top Luxury"
              views="29M"
              dateUploaded="3 months"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={video6}
              title='Wardruna - Kvitravn (White Raven) - Official music video'
              channelName="wardruna"
              views="13M"
              dateUploaded="1 year"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={video7}
              title='Nick Diaz Being Nick Diaz'
              channelName="UFC - Ultimate Fighting Championship"
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
          Top News
        </Typography>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} pb={2}>
          <Grid item xs={2.8}>
            <ActionCard 
              media={video1}
              title='Fighters That Showed Incredible SELF-CONTROL'
              channelName="ONE Championship"
              views="4.2M"
              dateUploaded="2 months"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={video2}
              title='WE TRIED RAIDING WITH IT'
              channelName="Shacy"
              views="112K"
              dateUploaded="3 months"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={video3}
              title='Impractical Jokers 2022 FUNNIEST MOMENTS # 64'
              channelName="Chat 207"
              views="4.4K"
              dateUploaded="15 hours"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={video4}
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
              media={video6}
              title='Wardruna - Kvitravn (White Raven) - Official music video'
              channelName="wardruna"
              views="13M"
              dateUploaded="1 year"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={video7}
              title='Nick Diaz Being Nick Diaz'
              channelName="UFC - Ultimate Fighting Championship"
              views="2.1M"
              dateUploaded="6 months"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={video5}
              title='Most Useless Megaprojects in the World'
              channelName="Top Luxury"
              views="29M"
              dateUploaded="3 months"
            />
          </Grid>
          <Grid item xs={2.8}>
            <ActionCard 
              media={video6}
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