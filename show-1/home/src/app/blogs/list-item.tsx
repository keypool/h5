import React from 'react';
import {BlogType} from '../blog';
import {PATH_PREFIX} from '@/env';

interface Props{
  blog: BlogType
}

const baseUrl = PATH_PREFIX + '/blog/'

export default ({blog}: Props) => {

  return (
    <div className="blog_list">
      <div className="blog_tx"> 
        <a
          href={baseUrl+blog.id}
          data-img={blog.thumbnail}
          data-litpic={blog.thumbnail}
          className="preview"
        >
          <img src={blog.thumbnail}/>
          <br/>
        </a>
      </div>
      <div className="blog_list_nr">
        <h2 style={{marginTop: '20px'}}>
          <a
            href={baseUrl+blog.id}
            className="blog_title"
          >
              {blog.title}
          </a>
        </h2>
        <p>{blog.description}</p>
        <div className="blog_list_more">
          <a href={baseUrl+blog.id}>Read More &gt;&gt;</a>
        </div>
      </div>
      <div className="clear"></div>
    </div>
  )
}