const tableNames = require('./tableNames');

// tables are listed in order of dependancy.
module.exports = [
  tableNames.box,
  tableNames.order,
  tableNames.skid,
  tableNames.customer,
  tableNames.supplier,
  tableNames.address,
  tableNames.user,
  tableNames.country,
  tableNames.specie
]