const moment = require("moment");

const isDate = (value, rest) => {
  //if no exist value, date is incorrect
  if (!value) {
    return false;
  }

  const date = moment(value);
  //validate date with moment
  if (date.isValid()) {
    return true;
  }
};

module.exports = { isDate };
