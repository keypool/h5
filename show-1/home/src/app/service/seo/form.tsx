import React from 'react';
import {postJson} from '@fay-react/lib/fetch';
import {BASE_URL} from '@/env';

export default () => {

  const [state, setState] = React.useState({contactPhone: '', website: ''});

  const handleChange = (key: string) => (e: any) => {
    setState({...state, [key]: e.target.value});
  }

  const handleSubmit = () => {
    const re = /^1[3|4|5|7|8]\d{9}$/;
    if(state.contactPhone.trim().length === 0){
      alert('联系电话不能为空');
      return false;
    }
    if (!re.test(state.contactPhone)) {
      alert("请填写正确的手机号码！");
      return false;
    }
    postJson({path: BASE_URL+'/seo/add', data: {contactName: 'SEO表单进入', contactPhone: state.contactPhone, website: state.website}}).then(res => {
      if(res.success){
        alert("提交成功！");
      }else{
        alert("提交失败！");
      }
    })
    return;
  }

  return (
    <div className="new-ser-tent8">
        <p className="new-title">索取网站SEO诊断书</p>
        <div className="index-1200 index-over">
            <div className="ner-ser-left index-fl">
              <p>我们会根据您企业的现状提供相应的营销诊断书</p>
              <ul>
                <li className="form-tel">
                  <input type="text" value={state.contactPhone} onChange={handleChange('contactPhone')} placeholder="电话" autoComplete="off"/>
                </li>
                <li className="index-message">
                  <input type="text" value={state.website} onChange={handleChange('website')} placeholder="网站网址" autoComplete="off"/>
                </li>
              </ul>
              <div className="clear"></div>
              <p className="input-ti">
                <input type="submit" placeholder="点击提交" onClick={handleSubmit}/>
              </p>
            </div>
            <div className="ner-ser-right index-fr">
              <p>天蕾营销</p>
              <ul>
                <li className="new-tent8-tel">400-780-6980</li>
                <li className="new-tent8-tel">13176083657</li>
                <li className="new-tent8-ww">http://www.tianlad.com</li>
                <li className="new-tent8-ad">上海市普陀区金沙江路788号</li>
              </ul>
              <span><img src="/home/static/images/picture/logo.png"/></span>
            </div>
        </div>
    </div>
  )
}