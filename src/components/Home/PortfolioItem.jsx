// >>
// Project Name: Jakob Au's Personal Website
// Version 4.0.1
// Create by Jakob Au
// Created on Jan 26, 2022
// Name: PortfolioItem.js
// Purpose: Landing Page.
// <<
//
// TODO
// - 

// REACT imports
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// MUI Imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';

// component imports
import SkillTag from './SkillTag.jsx';

// Main exported function
function PortfolioItem(props) {
  const { title, role, index, projectNumber, description, media, projectRoute, skills } = props;

  //const open = props.open;
  const [open, setOpen] = React.useState(true);
  const panelOpen = () => setOpen(false);
  const panelClose = () => setOpen(true);

  const handleChange = () => {
    setOpen((prev) => !prev);
  };

  if (open) {    
    return (
    <Grow in={open}
        style={{ transformOrigin: '0 0 0' }}
        {...(open ? { timeout: 500*index } : {})}
        mountOnEnter unmountOnExit>
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
      <Link onClick={panelOpen} onChange={handleChange} style={{ textDecoration: 'none', color: 'inherit', }} >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: { xs: 'center', md: 'flex-start' },
            flexWrap: 'wrap',
          }}
        >
          <Typography variant="h1" mt={0}>
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
            <Typography variant="h4">
              {title}
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: 200, sm: 300, md: 400, lg: 500, },
              flexWrap: 'wrap',
            }}
          >
            <Typography variant="body1" mt={0}>
              {description}
            </Typography>
          </Box>

          {/* skill tags */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: { xs: 'center'},
              flexWrap: 'wrap',
              mt: {sx:1, md:5},
            }}
          >
            {skills.map((skill) => (
              <SkillTag title={skill} color="secondary.main" />
            ))}
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
        <Link style={{ textDecoration: 'none', color: 'inherit', }} >
          <img
            src={media}
            style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4, height:'100%', overflow: 'hidden' }}
          />
        </Link>
      </Box>

      {/* arrow */}
      <Link to={projectRoute} style={{ textDecoration: 'none', color: 'inherit', }} >
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
    </Box></Grow>
    );
  }  
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
      <Button onClick={panelClose}>Close</Button>

    </Box>

  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PortfolioItem;