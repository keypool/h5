import React from 'react';
import Slide from './slide';
import Service from './service';
import Blog from './blog';
import Customer from './customer';
import Why from './why';
import BlogList from './blog-list';
import Partner from './partner';
import Footer from './footer';
import {PATH_PREFIX} from '@/env';

export default ({blogs}: any) => {

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = PATH_PREFIX+'/static/js/home.js';
    document.body.appendChild(script);
  }, [])

  return (
    <>
      <Slide/>
      <Blog blogs={blogs}/>
      <div className="content ">
        <Service/>
        <div className="clear"></div>
        <Customer/>
        <div className="clear"></div>
        <Why/>
        <BlogList blogs={blogs}/>
        <Partner/>
        <Footer/>
      </div>
    </>
  )
}