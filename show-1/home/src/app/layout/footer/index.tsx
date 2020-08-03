import React from 'react';
import {PATH_PREFIX} from '@/env';

export default () => {

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = PATH_PREFIX+'/static/js/layout/footer.js';
    document.body.appendChild(script);
  }, [])

  return (
    <div>
      <div className="fotbb tent5" style={{background: '#0574e2', padding: '20px 0', height: '180px', textAlign: 'left'}}>
        <div style={{width: '80%', marginLeft: '10%'}}>
          <div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #fff', paddingBottom: '20px', height: '80px'}}>
              <p>
                <a href="html/service/index.html">服务项目</a>
                <a href="html/solution/index.html">解决方案</a>
                <a href="html/blog/index.html">天蕾学堂</a>
                <a href="html/about/index.html">关于我们</a>
              </p>
              <img src="/home/static/images/qrcode.png" style={{width: '80px', marginRight: '40px'}}/>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px'}}>
              <div>
                <p className="footer_link">
                  <a style={{fontSize:'12px', textDecoration: 'none'}}>友情链接： </a>
                </p>
                <p>沪ICP备20012510号 上海天蕾企业服务有限公司 | Copyright © 2020 By TianLad</p>
              </div>
              <p>客服电话：400-780-6980</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{position: 'fixed', left: 0, top: '50%', width: '66px', height: '66px', zIndex: 9999, cursor: 'pointer'}} className="fay-left-nav">
        <img src="/home/static/images/wechat.png" width="100%" style={{boxShadow: '1px 31px 80px #aaaaaa', borderRadius: '0 10px 10px 0'}}/>
        <div style={{width: "120px", position: "absolute", left: '66px', top: '-20px'}} className="fay-left-nav-wechatQrcode">
          <img src="/home/static/images/qrcode.png" style={{boxShadow: '1px 31px 80px #aaaaaa'}}/>
        </div>
      </div>
    </div>
  )
}