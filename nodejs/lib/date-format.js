const moment = require('moment');
const format = 'YYYY/MM/DD HH:mm';

const datetimeFormat = (datetime) => {
  return moment.utc(datetime).utcOffset(moment().utcOffset()).format(format);
}

module.exports = {
  datetimeFormat
}
