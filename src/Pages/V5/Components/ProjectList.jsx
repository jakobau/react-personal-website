// >>
// Project Name: Jakob Au's Personal Website
// Version 4.0.1
// Create by Jakob Au
// 
// Name: ProjectList.jsx
// Purpose: Project List component
// Using: https://mui.com/components/image-list/#main-content
// <<

/** 
* TODO:
* 
*  
*/

// REACT imports
import * as React from 'react';
import { useState, useEffect, useRef } from "react";

// MUI Imports
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

// Component Imports
//import config from '../../../Config/config.json';
import theme from "../../../Config/ColorTheme.jsx";
import '../Styles/projectList.css';

// Media imports
//import mePic from '../../../Media/me_picture.JPG';
//import mePic2 from '../../../Media/me_picture3.jpg';
//import keikiheroes1 from '../../../Media/projectPictures/keikiHeroes_pic1.png';
//import t3Alliance1 from '../../../Media/projectPictures/t3Alliance_pic1.png';
import personalProjectPic1 from '../../../Media/projectPictures/personalProject_pic1.png';
//import nextechPic1 from '../../../Media/projectPictures/nextech_pic1.png';
import healthTogetherPic1 from '../../../Media/projectPictures/healthTogether_pic1.png';
import weggHuntGif1 from '../../../Media/projectPictures/weggHunt.gif';
//import personalProjectGif1 from '../../../Media/projectPictures/personalWebsite_gif1.gif';
import youtube1 from '../../../Media/projectPictures/youtube_pic1.png';

const colorTheme = createTheme(theme);
const listHeight = 'auto';

// FIXME: replace <ImageList> to cards with project info
function ProjectList() {
  return (
    <ImageList sx={{ height: {listHeight} }} cols={2} >
      {itemData.map((item) => (
        <ThemeProvider theme={colorTheme} >
          <ImageListItem 
            key={item.img} 
            sx={{ 
              m:{xs:1,sm:1,md:2,lg:3}, 
              borderRadius:3, 
              boxShadow:{xs:5,sm:5,md:7,lg:11},
            }} >
            <a className="imageLink" href={item.link}>
              <img
                className="image"
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: 11, width: 'auto', height: 250 }}
              />
              </a>
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
              sx={{ borderRadius:3, backgroundColor:'primary.transparent', }}
            />
          </ImageListItem>
        </ThemeProvider>
      ))}
    </ImageList>
  );
}

// List view of projects
function ProjectList2(props) {
  // change selected project using index
  const[selectedIndex, setSelectedIndex] = useState(0);
  const[stopInterval, setStopInterval] = useState(false);
  
  const propsSelected = (value => ({
    selected: selectedIndex === value,
    onClick: () => {
      // when manual selecting project: set new index, clear interval, restart interval with timeout
      setSelectedIndex(value); //set new index
      setStopInterval(true) //stop interval
      clearInterval(interval); //clear interval
      setTimeout(() => {setStopInterval(false)}, 5000); // restart interval after 5 seconds
    },
  }))

  // auto tick selected project
  let timer, i, interval
  const tickSelectedIndex2 = () => {
    i = selectedIndex
    timer = !timer && setInterval(() => {
      //console.log("tick", selectedIndex, i);
      if(selectedIndex<itemData.length-1) {
        setSelectedIndex(prevCount => prevCount + 1)
        i++
      } else {
        setSelectedIndex(0)
        i=0
      }
      
    }, 1000)
  }

  useEffect(() => {
    const tickSelectedIndex = () => {
      //console.log("starting tick, ", selectedIndex, stopInterval)
      i = selectedIndex
      if (!stopInterval) { // if interval isn't stopped, cycle through indexes
        interval = setInterval(() => {
          //console.log("tick", selectedIndex, i);
          if(selectedIndex<itemData.length-1) {
            setSelectedIndex(prevCount => prevCount + 1)
            i++
          } else {
            setSelectedIndex(0)
            i=0
          }
        }, 3000)
      } else { // if interval is stopped, do nothing
        const timer2 = setTimeout(() => {
          interval = setInterval(() => {
            if(selectedIndex<itemData.length-1) {
              i++
            } else {
              i=0
            }
          }, 2000)
        }, 1000);
        return () => clearTimeout(timer2);
        setStopInterval(false)
      }
    }
    tickSelectedIndex(); // initiate cycle
    return () => clearInterval(interval);
  }, [selectedIndex, stopInterval]);

  return (
    <>
      <Typography 
        variant="body2" 
        sx={{ 
          textAlign: {xs:"center", sm:"center", md:"left", lg:"left" }, 
          fontSize: { xs: 16, sm: 16, md: 21, lg: 21 }, 
          mt:5, ml: { xs:0, sm:0, md:5, lg:5 }, mb:{ xs:5, sm:5 , md:0, lg:0 }
        }}>
        Check out what I've Created
      </Typography>
          
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        maxHeight: { xs: 'auto', md: 'auto' },
      }}>
        <Box 
          sx={{
            height: '100%',
            maxHeight: { xs: 'auto', md: 'auto' },
            maxWidth: { xs: '90%', md: '45%' },
            mr: { xs:0, sm:0, md:1, lg:1 },
            mt: { xs:0, sm:0, md:3, lg:3 },
          }}
        >
          <Box
            className='imgBorder'
            component="img"
            sx={{
              height: '100%',
              maxHeight: { xs: 'auto', md: 400 },
              maxWidth: '100%',
            }}
            alt="test"
            src={itemData[selectedIndex].img}
          />
          <Typography variant="h6">{itemData[selectedIndex].title}</Typography>
          <Typography variant="body2">{itemData[selectedIndex].subtitle}</Typography>
          <Link color="inherit" href={itemData[selectedIndex].link} target="_blank">Website Link</Link>
        </Box>
        <List 
          sx={{ 
            width: '100%', 
            maxWidth: { xs: '90%', md: '50%' }, 
            bgcolor: 'background.paper' 
            }} 
          cols={2}
        >
          {itemData.sort((a, b) => b.endYear - a.endYear).map((item, index) => (
            <>
            <ListItem {...propsSelected(index)} alignItems="flex-start" className='listHover'>
              <ListItemAvatar>
                <Avatar alt="" src={item.img} />
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      <b>{item.year}</b> | {item.tools}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" />
            </>
          ))}
        </List>
      </Box>
    </>
  );
}

export default ProjectList2;

const itemData = [
  {
    img: personalProjectPic1,
    title: 'Personal Website Version 5.0',
    year: '2019 - Now',
    endYear: Date.now(),
    tools: 'ReactJS, MUI, TypeScript',
    subtitle: 'A space my web design playground',
    link: 'https://www.jakobau.me/#/',
    rows: 2,
    cols: 2,
  },
  {
    img: weggHuntGif1,
    title: 'Easter Wegg Hunt App',
    year: '2020',
    endYear: 2020,
    tools: 'NodeJS, Express, SocketIO',
    subtitle: 'Online easter egg hunt website platform for families and communities...',
    link: 'https://excessive-fuschia-08d.notion.site/Personal-Website-e2a8671b197e438aa1f5ac2d2881b616',
    rows: 1,
    cols: 1,
  },
  {
    img: healthTogetherPic1,
    title: 'Health Together App',
    year: '2021-Now',
    endYear: Date.now(),
    tools: 'React Native, Figma',
    subtitle: '',
    link: 'https://excessive-fuschia-08d.notion.site/Personal-Website-e2a8671b197e438aa1f5ac2d2881b616',
    rows: 3,
    cols: 3,
  },
  {
    img: youtube1,
    title: 'House of Rep Candidate Campaign Website',
    year: '2022',
    endYear: 2022,
    tools: 'Wix, Figma, Client Communication',
    subtitle: 'Designed and built a Wix campaign website with custom styling, page structure, and additional graphics; Hired a Graphic Designer to assist with graphics and styling; 200+ unique user visits and 280+ site sessions since launched',
    link: 'https://www.dellabelatti.com/',
    rows: 2,
    cols: 2,
  },
  {
    img: youtube1,
    title: 'Youtube Clone',
    subtitle: '',
    year: '2021',
    endYear: 2021,
    tools: 'ReactJS, MUI',
    link: 'https://excessive-fuschia-08d.notion.site/Personal-Website-e2a8671b197e438aa1f5ac2d2881b616',
    rows: 3,
    cols: 3,
  }
];