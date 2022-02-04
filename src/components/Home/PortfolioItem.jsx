// >>
// Project Name: Jakob Au's Personal Website
// Version 4.0.1
// Create by Jakob Au
// Created on Jan 26, 2022
// Name: PortfolioItem.js
// Purpose: Component for each project box.
// <<

// REACT imports
import * as React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

// MUI Imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import Switch from '@mui/material/Switch';
import Slide from '@mui/material/Slide';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

// MUI Icon Imports
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
//import TimelineIcon from '@mui/icons-material/Timeline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// Component Imports
import SkillTag from './SkillTag.jsx';

// Main exported function
function PortfolioItem(props) {

  const { title, role, index, projectNumber, description, media, projectRoute, skills, idea, links, timeline } = props;
  const [open, setOpen] = React.useState(true);

  const handleChange = () => {
    setOpen((prev) => !prev);
  };
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        m: 1,
        mt:5,
        minWidth: { xs: 200, sm: 300, md: 400, lg: 600, },
        flexWrap: 'nowrap',
      }}
    >
      <Slide 
        direction="left" 
        in={open}
        style={{ transformOrigin: '0 0 0' }}
        {...(open ? { timeout: 500*index } : {  })}
        mountOnEnter
        unmountOnExit
        onExiting={(node) => { 
          node.style.position ='absolute';
          console.log("onEntering"); 
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            m: 1,
            mt:5,
            minWidth: { xs: 200, sm: 300, md: 400, lg: 600, },
            flexWrap: 'nowrap',
          }}
        >
          {/* text */}
          <Link onClick={handleChange} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: { xs: 'center', md: 'flex-start' },
                flexWrap: 'wrap',
              }}
            >
              <Typography variant="h1" mt={0} color="primary.main">
                {projectNumber}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', md: 'flex-start' },
                  ml: 2,
                  flexWrap: 'wrap',
                  width: 300,
                }}
              >
                <Typography variant="h5" mt={2} mr={0}>
                  {role}
                </Typography>
                <Typography variant="h4" color="primary.main">
                  {title}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: { xs: 200, sm: 300, md: 400, lg: 500, },
                  flexWrap: 'wrap',

                }}
              >
                <AccessTimeIcon fontSize="large" />
                <Typography variant="h5" mb={2} ml={1}>
                   {timeline}
                </Typography>
                <Typography variant="body1" mt={0}>
                  {description}
                </Typography>
              </Box>
              
              
            </Box>
          </Link>

          {/* picture */}
          <Box 
            sx={{
              width: 600,
              height: { xs: 250, sm: 250, md: 200, lg: 250, },
              backgroundColor: 'primary.dark',
              mt: 2,
              border: '2px solid black',
            }}
          >
            <Link onClick={handleChange} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} >
              <img
                src={media}
                style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4, height:'100%', overflow: 'hidden' }}
              />
            </Link>
          </Box>

          {/* arrow icon */}
          <Link onClick={handleChange} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} >
            <Box>
              <ArrowForwardIosIcon 
                sx={{
                  width: 70,
                  height: 'auto',
                  alignItems: 'center',
                  mt: 2,
                }}
              />
            </Box>
          </Link>
        </Box>
      </Slide>

      {/* panel with more information */}
      <Slide 
        direction="right" 
        in={!open}
        style={{ transformOrigin: '0 0 0' }}
        {...(!open ? { timeout: 500 } : { timeout:-100})}
        mountOnEnter 
        unmountOnExit
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            m: 1,
            mt:5,
            minWidth: { xs: 200, sm: 300, md: 400, lg: 600, },
            flexWrap: 'nowrap',
          }}
        >
          {/* text */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              ml: 2,
              flexWrap: 'wrap',
              width: 700,
            }}
          >
            <Typography variant="h4" mt={2} mr={0}>
              {title}
            </Typography>

            <Typography variant="body" mt={2}>{idea}</Typography>

            <Typography variant="h5" mt={2} color="purple">
              Built with:
            </Typography>

            {/* skill tags */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: { xs: 'center'},
                flexWrap: 'wrap',
              }}
            >
              {skills.map((skill) => (
                <SkillTag title={skill} color="secondary.main" />
              ))}
            </Box>
          </Box>

          {/* link to website */}
          <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center'},
                flexWrap: 'wrap',
              }}
            >
            {links.map((item) => (
              <Link href={item.link}>{item.title}</Link>
            ))}
          </Box>

          {/* close icon */}
          <Link onClick={handleChange} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer'}} >
            <CloseIcon
              sx={{
                width: 100,
                height: 'auto',
                alignItems: 'center',
                mt: 2,
              }}
            />
          </Link>

        </Box>
      </Slide>
    </Box>
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PortfolioItem;