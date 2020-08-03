import React from 'react';
import {BlogType} from '../blog';

interface Props{
  blogs: BlogType[]
}

const baseBlogUrl = '/home/blog/';

export default ({blogs}: Props) => {
  return (
    <div className="new-index-piece2">
      <div className="title">
        天蕾学堂
        <img src="/home/static/images/news.png"/>
      </div>
      {
        blogs.map((item) => {
          return (
            <a href={baseBlogUrl+item.id} style={{fontSize:'inherit'}}>
              <dl className="new-index-piece2-first">
                <dt><img src="/home/static/images/picture/img3.png" alt=""/></dt>
                <dd>
                    <h3>{item.title.substr(0, 15)}......</h3>
                    <p>{item.description.substr(0, 35)}......</p>
                </dd>
              </dl>
            </a>
          )
        })
      }
    </div>
  )
}