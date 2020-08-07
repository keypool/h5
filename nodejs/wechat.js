const fetch = require("node-fetch");
const {getQueryString} = require('./lib/query');
const shortid = require('shortid');
const crypto = require('crypto');

let jsapi_ticketCache = 'HoagFKDcsGMVCIY2vOjf9keH88HznriAeQlVfEXLPKNugxs7HwrGOFHg8sgqd7IdUw5VdFyCQV_V3LE_EPkKxQ';

const appid = 'wx37956bd3003fe332';
const secret = '97959f22a59214dbc92cb2ffcac798d5';

const accessTokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+appid+'&secret='+secret;

const sign = (ticket, url) => {
  const noncestr = shortid.generate();
  const jsapi_ticket = ticket;
  const timestamp = Date.parse(new Date())/1000;
  const string1 = 'jsapi_ticket='+jsapi_ticket+'&noncestr='+noncestr+'&timestamp='+timestamp+'&url='+url;
  const signature = crypto.createHash('sha1').update(string1).digest('hex').toLowerCase();
  return {signature, timestamp, noncestr};
}

const auth = async (ctx) => {
  const url = getQueryString(ctx.request, 'url');
  if(jsapi_ticketCache.length>0){
    const signData = sign(jsapi_ticketCache, url);
    return {success: true, ...signData, cache: true, jsapi_ticketCache, url};
  }else{
    const res = await fetch(accessTokenUrl);
    const data = await res.json();
    const {errcode, access_token} = data;
    if(!errcode){
      const tiketUrl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+access_token+'&type=jsapi';
      const res = await fetch(tiketUrl);
      const data = await res.json();
      const {errcode, ticket} = data;
      if(!errcode){
        jsapi_ticketCache = ticket;
        setTimeout(() => {jsapi_ticketCache = ''}, 7000000);
        const signData = sign(ticket, url);
        return {success: true, ...signData, cache: false, jsapi_ticketCache, url};
      }
      return {success: false, ...data};
    }
    return {success: false, ...data};
  }
}

// const string1 = 'jsapi_ticket=HoagFKDcsGMVCIY2vOjf9keH88HznriAeQlVfEXLPKNugxs7HwrGOFHg8sgqd7IdUw5VdFyCQV_V3LE_EPkKxQ&noncestr=CMys4t8tr&timestamp=1596786736&url=http://www.faycz.com/kps1m/';
// console.log(crypto.createHash('sha1').update(string1).digest('hex').toLowerCase());

module.exports = {
  auth
}