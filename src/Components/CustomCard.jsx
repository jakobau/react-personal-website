// >>
// Project Name: Jakob Au's Personal Website
// Version 4.0.1
// Create by Jakob Au
// 
// Name: CustomCard.jsx
// Purpose: CustomCard component
// Using: https://mui.com/components/cards/#basic-card
// <<

// REACT imports
import * as React from 'react';

// MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
  
export default function CustomCard(props) {
  const { title, description, linkTitle, link } = props;

  return (
    <Card 
      sx={{ 
        maxWidth: { xs:280,sm:280,md:280,lg:280 }, 
        m:2,
        fontSize: {xs:'50%',sm:'50%',md:'100%',lg:'100%'},
        backgroundColor: 'primary.light',
        borderRadius:3,
      }} 
      elevation={24}
    >
      <Box sx={{ backgroundColor:'secondary.main', height:15, }}><span>&nbsp;</span></Box>
      <CardContent
        sx={{
          pr: {xs:4,sm:5,md:5,lg:5},
          pl: {xs:4,sm:5,md:5,lg:5},
        }}
      >
        <Typography variant="h5" component="div" color="white" mb={1} sx={{ display:'flex', flexWrap:'wrap', fontSize:'24px'}}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ maxWidth:200 }} color="white">
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          pr: {xs:5,sm:5,md:5,lg:5},
          pl: {xs:5,sm:5,md:5,lg:5},
        }}
      >
        <Button sx={{ color:"white", backgroundColor:'secondary.dark', mb: 2, }}>{linkTitle}</Button>
      </CardActions>
    </Card>
  );
}