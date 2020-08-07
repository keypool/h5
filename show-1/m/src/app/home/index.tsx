import React from 'react';
import Swiper from './swiper';
import {makeStyles} from "@material-ui/core/styles";
import WebglInteractivePoints from '@/components/three/webgl-interactive-points';
import {getJson} from '@fay-react/lib/fetch';

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

export default () => {
  const classes = useStyles();

  React.useEffect(() => {
    getJson({path: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx37956bd3003fe332&secret=97959f22a59214dbc92cb2ffcac798d5'}).then(res => {
      // 36_jwVKq8huVFD4mWV0OReECScWAYGuxYltmULm_lIRWB5AiEBiRV3_vPsG7nCtnJkpv0kK-pEZxaNcCFbVAyKqVRKB8gvsgmqG5c4F58Sl-7nnNjv3IT16ztmK_ehE2VVNbmPBtZFbEBkycm2_HTGjAIAWIV  
      // getJson({path: ''})
    })
    // 
    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: 'wx37956bd3003fe332', // 必填，公众号的唯一标识
      timestamp: , // 必填，生成签名的时间戳
      nonceStr: '', // 必填，生成签名的随机串
      signature: '',// 必填，签名
      jsApiList: [] // 必填，需要使用的JS接口列表
    });
  })

  return (
    <div className={classes.root}>
      <div className={classes.bg}>
        <WebglInteractivePoints/>
      </div>
      <Swiper />
    </div>
  )
}