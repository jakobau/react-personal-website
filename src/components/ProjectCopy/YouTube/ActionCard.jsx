import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ActionAreaCard(props) {
  const { media, icon, title, time, channelName, views, dateUploaded } = props;

  return (
    <Card sx={{ maxWidth: 345 }} variant="root">
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
  );
}