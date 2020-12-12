const db = require('../../db');
const tableNames = require('../../constants/tableNames')

// TODO: actually write the queries
module.exports = {
  // we can use this find function and use elsewhere
  find() {
    return db(tableNames.country); // like SELECT * from tableNames.tablename
  },
}; 