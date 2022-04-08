// >>
// Project Name: Jakob Au's Personal Website
// Version 4.0.1
// Create by Jakob Au
// Created on Jan 26, 2022
// Name: GalleryPics.jsx
// Purpose: Component for gallery pics.
// Using: https://mui.com/components/cards/#main-content
// <<

// REACT imports
import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

// MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import IconButton from '@mui/material/IconButton';

import CardMedia from '@mui/material/CardMedia';

// Media imports
import mePic from '../../../Media/me_picture3.jpg';
import { ConstructionOutlined } from '@mui/icons-material';


function GalleryPics(props) {
    const { srcs, titles } = props;
    const height = {xs:'20vh', sm:'30vh', md:'40vh', lg:'50vh'};
    const width = {xs:150, sm:200, md:250, lg:300};

    const [prioritya, setPrioritya] = useState(1);
    const [priorityb, setPriorityb] = useState(5);
    const [priorityc, setPriorityc] = useState(10);

    const [color1, setColor1] = useState('primary.dark');
    const [color2, setColor2] = useState('primary.dark');
    const [color3, setColor3] = useState('secondary.main');

    function calculatePriority(x) {
        if(x===1) {
            setPrioritya(10);
            setPriorityb(5); 
            setPriorityc(1);
            setColor1('secondary.main');
            setColor2('primary.dark');
            setColor3('primary.dark');
        } else if(x===2) {
            setPrioritya(5);
            setPriorityb(10); 
            setPriorityc(1);
            setColor1('primary.dark');
            setColor2('secondary.main');
            setColor3('primary.dark');
        } else if(x===3) {
            setPrioritya(1);
            setPriorityb(5); 
            setPriorityc(10);
            setColor1('primary.dark');
            setColor2('primary.dark');
            setColor3('secondary.main');
        }
        return
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: {xs:'90%', sm:'90%',md:300,lg:500},
            m:5,
            zIndex:0,
        }}>
            <Box sx={{            
                display: 'flex',
                flexDirection: 'row',
                height: height,
                justifyContent: 'center',
                zIndex:0,
                
            }}>
                {/* Image 1 */}
                <Card 
                    elevation={24} 
                    sx={{ 
                        zIndex: prioritya, 
                        width: width, 
                        height: height,
                        position: 'absolute', 
                        transform: `translate(-70px, -25px)`,
                    }}
                    onMouseEnter={() => { setTimeout(() => { calculatePriority(1) }, 100); }}
                >
                    <CardMedia 
                        component="img"
                        alt={titles[0]}
                        image={srcs[0]}
                    ></CardMedia>
                </Card>

                {/* Image 2 */}
                <Card 
                    onMouseEnter={() => {setTimeout(() => { calculatePriority(2) }, 100); }} 
                    elevation={24} 
                    sx={{
                        zIndex: priorityb, 
                        width: width, 
                        height: height,
                        position:'absolute',
                        transform: `translate(0px, 0px)`,
                    }}
                >
                    <CardMedia 
                        component="img"
                        alt={titles[1]}
                        height='auto'
                        image={srcs[1]}
                    ></CardMedia>
                </Card>

                {/* Image 3 */}
                <Card 
                    onMouseEnter={() => {setTimeout(() => { calculatePriority(3) }, 100); }} 
                    elevation={24} 
                    sx={{
                        zIndex:priorityc, 
                        width:width, 
                        height:height,
                        position:'absolute',
                        transform: `translate(70px, 25px)`
                    }}
                >
                    <CardMedia 
                        component="img"
                        alt={titles[2]}
                        height='auto'
                        image={srcs[2]}
                    ></CardMedia>
                </Card>
            </Box>
            <Box sx={{
                textAlign: 'center',
                mt:{xs:8,sm:8,md:8,lg:8},
            }}>
                <IconButton onClick={() => { calculatePriority(1) }}><CircleIcon sx={{ color:color1, fontSize:{xs:16,sm:16,md:24,lg:24} }} /></IconButton>
                <IconButton onClick={() => { calculatePriority(2) }}><CircleIcon sx={{ color:color2, fontSize:{xs:16,sm:16,md:24,lg:24} }} /></IconButton>
                <IconButton onClick={() => { calculatePriority(3) }}><CircleIcon sx={{ color:color3, fontSize:{xs:16,sm:16,md:24,lg:24} }} /></IconButton>
            </Box>
        </Box>
    );
}

GalleryPics.propTypes = {
    srcs: PropTypes.string.isRequired,
    titles: PropTypes.string.isRequired,
};

export default GalleryPics;