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
import { styled, alpha } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import NoSsr from '@mui/material/NoSsr';
import Avatar from '@mui/material/Avatar';

// MUI Icon Imports
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StyledAvatar = styled(Card)`
  ${({ theme }) => `
  cursor: pointer;
  position:relative;
  z-index:3;
  &:hover {
    transform: scale(1.3) translateY(10%);
    z-index: 4;
    transition: ${theme.transitions.create(['background-color', 'transform'], {
      delay: 700,
      duration: 500,
    })};
  }
  `}
`;

export default function ActionAreaCard(props) {
  const { media, icon, title, time, channelName, views, dateUploaded } = props;

  return (
    <StyledAvatar elevation={0}>
    <Card sx={{ maxWidth: 345}} variant="root">
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={media}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {channelName} <CheckCircleIcon sx={{ fontSize: 13 }} />
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            {views} vews · {dateUploaded} ago
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </StyledAvatar>
  );
}