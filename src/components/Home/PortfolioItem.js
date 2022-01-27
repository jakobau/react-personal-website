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

// Main exported function
function PortfolioItem(props) {
  const { title, role, index, description, media, projectRoute } = props;

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
      {/* text */}
      <Link to={projectRoute} style={{ textDecoration: 'none', color: 'inherit', }} >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: { xs: 'center', md: 'flex-start' },
            flexWrap: 'wrap',
          }}
        >
          <Typography variant="h1" mt={0}>
            {index}
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
        <Link to={projectRoute} style={{ textDecoration: 'none', color: 'inherit', }} >
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
    </Box>
    
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PortfolioItem;