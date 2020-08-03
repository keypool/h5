import React from 'react';

export default () => {
  return (
    <>
      <div className="new-new-contact-title new-contact-tit">联系我们</div>
      <div className="new-con-text">
        <ul>
          <li className="shou" style={{textAlign: "center"}}>
            <p className="new-con-tit1">微信客服</p>
            <img src="/home/static/images/qrcode.png" width="150" style={{marginTop: "20px"}}/>
          </li>
          <li className="new-con-center lianxi">
            <p className="new-con-tit1">联系方式</p>
            <p className="new-con-t">全国服务电话 <span>（7X24小时电话）</span></p>
            <p className="new-con-color">400-780-6980</p>
            <p className="new-con-t">邮箱</p>
            <p className="new-con-color">tianlad@163.com</p>
          </li>
          <li className="new-con-right lianxi">
            <p className="new-con-tit1">联系地址</p>
            <p className="new-con-top">地址</p>
            <p className="new-con-color">上海市普陀区金沙江路788号</p>
          </li>
        </ul>
      </div>

      <div className="cont-bg">
        <div className="w1200">
          <div className="new-contact-tit">银行账户信息</div>
          <dl style={{float: 'none', padding: '10px 30px', margin: '0 auto'}}>
            <dt><img src="/home/static/images/aboutus/nongye.png" alt=""/></dt>
            <dd>
              <ul>
                <li className="cont-k">开户名称：上海天蕾企业服务有限公司</li>
                <li className="cont-gs">公司账号：03494900040020594</li>
                <li className="cont-k-name">开户银行：中国农业银行股份有限公司上海张桥支行</li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
      <div className="clear"></div>
    </>
  )
}