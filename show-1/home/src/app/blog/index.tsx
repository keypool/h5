import React from 'react';

import Banner from './banner';
import Content from './content';

export interface BlogType{
  id: number
  title: string
  keywords: string
  description: string
  thumbnail: string
  content: string
  createTime: string
  updateTime: string
}

interface Props{
  blog: BlogType
  preBlog: BlogType
  nextBlog: BlogType
}

function Blog(props: Props) {
  // will resolve posts to type Post[]
  return (
    <div>
      <Banner/>
      <Content {...props}/>
      <div className="clear"></div>
      <div style={{height:'30px'}}></div>
    </div>
  )
}

export default Blog