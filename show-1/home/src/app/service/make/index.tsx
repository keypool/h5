import React from 'react';
import Content1 from './content1';
import Content2 from './content2';
import Banner from './banner';
import Process from './process';
// import {PATH_PREFIX} from '@/env';

export default () => {

  React.useEffect(() => {
    // const script = document.createElement('script');
    // script.src = PATH_PREFIX+'/static/js/appkf.js';
    // document.body.appendChild(script);
  }, [])

  return (
    <div className="content">
      <Banner/>
      <Content1/>
      <Content2/>
      <Process/>
    </div>
  )
}