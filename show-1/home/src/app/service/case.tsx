import React from 'react';
import {PATH_PREFIX} from '@/env';
const imageBasePath = PATH_PREFIX+'/static/images/anli/';

const data = [{
  img: '3.jpg',
  primary: '三祥技术',
  secondary: '服务内容：SEM营销、SEO营销、口碑营销',
},{
  img: '6.jpg',
  primary: '挑菜生鲜',
  secondary: '服务内容：SEO营销、口碑营销',
},{
  img: '136.jpg',
  primary: '宇轩阁',
  secondary: '服务内容：品牌网站建设',
},{
  img: '15.jpg',
  primary: '苏北化学',
  secondary: '服务内容：口碑营销',
},{
  img: '20.jpg',
  primary: '美菱医疗',
  secondary: '服务内容：SEM营销、SEO营销、口碑营销',
}]

export default () => {
  return (
    <div id="server_case"> 
      <div className="server-title index_w">
        <h2>营销客户案例</h2>
        <p className="t10">全球1000多家平台客户的支持（以下仅为少部分客户愿意公开的案例）</p>
      </div>
      <div className="ser_case_list"> 
        {
          data.map((item, index) => {
            return (
              <a key={index}>
                <div className="ser_caselist l">
                  <img src={imageBasePath+item.img}/>
                  <label>{item.primary}</label>
                  <p>{item.secondary}</p>
                </div>
              </a>
            )
          })
        }
      </div>
      <div className="c"></div>
    </div>
  )
}