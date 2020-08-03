import React from 'react';

const baiduQiao = 'http://p.qiao.baidu.com/cps/chat?siteId=15193023&amp;siteToken=1cbbbc60dc373084318b53f5017cbeb8&amp;userId=30743658';

export default () => {
  return (
    <div className="why-wenda">
      <div className="wenda-title">什么是论坛营销？</div>
      <div className="why-wenda-center">
        <div className="why-wenda-left">
          <div className="why-wenda-left-title">走进论坛营销</div>
          <div className="why-wenda-left-content why-luntan-tent1"> 论坛营销利用网络交流平台，通过文字、图片、视频等方式发布企业的产品、活动等正面信息，让目标客户更加深刻地了解企业的产品和
            
            服务。最终达到宣传企业品牌、加深市场认知度的网络营销活动。 </div>
          <div className="why-wenda-left-btn"><a href={baiduQiao} target="_blank">免费获取方案</a></div>
        </div>
        <div className="why-wenda-right"> <img src="/home/static/images/picture/luntan-img1.jpg"/> </div>
      </div>
    </div>
  )
}