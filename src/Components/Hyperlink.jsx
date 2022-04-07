import * as React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '@mui/material/Tooltip';
//import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Hyperlink(props) {
  const { href, title, text } = props;

  return (
    <Tooltip title={title} arrow>
      <Link href={href}
        underline="hover"
        target="_blank"
        variant="h5">
        <b>{text}</b>
      </Link>
    </Tooltip>
  );
}

Hyperlink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Hyperlink;