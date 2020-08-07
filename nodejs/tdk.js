const {query} = require('./mysql');
const {getQueryString} = require('./lib/query');
const {datetimeFormat} = require('./lib/date-format');

const mysqlTable = "tianlad_tdk";

// id, title, description, keywords, path, createTime, updateTime

const add = async (ctx) => {
  const data = ctx.request.body;
  const sql = 'INSERT INTO '+mysqlTable+' SET ?';
  const args = data;
  const res = await query(sql, args);
  return res;
}

const upd = async (ctx) => {
  const data = ctx.request.body;
  const sql = 'UPDATE '+mysqlTable+' SET title="'+data.title+'", description="'+data.description+'", keywords="'+data.keywords+'" WHERE id="'+data.id+'"';
  const res = await query(sql);
  return res;
}

const findById = async (ctx) => {
  const id = getQueryString(ctx.request, 'id');
  const sql = 'SELECT * FROM '+mysqlTable+' WHERE `id` = ?';
  const args = [id];
  const res = await query(sql, args);
  return res;
}

const findByPath = async (ctx) => {
  const id = getQueryString(ctx.request, 'path');
  const sql = 'SELECT * FROM '+mysqlTable+' WHERE `path` = ?';
  const args = [id];
  const res = await query(sql, args);
  return res;
}

const findCount = async (queryDataStr) => {
  const sql = 'SELECT COUNT(*) as total FROM '+mysqlTable + (queryDataStr?(' WHERE'+queryDataStr):'');
  const args = [];
  const res = await query(sql, args);
  return res;
}

const findByPage = async (ctx) => {
  const title = getQueryString(ctx.request, 'title') || '';
  const description = getQueryString(ctx.request, 'description') || '';
  const keywords = getQueryString(ctx.request, 'keywords') || '';
  const pageNum = getQueryString(ctx.request, 'pageNum') || 0;
  const pageSize = getQueryString(ctx.request, 'pageSize') || 10;
  let queryDataStr = '';
  queryDataStr += title.length > 0 ? ' title like "%'+title+'%"' : '';
  queryDataStr += title.length > 0 ? ' or' : '';
  queryDataStr += description.length > 0 ? ' description like "%'+description+'%"' : '';
  queryDataStr += description.length > 0 ? ' or' : '';
  queryDataStr += keywords.length > 0 ? ' keywords like "%'+keywords+'%"' : '';
  let pageQueryStr = ' limit '+(pageNum*pageSize)+','+pageSize+';'
  const sql = 'SELECT * FROM '+mysqlTable+(queryDataStr.length > 0 ? (' WHERE'+queryDataStr) : '')+pageQueryStr;
  const args = [];
  const res = await query(sql, args);
  if(res.success){
    res.result.map((item) => {
      item.createTime = datetimeFormat(item.createTime);
      item.updateTime = datetimeFormat(item.updateTime);
    })
  }
  const findCountRes = await findCount(queryDataStr);
  if(findCountRes.success && findCountRes.result[0]){
    res.count = findCountRes.result[0].total;
  }else{
    res.count = 0;
  }
  return res;
}

module.exports = {
  add,
  upd,
  findById,
  findByPage,
  findByPath,
}