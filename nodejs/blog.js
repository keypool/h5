const {query} = require('./mysql');
const {getQueryString} = require('./lib/query');
const {datetimeFormat} = require('./lib/date-format');

const mysqlTable = "tianlad_blog";

// id，title，keywords，description，thumbnail，content

const add = async (ctx) => {
  const data = ctx.request.body;
  if(data.content){
    data.content = Buffer.from(data.content).toString('base64');
  }
  const sql = 'INSERT INTO '+mysqlTable+' SET ?';
  const args = data;
  const res = await query(sql, args);
  return res;
}

const edit = async (ctx) => {
  const data = ctx.request.body;
  if(data.content){
    data.content = Buffer.from(data.content).toString('base64');
  }
  const sql = "UPDATE "+mysqlTable+" SET title='"+data.title+"', keywords='"+data.keywords+"', description='"+data.description+"', thumbnail='"+data.thumbnail+"', content='"+data.content+"' WHERE id='"+data.id+"'";
  const res = await query(sql);
  return res;
}

const findById = async (ctx) => {
  const id = getQueryString(ctx.request, 'id');
  const sql = 'SELECT * FROM '+mysqlTable+' WHERE `id` = ?';
  const args = [id];
  const res = await query(sql, args);
  if(res.success){
    res.result.map((item) => {
      item.content = Buffer.from(item.content, 'base64').toString();
    })
  }
  return res;
}

const findByPage = async (ctx) => {
  const title = getQueryString(ctx.request, 'title') || '';
  const keywords = getQueryString(ctx.request, 'keywords') || '';
  const description = getQueryString(ctx.request, 'description') || '';
  const content = getQueryString(ctx.request, 'content') || '';
  const pageNum = getQueryString(ctx.request, 'pageNum') || 0;
  const pageSize = getQueryString(ctx.request, 'pageSize') || 10;
  let queryDataStr = 'status="ENABLE" and (';
  queryDataStr += 'title like "%'+title+'%"';
  queryDataStr += ' or';
  queryDataStr += ' keywords like "%'+keywords+'%"';
  queryDataStr += ' or';
  queryDataStr += ' description like "%'+description+'%"';
  queryDataStr += ' or';
  queryDataStr += ' content like "%'+content+'%")';
  let orderQueryStr = ' order by createTime DESC';
  let pageQueryStr = ' limit '+(pageNum*pageSize)+','+pageSize+';'
  const sql = 'SELECT * FROM '+mysqlTable+' WHERE 1=1 and ' + queryDataStr + orderQueryStr + pageQueryStr;
  const args = [];
  const res = await query(sql, args);
  if(res.success){
    res.result.map((item) => {
      item.createTime = datetimeFormat(item.createTime);
      item.updateTime = datetimeFormat(item.updateTime);
    })
  }
  const findCountRes = await findCount(queryDataStr + orderQueryStr);
  if(findCountRes.success && findCountRes.result[0]){
    res.count = findCountRes.result[0].total;
  }else{
    res.count = 0;
  }
  return res;
}

const findCount = async (queryDataStr='status="ENABLE"') => {
  const sql = 'SELECT COUNT(*) as total FROM '+mysqlTable + ' WHERE 1=1 and '+queryDataStr;
  const args = [];
  const res = await query(sql, args);
  return res;
}

const findIds = async () => {
  const sql = 'SELECT id FROM '+mysqlTable;
  const args = [];
  const res = await query(sql, args);
  return res;
}

const removeById = async (ctx) => {
  const data = ctx.request.body;
  const sql = "UPDATE "+mysqlTable+" SET status='DISABLE' WHERE id='"+data.id+"'";
  const res = await query(sql);
  return res;
}

const transfer = async (id) => {
  const sql = 'SELECT * FROM '+mysqlTable+' WHERE `id` = ?';
  const args = [id];
  const res = await query(sql, args);
  const data = res.result[0];
  if(data.content){
    data.content = Buffer.from(data.content).toString('base64');
  }
  const sql1 = "UPDATE "+mysqlTable+" SET title='"+data.title+"', keywords='"+data.keywords+"', description='"+data.description+"', thumbnail='"+data.thumbnail+"', content='"+data.content+"' WHERE id='"+data.id+"'";
  const res2 = await query(sql1);
  console.log(res2);
}


module.exports = {
  add,
  edit,
  findByPage,
  findById,
  findCount,
  findIds,
  removeById
}