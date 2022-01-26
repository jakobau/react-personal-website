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

import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function PortfolioItem(props) {
  const { title, index, description, media } = props;

  return (
   <Box>
    {title} {index} <br></br>
    {description} {media}
  </Box>
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PortfolioItem;