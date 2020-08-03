import React from 'react';

const baiduQiao = 'http://p.qiao.baidu.com/cps/chat?siteId=15193023&amp;siteToken=1cbbbc60dc373084318b53f5017cbeb8&amp;userId=30743658';

export default () => {
  return (
    <div className="new-sem-tent1">
      <div className="new-ser-title">
        <p>天蕾广告</p>
        <span>您身边的互联网应用方案提供商</span> </div>
      <div className="index-1200 index-over">
        <div className="new-sem-tent1-left">
          <p><span>SEM服务介绍</span></p>
          <span>天蕾拥有先进的SEM推广理念，各大搜索引擎推广的专业经验，秉承精细专注的经营理念，专业的分析服务，强大的技术支持，为客户带来以提高投资回报率(ROI)为核心目标的搜索引擎营销全面管理和优化服务。</span>
          <div>天蕾最新推出SEM解决方案，一次性为您解决品牌呈现难题！</div>
          <a href={baiduQiao} target="_blank">免费获取方案</a> </div>
        <div className="new-sem-tent1-right"> <img src="/home/static/images/sem/3.png" alt=""/> </div>
      </div>
    </div>
  )
}