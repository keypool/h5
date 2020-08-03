import React from 'react';
import { BlogType } from '../blog';
import {PATH_PREFIX} from '@/env';

interface Props{
  blogs: BlogType[]
}

const blogPath = PATH_PREFIX+'/blog/';

export default ({blogs}: Props) => {

  return (
    <div id="server_news">
      <div className="server-title index_w">
        <h2>天蕾学堂</h2>
        <div className="ser_news_w t40">
          {
            blogs.map((blog:BlogType) => {
              return (
                <div key={blog.id} className="ser_news_list l">
                  <h3>
                    <a href={blogPath+blog.id}>
                      {blog.title}
                    </a>
                  </h3>
                  <p>
                    {blog.description}
                    <a href={blogPath+blog.id}>【查看详情】</a>
                  </p>
                </div>
              )
            })
          }
          <div className="clear"></div>
        </div>
      </div>
      <div className="server_more2"><a href={PATH_PREFIX+'/blogs'}>更多信息</a></div>
    </div>
  )
}