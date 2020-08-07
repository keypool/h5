const fetch = require("node-fetch");
const {getQueryString} = require('./lib/query');
const crypto = require('crypto');

const appid = 'wx37956bd3003fe332';
const secret = '97959f22a59214dbc92cb2ffcac798d5';

const accessTokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+appid+'&secret='+secret;

const auth = async (ctx) => {
  const url = getQueryString(ctx.request, 'url');
  const res = await fetch(accessTokenUrl);
  const data = await res.json();
  const {errcode, access_token} = data;
  if(errcode === 0){
    const tiketUrl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+access_token+'&type=jsapi';
    const res = await fetch(tiketUrl);
    const data = await res.json();
    const {errcode, ticket} = data;
    if(errcode === 0){
      const noncestr = shortid.generate();
      const jsapi_ticket = ticket;
      const timestamp = Date.parse(new Date())/1000;
      const string1 = 'jsapi_ticket='+jsapi_ticket+'&noncestr='+noncestr+'&timestamp='+timestamp+'&url='+url;
      const signature = crypto.createHash('sha1').update(string1).digest('hex').toLowerCase();
      return {success: true, signature, timestamp, noncestr};
    }
    return {success: false, errcode};
  }
  return {success: false, errcode};
}

module.exports = {
  auth
}