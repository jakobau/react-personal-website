// >>
// Project Name: Jakob Au's Personal Website
// Version 4.0.1
// Create by Jakob Au
// 
// Name: CustomTimeline.jsx
// Purpose: Customized Timeline component
// Using: https://mui.com/components/timeline/
// <<

// REACT imports
import * as React from 'react';

// MUI Imports
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

// MUI Icon Imports
import WebIcon from '@mui/icons-material/Web';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

// Main exported function
export default function CustomTimeline() {
  const hFontSize = {xs:18,sm:18,md:24,lg:24};
  const pFontSize = {xs:16,sm:16,md:16,lg:16};

  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <IntegrationInstructionsIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="secondary.dark" fontSize={hFontSize}>
            Arizona State University
          </Typography>
          <Typography color="primary.light" fontSize={pFontSize}>Transfered to ASU Polytechnic's Software Engineering program</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <RocketLaunchIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="primary
          .dark" fontSize={hFontSize}>
            Joined Two Student Startups
          </Typography>
          <Typography color="primary.light" fontSize={pFontSize}>Ikanos Freelancing and AeroPest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="primary" variant="outlined">
            <IntegrationInstructionsIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="primary.dark" fontSize={hFontSize}>
            Started Freelancing
          </Typography>
          <Typography color="primary.light" fontSize={pFontSize}>Web dev and online event host</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <FamilyRestroomIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="primary.dark" fontSize={hFontSize}>
            Keiki Heroes
          </Typography>
          <Typography color="primary.light" fontSize={pFontSize}>Cofounding Volunteer for Keiki Heroes Program</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot color="primary" variant="outlined">
            <WebIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="primary.dark" fontSize={hFontSize}>
            Web Developer
          </Typography>
          <Typography color="primary.light" fontSize={pFontSize}>Interned at Gum Design for 6 months</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <FamilyRestroomIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="primary.dark" fontSize={hFontSize}>
            Drexel University
          </Typography>
          <Typography color="primary.light" fontSize={pFontSize}>Fresh college student studying Software Engineering in Philadelphia, PA</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

