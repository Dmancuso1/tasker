const db = require('../../db');
const tableNames = require('../../constants/tableNames')


const fields = ['id', 'name', 'code'];


// TODO: actually write the queries

module.exports = {
  // we can use this find function and use elsewhere
  find() {
    // TODO: make a join to address table
    return db(tableNames.country).select(fields); // like SELECT * from tableNames.tablename
  },


  async get(id) {
    return db(tableNames.country)
      .select(fields)
      .where({
        id,
      }).first();  // limits to 1 and returns that single item.
  },
}; 