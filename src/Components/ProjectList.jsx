// >>
// Project Name: Jakob Au's Personal Website
// Version 4.0.1
// Create by Jakob Au
// 
// Name: ProjectList.jsx
// Purpose: Project List component
// Using: https://mui.com/components/image-list/#main-content
// <<

// REACT imports
import * as React from 'react';

// MUI Imports
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Component Imports
import config from '../Config/config.json';
import theme from "../Config/ColorTheme.jsx";


// Media imports
import mePic from '../Media/me_picture.JPG';
import mePic2 from '../Media/me_picture3.jpg';
import keikiheroes1 from '../Media/projectPictures/keikiHeroes_pic1.png';
import t3Alliance1 from '../Media/projectPictures/t3Alliance_pic1.png';
import personalProjectPic1 from '../Media/projectPictures/personalProject_pic1.png';
import nextechPic1 from '../Media/projectPictures/nextech_pic1.png';
import healthTogetherPic1 from '../Media/projectPictures/healthTogether_pic1.png';
import weggHuntGif1 from '../Media/projectPictures/weggHunt.gif';
import personalProjectGif1 from '../Media/projectPictures/personalWebsite_gif1.gif';
import youtube1 from '../Media/projectPictures/youtube_pic1.png';

const colorTheme = createTheme(theme);
const listHeight = 'auto';

export default function ProjectList() {
    return (
            <ImageList sx={{ height: {listHeight} }}>
                {itemData.map((item) => (
                    <ThemeProvider theme={colorTheme}>
                        <ImageListItem key={item.img} sx={{ m:{xs:1,sm:1,md:2,lg:3}, borderRadius:3, boxShadow:{xs:5,sm:5,md:7,lg:11}}} >
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                style={{ borderRadius: 11}}
                            />
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
    

const itemData = [
  {
    img: personalProjectPic1,
    title: 'Personal Website V5 (ReactJS)',
    rows: 2,
    cols: 2,
  },
  {
    img: healthTogetherPic1,
    title: 'Health Together App (React Native)',
    rows: 2,
    cols: 2,
  },
  {
    img: weggHuntGif1,
    title: 'Easter Wegg Hunt App (NodeJS)',
    rows: 2,
    cols: 2,
  },
  {
    img: youtube1,
    title: 'Youtube Clone (ReactJS)',
    rows: 2,
    cols: 2,
  }
];