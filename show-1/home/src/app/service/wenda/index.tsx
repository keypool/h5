import React from 'react';
import Banner from './banner';
import Bring from './bring';
import What from './what';
import Core from './core';
import Anli from './anli';
import Position from './position';
import Platform from './platform';
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
      <What/>
      <Bring/>
      <Core/>
      <Position/>
      <Platform/>
      <Anli/>
    </>
  )
}