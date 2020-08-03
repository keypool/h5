import React from 'react';
import {BlogType} from '../blog';

interface Props{
  blogs: BlogType[]
}

const baseBlogUrl = '/home/blog/';

export default ({blogs}: Props) => {
  return (
    <div className="new-index-news">
      <div className="new-index-title">天蕾学堂</div>
      <h3 className="new-index-piece-title">在这里了解最新的互联网知识内容</h3>
      <div className="w1200 index-over">
        <div>
          {
            blogs.map((item, index) => {
              return (
                <dl key={index}>
                  <dt>
                    <a href={baseBlogUrl+item.id}>
                      <span>
                        <img src={item.thumbnail} style={{border: 0}} width="378" height="378" alt={item.title}/>
                      </span>
                    </a>
                  </dt>
                  <dd>
                    <p>
                      <a href={baseBlogUrl+item.id}>{item.title}</a>
                    </p>
                    <span>{item.description}</span>
                  </dd>
                </dl>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}