import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
//import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function SkillTag(props) {
  const { title, color } = props;

  return (
   <Box
      sx={{
        mt: 1.5,
        mr: 1.5,
        p: 0.5,
        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
        borderRadius: '5px',
        color: color,
        fontWeight: 'medium',
        alignItems: 'center',
        '& svg': {
          fontSize: 21,
          mr: 0.5,
        },
      }}
    >
    {title}
  </Box>
  );
}

SkillTag.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default SkillTag;