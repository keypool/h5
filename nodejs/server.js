const Koa = require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body');
const wechat = require('./wechat');

const app = new Koa();
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200*1024*1024,    // 设置上传文件大小最大限制，默认2M
    multipart:true
  }
}));

router.get('/wechat/auth', async (ctx, next) => {
  const res = await wechat.auth(ctx);
  ctx.response.type = 'application/json';
  ctx.response.body = res;
});

app.use(router.routes());
app.listen(3000);
console.log('app started at port 3000...');