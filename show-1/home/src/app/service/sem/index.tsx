import React from 'react';
import Service from './service';
import Banner from './banner';
import Description from './description';
import Sem from './sem';
import Advantage from './advantage';
import Youhua from './youhua';
import Anli from './anli';
import Platform from './platform';
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
      <Service/>
      <Description/>
      <Sem/>
      <Advantage/>
      <Youhua/>
      <Anli/>
      <Platform/>
    </>
  )
}