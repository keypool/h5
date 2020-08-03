import React from 'react';
import {PATH_PREFIX} from '@/env';

const data1 = [{
  path: '/service/sem',
  img: '/static/images/service/sem.png',
  primary: 'SEM',
  secondary: '搜索引擎推广-SEM',
},{
  path: '/service/seo',
  img: '/static/images/service/seo.png',
  primary: 'SEO',
  secondary: '搜索引擎优化-SEO',
},{
  path: '/service/aso',
  img: '/static/images/service/aso.png',
  primary: 'ASO',
  secondary: '应用商店优化-ASO',
}];

const data2 = [{
  path: '/service/wenda',
  img: '/static/images/service/qa.png',
  text: '问答营销',
},{
  path: '/service/luntan',
  img: '/static/images/service/luntan.png',
  text: '论坛维护',
},{
  path: '/service/xinwen',
  img: '/static/images/service/news.png',
  text: '新闻营销',
}];

const data3 = [{
  path: '/service/wzjs',
  img: '/static/images/service/wzjs.png',
  text: '品牌网站建设',
},{
  path: '/service/appkf',
  img: '/static/images/service/yidongyingyong.png',
  text: '移动应用定制',
},{
  path: '/service/wxkf',
  img: '/static/images/service/weixin.png',
  text: '微信定制开发',
},{
  path: '/service/xcxkf',
  img: '/static/images/service/quanjing.png',
  text: '全景漫游系统',
}];

export default () => {

  const tranferDataToLi = React.useCallback((data) => data.map((item: any, index: number) => {
    return (
      <li key={index}>
        <dl>
          <dt>
            <a href={PATH_PREFIX+item.path}>
              <img src={PATH_PREFIX+item.img} style={{width: '40px', marginTop: '10px'}}/>
            </a>
          </dt>
          {
            item.text ? 
            <dd><a href={PATH_PREFIX+item.path}>{item.text}</a></dd>
            :
            <a href={PATH_PREFIX+item.path}>
              <p>{item.primary}</p>
              <span>{item.secondary}</span>
            </a>
          }
        </dl>
      </li>
    )
  }), []);

  return (
    <div className="contain1"> 
      <div className="server-title index_w">
        <h2>天蕾广告产品</h2>
        <p className="t10">天蕾一直注重执行能力的加强，完善的执行团队和服务体系，更值得您托付。</p>
      </div>
      <div className="service2-fuwu-content">
        <ul>
          <li className="service2-fuwu-ul1">
            <img src={PATH_PREFIX+"/static/images/service/1.png"} style={{marginTop: '25px'}}/>
            <p>搜索引擎营销</p>
          </li>
          {tranferDataToLi(data1)}
        </ul>
        <ul>
          <li className="service2-fuwu-ul2">
            <img src={PATH_PREFIX+"/static/images/service/2.png"} style={{marginTop: '25px'}}/>
            <p>口碑营销</p>
          </li>
          {tranferDataToLi(data2)}
        </ul>
        <ul>
          <li className="service2-fuwu-ul4">
            <img src={PATH_PREFIX+"/static/images/service/4.png"} style={{marginTop: '25px'}}/>
            <p>技术服务</p>
          </li>
          {tranferDataToLi(data3)}
        </ul>
      </div>
    </div>
  )
}