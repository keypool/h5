import React from 'react';
import {postJson} from '@fay-react/lib/fetch';
import {BASE_URL} from '@/env';

export default () => {

  const closeRef = React.useRef<any>();

  const checkForm = () => {
    const re = /^1[3|4|5|7|8]\d{9}$/;
    const tel: any = document.getElementById("tel1");
    if (tel.value == '') {
      alert("请输入您的电话号码！");
      return false;
    }
    if (!re.test(tel.value)) {
      alert("请填写正确的手机号码！");
      return false;
    }
    return tel.value;
  }

  const handleSubmit = () => {
    const tel = checkForm();
    if(tel){
      postJson({path: BASE_URL+'/seo/add', data: {contactName: '首页进入', contactPhone: tel}}).then(res => {
        if(res.success){
          alert("提交成功！");
          closeRef.current.click();
        }else{
          alert("提交失败！");
        }
      })
    }
  }

  return (
    <>
      <div className="new-footer-cont">
      <p className="new-footer-cont-close" ref={closeRef}></p>
      <ul>
        <li className="new-f-cont-tit1">立即与天蕾专业顾问联系</li>
        <li className="new-f-cont-tit2">400-780-6980</li>
        <li className="new-f-cont-tit3">
          <input type="text" id="tel1" placeholder="请输入您的电话号码！"/>
          <input id="new-fot-btn" onClick={handleSubmit}/>
          <span>预约顾问</span>
        </li>
        <li className="new-f-cont-tit1">或者您可以马上与天蕾专业顾问在线沟通</li>
        <li className="new-f-cont-tit4"><a href="http://p.qiao.baidu.com/cps/chat?siteId=15193023&userId=30743658&siteToken=1cbbbc60dc373084318b53f5017cbeb8" target="_blank">在线咨询</a></li>
      </ul>
    </div>
    <div className='new-footer-cont-bg'></div>
    </>
  )
}