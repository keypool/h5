import React from 'react';
import {Text} from '@fay-react/material/richText';
import {BlogType} from '.';

interface Props{
  blog: BlogType
  preBlog: BlogType
  nextBlog: BlogType
}

export default ({blog, preBlog, nextBlog}: Props) => {

  return (
    <div className="contain">
      <div className="blog_path">
        <a href="/">首页</a>&nbsp;&gt;&nbsp;天蕾学堂
      </div>
      <div className="blogshow_left">
        <h1>{blog.title}</h1>
        <div className="contentdiv">
          <Text value={blog.content}/>
        </div>
        <div className="details_page">
          <ul>
            {
              preBlog &&
              <li className="pre">
                上一篇：
                <a href={"/blog/"}>{preBlog.title}</a>
              </li>
            }
            {
              nextBlog &&
              <li className="next">
                下一篇：
                <a href={"/blog/"}>{nextBlog.title}</a> 
              </li>
            }
          </ul>
        </div>
      </div>
      <div className="blog_right"> 
        <div className="clear"></div>
      </div>
    </div>
  )
}