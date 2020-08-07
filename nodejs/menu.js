const {query} = require('./mysql');
const {getQueryString} = require('./lib/query');
const {datetimeFormat} = require('./lib/date-format');

const mysqlTable = "tianlad_tdk";

// id, name, path, parentId, type, createTime, updateTime

const add = async (ctx) => {
  const data = ctx.request.body;
  const sql = 'INSERT INTO '+mysqlTable+' SET ?';
  const args = data;
  const res = await query(sql, args);
  return res;
}

const findById = async (ctx) => {
  const id = getQueryString(ctx.request, 'menuId');
  const sql = 'SELECT * FROM '+mysqlTable+' WHERE `id` = ?';
  const args = [id];
  const res = await query(sql, args);
  return res;
}

const findByPage = async (ctx) => {
  const name = getQueryString(ctx.request, 'name') || '';
  const path = getQueryString(ctx.request, 'path') || '';
  const pageNum = getQueryString(ctx.request, 'pageNum') || 0;
  const pageSize = getQueryString(ctx.request, 'pageSize') || 10;
  let queryDataStr = '';
  queryDataStr += name.length > 0 ? ' name like "%'+name+'%"' : '';
  queryDataStr += name.length > 0 ? ' or' : '';
  queryDataStr += path.length > 0 ? ' path like "%'+path+'%"' : '';
  let pageQueryStr = ' limit '+pageNum+','+pageSize+';'
  const sql = 'SELECT * FROM '+mysqlTable+(queryDataStr.length > 0 ? (' WHERE'+queryDataStr) : '')+pageQueryStr;
  const args = [];
  const res = await query(sql, args);
  if(res.success){
    res.result.map(async (item) => {
      if(item.parentId){
        const findParentRes = await findById(item.parentId);
        if(findParentRes.success && findParentRes.result[0]){
          item.parentName = findParentRes.result[0].name;
        }
      }
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