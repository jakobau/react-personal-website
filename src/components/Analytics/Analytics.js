// https://github.com/forksociety/AhaEvent/blob/master/src/Components/Analytics/Analytics.js

//import React from 'react';
import ReactGA from 'react-ga';
import config from '../../Config/config.json'

const Analytics = () => {
  console.log('$', process.env.NODE_ENV, process.env.NODE_ENV === 'production')
  if (process.env.NODE_ENV === 'production') {
    if(window) {
      const {location: {pathname, search}} = window;
      console.log(pathname + search);
      ReactGA.initialize(config.googleAnalyticsID);
      ReactGA.pageview(pathname + search);
    }
  }
  return;
};

export default Analytics;