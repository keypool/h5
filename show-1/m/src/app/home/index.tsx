import React from 'react';
import Swiper from './swiper';
import {makeStyles} from "@material-ui/core/styles";
import WebglInteractivePoints from '@/components/three/webgl-interactive-points';
import {getJson} from '@fay-react/lib/fetch';
import {BASE_URL} from '@/env';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    color: theme.palette.common.white,
  },
  bg: {
    width: '100%',
    height: '100%',
    position: "absolute"
  }
}));

const desc = 'KeyPool是Keystore旗下的基于Filecoin网络的技术服务平台,由资深区块链研发工程师，边缘计算及分布式存储专家倾力打造，创始团队来自Intel,分布式资本，奇虎360等企业';
// const imgUrl = 'https://oss.faycz.com/keypool/kps1m/pwa.png';
// const imgUrl = 'https://oss.faycz.com/keypool/kps1m/show-2.jpg';
const imgUrl = 'https://oss.faycz.com/keypool/kps1m/logo.jpg';

export default () => {
  const classes = useStyles();

  React.useEffect(() => {
    const url = encodeURIComponent(location.href);
    getJson({path: BASE_URL+'/wechat/auth', data: {url}}).then(res => {
      const {success, signature, timestamp, noncestr} = res;
      // alert(res);
      if(success){
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: 'wx37956bd3003fe332', // 必填，公众号的唯一标识
          timestamp, // 必填，生成签名的时间戳
          nonceStr: noncestr, // 必填，生成签名的随机串
          signature,// 必填，签名
          jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareAppMessage','onMenuShareTimeline'] // 必填，需要使用的JS接口列表
        });
        wx.ready(() => {
          // wx.onMenuShareTimeline({
          //   title: document.title,
          //   link: url,
          //   imgUrl,
          //   success: function () { 
          //     // 用户确认分享后执行的回调函数
          //     //  alert('分享到朋友圈成功');
          //   },
          //   cancel: function () { 
          //     // 用户取消分享后执行的回调函数
          //     //  alert('你没有分享到朋友圈');
          //   }
          // });
          // wx.onMenuShareAppMessage({
          //   title: '这是一个测试的标题--百度',
          //   desc,
          //   link: url,
          //   imgUrl,
          //   success: function () {
          //     // alert('分享给朋友成功');
          //   },
          //   cancel: function () {
          //     // alert('你没有分享给朋友');
          //   },
          //   fail: function () {
          //     // alert(JSON.stringify(res));
          //   }
          // });
          wx.updateAppMessageShareData({ 
            title: document.title, // 分享标题
            desc, // 分享描述
            link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl, // 分享图标
            success: function () {
              // alert('updateAppMessageShareData success');
              // 设置成功
            },
          })
          wx.updateTimelineShareData({ 
            title: document.title, // 分享标题
            link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl, // 分享图标
            success: function () {
              // alert('updateTimelineShareData success');
              // 设置成功
            }
          })
          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        });
        wx.error(() => {
          // alert(JSON.stringify(res));
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        });
      }
    })
    // 
    
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.bg}>
        <WebglInteractivePoints/>
      </div>
      <Swiper />
    </div>
  )
}