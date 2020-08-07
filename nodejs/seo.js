const {query} = require('./mysql');
const {getQueryString} = require('./lib/query');
const {datetimeFormat} = require('./lib/date-format');

const mysqlTable = "tianlad_seo";

// id, contactName, contactPhone, website, createTime, updateTime

const add = async (ctx) => {
  const data = ctx.request.body;
  const sql = 'INSERT INTO '+mysqlTable+' SET ?';
  const args = data;
  const res = await query(sql, args);
  return res;
}

const findById = async (ctx) => {
  const id = getQueryString(ctx.request, 'id');
  const sql = 'SELECT * FROM '+mysqlTable+' WHERE `id` = ?';
  const args = [id];
  const res = await query(sql, args);
  return res;
}

const findByPage = async (ctx) => {
  const contactName = getQueryString(ctx.request, 'contactName') || '';
  const contactPhone = getQueryString(ctx.request, 'contactPhone') || '';
  const website = getQueryString(ctx.request, 'website') || '';
  const pageNum = getQueryString(ctx.request, 'pageNum') || 0;
  const pageSize = getQueryString(ctx.request, 'pageSize') || 10;
  let queryDataStr = '';
  queryDataStr += contactName.length > 0 ? ' contactName like "%'+contactName+'%"' : '';
  queryDataStr += contactName.length > 0 ? ' or' : '';
  queryDataStr += contactPhone.length > 0 ? ' contactPhone like "%'+contactPhone+'%"' : '';
  queryDataStr += contactPhone.length > 0 ? ' or' : '';
  queryDataStr += website.length > 0 ? ' website like "%'+website+'%"' : '';
  let pageQueryStr = ' limit '+pageNum+','+pageSize+';'
  const sql = 'SELECT * FROM '+mysqlTable+(queryDataStr.length > 0 ? (' WHERE'+queryDataStr) : '')+pageQueryStr;
  const args = [];
  const res = await query(sql, args);
  if(res.success){
    res.result.map((item) => {
      item.createTime = datetimeFormat(item.createTime);
      item.updateTime = datetimeFormat(item.updateTime);
    })
  }
  return res;
}

module.exports = {
  add,
  findByPage,
  findById,
}