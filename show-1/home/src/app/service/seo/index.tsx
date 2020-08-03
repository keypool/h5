import React from 'react';
import Banner from './banner';
import Intro from './intro';
import Problem from './problem';
import Advantage from './advantage';
import Service from './service';
import Youhua from './youhua';
import Case from './case';
import Say from './say';
import Form from './form';
import Description from './description';
import Customer from '../../home/customer';
// import {PATH_PREFIX} from '@/env';

export default () => {

  React.useEffect(() => {
    // const script = document.createElement('script');
    // script.src = PATH_PREFIX+'/static/js/home.js';
    // document.body.appendChild(script);
  }, [])

  return (
    <>
      <Banner/>
      <Intro/>
      <Problem/>
      <Advantage/>
      <Service/>
      <Youhua/>
      <Case/>
      <Say/>
      <Customer/>
      <Form/>
      <Description/>
    </>
  )
}