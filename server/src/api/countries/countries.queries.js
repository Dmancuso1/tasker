const db = require('../../db');
const tableNames = require('../../constants/tableNames')


const fields = ['id', 'name', 'code'];


// TODO: actually write the queries

module.exports = {
  // we can use this find function and use elsewhere
  find() {
    // TODO: filter by country
    // TODO: make a join to address table
    return db(tableNames.country).select(fields); // like SELECT * from tableNames.tablename
  },

  // TODO: get by id
  async get(id) {
    const [country] = await db(tableNames.country)
      .select(fields)
      .where({
        id,
      });  
      return country
  },
}; 