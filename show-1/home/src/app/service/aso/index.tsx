import React from 'react';
import Content from './content';
import Banner from './banner';
// import {PATH_PREFIX} from '@/env';

export default () => {

  // React.useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = PATH_PREFIX+'/static/js/service/appkf.js';
  //   document.body.appendChild(script);
  // }, [])

  return (
    <>
      <Banner/>
      <Content/>
    </>
  )
}