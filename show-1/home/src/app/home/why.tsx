import React from 'react';

const data = [{
  primary: '多位行业专家',
  secondary: '我们拥有多位互联营销专家，他们在网络营销行业耕耘多年，有独特洞察力！',
  img: '/home/static/images/home/expect.png',
},{
  primary: '行业经验丰富',
  secondary: '天蕾专家团队在技术和营销领域拥有多年互联网营销经验。丰富的行业经验和解决方案有助于营销目标达成。',
  img: '/home/static/images/home/work.png',
},{
  primary: '绩效指标明确',
  secondary: '天蕾将沟通中约定的合作绩效指标都写入合同。包括执行绩效和效果绩效。',
  img: '/home/static/images/home/kpi.png',
},{
  primary: '服务流程精细',
  secondary: '基于行业经验，天蕾细分服务执行环节为独特节点流程，方便针对节点考核和优化！',
  img: '/home/static/images/home/service.png',
},{
  primary: '执行监控全面',
  secondary: '天蕾的服务执行公开透明，技术上修改执行，营销上的内容发布都以全面的报告形式呈现给客户！',
  img: '/home/static/images/home/look.png',
},{
  primary: '团队精益执行',
  secondary: '天蕾从成立之初就自建了底层执行团队。执行环节不外包能够提升项目执行效率和精益项目管控。',
  img: '/home/static/images/home/team.png',
}]

export default () => {
  return (
    <div className="tent2">
      <div className="col_title">我们的优势</div>
      <h3>为什么选择天蕾</h3>
      <div className="w1200">
        {
          data.map((item, index) => {
            return (
              <div key={index} className="whyme">
                <img src={item.img} alt=""/>
                <div className="w_right">
                  <p>{item.primary}</p>
                  <span>{item.secondary}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}