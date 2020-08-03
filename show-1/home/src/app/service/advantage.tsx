import React from 'react';
import {PATH_PREFIX} from '@/env';
const imageBasePath = PATH_PREFIX+'/static/images/home/';

const data = [{
  img: 'expect.png',
  primary: '多位行业专家',
  secondary: '我们拥有多位互联营销专家，他们在网络营销行业耕耘多年，有独特洞察力！'
},{
  img: 'work.png',
  primary: '行业经验丰富',
  secondary: '专家团队人均拥有7年互联网营销经验，包括整合营销、技术、数据等方面！'
},{
  img: 'kpi.png',
  primary: '绩效指标明确',
  secondary: '在沟通中将约定绩效指标都写入合同。'
},{
  img: 'service.png',
  primary: '服务流程精确',
  secondary: '基于行业经验，我们细分SEO执行环节为120项独特流程，针对节点考核和优化！'
},{
  img: 'look.png',
  primary: '开放式服务',
  secondary: '天蕾承诺所有的服务内容完全公开透明，每一次的修改执行，每一次的内容发布都已报告形式呈现给到客户！'
},{
  img: 'team.png',
  primary: '精益执行团队',
  secondary: '天蕾拥有一支超过30人的执行团队，所有执行环节不外包，精益管控每个项目操作执行！'
}]

export default () => {

  return (
    <div className="server_advantage"> 
      <div className="server-title index_w">
        <h2>我们的优势</h2>
        <p>高端营销策略也需有靠谱的执行团队落地执行</p>
      </div>
      <div className="service2-youshi-content">
        {
          data.map((item, index) => {
            return (
              <dl key={index}>
                <dt><img src={imageBasePath+item.img}/></dt>
                <dd>
                  <p>{item.primary}</p>
                  {item.secondary}
                </dd>
              </dl>
            )
          })
        }
      </div>
      <div className="c"></div>
    </div>
  )
}