import React from 'react';
import ListItem from './list-item';
import {BlogType} from '../blog';
import {PATH_PREFIX} from '@/env';

interface Props{
  blogs: BlogType[]
  prePage: number
  nextPage: number
  count: number
}

const basePath = PATH_PREFIX + '/blogs/';

export default ({blogs, prePage, nextPage, count}: Props) => {

  return (
    <div className="contain">
      <div className="blog_path">
        <a href="/">首页</a> &gt; <a href="/home/blogs">天蕾学堂</a>
      </div>

      <div className="blog_left" style={{float: 'left'}}> 
        {
          blogs.map((blog: BlogType) => {
            return <ListItem key={blog.id} blog={blog}/>;
          })
        }
        <div id="pageNav">
          <a className="a1">{count}条</a>
          {
            prePage>-1 &&
            <a href={basePath+prePage} className="a1">上一页</a>
          }
          {/* <span>1</span> */}
          {/* <a href="2.html">2</a> */}
          {
            nextPage>-1 &&
            <a href={basePath+nextPage} className="a1">下一页</a>
          }
        </div>
      </div>
      <div className="clear"></div>
    </div>
  )
}