import React from 'react';
import {PATH_PREFIX} from '@/env';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';

const useStyles = makeStyles(() => ({
  phone: {
    display: 'flex',
    position: 'absolute',
    right: '200px',
    top: '10px',
    color: '#FFFFFF',
  },
  phoneIcon: {
    marginRight: '16px',
    fontSize: '28px',
    marginTop: '8px',
  }
}));

export default () => {
  const classes = useStyles();

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = PATH_PREFIX+'/static/js/layout/header.js';
    document.body.appendChild(script);
  }, [])

  return (
    <div className="head-v3">
      <div className="navigation-up">
        <div className="navigation-inner">
          <a href="/"><img src="/home/static/images/picture/logo.png" alt=""/></a>
          <div className="navigation-v3" id="menu-piece">
            <ul>
              <li className='fay-t-nav' role="home">
                <a href="/">首页</a>
              </li>
              <li className="fay-t-nav" role="service">
                <a href="/home/service">服务项目</a>
              </li>
              <li className="fay-t-nav" role="solution">
                <a href="/home/solution">解决方案</a>
              </li>
              <li className="fay-t-nav" role="blog">
                <a href="/home/blogs">天蕾学堂</a>
              </li>
              <li className="fay-t-nav" role="about">
                <a href="/home/about">关于我们</a>
              </li>
            </ul>
          </div>
          <div className={classes.phone}>
            <div>
              <PhoneForwardedIcon className={classes.phoneIcon}/>
            </div>
            <div>
              <Typography>全国服务热线</Typography>
              <Typography>400-780-6980</Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-down">
        <div id="service" className="fay-t-nav navigation-down-menu-1" style={{display: 'none'}} role="service">
            <div className="navigation-down-inner-1">
                <ul className="service-down-con">
                    <li>
                        <p>技术开发<span>承载平台</span></p>
                        <a href="/home/service/wzjs">品牌网站建设 <img src="/home/static/images/header/hot.png" height="20px" style={{marginLeft: '8px'}}/></a>
                        <a href="/home/service/appkf">移动应用定制 <img src="/home/static/images/header/hot.png" height="20px" style={{marginLeft: '8px'}}/></a>
                        <a href="/home/service/wxkf">微信定制开发 <img src="/home/static/images/header/hot.png" height="20px" style={{marginLeft: '8px'}}/></a>
                        <a href="/home/service/xcxkf">全景漫游系统 <img src="/home/static/images/header/hot.png" height="20px" style={{marginLeft: '8px'}}/></a>
                    </li>
                    <li>
                        <p>媒体引流<span>流量引导</span></p>
                        <a href="/home/service/seo">搜索引擎优化-SEO <img src="/home/static/images/header/hot.png" height="20px" style={{marginLeft: '8px'}}/></a>
                        <a href="/home/service/sem">搜索引擎推广-SEM <img src="/home/static/images/header/hot.png" height="20px" style={{marginLeft: '8px'}}/></a>
                        <a href="/home/service/aso">应用商店优化-ASO</a>
                    </li>
                    <li>
                        <p>内容营销<span>用户感受</span></p>
                        <a href="/home/service/make">视频制作</a>
                        <a href="/home/service/luntan">论坛维护</a>
                    </li>
                    <li>
                        <p>口碑营销<span>用户呼应</span></p>
                        <a href="/home/service/wenda">问答营销 <img src="/home/static/images/header/hot.png" height="20px" style={{marginLeft: '8px'}}/></a>
                        <a href="/home/service/xinwen">新闻营销 <img src="/home/static/images/header/hot.png" height="20px" style={{marginLeft: '8px'}}/></a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="about" className="fay-t-nav menu-3" style={{display: 'none'}} role="about">
          <div className="navigation-down-inner-3">
            <ul className="about-down-con">
              <li className="h-bg1">
                <a href="/home/about/intro">
                  <p>公司简介</p>
                </a>
              </li>
              <li className="h-bg2">
                <a href="/home/about/contact">
                  <p>联系我们</p>
                </a>
              </li>
              <li className="h-bg3">
                <a href="/home/about/culture">
                  <p>企业优势</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}