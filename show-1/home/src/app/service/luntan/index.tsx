import React from 'react';
import Why from './why';
import Service from './service';
import Banner from './banner';
import Tedian from './tedian';
import Haochu from './haochu';
import Cooperate from './cooperate';
// import {PATH_PREFIX} from '@/env';

export default () => {

  React.useEffect(() => {
    // const script = document.createElement('script');
    // script.src = PATH_PREFIX+'/static/js/appkf.js';
    // document.body.appendChild(script);
  }, [])

  return (
    <>
      <Banner/>
      <Why/>
      <Service/>
      <Tedian/>
      <Haochu/>
      <Cooperate/>
    </>
  )
}