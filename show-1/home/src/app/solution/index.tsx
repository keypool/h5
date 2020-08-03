import React from 'react';
import Hangye from './hangye';
import Tedian from './tedian';
import Baozheng from './baozheng';
import Banner from './banner';
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
      <Hangye/>
      <Tedian/>
      <Baozheng/>
    </>
  )
}