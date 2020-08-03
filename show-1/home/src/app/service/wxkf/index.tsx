import React from 'react';
import Banner from './banner';
import AppChannel from './app-channel';
import Applets from './applets';
import AppAdvantage from './app-advantage';
import AppAdvantage2 from './app-advantage-2';
import AppApplication from './app-application';
import AppScenes from './app-scenes';
import AppProcess from './app-process';
import AppCase from './app-case';
import Customer from '../../home/customer';
import {PATH_PREFIX} from '@/env';

export default () => {

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = PATH_PREFIX+'/static/js/service/wxkf.js';
    document.body.appendChild(script);
  }, [])

  return (
    <>
      <Banner/>
      <Applets/>
      <AppChannel/>
      <AppAdvantage/>
      <AppApplication/>
      <AppScenes/>
      <AppProcess/>
      <AppCase/>
      <AppAdvantage2/>
      <Customer/>
        
    </>
  )
}