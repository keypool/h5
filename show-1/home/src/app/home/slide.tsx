import React from 'react';

export default () => {
  return (
    <div className="index-fullSlide fullSlide">
      <div className="bd">
        <ul>
          <li style={{background:'#3C9BFB url(/home/static/images/home/banner/3.jpg) center no-repeat'}} className="banner_1">
            <div className="index-slide-content">
              <h2>SEO服务-按结果付费</h2>
              <p>千余家用户经验，五年诚信品牌实力见证，站在客户角度，一对一服务，</p>
              <p>让你网站销量暴增，效果稳定。</p>
              <a href="/home/service/seo" target="_blank">了解详情</a>
            </div>
          </li>
          <li style={{background:'#3C9BFB url(/home/static/images/home/banner/1.jpg) center no-repeat'}} className="banner_2">
            <div className="index-slide-content">
              <h2>新媒体运营</h2>
              <p>知名上海新媒体运营, 5年为多家500强企业在提供新媒体运营服务，</p>
              <p>资深运营资历,以效果为导向,量身定做适合您企业新媒体的营销方案。</p>
              <a href="/home/solution" target="_blank">了解详情</a>
            </div>
          </li>
          <li style={{background:'#3C9BFB url(/home/static/images/home/banner/2.jpg) center no-repeat'}}>
            <div className="index-slide-content">
              <h2>网站建设</h2>
              <p>用心做好每一个网站，原创定制网站建设和营销，</p>
              <p>坚持做有用的网站和有效果的网络营销。</p>
              <a href="/home/service/wzjs" target="_blank">了解详情</a>
            </div>
          </li>
        </ul>
      </div>
      <div className="hd">
        <ul></ul>
      </div>
    </div>
  )
}