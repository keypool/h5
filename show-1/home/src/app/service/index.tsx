import React from 'react';
import Banner from './banner';
import Content from './content';
import Clue from './clue';
import Case from './case';
import Blogs from './blogs';
import Advantage from './advantage';
// import {PATH_PREFIX} from '@/env';

export default ({blogs}: any) => {

  React.useEffect(() => {
    // const script = document.createElement('script');
    // script.src = PATH_PREFIX+'/static/js/home.js';
    // document.body.appendChild(script);
  }, [])

  return (
    <>
      <Banner/>
      <Content/>
      <Clue/>
      <Case/>
      <Blogs blogs={blogs}/>
      <Advantage/>
    </>
  )
}