import React from 'react';

const baiduQiao = 'http://p.qiao.baidu.com/cps/chat?siteId=15193023&amp;siteToken=1cbbbc60dc373084318b53f5017cbeb8&amp;userId=30743658';

export default () => {
  return (
    <div className="why-wenda">
      <div className="wenda-title">什么是问答营销</div>
      <div className="why-wenda-center">
        <div className="why-wenda-left">
          <div className="why-wenda-left-title">什么是问答营销？</div>
          <div className="why-wenda-left-content"> 问答营销以口碑营销为主，是一种新型的互动营销方式。利用与潜在消费者产生的互动，植
            
            入企业的正面信息、对目标受众施加积极影响使其成为用户或者消费者。是企业做品牌口碑、互动营销必备的营销方式。
            <p>点击下方按钮联系我们，即可立即获取详细诊断书！</p>
          </div>
          <div className="why-wenda-left-btn"><a href={baiduQiao} target="_blank">免费获取方案</a></div>
        </div>
        <div className="why-wenda-right"> <img src="/home/static/images/picture/wenda-img1.jpg"/> </div>
      </div>
    </div>
  )
}