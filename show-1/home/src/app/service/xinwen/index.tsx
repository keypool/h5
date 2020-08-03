import React from 'react';
import Banner from './banner';
import What from './what';
import Solution from './solution';
import Bring from './bring';
import Why from './why';
import Hezhuo from './hezhuo';
import Anli from './anli';
// import {PATH_PREFIX} from '@/env';

export default () => {

  // React.useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = PATH_PREFIX+'/static/js/home.js';
  //   document.body.appendChild(script);
  // }, [])

  return (
    <>
      <Banner/>
      <What/>
      <Why/>
      <Solution/>
      <Bring/>
      <Hezhuo/>
      <Anli/>
    </>
  )
}